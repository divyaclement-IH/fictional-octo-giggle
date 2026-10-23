/* Dot conversation: a member asks Dot to find providers or facilities.
   Mobile follows Figma 2UJLBp93sigLx4o9mXzzFD node 1118:28018; web follows
   the "Navigate your care" web screenshot. Both share one message style. */
(function () {
  "use strict";

  var A = "assets/";
  // Cards reuse the care-search (provider-search) demo's icons, avatars and
  // markup verbatim, so the in-chat cards are the same design as the results page.
  var PS = "../provider-search/assets/";

  // Top matches — the top-match records from demos/provider-search/demo.js, so
  // the in-chat cards render identically. Kept in sync by hand with that demo.
  var PROVIDERS = [
    {
      name: "Dr. Alex Johnson, DDS",
      photo: true,
      offerings: ["telehealth"],
      preferred: true,
      specialties: "Dentistry · General Dentistry · Cosmetic Dentistry",
      summary: "Committed to providing comprehensive dental care with an emphasis on patient comfort and aesthetic needs.",
      clinic: "Bright Futures Center",
      address: "321 Dental Blvd, Oakland, CA 94612",
      distance: "8 mi",
    },
    {
      name: "Dr. Jessica Yu, MD",
      preferred: true,
      careKey: true,
      specialties: "Obstetrics & Gynecology · Obstetrics · Gynecology",
      summary: "Has strong back and spine expertise, prioritizes safe and non-invasive care, and stays engaged in your long-term recovery, referring to trusted specialists.",
      clinic: "Golden State Research Institute",
      address: "123 State St, San Francisco, CA 95118",
      distance: "17 mi",
    },
    {
      name: "Dr. Emily Tran, NP",
      preferred: true,
      offerings: ["lgbtq"],
      specialties: "Nursing · Family Practice · Wellness",
      summary: "Advocates for holistic health practices while providing compassionate care and education to families.",
      clinic: "Healthy Living Clinic",
      address: "654 Care St, Fremont, CA 94536",
      distance: "15 mi",
    },
  ];

  // Lower-cost facilities first, matching the care-search facility results.
  var FACILITIES = [
    { name: "Marin Advanced Imaging Center", type: "Diagnostic Imaging or Radiology Center", address: "165 Rowland Way, Marin, CA 92230", distance: "17 mi", cost: "lower" },
    { name: "Quest Diagnostics", type: "Laboratory", address: "123 Maple Street, Novato, CA 94945", distance: "12 mi", cost: "lower" },
    { name: "LabCorp", type: "Laboratory", address: "456 Elm Avenue, San Rafael, CA 94901", distance: "25 mi", cost: "lower" },
  ];

  var showCareKeys = true; // "Show Care Keys" checkbox under Scenario, shared with provider-search

  // Provider offering chips (Figma 2643:29840) — copied from provider-search.
  var OFFERINGS = {
    premium: { label: "Premium care physician", icon: "chip-heart.svg", tone: "neutral" },
    telehealth: { label: "Offers telehealth", icon: "chip-video.svg", tone: "success" },
    lgbtq: { label: "LGBTQ+ affirming", icon: "chip-rainbow-heart.svg", tone: "success" },
  };

  var app = null;
  var lastStep = null;
  var typingDone = false; // Dot "types" each time a step with a new reply is entered

  // ---------- Pieces ----------

  function dotHeader() {
    return (
      '<div class="dot-name"><img src="' + A + 'dot.svg" width="20" height="20" alt="" data-icon="Dot">' +
      '<span data-type="Caption · 12/16 Medium">Dot</span><span aria-hidden="true">•</span><span>AI Assistant</span></div>'
    );
  }

  function dotTurn(body, chips, opts) {
    opts = opts || {};
    return (
      '<section class="turn dot-turn"' + (opts.id ? ' id="' + opts.id + '"' : "") + ' aria-label="Dot">' +
      dotHeader() +
      '<div class="dot-message" data-type="Body 1 · 16/24 Medium">' + body + "</div>" +
      (chips ? '<div class="chip-buttons">' + chips + "</div>" : "") +
      "</section>"
    );
  }

  function typingTurn() {
    return (
      '<section class="turn dot-turn" aria-label="Dot is typing">' + dotHeader() +
      '<div class="typing" aria-hidden="true"><span></span><span></span><span></span></div></section>'
    );
  }

  function memberTurn(text, id) {
    return (
      '<div class="turn member-turn"' + (id ? ' id="' + id + '"' : "") + ">" +
      '<p class="member-bubble" data-type="Body 1 · 16/24 Medium" data-color="surface/brand/weak">' + text + "</p></div>"
    );
  }

  // active: the chip answers the current question; answered chips stay but go inert.
  function chip(label, action, active) {
    return (
      '<button class="chip-button" type="button"' +
      (active && action ? ' data-dot="' + action + '"' : " disabled") + ">" + label + "</button>"
    );
  }

  // --- Card pieces copied verbatim from demos/provider-search/demo.js so the
  //     in-chat cards are the same design as the care-search results. Assets
  //     resolve from the provider-search folder (PS). ---

  // IH Preferred badge: purple badge with a white star (Figma 2583:24045).
  function verifiedBadge() {
    return '<img class="badge-verified" src="' + PS + 'badge-preferred-star.svg" width="16" height="16" alt="IH Preferred Provider" title="IH Preferred Provider" data-icon="Badge Verified">';
  }

  function careKeyIcon() {
    return '<img class="care-key-icon" src="' + PS + 'badge-care-key.svg" width="24" height="24" alt="Care Key eligible" title="Care Key eligible">';
  }

  function offeringChips(p) {
    return (p.offerings || [])
      .map(function (key) {
        var o = OFFERINGS[key];
        return (
          '<span class="chip chip-offering is-' + o.tone + '"><img src="' + PS + o.icon + '" width="12" height="12" alt="">' +
          o.label + "</span>"
        );
      })
      .join("");
  }

  // "Dr. Alex Johnson, DDS" -> "AJ"
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
  function avatar(p) {
    if (p.photo) {
      return (
        '<span class="avatar"><img class="avatar-photo" src="' + PS + 'avatar.png" alt="">' +
        (p.preferred ? verifiedBadge() : "") + "</span>"
      );
    }
    return (
      '<span class="avatar is-initials">' +
      '<img class="avatar-bg" src="' + PS + 'avatar-initials-bg.svg" width="48" height="48" alt="">' +
      '<span class="avatar-initials" aria-hidden="true">' + initials(p.name) + "</span>" +
      (p.preferred ? verifiedBadge() : "") + "</span>"
    );
  }

  function providerCard(p) {
    var chips =
      '<span class="chip chip-copay"><span>$30 copay <span class="chip-regular">after deductible</span></span></span>' +
      '<span class="chip chip-network"><img src="' + PS + 'check-circle.svg" width="12" height="12" alt="">In-network</span>';
    return (
      '<article class="provider-card">' +
      '<div class="provider-content">' +
      '<div class="provider-header">' +
      avatar(p) +
      '<div class="provider-title">' +
      '<p class="provider-name">' + p.name +
      (p.careKey && showCareKeys ? careKeyIcon() : "") + "</p>" +
      '<p class="provider-specialties">' + p.specialties + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + p.name + '">' +
      '<img src="' + PS + 'bookmark.svg" width="24" height="24" alt=""></button>' +
      "</div>" +
      '<div class="chips">' + chips + offeringChips(p) + "</div>" +
      '<p class="provider-summary">' + p.summary + "</p>" +
      '<img class="divider" src="' + PS + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><div class="clinic-address">' +
      '<p class="clinic-name">' + p.clinic + "</p>" +
      '<p class="clinic-street">' + p.address + "</p></div>" +
      '<p class="clinic-distance">' + p.distance + "</p></div>" +
      "</div>" +
      '<div class="button-stack">' +
      '<button class="btn-outline" type="button">View profile</button>' +
      '<button class="btn-solid" type="button">Schedule</button>' +
      "</div></article>"
    );
  }

  function costChip(cost) {
    var lower = cost === "lower";
    var label = lower ? "Lower cost facility" : "Higher cost facility";
    return (
      '<span class="chip chip-cost is-' + cost + '">' +
      '<img class="cost-arrow" src="' + PS + (lower ? "cost-lower-arrow.svg" : "cost-higher-arrow.svg") + '" width="12" height="12" alt="">' +
      label + "</span>"
    );
  }

  function facilityCard(f) {
    return (
      '<article class="provider-card facility-card">' +
      '<div class="provider-content">' +
      '<div class="provider-header">' +
      '<img class="facility-avatar" src="' + PS + 'facility-avatar.svg" width="48" height="48" alt="">' +
      '<div class="provider-title">' +
      '<p class="provider-name">' + f.name + "</p>" +
      '<p class="provider-specialties">' + f.type + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + f.name + '">' +
      '<img src="' + PS + 'bookmark.svg" width="24" height="24" alt=""></button></div>' +
      '<div class="chips facility-chips">' + costChip(f.cost) +
      '<span class="chip chip-network"><img src="' + PS + 'check-circle.svg" width="12" height="12" alt="">In-network</span></div>' +
      '<img class="divider" src="' + PS + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><p class="facility-address">' + f.address + "</p>" +
      '<p class="clinic-distance facility-distance">' + f.distance + "</p></div>" +
      "</div>" +
      '<div class="button-stack">' +
      '<button class="btn-outline" type="button">View</button>' +
      '<button class="btn-solid" type="button">Schedule</button>' +
      "</div></article>"
    );
  }

  // ---------- Conversation ----------

  var INTRO =
    "<p>The providers and facilities you choose can affect what you pay.</p>" +
    "<p><b>Providers</b><br>Your plan has two in-network provider tiers:</p>" +
    "<ul><li><b>Preferred:</b> Higher quality care with a lower copay</li>" +
    "<li><b>Standard:</b> Covered care with a higher copay</li></ul>" +
    "<p><b>Facilities</b><br>Freestanding labs and imaging centers often cost less than hospital-based facilities for the same service.</p>" +
    "<p>Here are some ways I can help you find the right care at the lowest cost:</p>";

  function conversation(ctx) {
    var index = ctx.index;
    var path = ctx.switches.path;
    var turns = [];

    turns.push(
      dotTurn(
        INTRO,
        chip("Find providers or facilities", "find", index === 0) +
          chip("Explain how tiering works", null, false) +
          chip("Learn more about my plan", null, false)
      )
    );
    if (index < 1) return turns.join("");

    turns.push(memberTurn("Find providers or facilities", "turn-find"));
    if (index === 1 && !typingDone) return turns.concat(typingTurn()).join("");
    turns.push(
      dotTurn(
        "<p>Happy to help. What are you looking for?</p>",
        chip("A primary care doctor", "providers", index === 1) + chip("Lab or imaging", "facilities", index === 1)
      )
    );
    if (index < 2) return turns.join("");

    var providers = path === "providers";
    turns.push(memberTurn(providers ? "A primary care doctor" : "Lab or imaging", "turn-answer"));
    if (!typingDone) return turns.concat(typingTurn()).join("");
    var seeAll =
      "../provider-search/?search=" + path + "&device=" + ctx.mode + "&careKeys=" + (showCareKeys ? "1" : "0") + "&from=dot";
    turns.push(
      dotTurn(
        providers
          ? "<p>Here are top in-network primary care matches near you. Preferred providers have a <b>$30 copay</b> after your deductible.</p>"
          : "<p>Here are freestanding labs and imaging centers near you, with lower cost options first.</p>",
        null,
        { id: "turn-results" }
      ) +
        '<div class="dot-results">' +
        (providers ? PROVIDERS.map(providerCard) : FACILITIES.map(facilityCard)).join("") +
        '<a class="see-all" href="' + seeAll + '">' + (providers ? "See all providers" : "See all facilities") + "</a></div>"
    );
    return turns.join("");
  }

  function chatInput() {
    return (
      '<div class="chat-input" data-space data-dim>' +
      '<p class="chat-placeholder" data-type="Body 1 · 16/24 Medium">Describe what you need...</p>' +
      '<div class="chat-buttons"><span class="chat-plus"><img src="' + A + 'plus.svg" width="16" height="16" alt="" data-icon="plus"></span>' +
      '<img class="chat-send" src="' + A + 'send.svg" width="48" height="48" alt=""></div></div>'
    );
  }

  function webNav() {
    return (
      '<nav class="web-nav"><img class="web-logo" src="' + PS + 'logo-mark.svg" width="24.4616" height="26" alt="Included Health">' +
      '<div class="web-links"><a class="is-active" href="#">Home</a><a href="#"><span class="unread" aria-hidden="true"></span>Messages</a>' +
      '<a href="#">Activity</a><a href="#">Me</a></div></nav>' +
      '<div class="web-bar"><div class="web-bar-inner"><a class="web-back" href="#">' +
      '<img src="' + PS + 'arrow-left.svg" width="22" height="22" alt="">Back</a>' +
      '<h1 data-type="Title 4 · 16/24 Bold">Navigate your care</h1><span class="web-bar-spacer"></span></div></div>'
    );
  }

  function mobileNav() {
    return (
      '<nav class="m-nav"><span class="m-nav-side"></span><h1 data-type="Title 4 · 16/24 Bold">Navigate your care</h1>' +
      '<a class="m-close" href="#">close</a></nav>'
    );
  }

  function page(ctx) {
    showCareKeys = ctx.toggles.careKeys !== false;
    if (ctx.step !== lastStep) {
      typingDone = ctx.index === 0;
      lastStep = ctx.step;
    }
    return (
      (ctx.mode === "desktop" ? webNav() : mobileNav()) +
      '<div class="chat-scroll"><div class="chat-column">' + conversation(ctx) + "</div></div>" +
      '<div class="chat-dock"><div class="chat-column">' + chatInput() + "</div></div>"
    );
  }

  function scrollToLatest(ctx) {
    var scroller = ctx.screen.querySelector(".chat-scroll");
    if (scroller) scroller.scrollTop = scroller.scrollHeight;
  }

  // Dot "types" for a moment, then the reply appears.
  function show(ctx) {
    scrollToLatest(ctx);
    if (typingDone) return;
    var step = ctx.step;
    setTimeout(function () {
      if (lastStep !== step) return;
      typingDone = true;
      app.refresh();
      scrollToLatest({ screen: document.querySelector(".screen") });
    }, 700);
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-dot]");
    if (!b) return;
    var action = b.getAttribute("data-dot");
    if (action === "providers" || action === "facilities") app.setSwitch("path", action);
    app.next();
  });

  var ADDRESS = "member.includedhealth.com/dot";

  app = DemoShell.mount({
    title: "Dot: find care",
    summary: "A member asks Dot, the AI assistant, how their choice of care affects cost and to find providers or facilities.",
    demoSwitch: {
      label: "Demo",
      current: "dot",
      options: [
        { id: "traditional", label: "Traditional", href: "../provider-search/" },
        { id: "dot", label: "Dot" },
      ],
    },
    switches: [
      {
        key: "path",
        label: "Path",
        shortcut: "p",
        options: [
          { id: "providers", label: "Providers" },
          { id: "facilities", label: "Facilities" },
        ],
      },
    ],
    toggles: [{ key: "careKeys", label: "Show Care Keys", checked: true }],
    onRestart: function () {
      lastStep = null;
    },
    steps: [
      {
        name: "Dot explains costs",
        address: ADDRESS,
        instruction: "Dot explains how providers and facilities affect cost. Select Find providers or facilities.",
        notes: [
          "Dot opens with the two provider tiers (Preferred and Standard) and why freestanding facilities cost less.",
          "Chip buttons offer next steps; the member can also type in the chat input.",
          "Web and mobile share the same message, chip and bubble styles.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "What are you looking for",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Dot asks what they need. Select A primary care doctor."
            : "Dot asks what they need. Select Lab or imaging.";
        },
        notes: [
          "The member's choice appears as their reply bubble on the right.",
          "Dot shows a short typing indicator before each reply.",
          "Use Path (or the P key) to pick which answer the walkthrough takes.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Results",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Dot shows top preferred matches. Select See all providers to open care search."
            : "Dot shows lower cost facilities. Select See all facilities to open care search.";
        },
        notes: function (ctx) {
          return ctx.switches.path === "providers"
            ? [
                "Three preferred providers ($30 copay) appear as compact cards right in the chat.",
                ctx.toggles.careKeys !== false
                  ? "The Care Key icon by the name marks Care Key providers, matching care search."
                  : null,
                "See all providers opens the care search demo on provider search, on the same device.",
              ].filter(Boolean)
            : [
                "Three lower cost lab and imaging facilities appear as compact cards right in the chat.",
                "See all facilities opens the care search demo on facility search, on the same device.",
              ];
        },
        render: page,
        onShow: show,
      },
    ],
  });
})();
