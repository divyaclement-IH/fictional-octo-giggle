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
      specialties: "Primary Care · Family Practice · Wellness",
      summary: "Advocates for holistic health practices while providing compassionate primary care and education to families.",
      clinic: "Healthy Living Clinic",
      address: "654 Care St, Fremont, CA 94536",
      distance: "15 mi",
    },
    {
      name: "Dr. Marcus Reed, DO",
      photo: true,
      careKey: true,
      specialties: "Family Medicine · Primary Care",
      summary: "Treats patients of all ages with a focus on preventive care and same-week availability for established patients.",
      clinic: "Eastbay Health Partners",
      address: "2200 Broadway, Oakland, CA 94612",
      distance: "9 mi",
    },
    {
      name: "Dr. Hannah Kim, MD",
      preferred: true,
      specialties: "Internal Medicine · Preventive Care",
      summary: "Helps adults manage chronic conditions with clear care plans and regular check-ins between visits.",
      clinic: "Lakeside Internal Medicine",
      address: "410 Grand Ave, Oakland, CA 94610",
      distance: "11 mi",
    },
    {
      name: "Dr. Sofia Alvarez, MD",
      preferred: true,
      offerings: ["telehealth"],
      specialties: "Primary Care · Family Medicine",
      summary: "Offers whole-family primary care with flexible virtual visits and a focus on preventive screenings.",
      clinic: "Bayview Family Practice",
      address: "88 Mission St, San Francisco, CA 94105",
      distance: "6 mi",
    },
  ];

  // Lower-cost facilities first, matching the care-search facility results.
  var FACILITIES = [
    { name: "Marin Advanced Imaging Center", type: "Diagnostic Imaging or Radiology Center", address: "165 Rowland Way, Marin, CA 92230", distance: "17 mi", cost: "lower" },
    { name: "Quest Diagnostics", type: "Laboratory", address: "123 Maple Street, Novato, CA 94945", distance: "12 mi", cost: "lower" },
    { name: "UCSF Lab Services", type: "Laboratory", address: "400 Parnassus Ave, San Francisco, CA 94143", distance: "8 mi", cost: "higher" },
  ];

  var showCareKeys = true; // "Show Care Keys" checkbox under Scenario, shared with provider-search
  var MEMBER_ZIP = "94110"; // the member's ZIP, confirmed before the provider search

  // Provider offering chips (Figma 2643:29840) — copied from provider-search.
  var OFFERINGS = {
    premium: { label: "Premium care physician", icon: "chip-heart.svg", tone: "neutral" },
    telehealth: { label: "Offers telehealth", icon: "chip-video.svg", tone: "success" },
    lgbtq: { label: "LGBTQ+ affirming", icon: "chip-rainbow-heart.svg", tone: "success" },
  };

  var app = null;
  var lastStep = null;
  var typingDone = false; // Dot "types" each time a step with a new reply is entered
  // The member's newest message shows "Sending..." for a moment, then "Sent";
  // Dot's typing dots only start once it's sent.
  var SEND_MS = 450;
  var sendDone = false;

  // --- Reply typewriter: after the typing dots, Dot's latest reply reveals one
  //     character at a time (20 ms/char), and any chips/cards below it stay
  //     hidden until the text finishes. Mirrors the m4 Dot chat send/sent
  //     interaction. Each step's reply types once; re-renders (device/path
  //     switches) don't re-animate a finished one. Honors reduced motion. ---
  var TYPE_SPEED_MS = 20;
  var typedSteps = {}; // step name -> true once its reply has finished typing
  var typeTimer = null;

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  // Reveal the newest Dot reply's text char-by-char, then show its chips/cards.
  function runReplyTypewriter(stepName) {
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }
    var screen = document.querySelector(".screen");
    if (!screen) return;
    var turns = screen.querySelectorAll(".dot-turn");
    var turn = turns.length ? turns[turns.length - 1] : null;
    if (!turn) return;
    var msg = turn.querySelector(".dot-message");
    // Elements to reveal only after the text finishes typing.
    var deferred = [];
    var chips = turn.querySelector(".chip-buttons");
    if (chips) deferred.push(chips);
    var results = turn.nextElementSibling;
    if (results && results.classList && results.classList.contains("dot-results")) {
      deferred.push(results);
    }

    function reveal() {
      deferred.forEach(function (el) { el.style.visibility = ""; });
      typedSteps[stepName] = true;
      scrollToLatest({ screen: screen });
    }

    // Already typed earlier, no message, or reduced motion: show everything now.
    if (!msg || typedSteps[stepName] || prefersReducedMotion()) {
      reveal();
      return;
    }

    var full = msg.innerHTML;
    // Plain text of the reply, captured before we clear the node. Markup (bold,
    // lists) is restored whole at the end so tags aren't revealed one at a time.
    var text = msg.textContent || "";
    deferred.forEach(function (el) { el.style.visibility = "hidden"; });
    msg.innerHTML = "";
    var i = 0;
    (function step() {
      if (i <= text.length) {
        msg.textContent = text.slice(0, i);
        i += 1;
        typeTimer = setTimeout(step, TYPE_SPEED_MS);
      } else {
        msg.innerHTML = full;
        typeTimer = null;
        reveal();
      }
    })();
  }

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

  // latest: this is the member's newest message, so it carries the send status
  // (only the latest message shows one).
  function memberTurn(text, id, latest) {
    var sending = latest && !sendDone;
    var status = !latest
      ? ""
      : sending
      ? '<p class="send-status is-sending" data-type="Caption · 12/16 Medium" role="status">Sending...</p>'
      : '<p class="send-status is-sent" data-type="Caption · 12/16 Medium" role="status">' +
        '<img src="' + A + 'sent-check.svg" width="12" height="12" alt="" data-icon="check-circle">Sent</p>';
    return (
      '<div class="turn member-turn"' + (id ? ' id="' + id + '"' : "") + ">" +
      '<p class="member-bubble' + (sending ? " is-sending" : "") + '" data-type="Body 1 · 16/24 Medium" data-color="surface/brand/weak">' +
      text + "</p>" + status + "</div>"
    );
  }

  // While the member's message is still sending, Dot hasn't started typing.
  function waiting(turns) {
    return (sendDone ? turns.concat(typingTurn()) : turns).join("");
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

  // Two chip versions: the Lower/Higher cost facility chip (with arrow), or a
  // per-visit copay range (toggled via the "Facility cost range" scenario option).
  var COPAY_RANGE = { lower: "$10–$50 per visit", higher: "$100–$200 per visit" };

  function costChip(cost, range) {
    var lower = cost === "lower";
    if (range) {
      return '<span class="chip chip-cost is-' + cost + ' is-range">' + COPAY_RANGE[cost] + "</span>";
    }
    var label = lower ? "Lower cost facility" : "Higher cost facility";
    return (
      '<span class="chip chip-cost is-' + cost + '">' +
      '<img class="cost-arrow" src="' + PS + (lower ? "cost-lower-arrow.svg" : "cost-higher-arrow.svg") + '" width="12" height="12" alt="">' +
      label + "</span>"
    );
  }

  function facilityCard(f, range) {
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
      '<div class="chips facility-chips">' + costChip(f.cost, range) +
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

  // Dot opens by explaining how provider tier affects primary vs specialty cost.
  var INTRO =
    "<p>The providers you choose can affect what you pay. Your plan has two in-network provider tiers:</p>" +
    "<ul><li><b>Preferred:</b> higher-quality care with a lower copay</li>" +
    "<li><b>Standard:</b> covered care with a higher copay</li></ul>" +
    "<p>For <b>primary care</b>, a Preferred visit is <b>$30</b> after your deductible ($300 Standard). " +
    "For <b>specialty care</b>, it's <b>$50</b> Preferred ($350 Standard). Virtual visits through Included Health are <b>$0</b>.</p>" +
    "<p>Want me to find care for you?</p>";

  function conversation(ctx) {
    var index = ctx.index;
    var path = ctx.switches.path;
    var turns = [];

    // index 0 — Dot opens with the primary/specialty cost explanation.
    turns.push(
      dotTurn(
        INTRO,
        chip("Search for care", "find", index === 0) + chip("Learn more about my plan", null, false)
      )
    );
    if (index < 1) return turns.join("");

    // index 1 — member starts the search; Dot asks what they need.
    turns.push(memberTurn("Search for care", "turn-find", index === 1));
    if (index === 1 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Happy to help. What are you looking for? Choose from the options below or type what you need in the chat.</p>",
        chip("A primary care doctor", "providers", index === 1) + chip("Lab or imaging", "facilities", index === 1)
      )
    );
    if (index < 2) return turns.join("");

    var providers = path === "providers";
    turns.push(memberTurn(providers ? "A primary care doctor" : "Lab or imaging", "turn-answer", index === 2));

    // Facilities path: keep the shorter flow straight to results.
    if (!providers) {
      if (!typingDone) return waiting(turns);
      var costRange = ctx.toggles.costRange === true;
      turns.push(
        dotTurn(
          "<p>Here are freestanding labs and imaging centers near you, with lower cost options first.</p>",
          null,
          { id: "turn-results" }
        ) + carousel(FACILITIES.map(function (f) { return facilityCard(f, costRange); }))
      );
      return turns.join("");
    }

    // index 2 — confirm location + plan before searching.
    if (index === 2 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Got it. I'll search for primary care near <b>" + MEMBER_ZIP + "</b> using your <b>Included Health HSA Plan</b>. Sound good?</p>",
        chip("Yes, search", "confirm-search", index === 2) + chip("Change ZIP code", null, false)
      )
    );
    if (index < 3) return turns.join("");

    // index 3 — ask about personal preferences.
    turns.push(memberTurn("Yes, search", "turn-confirm", index === 3));
    if (index === 3 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Almost there. Before I pull your matches, do you have any personal preferences?</p>" +
          '<p class="select-help">💡 Tip: You can mention gender, languages spoken or expertise.</p>',
        chip("No preferences", "no-preferences", index === 3)
      )
    );
    if (index < 4) return turns.join("");

    // index 4 — member has no preferences; Dot pulls up the matches + follow-ups.
    turns.push(memberTurn("No preferences", "turn-preferences", index === 4));
    if (index === 4 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Give me a few seconds to pull up your matches.</p>",
        null,
        { id: "turn-results" }
      ) +
        carousel(PROVIDERS.map(providerCard)) +
        '<div class="chip-buttons chip-buttons-after">' +
        chip("Show me more providers", null, false) +
        chip("Refine provider search criteria", null, false) +
        chip("These providers don't have availability", null, false) +
        "</div>"
    );
    return turns.join("");
  }

  function chatInput() {
    return (
      '<div class="chat-input" data-space data-dim>' +
      '<p class="chat-placeholder" data-type="Body 1 · 16/24 Medium">Describe what you need...</p>' +
      '<div class="chat-buttons"><span class="chat-plus"><img src="' + A + 'plus.svg" width="16" height="16" alt="" data-icon="plus"></span>' +
      '<img class="chat-send" src="' + A + 'send.svg" width="48" height="48" alt="">' +
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
      sendDone = typingDone;
      lastStep = ctx.step;
    }
    return (
      (ctx.mode === "desktop" ? webNav() : mobileNav()) +
      '<div class="chat-scroll"><div class="chat-column">' + conversation(ctx) + "</div></div>" +
      '<div class="chat-dock"><div class="chat-column">' + chatInput() + "</div></div>"
    );
  }

  // Ease the thread to the newest message instead of snapping. Reduced motion
  // (or an explicit instant flag) jumps without animating.
  function scrollToLatest(ctx, instant) {
    var screen = (ctx && ctx.screen) || document.querySelector(".screen");
    var scroller = screen && screen.querySelector(".chat-scroll");
    if (!scroller) return;
    var top = scroller.scrollHeight - scroller.clientHeight;
    if (instant || prefersReducedMotion() || !scroller.scrollTo) {
      scroller.scrollTop = top;
    } else {
      scroller.scrollTo({ top: top, behavior: "smooth" });
    }
  }

  // Dot "types" dots for a moment, then the reply appears and types itself out.
  // onShow only fires on a fresh render (not app.refresh, which keeps scroll),
  // so the reply typewriter is kicked off from inside the dots timer below,
  // right after the refresh that swaps the dots for the reply.
  function show(ctx) {
    scrollToLatest(ctx);
    var stepName = ctx.step && ctx.step.name;
    var isReply = ctx.index > 0; // index 0 is the opening question, not a reply
    if (typingDone) {
      // Re-entered an already-answered step (e.g. device/path switch): reveal
      // immediately without re-animating.
      if (isReply) runReplyTypewriter(stepName);
      return;
    }
    var step = ctx.step;
    // "Sending..." under the member's message, then "Sent" and Dot's typing dots.
    setTimeout(function () {
      if (lastStep !== step) return;
      sendDone = true;
      app.refresh();
      scrollToLatest({ screen: document.querySelector(".screen") });
      setTimeout(function () {
        if (lastStep !== step) return;
        typingDone = true;
        app.refresh();
        scrollToLatest({ screen: document.querySelector(".screen") });
        // The reply is now in the DOM; type it out and hold its chips/cards.
        if (isReply) runReplyTypewriter(stepName);
      }, 700);
    }, SEND_MS);
  }

  document.addEventListener("click", function (e) {
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
    toggles: [
      { key: "careKeys", label: "Show Care Keys", checked: true },
      { key: "costRange", label: "Facility cost range", checked: false },
    ],
    onRestart: function () {
      lastStep = null;
      typedSteps = {};
      if (typeTimer) {
        clearTimeout(typeTimer);
        typeTimer = null;
      }
    },
    steps: [
      {
        name: "Dot explains cost",
        address: ADDRESS,
        instruction: "Dot opens by explaining how provider tier affects cost. Select Search for care.",
        notes: [
          "The demo starts on Dot's message: Preferred vs Standard tiers and primary vs specialty copays.",
          "Copays are placeholders; primary care matches care search ($30 Preferred, $300 Standard).",
          "Select Search for care to continue.",
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
          "Dot shows a short typing indicator, then types its reply out.",
          "Use Path (or the P key) to pick which answer the walkthrough takes.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Confirm location and plan",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Dot confirms the ZIP and plan before searching. Select Yes, search."
            : "Dot shows lower cost facilities. Swipe through the facility cards.";
        },
        notes: function (ctx) {
          return ctx.switches.path === "providers"
            ? [
                "Dot confirms it will search near the member's ZIP using their Included Health HSA Plan.",
                "Facilities path skips this and goes straight to results.",
              ]
            : [
                "Lab and imaging facilities appear as cards in a swipeable row.",
                "Toggle Facility cost range to switch the chips to a per-visit copay range.",
              ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "Personal preferences",
        address: ADDRESS,
        instruction: "Dot asks about personal preferences. Select No preferences.",
        notes: [
          "Dot offers a tip: the member can mention gender, languages, or expertise.",
          "Selecting No preferences tells Dot to pull up the matches.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Results",
        address: ADDRESS,
        instruction: "Dot pulls up the matches. Swipe through the six provider cards.",
        notes: function (ctx) {
          return [
            "Six primary care providers appear as cards in a swipeable row right in the chat.",
            "Below the cards, three quick prompts offer follow-up actions.",
            ctx.toggles.careKeys !== false
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
