/* Dot conversation: a member asks Dot to find providers or facilities.
   Mobile follows Figma 2UJLBp93sigLx4o9mXzzFD node 1118:28018; web follows
   the "Navigate your care" web screenshot. Both share one message style. */
(function () {
  "use strict";

  var A = "assets/";
  // Cards reuse the care-search (provider-search) demo's icons, avatars and
  // markup verbatim, so the in-chat cards are the same design as the results page.
  var PS = "../provider-search/assets/";

  // Provider matches for the member's search. The provider path asks for "a
  // primary care doctor", so these are primary-care providers; each record
  // keeps the care-search card shape so the in-chat cards render identically.
  var PROVIDERS = [
    {
      name: "Dr. Alex Johnson, MD",
      photo: true,
      offerings: ["telehealth"],
      preferred: true,
      specialties: "Primary Care · Family Medicine",
      summary: "Committed to comprehensive primary care with an emphasis on preventive health and building long-term relationships with patients.",
      clinic: "Bright Futures Primary Care",
      address: "321 Main Blvd, Oakland, CA 94612",
      distance: "8 mi",
    },
    {
      name: "Dr. Jessica Yu, MD",
      preferred: true,
      careKey: true,
      specialties: "Primary Care · Internal Medicine",
      summary: "Focuses on preventive care and chronic-condition management, prioritizes clear follow-up, and stays engaged in your long-term health.",
      clinic: "Golden State Primary Care",
      address: "123 State St, San Francisco, CA 95118",
      distance: "17 mi",
    },
    {
      name: "Dr. Emily Tran, NP",
      preferred: true,
      offerings: ["lgbtq"],
      specialties: "Primary Care · Family Practice",
      summary: "Advocates for holistic health practices while providing compassionate primary care and education to families.",
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
      // Dot view: show only the first (primary) specialty, not the full list.
      '<p class="provider-specialties">' + p.specialties.split(" · ")[0] + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + p.name + '">' +
      '<img src="' + PS + 'bookmark.svg" width="24" height="24" alt=""></button>' +
      "</div>" +
      // Dot view: cap at 2 chips (copay + network); offerings are omitted here.
      '<div class="chips">' + chips + "</div>" +
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

  // Visit types Riley can pick. Copays are placeholder figures; primary care
  // matches the care-search demo ($30 Preferred, $300 Standard).
  var VISIT_TYPES = [
    {
      id: "primary",
      label: "Primary care",
      copay: "If you see someone virtually through Included Health, the copay will be $0. For in-person care, the copay will be $30 for a Preferred provider or $300 for a Standard provider.",
    },
    {
      id: "urgent",
      label: "Urgent care",
      copay: "A virtual urgent care visit through Included Health is $0. At an in-person urgent care center, the copay will be $50 for a Preferred provider or $150 for a Standard provider.",
    },
    {
      id: "specialty",
      label: "Specialty care",
      copay: "The copay will be $50 for a Preferred provider or $350 for a Standard provider.",
    },
    {
      id: "therapy",
      label: "Therapy",
      copay: "Virtual therapy through Included Health is $0. For in-person sessions, the copay will be $30 for a Preferred provider or $300 for a Standard provider.",
    },
    {
      id: "psych",
      label: "Psych",
      copay: "Virtual psychiatry through Included Health is $0. For in-person visits, the copay will be $30 for a Preferred provider or $300 for a Standard provider.",
    },
    {
      id: "er",
      label: "ER",
      copay: "The copay for an emergency room visit will be $350. It’s waived if you’re admitted to the hospital.",
    },
  ];
  var DEFAULT_VISITS = ["primary", "specialty"];
  var selectedVisits = DEFAULT_VISITS.slice();

  function selectedVisitTypes() {
    return VISIT_TYPES.filter(function (v) {
      return selectedVisits.indexOf(v.id) !== -1;
    });
  }

  function selectedLabel() {
    return selectedVisitTypes()
      .map(function (v) { return v.label; })
      .join(", ");
  }

  // Multi-select chip: toggles in and out of the input until the member sends.
  function visitChip(v, active) {
    var on = selectedVisits.indexOf(v.id) !== -1;
    return (
      '<button class="chip-button chip-select' + (on ? " is-selected" : "") + '" type="button"' +
      (active ? ' data-visit="' + v.id + '" aria-pressed="' + on + '"' : " disabled") + ">" + v.label + "</button>"
    );
  }

  function copayReply() {
    return (
      "<p>Here are the copays for the visit types you selected:</p><ul>" +
      selectedVisitTypes()
        .map(function (v) { return "<li><b>" + v.label + ":</b> " + v.copay + "</li>"; })
        .join("") +
      "</ul><p>One thing to keep in mind: You generally don’t need to pay at the office. Wait for the claim to process so you can avoid overpaying or needing a refund.</p>"
    );
  }

  // Swipeable row of result cards with pagination dots.
  function carousel(cards) {
    return (
      '<div class="dot-results" role="region" aria-label="Results">' +
      '<div class="carousel-track" role="list">' +
      cards.map(function (c) { return '<div class="carousel-item" role="listitem">' + c + "</div>"; }).join("") +
      "</div>" +
      '<div class="carousel-dots" aria-hidden="true">' +
      cards.map(function (_, i) { return "<span" + (i === 0 ? ' class="is-active"' : "") + "></span>"; }).join("") +
      "</div></div>"
    );
  }

  function conversation(ctx) {
    var index = ctx.index;
    var path = ctx.switches.path;
    var turns = [];

    turns.push(memberTurn("Visit costs", "turn-start"));
    turns.push(
      dotTurn(
        "<p>What kind of visits are you interested in learning about?</p>" +
          '<p class="select-help">Select all that apply</p>',
        '<div class="chip-row">' +
          VISIT_TYPES.map(function (v) { return visitChip(v, index === 0); }).join("") +
          "</div>"
      )
    );
    if (index < 1) return turns.join("");

    turns.push(memberTurn(selectedLabel(), "turn-visits"));
    if (index === 1 && !typingDone) return turns.concat(typingTurn()).join("");
    turns.push(
      dotTurn(
        copayReply(),
        chip("Search for care", "find", index === 1) + chip("Learn more about my plan", null, false)
      )
    );
    if (index < 2) return turns.join("");

    turns.push(memberTurn("Search for care", "turn-find"));
    if (index === 2 && !typingDone) return turns.concat(typingTurn()).join("");
    turns.push(
      dotTurn(
        "<p>Happy to help. What are you looking for?</p>",
        chip("A primary care doctor", "providers", index === 2) + chip("Lab or imaging", "facilities", index === 2)
      )
    );
    if (index < 3) return turns.join("");

    var providers = path === "providers";
    turns.push(memberTurn(providers ? "A primary care doctor" : "Lab or imaging", "turn-answer"));
    if (!typingDone) return turns.concat(typingTurn()).join("");
    turns.push(
      dotTurn(
        providers
          ? "<p>Here are top in-network primary care matches near you. Preferred providers have a <b>$30 copay</b> after your deductible.</p>"
          : "<p>Here are freestanding labs and imaging centers near you, with lower cost options first.</p>",
        null,
        { id: "turn-results" }
      ) + carousel(providers ? PROVIDERS.map(providerCard) : FACILITIES.map(facilityCard))
    );
    return turns.join("");
  }

  function chatInput(ctx) {
    var draft = ctx.index === 0 && selectedVisits.length ? selectedLabel() : "";
    return (
      '<div class="chat-input" data-space data-dim>' +
      (draft
        ? '<p class="chat-placeholder is-draft" data-type="Body 1 · 16/24 Medium">' + draft + "</p>"
        : '<p class="chat-placeholder" data-type="Body 1 · 16/24 Medium">Describe what you need...</p>') +
      '<div class="chat-buttons"><span class="chat-plus"><img src="' + A + 'plus.svg" width="16" height="16" alt="" data-icon="plus"></span>' +
      (draft
        ? '<button class="chat-send-button" type="button" data-dot="send" aria-label="Send"><img class="chat-send" src="' + A + 'send.svg" width="48" height="48" alt=""></button>'
        : '<img class="chat-send" src="' + A + 'send.svg" width="48" height="48" alt="">') +
      "</div></div>"
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
      '<div class="chat-dock"><div class="chat-column">' + chatInput(ctx) + "</div></div>"
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
    var v = e.target.closest("[data-visit]");
    if (v) {
      var id = v.getAttribute("data-visit");
      var at = selectedVisits.indexOf(id);
      if (at === -1) selectedVisits.push(id);
      else selectedVisits.splice(at, 1);
      var scroller = document.querySelector(".screen .chat-scroll");
      var top = scroller ? scroller.scrollTop : 0;
      app.refresh();
      scroller = document.querySelector(".screen .chat-scroll");
      if (scroller) scroller.scrollTop = top;
      return;
    }
    var b = e.target.closest("[data-dot]");
    if (!b) return;
    var action = b.getAttribute("data-dot");
    if (action === "providers" || action === "facilities") app.setSwitch("path", action);
    app.next();
  });

  // Carousel pagination dots follow the swipe position.
  document.addEventListener(
    "scroll",
    function (e) {
      var track = e.target;
      if (!track.classList || !track.classList.contains("carousel-track")) return;
      var items = track.children;
      if (!items.length) return;
      var step = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : 1;
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      var current = atEnd ? items.length - 1 : Math.round(track.scrollLeft / step);
      var dots = track.parentNode.querySelectorAll(".carousel-dots span");
      for (var i = 0; i < dots.length; i++) dots[i].classList.toggle("is-active", i === current);
    },
    true
  );

  var ADDRESS = "member.includedhealth.com/dot";

  app = DemoShell.mount({
    title: "Dot: find care",
    summary: "A member asks Dot, the AI assistant, what visits cost on their plan, then finds providers or facilities.",
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
      selectedVisits = DEFAULT_VISITS.slice();
    },
    steps: [
      {
        name: "Choose visit types",
        address: ADDRESS,
        instruction: "Riley asks Dot about visit costs. Pick the visit types to ask about, then select Send.",
        notes: [
          "Dot asks one question and offers the visit types as multi-select chips.",
          "Picked types move into the chat input; Primary care and Specialty care are picked for the walkthrough.",
          "Send submits one comma-separated message.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Copays",
        address: ADDRESS,
        instruction: "Dot lists the copays for the picked visit types. Select Search for care.",
        notes: [
          "Copays are placeholder figures; primary care matches care search ($30 Preferred, $300 Standard).",
          "Virtual visits through Included Health are $0 where they apply.",
          "Ends with options so the member can keep going.",
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
            ? "Dot shows top preferred matches. Swipe through the provider cards."
            : "Dot shows lower cost facilities. Swipe through the facility cards.";
        },
        notes: function (ctx) {
          return [
            ctx.switches.path === "providers"
              ? "Three preferred providers ($30 copay) appear as cards in a swipeable row right in the chat."
              : "Three lower cost lab and imaging facilities appear as cards in a swipeable row right in the chat.",
            "The next card peeks in from the edge; pagination dots show the position.",
            ctx.switches.path === "providers" && ctx.toggles.careKeys !== false
              ? "The Care Key icon by the name marks Care Key providers, matching care search."
              : null,
          ].filter(Boolean);
        },
        render: page,
        onShow: show,
      },
    ],
  });
})();
