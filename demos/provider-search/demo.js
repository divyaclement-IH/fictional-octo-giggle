/* Provider search results: a member reviews matched primary care providers. */
(function () {
  "use strict";

  var A = "assets/";

  var TOP_MATCHES = [
    {
      name: "Dr. Alex Johnson, MD",
      photo: true,
      offerings: ["telehealth"],
      preferred: true,
      specialties: "Family Medicine · Primary Care",
      summary: "Committed to comprehensive primary care with an emphasis on preventive health and building long-term relationships with patients.",
      clinic: "Bright Futures Primary Care",
      address: "321 Main Blvd, Oakland, CA 94612",
      distance: "8 mi",
    },
    {
      name: "Dr. Jessica Yu, MD",
      preferred: true,
      careKey: true,
      specialties: "Internal Medicine · Primary Care",
      summary: "Focuses on preventive care and chronic-condition management, prioritizes clear follow-up, and stays engaged in your long-term health.",
      clinic: "Golden State Primary Care",
      address: "123 State St, San Francisco, CA 95118",
      distance: "17 mi",
    },
    {
      name: "Dr. Emily Tran, NP",
      preferred: true,
      offerings: ["lgbtq"],
      specialties: "Primary Care · Preventive Care",
      summary: "Advocates for holistic health practices while providing compassionate primary care and education to families.",
      clinic: "Healthy Living Clinic",
      address: "654 Care St, Fremont, CA 94536",
      distance: "15 mi",
    },
  ];

  var OTHER_MATCHES = [
    {
      name: "Dr. Julianna Smith, MD",
      offerings: ["premium"],
      careKey: true,
      specialties: "Family Medicine · Primary Care",
      summary: "Provides whole-person primary care with a focus on prevention, chronic-condition management, and coordinating referrals when you need them.",
      clinic: "Golden State Primary Care",
      address: "123 State St, San Francisco, CA 95118",
      distance: "17 mi",
    },
    {
      name: "Dr. Michael Lee, DO",
      offerings: ["telehealth", "lgbtq"],
      specialties: "Internal Medicine · Primary Care",
      summary: "Emphasizes preventive care and works closely with patients to manage chronic conditions and support long-term health.",
      clinic: "Sunrise Family Medicine",
      address: "456 Elm St, San Francisco, CA 95118",
      distance: "12 mi",
    },
    {
      name: "Dr. Priya Patel, MD",
      photo: true,
      careKey: true,
      specialties: "Primary Care · Preventive Care",
      summary: "Focuses on preventive care and healthy lifestyle changes, employs clear patient education, and partners with you on long-term wellness.",
      clinic: "Lakeside Primary Care",
      address: "789 Oak St, San Francisco, CA 95118",
      distance: "10 mi",
    },
  ];

  // Made-up out-of-network providers for V2+ (not in the Figma).
  var OUT_OF_NETWORK = [
    {
      name: "Dr. Samuel Ortiz, MD",
      specialties: "Family Medicine · Primary Care",
      summary: "Focuses on whole-family care with same-week appointments and a strong emphasis on preventive screenings.",
      clinic: "Bayview Family Practice",
      address: "88 Mission St, San Francisco, CA 94105",
      distance: "6 mi",
    },
    {
      name: "Dr. Hannah Kim, MD",
      photo: true,
      specialties: "Internal Medicine · Preventive Care",
      summary: "Helps adults manage chronic conditions with clear care plans and regular check-ins between visits.",
      clinic: "Lakeside Internal Medicine",
      address: "410 Grand Ave, Oakland, CA 94610",
      distance: "9 mi",
    },
    {
      name: "Dr. Marcus Reed, DO",
      photo: true,
      specialties: "Family Medicine · Sports Medicine",
      summary: "Treats patients of all ages, with extra experience in injury recovery and keeping active people moving.",
      clinic: "Eastbay Health Partners",
      address: "2200 Broadway, Oakland, CA 94612",
      distance: "11 mi",
    },
  ];

  // Out-of-network setting for V2+, plus the shell API returned by mount().
  var network = { includeOON: false };
  var app = null;
  var current = null; // { ctx, cfg } of the screen on show
  var showCareKeys = true; // "Show Care Keys" checkbox under Scenario
  // Scenario checkboxes, each on its own: Show deductible, Show Care Keys, Show copays.
  var copayOnly = false; // "Show deductible" unchecked: a copay plan with no deductible
  var showCopays = true; // "Show copays" unchecked: no dollar amounts on cards or plan cards

  function readScenario(ctx) {
    copayOnly = ctx.toggles.deductible === false;
    showCareKeys = ctx.toggles.careKeys !== false;
    showCopays = ctx.toggles.copays !== false;
  }

  // ---------- Pieces ----------

  function primaryNav() {
    return (
      '<nav class="primary-nav"><div class="container">' +
      '<span class="logo" role="img" aria-label="Included Health" data-icon="Logo-IncludedHealth" data-dim>' +
      '<img class="logo-mark" src="' + A + 'logo-mark.svg" width="24.4616" height="26" alt="">' +
      '<img class="logo-wordmark" src="' + A + 'logo-wordmark.svg" width="57.3555" height="25.36" alt=""></span>' +
      '<div class="nav-links" data-space>' +
      ["Home", "Activity", "Messages", "Me"]
        .map(function (label, i) {
          return '<a href="#"' + (i === 0 ? ' data-type="Body 1 · 16/24 Medium"' : "") + ">" + label + "</a>";
        })
        .join("") +
      "</div></div></nav>"
    );
  }

  function titleBar(title) {
    return (
      '<header class="title-bar"><div class="container">' +
      '<button class="back-button" type="button" aria-label="Back" data-dim>' +
      '<img src="' + A + 'arrow-left.svg" width="22" height="22" alt="" data-icon="arrow-left"></button>' +
      '<h1 data-type="Title 3 · 20/32 Bold">' + (title || "Primary Care Physician (PCP)") + "</h1>" +
      "</div></header>"
    );
  }

  function filters(cfg) {
    var items = [
      ["Gender", "Any"],
      ["Distance", "Best nearby"],
      ["Languages spoken", "Any"],
    ];
    if (cfg.networkFilter) {
      items.push(["Network", network.includeOON ? "In- and out-of-network" : "In-network", "network"]);
    }
    return (
      '<div class="filters"><div class="container" data-space>' +
      items
        .map(function (f, i) {
          return (
            '<button class="filter" type="button"' +
            (f[2] ? ' data-network-filter aria-haspopup="menu" aria-expanded="false"' : "") + ">" +
            '<span class="filter-label"' + (i === 0 ? ' data-type="Body 1 · 16/24 Medium" data-color="text/neutral/strong"' : "") + ">" + f[0] + "</span>" +
            '<span class="filter-value"' + (i === 0 ? ' data-type="Body 1 · 16/24 Bold"' : "") + ">" + f[1] +
            '<span class="filter-chevron"><img src="' + A + 'arrow-left-small.svg" width="13.3333" height="13.3333" alt=""' +
            (i === 0 ? ' data-icon="arrow-left (rotated −90°)"' : "") + "></span></span></button>"
          );
        })
        .join("") +
      "</div></div>"
    );
  }

  // IH Preferred badge: purple badge with a white star (Figma node 2583:24045), used everywhere.
  function verifiedBadge(tappable) {
    var img = '<img class="badge-verified" src="' + A + 'badge-preferred-star.svg" width="16" height="16" alt="' +
      (tappable ? "" : "IH Preferred Provider") + '" title="IH Preferred Provider" data-icon="Badge Verified">';
    // V2+: the badge is a button that explains itself.
    return tappable
      ? '<button class="badge-button badge-button-avatar" type="button" data-learn="preferred" aria-label="IH Preferred Provider, learn more">' + img + "</button>"
      : img;
  }

  function careKeyIcon(tappable) {
    var img = '<img class="care-key-icon" src="' + A + 'badge-care-key.svg" width="24" height="24" alt="' +
      (tappable ? "" : "Care Key eligible") + '" title="Care Key eligible">';
    return tappable
      ? '<button class="badge-button badge-button-inline" type="button" data-learn="carekey" aria-label="Care Key eligible, learn more">' + img + "</button>"
      : img;
  }

  // Provider offering chips (Figma 2643:29840).
  var OFFERINGS = {
    premium: { label: "Premium care physician", icon: "chip-heart.svg", tone: "neutral" },
    telehealth: { label: "Offers telehealth", icon: "chip-video.svg", tone: "success" },
    lgbtq: { label: "LGBTQ+ affirming", icon: "chip-rainbow-heart.svg", tone: "success" },
  };

  function offeringChips(p) {
    return (p.offerings || [])
      .map(function (key) {
        var o = OFFERINGS[key];
        return (
          '<span class="chip chip-offering is-' + o.tone + '"><img src="' + A + o.icon + '" width="12" height="12" alt="">' +
          o.label + "</span>"
        );
      })
      .join("");
  }

  // "Dr. Alex Johnson, MD" -> "AJ"
  function initials(name) {
    return name
      .replace(/^Dr\.\s*/, "")
      .split(",")[0]
      .split(/\s+/)
      .map(function (w) { return w.charAt(0); })
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  // Headshot when the provider has one, otherwise initials (Figma 2646:30729).
  function avatar(p, first, tappable) {
    if (p.photo) {
      return (
        '<span class="avatar"' + (first ? " data-dim" : "") + '><img class="avatar-photo" src="' + A + 'avatar.png" alt="">' +
        (p.preferred ? verifiedBadge(tappable) : "") + "</span>"
      );
    }
    return (
      '<span class="avatar is-initials"' + (first ? " data-dim" : "") + ">" +
      '<img class="avatar-bg" src="' + A + 'avatar-initials-bg.svg" width="48" height="48" alt="">' +
      '<span class="avatar-initials" aria-hidden="true">' + initials(p.name) + "</span>" +
      (p.preferred ? verifiedBadge(tappable) : "") + "</span>"
    );
  }

  function providerCard(p, opts) {
    var first = opts.first;
    var chips;
    if (opts.oon) {
      chips =
        '<span class="chip chip-neutral">Out-of-network rates apply</span>' +
        '<span class="chip chip-oon">Out-of-network</span>';
    } else {
      // Copay-only plan drops the "after deductible" qualifier.
      var afterDeductible = copayOnly ? "" : ' <span class="chip-regular">after deductible</span>';
      var afterDeductiblePlain = copayOnly ? "" : " after deductible";
      chips = !showCopays
        ? ""
        : opts.top
        ? '<span class="chip chip-copay"' + (first ? ' data-type="Caption · 12/16 Bold" data-color="surface/accentone/weak text/accentone/strong"' : "") + "><span>$10 copay" + afterDeductible + "</span></span>"
        : '<span class="chip chip-copay-high"><span><b>$100 copay</b>' + afterDeductiblePlain + "</span></span>";
      if (opts.cfg.networkChip) {
        chips +=
          '<span class="chip chip-network"><img src="' + A + 'check-circle.svg" width="12" height="12" alt=""' +
          (first ? ' data-icon="check-circle"' : "") + ">In-network</span>";
      }
    }
    return (
      '<article class="provider-card"' + (first ? " data-space data-dim" : "") + ">" +
      '<div class="provider-content"' + (first ? " data-space" : "") + ">" +
      '<div class="provider-header">' +
      avatar(p, first, opts.cfg && opts.cfg.explainBadges) +
      '<div class="provider-title">' +
      '<p class="provider-name"' + (first ? ' data-type="Title 4 · 16/24 Bold"' : "") + ">" + p.name +
      (p.careKey && showCareKeys ? careKeyIcon(opts.cfg && opts.cfg.explainBadges) : "") + "</p>" +
      '<p class="provider-specialties"' + (first ? ' data-type="Caption · 14/20 Medium" data-color="text/neutral/strong"' : "") + ">" + p.specialties + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + p.name + '">' +
      '<img src="' + A + 'bookmark.svg" width="24" height="24" alt=""' + (first ? ' data-icon="bookmark"' : "") + "></button>" +
      "</div>" +
      '<div class="chips">' + chips + offeringChips(p) + "</div>" +
      '<p class="provider-summary"' + (first ? ' data-type="Body 2 · 14/20 Medium"' : "") + ">" + p.summary + "</p>" +
      '<img class="divider" src="' + A + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><div class="clinic-address">' +
      '<p class="clinic-name"' + (first ? ' data-type="Body 2 · 14/20 Bold"' : "") + ">" + p.clinic + "</p>" +
      '<p class="clinic-street' + (opts.top ? "" : " is-small") + '">' + p.address + "</p></div>" +
      '<p class="clinic-distance"' + (first ? ' data-color="text/success/strongest"' : "") + ">" + p.distance + "</p></div>" +
      "</div>" +
      '<div class="button-stack"' + (first ? " data-space" : "") + ">" +
      '<button class="btn-outline" type="button"' + (first ? " data-dim" : "") + ">View profile</button>" +
      '<button class="btn-solid" type="button"' + (first ? ' data-dim data-color="surface/brand/strongest"' : "") + ">Schedule</button>" +
      "</div></article>"
    );
  }

  // V2+: a legend next to the cards, so badges never rely on the icon alone.
  // lead: optional link shown first in the row (V2: Plan details).
  function badgeLegend(lead) {
    return (
      '<div class="badge-legend" id="badge-legend" aria-label="Badges">' + (lead || "") +
      '<button class="legend-item" type="button" data-learn="preferred"><img src="' + A + 'badge-preferred-star.svg" width="16" height="16" alt="">IH Preferred</button>' +
      (showCareKeys
        ? '<button class="legend-item" type="button" data-learn="carekey"><img src="' + A + 'badge-care-key.svg" width="24" height="24" alt="">Care Key eligible</button>'
        : "") +
      "</div>"
    );
  }

  // V2+: plan summary read before any copay. V2 shows deductible progress;
  // V3 says the same without numbers. Amounts are placeholders.
  var DEDUCTIBLE = { met: 1250, total: 3000 };

  function planSummary(cfg) {
    var pct = Math.round((DEDUCTIBLE.met / DEDUCTIBLE.total) * 100);
    var money = function (n) { return "$" + n.toLocaleString("en-US"); };
    // Plan details explains the deductible, so there's no link without one.
    var detailsLink = copayOnly ? "" : '<button class="text-link plan-summary-link" type="button" data-learn="deductible">Plan details</button>';
    return (
      '<section class="plan-summary" id="plan-summary" aria-labelledby="plan-summary-title" data-space data-dim>' +
      '<div class="plan-summary-head">' +
      '<span class="logomark" aria-hidden="true">' +
      '<img class="dot-tl" src="' + A + 'logomark-dot-left.svg" width="4.48117" height="4.47185" alt="">' +
      '<img class="dot-tr" src="' + A + 'logomark-dot-right.svg" width="4.47931" height="4.47185" alt="">' +
      '<img class="bar" src="' + A + 'logomark-bar.svg" width="14.7808" height="4.47185" alt="">' +
      '<img class="dot-bl" src="' + A + 'logomark-dot-left.svg" width="4.48117" height="4.47185" alt="">' +
      '<img class="dot-br" src="' + A + 'logomark-dot-right.svg" width="4.47931" height="4.47185" alt="">' +
      "</span>" +
      '<h3 class="plan-summary-title" id="plan-summary-title" data-type="Title 5 · 14/20 Bold">' +
      (copayOnly ? "Included Health Copay Plan" : "Included Health HSA Plan") + "</h3>" +
      (cfg.legendInSummary ? "" : detailsLink) + "</div>" +
      (copayOnly
        ? '<p class="plan-summary-note">The copays below are what you pay per visit.</p>'
        : cfg.planInfo === "summary-progress"
        ? '<p class="plan-summary-amount" data-type="Body 1 · 16/24 Bold"><b>' + money(DEDUCTIBLE.met) + "</b> of " + money(DEDUCTIBLE.total) + " deductible met</p>" +
          '<div class="plan-progress" role="progressbar" aria-label="Deductible met" aria-valuemin="0" aria-valuemax="' + DEDUCTIBLE.total +
          '" aria-valuenow="' + DEDUCTIBLE.met + '" aria-valuetext="' + money(DEDUCTIBLE.met) + " of " + money(DEDUCTIBLE.total) + '">' +
          '<span style="width:' + pct + '%"></span></div>' +
          '<p class="plan-summary-note">Copays below apply after you meet your deductible.</p>'
        : '<p class="plan-summary-note">Your plan has a deductible. Listed copays apply after you meet it.</p>') +
      // V2: Plan details leads the row with the badge legend.
      (cfg.legendInSummary ? badgeLegend(detailsLink) : "") +
      "</section>"
    );
  }

  // Mobile section header (Figma 2643:29914): title with a Filter button,
  // then the description and How this works underneath.
  function mobileHeader(id, title, description, extra) {
    return (
      '<div class="results-header m-header" id="' + id + '">' +
      '<div class="section-title-row"><h2 data-type="Title 3 · 20/32 Bold">' + title + "</h2>" +
      '<button class="m-filter-button" type="button" data-filter-open data-type="Body 2 · 14/20 Medium">Filter</button></div>' +
      '<p class="section-description">' + description + "</p>" +
      '<button class="text-link is-underlined m-how" type="button">How this works</button>' + (extra || "") + "</div>"
    );
  }

  // slot: content under the first header (Plan Key on mobile, plan summary in V2+).
  function results(cfg, mobile, slot) {
    var legend = cfg.explainBadges && !cfg.legendInSummary ? badgeLegend() : "";
    var inNetworkList = cfg.networkFilter;
    var ranking = "We rank providers based on how well they match your preferences and their overall quality of care. ";
    var description = !inNetworkList
      ? ranking
      : network.includeOON
        ? "Out-of-network providers are listed after your in-network matches. " + ranking
        : "All providers below are in your network. " + ranking;
    return (
      '<section class="results">' +
      (mobile
        ? mobileHeader("top-matches", inNetworkList ? "Top in-network matches" : "Top matches", description, legend)
        : '<div class="results-header" id="top-matches">' +
          '<div class="section-title-row"><h2 data-type="Title 3 · 20/32 Bold">' +
          (inNetworkList ? "Top in-network matches" : "Top matches") + "</h2>" +
          '<button class="text-link is-underlined" type="button">How this works</button></div>' +
          '<p class="section-description" data-type="Body 2 · 14/20 Medium">' + description + "</p>" +
          legend + "</div>") +
      (slot ? '<div class="content-module">' + slot + "</div>" : "") +
      '<div class="cards" data-space>' +
      TOP_MATCHES.map(function (p, i) { return providerCard(p, { cfg: cfg, top: true, first: i === 0 }); }).join("") +
      "</div>" +
      (mobile
        ? mobileHeader("other-matches", inNetworkList ? "Other in-network matches" : "Other top matches", "Providers are ranked based on your preferences")
        : '<div class="results-header" id="other-matches"><div class="section-title-row">' +
          '<h2 data-type="Title 3 · 20/32 Bold">' + (inNetworkList ? "Other in-network matches" : "Other top matches") + "</h2></div></div>") +
      '<div class="cards is-continued">' +
      OTHER_MATCHES.map(function (p) { return providerCard(p, { cfg: cfg, top: false }); }).join("") +
      "</div>" +
      (inNetworkList && network.includeOON
        ? '<div class="results-header" id="oon-matches">' +
          '<div class="section-title-row"><h2>Out-of-network providers</h2></div>' +
          '<p class="section-description">These providers aren’t in your network, so visits usually cost more and may not count toward your deductible.</p></div>' +
          '<div class="cards is-continued">' +
          OUT_OF_NETWORK.map(function (p) { return providerCard(p, { cfg: cfg, oon: true }); }).join("") +
          "</div>"
        : "") +
      '<button class="view-more" type="button" data-dim>View more</button>' +
      "</section>"
    );
  }

  function planCard() {
    return (
      '<div class="info-card" id="plan-card" data-space data-dim>' +
      '<p class="info-card-eyebrow">Your 2027 healthcare plan:</p>' +
      '<p class="info-card-title is-plan"><span class="logomark" data-icon="IncludedHealthLogomark">' +
      '<img class="dot-tl" src="' + A + 'logomark-dot-left.svg" width="4.48117" height="4.47185" alt="">' +
      '<img class="dot-tr" src="' + A + 'logomark-dot-right.svg" width="4.47931" height="4.47185" alt="">' +
      '<img class="bar" src="' + A + 'logomark-bar.svg" width="14.7808" height="4.47185" alt="">' +
      '<img class="dot-bl" src="' + A + 'logomark-dot-left.svg" width="4.48117" height="4.47185" alt="">' +
      '<img class="dot-br" src="' + A + 'logomark-dot-right.svg" width="4.47931" height="4.47185" alt="">' +
      "</span>" + (copayOnly ? "Included Health Copay Plan" : "Included Health HSA Plan") + "</p>" +
      '<p class="info-card-body" data-type="Body 1 · 16/24 Medium">' +
      (copayOnly
        ? "This is a copay plan. The copays shown are what you pay per visit. "
        : "This is a high deductible health plan (HDHP). The copays shown only apply after you’ve met your deductible. ") +
      "</p>" +
      "</div>"
    );
  }

  function preferredCard() {
    return (
      '<div class="info-card" id="preferred-card">' +
      '<p class="info-card-title"><img src="' + A + 'badge-preferred-star.svg" width="16" height="16" alt="" data-icon="Verification Badge">IH Preferred Providers</p>' +
      '<p class="info-card-body">These providers are recommended by Included Health because their patients have strong outcomes and their care usually costs you less.</p>' +
      '<button class="text-link" type="button" data-learn="preferred" data-color="text/brand">Learn more</button></div>'
    );
  }

  function careKeyCard() {
    return (
      '<div class="info-card">' +
      '<p class="info-card-title"><img src="' + A + 'badge-care-key.svg" width="24" height="24" alt="">Care Key eligible</p>' +
      '<p class="info-card-body is-primary">Providers that are Care Key eligible offer lower-cost visits when you use a Care Key.</p>' +
      '<button class="text-link" type="button" data-learn="carekey">Learn more</button></div>'
    );
  }

  // V3: one Plan Key card in place of the three info cards (Figma node 2638:27114).
  function planKeyCard() {
    return (
      '<div class="info-card plan-key" id="plan-card" data-space data-dim>' +
      '<div class="plan-key-group">' +
      '<h2 class="plan-key-title" data-type="Title 4 · 16/24 Bold">Plan Key</h2>' +
      '<p class="info-card-body" data-type="Body 1 · 16/24 Medium">' +
      (copayOnly
        ? "You’re on a copay plan. The copays shown are what you pay per visit. "
        : "You’re on a plan with a deductible. The copays shown only apply after you’ve met your deductible. ") +
      "</p></div>" +
      '<div class="plan-key-group" id="preferred-card">' +
      '<p class="info-card-title plan-key-subtitle" data-type="Title 5 · 14/20 Bold"><img src="' + A + 'badge-preferred-star.svg" width="16" height="16" alt="" data-icon="Verification Badge">IH Preferred Providers</p>' +
      '<p class="info-card-body">These providers are recommended by Included Health because their patients have strong outcomes and their care usually costs you less. </p></div>' +
      (!showCareKeys ? "" :
      '<div class="plan-key-group">' +
      '<p class="info-card-title plan-key-subtitle"><img src="' + A + 'badge-care-key.svg" width="24" height="24" alt="">Care Key eligible</p>' +
      '<p class="info-card-body is-primary">Providers that are Care Key eligible offer lower-cost visits when you use a Care Key. </p></div>') +
      "</div>"
    );
  }

  function map(short) {
    return '<div class="map' + (short ? " is-short" : "") + '" data-dim><img src="' + A + 'map.png" width="1687" height="1105" alt="Map of matched providers near Pasadena"></div>';
  }

  function resultsPage(ctx, cfg) {
    closeLearnMore();
    readScenario(ctx);
    // A step can set the network filter when it's entered; refreshes keep the member's choice.
    var entering = !current || current.ctx.step !== ctx.step;
    if (entering && ctx.step.network === "reset") network.includeOON = false;
    if (entering && ctx.step.network === "include") network.includeOON = true;
    current = { ctx: ctx, cfg: cfg };
    if (ctx.switches.search === "facilities") return facilityPage(ctx);
    if (ctx.mode === "desktop") {
      return (
        primaryNav() + titleBar() + filters(cfg) +
        '<div class="results-layout">' + results(cfg, false, cfg.planInfo && !cfg.summaryAboveMap ? planSummary(cfg) : "") +
        (cfg.planInfo
          ? '<aside class="aside is-sticky">' + (cfg.summaryAboveMap ? planSummary(cfg) : "") + map() + "</aside>"
          : '<aside class="aside">' + map(cfg.shortMap) +
            (cfg.planKey ? planKeyCard() : '<div class="info-cards" data-space>' + planCard() + preferredCard() + (showCareKeys ? careKeyCard() : "") + "</div>") +
            "</aside>") +
        "</div>"
      );
    }
    return mobilePage(cfg);
  }

  // ---------- Mobile: map with a results sheet over it (Figma 2643:30666) ----------

  var mobileMapOpen = false; // sheet lowered to show more map

  function mobilePage(cfg) {
    var slot = cfg.planInfo
      ? planSummary(cfg)
      : cfg.planKey
        ? planKeyCard()
        : '<div class="info-cards">' + planCard() + preferredCard() + (showCareKeys ? careKeyCard() : "") + "</div>";
    return (
      '<nav class="m-nav" data-space>' +
      '<button class="m-nav-button" type="button" aria-label="Back"><img src="' + A + 'm-arrow-left.svg" width="20" height="20" alt="" data-icon="arrow-left"></button>' +
      '<h1 data-type="Title 4 · 16/24 Bold">Primary Care Physician (PCP)</h1>' +
      '<button class="m-nav-button" type="button" aria-label="Show map" aria-pressed="' + mobileMapOpen + '" data-map-toggle>' +
      '<img src="' + A + 'm-map-trifold.svg" width="24" height="24" alt="" data-icon="map-trifold"></button></nav>' +
      '<div class="m-map"><img src="' + A + 'm-map.png" width="520" height="1132" alt="Map of matched providers"></div>' +
      '<div class="m-location" data-space data-dim><img src="' + A + 'm-location-pin.svg" width="24" height="24" alt="" data-icon="location-pin">' +
      '<span data-type="Body 2 · 14/20 Medium">30 W Laurel Ave, Sierra Madre, CA 91024</span></div>' +
      '<section class="m-sheet' + (mobileMapOpen ? " is-map" : "") + '" aria-label="Results">' +
      '<div class="m-grabber" role="button" tabindex="0" aria-label="Drag to resize results" data-grabber><span></span></div>' +
      '<div class="m-sheet-scroll">' + results(cfg, true, slot) + "</div></section>"
    );
  }

  function setMapOpen(open) {
    mobileMapOpen = open;
    var sheet = document.querySelector(".m-sheet");
    if (sheet) {
      sheet.style.top = "";
      sheet.classList.toggle("is-map", open);
    }
    var toggle = document.querySelector("[data-map-toggle]");
    if (toggle) toggle.setAttribute("aria-pressed", String(open));
  }

  // Drag the grabber between the two snap points; a tap toggles.
  var drag = null;
  document.addEventListener("pointerdown", function (e) {
    var grabber = e.target.closest("[data-grabber]");
    if (!grabber) return;
    var sheet = grabber.closest(".m-sheet");
    var screen = sheet.closest(".screen");
    drag = {
      sheet: sheet,
      startY: e.clientY,
      startTop: sheet.offsetTop,
      scale: screen.getBoundingClientRect().height / screen.offsetHeight || 1,
      moved: false,
    };
    sheet.classList.add("is-dragging");
    grabber.setPointerCapture(e.pointerId);
  });
  document.addEventListener("pointermove", function (e) {
    if (!drag) return;
    var dy = (e.clientY - drag.startY) / drag.scale;
    if (Math.abs(dy) > 4) drag.moved = true;
    var top = Math.max(SHEET_TOP.list, Math.min(SHEET_TOP.map, drag.startTop + dy));
    drag.sheet.style.top = top + "px";
  });
  document.addEventListener("pointerup", function () {
    if (!drag) return;
    var sheet = drag.sheet;
    sheet.classList.remove("is-dragging");
    var open = drag.moved ? sheet.offsetTop > (SHEET_TOP.list + SHEET_TOP.map) / 2 : !mobileMapOpen;
    drag = null;
    setMapOpen(open);
  });
  document.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest("[data-grabber]")) {
      e.preventDefault();
      setMapOpen(!mobileMapOpen);
    }
  });
  // Sheet tops below the 56px nav: list view, and lowered to show the map.
  var SHEET_TOP = { list: 146, map: 421 };

  function openFilterSheet(trigger) {
    var cfg = current && current.cfg;
    var rows = [
      ["Gender", "Any"],
      ["Distance", "Best nearby"],
      ["Languages spoken", "Any"],
    ]
      .map(function (r) {
        return (
          '<button class="filter-row" type="button"><span class="filter-row-label">' + r[0] + "</span>" +
          '<span class="filter-row-value">' + r[1] +
          '<img src="' + A + 'arrow-left-small.svg" width="13.3333" height="13.3333" alt=""></span></button>'
        );
      })
      .join("");
    var networkOptions =
      cfg && cfg.networkFilter
        ? '<p class="filter-group-title">Network</p>' +
          [
            [false, "In-network only", "Providers in your plan's network"],
            [true, "Include out-of-network", "Adds providers outside your network, who usually cost more"],
          ]
            .map(function (o) {
              return (
                '<button class="network-option" type="button" role="menuitemradio" aria-checked="' + (o[0] === network.includeOON) +
                '" data-network-option="' + o[0] + '"><span class="network-radio"></span>' +
                '<span><span class="network-option-label">' + o[1] + "</span>" +
                '<span class="network-option-hint">' + o[2] + "</span></span></button>"
              );
            })
            .join("")
        : "";
    openModal(
      '<h2 class="learn-title" id="learn-title">Filters</h2>' +
        '<div class="filter-rows">' + rows + "</div>" + networkOptions +
        '<button class="learn-done" type="button" data-learn-close>Show results</button>',
      trigger
    );
  }

  function scrollTo(id) {
    return function (ctx) {
      var target = ctx.screen.querySelector("#" + id);
      if (!target) return;
      // On mobile the results scroll inside the sheet; raise it to list view first.
      var scroller = ctx.screen.querySelector(".m-sheet-scroll") || ctx.content;
      if (scroller !== ctx.content) setMapOpen(false);
      var offset = target.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
      var scale = scroller.getBoundingClientRect().height / scroller.offsetHeight || 1;
      scroller.scrollTop = Math.max(0, scroller.scrollTop + offset / scale - 16);
    };
  }

  // ---------- Network filter menu (V2+) ----------

  function closeMenu() {
    var menu = document.querySelector(".network-menu");
    if (menu) menu.remove();
    var trigger = document.querySelector("[data-network-filter]");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }

  function openMenu(trigger) {
    var screen = trigger.closest(".screen");
    var scale = screen.getBoundingClientRect().width / screen.offsetWidth || 1;
    var t = trigger.getBoundingClientRect();
    var s = screen.getBoundingClientRect();
    var options = [
      [false, "In-network only", "Providers in your plan's network"],
      [true, "Include out-of-network", "Adds providers outside your network, who usually cost more"],
    ];
    var menu = document.createElement("div");
    menu.className = "network-menu";
    menu.setAttribute("role", "menu");
    menu.innerHTML = options
      .map(function (o) {
        var checked = o[0] === network.includeOON;
        return (
          '<button class="network-option" type="button" role="menuitemradio" aria-checked="' + checked +
          '" data-network-option="' + o[0] + '"><span class="network-radio"></span>' +
          '<span><span class="network-option-label">' + o[1] + "</span>" +
          '<span class="network-option-hint">' + o[2] + "</span></span></button>"
        );
      })
      .join("");
    // Attached to the screen, not the filter bar, so the mobile bar's scroll can't clip it.
    screen.appendChild(menu);
    var left = (t.left - s.left) / scale;
    var maxLeft = screen.offsetWidth - menu.offsetWidth - 16;
    menu.style.left = Math.max(16, Math.min(left, maxLeft)) + "px";
    menu.style.top = (t.bottom - s.top) / scale + 8 + "px";
    trigger.setAttribute("aria-expanded", "true");
    menu.querySelector('[aria-checked="true"]').focus();
  }

  // ---------- Learn more: modal on desktop, slide-up sheet on mobile ----------

  // Explainer copy is placeholder, not from the Figma.
  var LEARN_MORE = {
    deductible: {
      title: "Your deductible",
      intro: "Your deductible is what you pay for covered care each year before your plan starts sharing the cost.",
      points: [
        "Until you meet it, you pay the full negotiated price for most visits.",
        "After you meet it, you pay only the copay shown on each provider, like $10 for preferred providers.",
        "Preventive care, like your annual checkup, is covered before you meet your deductible.",
      ],
    },
    preferred: {
      icon: "badge-preferred-star.svg",
      title: "IH Preferred Providers",
      intro: "These providers are recommended by Included Health because their patients have strong outcomes and their care usually costs you less.",
      points: [
        "Strong outcomes: their patients tend to have fewer repeat visits and complications.",
        "Lower costs: visits usually cost you less than with other in-network providers.",
        "Easy to spot: look for the purple star badge on a provider's photo.",
      ],
    },
    carekey: {
      icon: "badge-care-key.svg",
      title: "Care Key eligible",
      intro: "Providers that are Care Key eligible offer lower-cost visits when you use a Care Key.",
      points: [
        "Earn Care Keys by completing simple health steps, like your annual checkup.",
        "Use a Care Key when you schedule with an eligible provider to lower what you pay for that visit.",
        "You'll see your available Care Keys when you schedule.",
      ],
    },
  };

  var CLOSE_ICON =
    '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  var learnTrigger = null;

  function closeLearnMore() {
    var modal = document.querySelector(".learn-modal");
    if (!modal) return;
    var content = document.querySelector(".frame-content");
    if (content) content.style.overflowY = "";
    modal.remove();
    if (learnTrigger && document.contains(learnTrigger)) learnTrigger.focus();
    learnTrigger = null;
  }

  function openLearnMore(key, trigger) {
    var info = LEARN_MORE[key];
    openModal(
      '<h2 class="learn-title" id="learn-title">' + (info.icon ? '<img src="' + A + info.icon + '" width="24" height="24" alt="">' : "") + info.title + "</h2>" +
        '<p class="learn-intro">' + info.intro + "</p>" +
        '<ul class="learn-points">' + info.points.map(function (pt) {
          return "<li>" + (showCopays ? pt : pt.replace(/, like \$\d+ for preferred providers/, "")) + "</li>";
        }).join("") + "</ul>" +
        '<button class="learn-done" type="button" data-learn-close>Got it</button>',
      trigger
    );
  }

  // Modal on desktop, slide-up sheet on mobile, over the frame's page area.
  function openModal(body, trigger) {
    var content = document.querySelector(".frame-content");
    var mobile = document.querySelector(".screen").classList.contains("mode-mobile");
    learnTrigger = trigger;

    var modal = document.createElement("div");
    modal.className = "learn-modal" + (mobile ? " is-sheet" : "");
    // Cover the page area of the frame (not the browser bar or status bar).
    modal.style.top = content.offsetTop + "px";
    modal.style.left = content.offsetLeft + "px";
    modal.style.width = content.offsetWidth + "px";
    modal.style.height = content.offsetHeight + "px";
    modal.innerHTML =
      '<div class="learn-scrim" data-learn-close></div>' +
      '<div class="learn-dialog" role="dialog" aria-modal="true" aria-labelledby="learn-title">' +
      (mobile ? '<span class="learn-grabber" aria-hidden="true"></span>' : "") +
      '<button class="learn-close" type="button" aria-label="Close" data-learn-close>' + CLOSE_ICON + "</button>" +
      body +
      "</div>";
    content.parentElement.appendChild(modal);
    content.style.overflowY = "hidden";
    void modal.offsetWidth; // apply the closed styles first so the open transition runs
    modal.classList.add("is-open");
    modal.querySelector(".learn-close").focus();
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-map-toggle]")) {
      setMapOpen(!mobileMapOpen);
      return;
    }
    var filterOpen = e.target.closest("[data-filter-open]");
    if (filterOpen) {
      openFilterSheet(filterOpen);
      return;
    }
    var learn = e.target.closest("[data-learn]");
    if (learn) {
      openLearnMore(learn.getAttribute("data-learn"), learn);
      return;
    }
    if (e.target.closest("[data-learn-close]")) {
      closeLearnMore();
      return;
    }
    var trigger = e.target.closest("[data-network-filter]");
    var option = e.target.closest("[data-network-option]");
    if (trigger) {
      if (document.querySelector(".network-menu")) closeMenu();
      else openMenu(trigger);
      return;
    }
    if (option) {
      var include = option.getAttribute("data-network-option") === "true";
      closeMenu();
      network.includeOON = include;
      // On the walkthrough's filter step, choosing out-of-network moves on to the results.
      if (include && current && current.ctx.step.network === "reset") {
        app.next();
      } else {
        app.refresh();
      }
      return;
    }
    if (!e.target.closest(".network-menu")) closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
      closeLearnMore();
    }
  });

  // ---------- Facility search: diagnostic imaging and labs (Figma 2638:27425, card 2647:30790) ----------

  // Names and addresses follow the Figma; city/ZIP and types are filled in for the demo.
  var FACILITIES = [
    { name: "Marin Advanced Imaging Center", type: "Diagnostic Imaging or Radiology Center", address: "165 Rowland Way, Marin, CA 92230", distance: "17 mi", cost: "lower" },
    { name: "Quest Diagnostics", type: "Laboratory", address: "123 Maple Street, Novato, CA 94945", distance: "12 mi", cost: "lower" },
    { name: "LabCorp", type: "Laboratory", address: "456 Elm Avenue, San Rafael, CA 94901", distance: "25 mi", cost: "lower" },
    { name: "Bay Imaging Consultants", type: "Diagnostic Imaging or Radiology Center", address: "789 Oak Drive, Walnut Creek, CA 94596", distance: "33 mi", cost: "lower" },
    { name: "UCSF Lab Services", type: "Laboratory", address: "400 Parnassus Ave, San Francisco, CA 94143", distance: "8 mi", cost: "higher" },
    { name: "Stanford Health Services", type: "Diagnostic Imaging or Radiology Center", address: "300 Pasteur Dr, Palo Alto, CA 94304", distance: "28 mi", cost: "higher" },
    { name: "Sutter Health Clinics", type: "Laboratory", address: "1155 Franklin St, San Francisco, CA 94109", distance: "33.4 mi", cost: "higher" },
    { name: "Kaiser Permanente", type: "Diagnostic Imaging or Radiology Center", address: "4950 El Camino Real, Los Altos, CA 94022", distance: "42 mi", cost: "higher" },
  ];

  // range: facility V2 shows the copay range in the chip instead of "Lower/Higher cost facility".
  var COPAY_RANGE = { lower: "$10–$50 per visit", higher: "$100–$200 per visit" };

  function costChip(cost, large, range) {
    var lower = cost === "lower";
    var label = range ? COPAY_RANGE[cost] : lower ? "Lower cost facility" : "Higher cost facility";
    return (
      '<span class="chip chip-cost is-' + cost + (large ? " is-large" : "") + (range ? " is-range" : "") + '">' +
      // V2 range chips have no arrow, just the copay range.
      (range ? "" : '<img class="cost-arrow" src="' + A + (lower ? "cost-lower-arrow.svg" : "cost-higher-arrow.svg") + '" width="12" height="12" alt="">') +
      label + "</span>"
    );
  }

  function facilityCard(f, first, range) {
    return (
      '<article class="provider-card facility-card"' + (first ? " data-space data-dim" : "") + ">" +
      '<div class="provider-content">' +
      '<div class="provider-header">' +
      '<img class="facility-avatar" src="' + A + 'facility-avatar.svg" width="48" height="48" alt=""' + (first ? ' data-icon="clinic fallback"' : "") + ">" +
      '<div class="provider-title">' +
      '<p class="provider-name"' + (first ? ' data-type="Title 4 · 16/24 Bold"' : "") + ">" + f.name + "</p>" +
      '<p class="provider-specialties"' + (first ? ' data-type="Caption · 14/20 Medium"' : "") + ">" + f.type + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + f.name + '">' +
      '<img src="' + A + 'bookmark.svg" width="24" height="24" alt=""></button></div>' +
      '<div class="chips facility-chips">' + costChip(f.cost, false, range) +
      '<span class="chip chip-network"><img src="' + A + 'check-circle.svg" width="12" height="12" alt="">In-network</span></div>' +
      '<img class="divider" src="' + A + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><p class="facility-address"' + (first ? ' data-type="Body 2 · 14/20 Medium"' : "") + ">" + f.address + "</p>" +
      '<p class="clinic-distance facility-distance">' + f.distance + "</p></div>" +
      "</div>" +
      '<div class="button-stack">' +
      '<button class="btn-outline" type="button">View</button>' +
      '<button class="btn-solid" type="button">Schedule</button>' +
      "</div></article>"
    );
  }

  // Plan card with "How much will you pay?" (Figma 2643:29783).
  // range (facility V2): no "How much will you pay?" section; the chips carry the copay range.
  function facilityPlanCard(range) {
    return (
      '<section class="facility-plan" id="facility-plan" data-space data-dim>' +
      '<div class="facility-plan-top">' +
      '<p class="info-card-title is-plan"><span class="logomark" aria-hidden="true">' +
      '<img class="dot-tl" src="' + A + 'logomark-dot-left.svg" width="4.48117" height="4.47185" alt="">' +
      '<img class="dot-tr" src="' + A + 'logomark-dot-right.svg" width="4.47931" height="4.47185" alt="">' +
      '<img class="bar" src="' + A + 'logomark-bar.svg" width="14.7808" height="4.47185" alt="">' +
      '<img class="dot-bl" src="' + A + 'logomark-dot-left.svg" width="4.48117" height="4.47185" alt="">' +
      '<img class="dot-br" src="' + A + 'logomark-dot-right.svg" width="4.47931" height="4.47185" alt="">' +
      "</span>" + (copayOnly ? "Included Health Copay Plan" : "Included Health HSA Plan") + "</p>" +
      '<p class="info-card-body">' +
      (copayOnly
        ? "This is a copay plan. You pay a copay per visit. "
        : "This is a high deductible health plan (HDHP). The copays shown only apply after you’ve met your deductible. ") +
      "</p></div>" +
      (range || !showCopays
        ? ""
        : '<img class="divider" src="' + A + 'divider.svg" width="520" height="1" alt="">' +
          '<p class="facility-plan-question">How much will you pay?</p>' +
          '<div class="facility-plan-costs">' +
          '<div class="facility-plan-row">' + costChip("lower", true) + "<span>Between $10-50 per appointment</span></div>" +
          '<div class="facility-plan-row">' + costChip("higher", true) + "<span>Between $100-200 per appointment</span></div>" +
          "</div>") +
      "</section>"
    );
  }

  function facilityFilters() {
    return (
      '<div class="filters"><div class="container" data-space>' +
      [
        ["Distance", "Best nearby"],
        ["Languages spoken", "Any"],
      ]
        .map(function (f) {
          return (
            '<button class="filter" type="button"><span class="filter-label">' + f[0] + "</span>" +
            '<span class="filter-value">' + f[1] +
            '<span class="filter-chevron"><img src="' + A + 'arrow-left-small.svg" width="13.3333" height="13.3333" alt=""></span></span></button>'
          );
        })
        .join("") +
      "</div></div>"
    );
  }

  var FACILITY_TITLE = "Diagnostic and Lab Center";

  function facilityPage(ctx) {
    readScenario(ctx);
    // Copay range chips are dollar amounts, so they fall back to cost level without copays.
    var range = showCopays && ctx.variants && ctx.variants.facilities === "f2";
    var cards = FACILITIES.map(function (f, i) { return facilityCard(f, i === 0, range); }).join("");
    if (ctx.mode === "desktop") {
      return (
        primaryNav() + titleBar(FACILITY_TITLE) + facilityFilters() +
        '<div class="results-layout facility-layout">' +
        '<section class="results"><div class="cards facility-cards" id="facility-results" data-space>' + cards + "</div>" +
        '<button class="view-more" type="button">View more</button></section>' +
        '<aside class="aside facility-aside">' + map() + facilityPlanCard(range) + "</aside>" +
        "</div>"
      );
    }
    // Mobile: same map + sheet pattern as provider search.
    return (
      '<nav class="m-nav">' +
      '<button class="m-nav-button" type="button" aria-label="Back"><img src="' + A + 'm-arrow-left.svg" width="20" height="20" alt=""></button>' +
      "<h1>" + FACILITY_TITLE + "</h1>" +
      '<button class="m-nav-button" type="button" aria-label="Show map" aria-pressed="' + mobileMapOpen + '" data-map-toggle>' +
      '<img src="' + A + 'm-map-trifold.svg" width="24" height="24" alt=""></button></nav>' +
      '<div class="m-map"><img src="' + A + 'm-map.png" width="520" height="1132" alt="Map of nearby facilities"></div>' +
      '<div class="m-location"><img src="' + A + 'm-location-pin.svg" width="24" height="24" alt="">' +
      "<span>30 W Laurel Ave, Sierra Madre, CA 91024</span></div>" +
      '<section class="m-sheet' + (mobileMapOpen ? " is-map" : "") + '" aria-label="Results">' +
      '<div class="m-grabber" role="button" tabindex="0" aria-label="Drag to resize results" data-grabber><span></span></div>' +
      '<div class="m-sheet-scroll"><section class="results">' +
      '<div class="results-header m-header" id="facility-top"><div class="section-title-row"><h2>Nearby facilities</h2>' +
      '<button class="m-filter-button" type="button" data-filter-open>Filter</button></div>' +
      '<p class="section-description">Lab and imaging centers in your network, sorted by distance and cost.</p></div>' +
      '<div class="content-module">' + facilityPlanCard(range) + "</div>" +
      '<div class="cards" id="facility-results">' + cards + "</div>" +
      '<button class="view-more" type="button">View more</button>' +
      "</section></div></section>"
    );
  }

  // Panel text and address when Search type is Facilities.
  var FACILITY_ADDRESS = "member.includedhealth.com/care/search/labs-imaging";
  var FACILITY_INSTRUCTION = "Compare lab and imaging centers by cost and distance. Press F to switch back to providers.";
  var FACILITY_NOTES = [
    "Facility search for diagnostic imaging and labs, reached from provider search with one click (Search type) or the F key.",
    "Each facility shows whether it's a lower or higher cost option, plus network status and distance.",
    "The plan card explains what lower and higher cost facilities usually charge per appointment.",
  ];

  function facilityAware(step) {
    var instruction = step.instruction;
    var notes = step.notes;
    var address = step.address;
    var onShow = step.onShow;
    var isFacilities = function (ctx) { return ctx.switches && ctx.switches.search === "facilities"; };
    var value = function (v, ctx) { return typeof v === "function" ? v(ctx) : v; };
    step.instruction = function (ctx) { return isFacilities(ctx) ? FACILITY_INSTRUCTION : value(instruction, ctx); };
    step.notes = function (ctx) {
      if (!isFacilities(ctx)) return value(notes, ctx);
      return ctx.variants && ctx.variants.facilities === "f2"
        ? [
            FACILITY_NOTES[0],
            "V2: the purple and orange chips show just the copay range ($10–$50 or $100–$200 per visit), with no arrow, instead of \"Lower/Higher cost facility\".",
            "The plan card drops \"How much will you pay?\", since each card already shows the range.",
          ]
        : FACILITY_NOTES;
    };
    step.address = function (ctx) { return isFacilities(ctx) ? FACILITY_ADDRESS : value(address, ctx); };
    step.onShow = function (ctx) { if (!isFacilities(ctx) && onShow) onShow(ctx); };
    return step;
  }

  // ---------- Versions ----------

  var ADDRESS = "member.includedhealth.com/care/search/pcp";

  // Panel text that follows the "Show Care Keys" checkbox. A [on, off] pair
  // picks one; an off value of null drops the item.
  function careKeyText(on, off) {
    return function (ctx) {
      return ctx.toggles.careKeys !== false ? on : off;
    };
  }

  function careKeyNotes(items) {
    return function (ctx) {
      var on = ctx.toggles.careKeys !== false;
      return items
        .map(function (item) {
          return Array.isArray(item) ? item[on ? 0 : 1] : item;
        })
        .filter(Boolean);
    };
  }

  var BADGE_NOTE = [
    "The purple badge on the avatar marks an IH Preferred Provider; the Care Key icon by the name marks Care Key providers.",
    "The purple badge on the avatar marks an IH Preferred Provider.",
  ];

  function baseSteps(cfg) {
    var page = function (ctx) {
      return resultsPage(ctx, cfg);
    };
    var inNetworkList = cfg.networkFilter;
    var steps = [
      {
        name: "Top matches",
        address: ADDRESS,
        instruction: inNetworkList
          ? "Review the top three matches. Everyone in this list is in your network."
          : "Review the top three matches. Each card shows the copay, network status and distance.",
        notes: careKeyNotes(
          cfg.planKey && inNetworkList
            ? [
                [
                  "Changed from V2: the plan, IH Preferred Providers and Care Key cards are combined into one Plan Key below the map.",
                  "Changed from V2: the plan and IH Preferred Providers cards are combined into one Plan Key below the map.",
                ],
                "Like V2, the list is in-network by default and the Network filter can include out-of-network providers.",
                BADGE_NOTE,
              ]
            : inNetworkList
            ? [
                "Changed from P1: no In-network chip on each card. The header and description say the whole list is in-network.",
                "A new Network filter lets members include out-of-network providers.",
                BADGE_NOTE,
              ]
            : [
                "Results are ranked by how well each provider matches the member's preferences and quality of care.",
                BADGE_NOTE,
                "Gender, Distance and Languages spoken filters sit above the list.",
              ]
        ),
        render: page,
      },
      {
        name: "Your plan",
        address: ADDRESS,
        instruction: function (ctx) {
          if (ctx.toggles.deductible === false) {
            return cfg.planInfo ? "Read the plan summary above the providers." : "Read the plan card to see what you pay per visit.";
          }
          return cfg.planInfo
            ? "Read the plan summary above the providers. Select Plan details to learn about the deductible."
            : "Read the plan card to see why copays only apply after the deductible.";
        },
        notes: cfg.planInfo
          ? [
              cfg.summaryAboveMap
                ? "Changed from P1: the deductible note moves from the Plan Key to a plan summary above the map on desktop (above the first provider on mobile)."
                : "Changed from P1: the deductible note moves from the Plan Key to a plan summary right above the first provider, so it's read before any copay.",
              cfg.planInfo === "summary-progress"
                ? "Deductible progress ($1,250 of $3,000, placeholder) shows how close copays are to applying."
                : "No amounts: it just says the plan has a deductible and copays apply after it's met.",
              "Plan details opens a short explainer: a modal on desktop, a sheet on mobile.",
            ]
          : [
              "The member is on an HSA plan (HDHP), so the copays shown apply after the deductible.",
              "On desktop the plan card sits below the map; on mobile it sits under How this works, above the first provider.",
            ],
        render: page,
        onShow: scrollTo(cfg.planInfo ? "plan-summary" : "plan-card"),
      },
      cfg.explainBadges
        ? {
            name: "Badges",
            address: ADDRESS,
            instruction: careKeyText(
              "Tap a badge on a card, or in the legend, to see what IH Preferred and Care Key mean.",
              "Tap a badge on a card, or in the legend, to see what IH Preferred means."
            ),
            notes: careKeyNotes([
              "Changed from P1: no Plan Key. Each badge is a button that opens its explainer right where it appears.",
              cfg.legendInSummary
                ? "A legend inside the plan summary names each badge in text, so meaning never depends on the icon alone."
                : "A legend under the description names each badge in text, so meaning never depends on the icon alone.",
              "Badges have screen reader labels and keyboard focus.",
            ]),
            render: page,
            onShow: scrollTo("top-matches"),
          }
        : {
            name: "Preferred providers",
            address: ADDRESS,
            instruction: careKeyText(
              "See how IH Preferred Providers and Care Keys lower costs.",
              "See how IH Preferred Providers lower costs."
            ),
            notes: careKeyNotes([
              "These providers are recommended by Included Health because their patients have strong outcomes and their care usually costs you less.",
              ["Providers that are Care Key eligible offer lower-cost visits when you use a Care Key.", null],
            ]),
            render: page,
            onShow: scrollTo("preferred-card"),
          },
      {
        name: inNetworkList ? "Other in-network matches" : "Other top matches",
        address: ADDRESS,
        instruction: inNetworkList
          ? "Scroll to Other in-network matches. Select View more to load more providers."
          : "Scroll to Other top matches. Select View more to load more providers.",
        notes: [
          "These providers are in-network but not preferred, so copays are higher ($100 vs $10).",
          "View more paginates the list instead of loading everything at once.",
        ],
        render: page,
        onShow: scrollTo("other-matches"),
      },
    ];
    if (inNetworkList) {
      steps.push(
        {
          name: "Include out-of-network",
          address: ADDRESS,
          instruction: function (ctx) {
            return ctx.mode === "mobile"
              ? "Tap Filter, then choose Include out-of-network."
              : "Open the Network filter and choose Include out-of-network.";
          },
          notes: [
            "The list is in-network by default, so members don't have to check each card.",
            "Out-of-network is an opt-in choice in the Network filter, next to the other filters.",
          ],
          network: "reset",
          render: page,
        },
        {
          name: "Out-of-network providers",
          address: ADDRESS + "?network=all",
          instruction: "Out-of-network providers now appear after the in-network matches, clearly labeled.",
          notes: [
            "The Network filter reads In- and out-of-network, so the current view is always visible.",
            "Out-of-network providers sit in their own section with an Out-of-network chip and no copay estimate.",
            "Choosing In-network only removes them again.",
          ],
          network: "include",
          render: page,
          onShow: scrollTo("oon-matches"),
        }
      );
    }
    return steps.map(facilityAware);
  }

  var V1 = { networkChip: true, networkFilter: false, planKey: true, shortMap: true };
  var V2 = { networkChip: true, networkFilter: false, planInfo: "summary-progress", explainBadges: true, summaryAboveMap: true };
  var V3 = { networkChip: true, networkFilter: false, planInfo: "summary", explainBadges: true, summaryAboveMap: true, legendInSummary: true };

  // Opened from the Dot demo's "See all" button: offer a way back.
  var fromParams = new URLSearchParams(location.search);
  var backLink =
    fromParams.get("from") === "dot"
      ? {
          label: "Back to Dot",
          href:
            "../dot-chat/?step=4&path=" + (fromParams.get("search") === "facilities" ? "facilities" : "providers") +
            (fromParams.get("device") ? "&device=" + fromParams.get("device") : ""),
        }
      : null;

  app = DemoShell.mount({
    backLink: backLink,
    title: "Care search results",
    demoSwitch: {
      label: "Demo",
      current: "traditional",
      options: [
        { id: "traditional", label: "Traditional" },
        { id: "dot", label: "Dot", href: "../dot-chat/" },
      ],
    },
    switches: [
      {
        key: "search",
        label: "Search type",
        shortcut: "f",
        options: [
          { id: "providers", label: "Providers" },
          {
            id: "facilities",
            label: "Facilities",
            hideVersions: true,
            variants: {
              param: "fversion",
              items: [
                { id: "f1", label: "V1 · Cost level", description: "Chips say Lower or Higher cost facility; the plan card explains the copay ranges." },
                { id: "f2", label: "V2 · Copay range", description: "Chips show the copay range itself; no How much will you pay? section." },
              ],
            },
          },
        ],
      },
    ],
    toggles: [
      { key: "deductible", label: "Show deductible", checked: true },
      { key: "careKeys", label: "Show Care Keys", checked: true },
      { key: "copays", label: "Show copays", checked: true },
    ],
    summary: "A member compares primary care providers, or lab and imaging facilities, and what each visit will cost.",
    onRestart: function () {
      network.includeOON = false;
      closeMenu();
    },
    versions: [
      { id: "p1", label: "P1 · Plain text", description: "The Figma design, with an In-network chip on every card and the Plan Key below the map.", steps: baseSteps(V1) },
      { id: "p2", label: "P2 · Modals", description: "No Plan Key: a plan summary above the map, and badges that explain themselves.", steps: baseSteps(V3) },
      { id: "p3", label: "P3 · Deductible tracker", description: "Like P2, plus deductible progress.", steps: baseSteps(V2) },
    ],
  });
})();
