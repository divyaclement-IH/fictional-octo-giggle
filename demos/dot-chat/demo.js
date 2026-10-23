/* Dot conversation: a member asks Dot to find providers or facilities.
   Mobile follows Figma 2UJLBp93sigLx4o9mXzzFD node 1118:28018; web follows
   the "Navigate your care" web screenshot. Both share one message style. */
(function () {
  "use strict";

  var A = "assets/";
  // Cards reuse the care-search (provider-search) demo's icons, avatars and
  // markup verbatim, so the in-chat cards are the same design as the results page.
  var PS = "../provider-search/assets/";

  // Orthopedist matches for the member's knee pain search. Each record keeps
  // the care-search card shape so the in-chat cards render identically.
  var PROVIDERS = [
    {
      name: "Dr. Alex Johnson, MD",
      photo: true,
      offerings: ["telehealth"],
      preferred: true,
      specialties: "Orthopedic Surgery · Sports Medicine",
      summary: "Specializes in knee and sports injuries, starting with conservative care like physical therapy before considering surgery.",
      clinic: "Bay Area Orthopedics & Sports Medicine",
      address: "321 Main Blvd, Oakland, CA 94612",
      distance: "8 mi",
    },
    {
      name: "Dr. Jessica Yu, MD",
      preferred: true,
      careKey: true,
      specialties: "Orthopedic Surgery · Knee & Hip",
      summary: "Treats knee pain from meniscus and ligament injuries to arthritis, and walks you through every option before you decide.",
      clinic: "Golden State Orthopedics",
      address: "123 State St, San Francisco, CA 94110",
      distance: "3 mi",
    },
    {
      name: "Dr. Emily Tran, NP",
      preferred: true,
      offerings: ["lgbtq"],
      specialties: "Orthopedics · Sports Medicine",
      summary: "Helps active patients recover from overuse injuries like runner's knee with home exercise plans and steady follow-up.",
      clinic: "Healthy Motion Orthopedics",
      address: "654 Care St, Fremont, CA 94536",
      distance: "15 mi",
    },
    {
      name: "Dr. Marcus Reed, DO",
      photo: true,
      careKey: true,
      specialties: "Sports Medicine · Orthopedics",
      summary: "Focuses on non-surgical treatment for joint and muscle injuries, with same-week visits for new knee and ankle pain.",
      clinic: "Eastbay Sports Medicine",
      address: "2200 Broadway, Oakland, CA 94612",
      distance: "9 mi",
    },
    {
      name: "Dr. Hannah Kim, MD",
      preferred: true,
      specialties: "Orthopedic Surgery · Arthroscopy",
      summary: "Performs minimally invasive knee arthroscopy and guides patients through recovery and getting back to activity.",
      clinic: "Lakeside Orthopedic Institute",
      address: "410 Grand Ave, Oakland, CA 94610",
      distance: "11 mi",
    },
    {
      name: "Dr. Sofia Alvarez, MD",
      preferred: true,
      offerings: ["telehealth"],
      specialties: "Orthopedics · Sports Medicine",
      summary: "Builds rehab plans for knee, hip and shoulder injuries, with virtual follow-ups between in-person visits.",
      clinic: "Bayview Orthopedic Care",
      address: "88 Mission St, San Francisco, CA 94105",
      distance: "6 mi",
    },
  ];

  // Recommended freestanding imaging center for the X-ray follow-up, with the
  // copay compared against a hospital-affiliated imaging center (placeholders).
  var IMAGING_CENTER = { name: "Valley Diagnostic Imaging Center", type: "Diagnostic Imaging or Radiology Center", address: "7121 Stevens Dr. N", distance: "2.4 mi", cost: "lower" };
  var IMAGING_COPAY = { recommended: 25, hospital: 250 };

  // Steps where the member answers by typing in the chat instead of a quick
  // reply: what kind of provider (the chips only offer primary care or
  // lab/imaging), what it's about, a bit more about it, and any preferences. Sending moves the
  // story forward; Next without typing uses the fallback.
  var TYPED = {
    1: "I'd like to see an orthopedist",
    2: "Knee pain",
    3: "I fell running a few weeks ago.",
    6: "No preferences",
  };
  var typed = {}; // step index -> what the member typed

  function typedText(i) {
    return escapeText(typed[i] || TYPED[i]);
  }

  // Kinds of care Dot suggests for the knee pain (Figma 2653:31518 "Service
  // Card"). A PCP is recommended; the member goes with the orthopedist.
  var CARE_OPTIONS = [
    {
      title: "Primary Care Provider (PCP)",
      recommended: true,
      body: [
        "See a PCP to check your knee, order an X-ray if you need one, and start treatment for pain from your fall.",
        "Acts as your home base, coordinating any referral to a specialist so your care stays connected.",
      ],
      cta: "Find a primary care provider",
    },
    {
      title: "Orthopedist",
      body: [
        "See an orthopedist for a closer look at the bones, joints, ligaments and tendons in your knee.",
        "Can diagnose injuries like a meniscus or ligament tear and recommend treatment, from bracing to surgery if needed.",
      ],
      cta: "Find an orthopedist",
      action: "ortho",
    },
  ];

  // Lower-cost facilities first, matching the care-search facility results.
  var FACILITIES = [
    { name: "Marin Advanced Imaging Center", type: "Diagnostic Imaging or Radiology Center", address: "165 Rowland Way, Marin, CA 92230", distance: "17 mi", cost: "lower" },
    { name: "Quest Diagnostics", type: "Laboratory", address: "123 Maple Street, Novato, CA 94945", distance: "12 mi", cost: "lower" },
    { name: "UCSF Lab Services", type: "Laboratory", address: "400 Parnassus Ave, San Francisco, CA 94143", distance: "8 mi", cost: "higher" },
    { name: "Bay Imaging Consultants", type: "Diagnostic Imaging or Radiology Center", address: "2125 Oak Grove Rd, Walnut Creek, CA 94598", distance: "14 mi", cost: "lower" },
    { name: "Sutter Health Lab", type: "Laboratory", address: "3000 Colby St, Berkeley, CA 94705", distance: "10 mi", cost: "lower" },
    { name: "Peninsula Radiology Center", type: "Diagnostic Imaging or Radiology Center", address: "1501 Trousdale Dr, Burlingame, CA 94010", distance: "19 mi", cost: "higher" },
  ];

  // Results come in sets: the first set, then "Show me more" adds the next one.
  var PAGE_SIZE = 3;

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

  // Scenario checkboxes: Show deductible, Show Care Keys, Show copays.
  var copayPlan = false; // "Show deductible" unchecked: no deductible wording
  var showCopays = true; // "Show copays" checkbox: dollar amounts in chips and Dot's copy

  // Quick prompts the member sends after the results, in order. Each one gets
  // the same Sending/Sent, typing and reply sequence as a step; followPhase is
  // "sending", "typing" or "done" for the newest one.
  var followUps = [];
  var followPhase = "done";
  var lastPath = null;

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
  // A reply can be several Dot messages in a row (e.g. the matches, then an
  // imaging recommendation): each one types in turn after the previous one's
  // cards appear.
  function runReplyTypewriter(stepName) {
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }
    var screen = document.querySelector(".screen");
    var col = screen && screen.querySelector(".chat-scroll .chat-column");
    if (!col) return;

    // The reply is everything after the member's newest message, split into
    // segments: a Dot message plus the cards/prompts that follow it.
    var kids = Array.prototype.slice.call(col.children);
    var start = 0;
    kids.forEach(function (el, i) {
      if (el.classList.contains("member-turn")) start = i + 1;
    });
    var segments = [];
    kids.slice(start).forEach(function (el) {
      if (el.classList.contains("dot-turn")) segments.push({ turn: el, after: [] });
      else if (segments.length) segments[segments.length - 1].after.push(el);
    });
    if (!segments.length) return;

    // Chips inside a message, then everything after it, wait for its text.
    function deferredOf(seg) {
      var chips = seg.turn.querySelector(".chip-buttons");
      return (chips ? [chips] : []).concat(seg.after);
    }
    function showAll() {
      segments.forEach(function (seg) {
        seg.turn.style.display = "";
        deferredOf(seg).forEach(function (el) { el.style.display = ""; });
      });
      typedSteps[stepName] = true;
      scrollToLatest({ screen: screen });
    }

    // Already typed earlier: show everything now (no pause on a re-render).
    if (typedSteps[stepName]) {
      showAll();
      return;
    }
    // Hidden pieces take no space, so the thread never scrolls into a blank gap.
    segments.forEach(function (seg, i) {
      if (i > 0) seg.turn.style.display = "none";
      deferredOf(seg).forEach(function (el) { el.style.display = "none"; });
    });
    scrollToLatest({ screen: screen });

    var i = 0;
    (function nextSegment() {
      if (i >= segments.length) {
        typedSteps[stepName] = true;
        return;
      }
      var seg = segments[i];
      i += 1;
      seg.turn.style.display = "";
      scrollToLatest({ screen: screen });
      typeMessage(seg.turn.querySelector(".dot-message"), screen, function () {
        // A message can hold its cards back for a moment after the text
        // (data-hold, ms), e.g. "Give me a few seconds..." before the matches.
        var hold = parseInt(seg.turn.getAttribute("data-hold"), 10) || 0;
        typeTimer = setTimeout(function () {
          typeTimer = null;
          var shown = deferredOf(seg);
          shown.forEach(function (el) {
            el.style.display = "";
            el.classList.remove("is-revealing");
            void el.offsetWidth; // restart the animation
            el.classList.add("is-revealing");
          });
          revealIntoView(shown, screen);
          // Let the cards land before the next message starts typing.
          typeTimer = setTimeout(nextSegment, i < segments.length ? 900 : 0);
        }, hold);
      });
    })();
  }

  // Bring newly revealed cards into view: show them whole if they fit, else
  // from their top, so nobody has to scroll back up to find them. Never
  // scrolls up.
  function revealIntoView(els, screen) {
    // Reading positions forces layout, so the just-revealed cards measure true.
    var scroller = screen.querySelector(".chat-scroll");
    var visible = els.filter(function (el) { return el.offsetParent !== null; });
    if (!scroller || !visible.length) return;
    var box = scroller.getBoundingClientRect();
    // The device frame can be scaled to fit the pane; positions come back in
    // screen pixels, scrolling works in CSS pixels.
    var scale = box.height / scroller.offsetHeight || 1;
    var top = (visible[0].getBoundingClientRect().top - box.top) / scale + scroller.scrollTop;
    var bottom = (visible[visible.length - 1].getBoundingClientRect().bottom - box.top) / scale + scroller.scrollTop;
    var target = Math.min(bottom - scroller.clientHeight + 24, top - 24);
    target = Math.min(target, scroller.scrollHeight - scroller.clientHeight);
    if (target <= scroller.scrollTop) return;
    if (prefersReducedMotion() || !scroller.scrollTo) scroller.scrollTop = target;
    else scroller.scrollTo({ top: target, behavior: "smooth" });
  }

  // Type into a message's own markup, so paragraphs, lists and bold stay in
  // place: every text node starts empty and fills in order, and each block
  // (paragraph, list item) stays hidden until typing reaches it, so a new
  // paragraph starts on its own line instead of running on from the last one.
  // Reduced motion skips the typing.
  function typeMessage(msg, screen, done) {
    if (!msg || prefersReducedMotion()) return done();
    var walker = document.createTreeWalker(msg, NodeFilter.SHOW_TEXT);
    var nodes = [];
    for (var node = walker.nextNode(); node; node = walker.nextNode()) {
      nodes.push({ node: node, chars: Array.from(node.nodeValue) }); // Array.from keeps emoji whole
      node.nodeValue = "";
    }
    var hidden = [];
    msg.querySelectorAll("p, li, ul, ol").forEach(function (el) {
      el.style.display = "none";
      hidden.push(el);
    });
    function showBlocks(textNode) {
      for (var el = textNode.parentNode; el && el !== msg; el = el.parentNode) {
        if (el.style && el.style.display === "none") el.style.display = "";
      }
    }
    var n = 0;
    var c = 0;
    var lastHeight = 0;
    (function step() {
      while (n < nodes.length && c >= nodes[n].chars.length) {
        n += 1;
        c = 0;
      }
      if (n < nodes.length) {
        var t = nodes[n];
        if (c === 0) showBlocks(t.node);
        c += 1;
        t.node.nodeValue = t.chars.slice(0, c).join("");
        // Ease down a line at a time as the reply wraps, instead of jumping at the end.
        if (msg.offsetHeight !== lastHeight) {
          lastHeight = msg.offsetHeight;
          scrollToLatest({ screen: screen });
        }
        typeTimer = setTimeout(step, TYPE_SPEED_MS);
      } else {
        hidden.forEach(function (el) { el.style.display = ""; });
        typeTimer = null;
        done();
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
      '<section class="turn dot-turn"' + (opts.id ? ' id="' + opts.id + '"' : "") +
      (opts.holdMs ? ' data-hold="' + opts.holdMs + '"' : "") + ' aria-label="Dot">' +
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

  // status: "sending" | "sent" | null. Only the member's newest message shows one.
  function memberTurn(text, id, status) {
    var sending = status === "sending";
    status = !status
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

  // Send status for the member message that opens step n (null once it isn't the newest).
  function stepStatus(n, index) {
    if (index !== n || (followUps.length && n <= RESULTS.providers)) return null;
    return sendDone ? "sent" : "sending";
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

  // In-network copays: Preferred providers $10 primary care / $40 specialist;
  // every other in-network provider $100 / $300. Orthopedists are specialists.
  var COPAY = { preferred: { primary: 10, specialty: 40 }, standard: { primary: 100, specialty: 300 } };

  function copayChip(p) {
    if (!showCopays) return ""; // "Show copays" unchecked
    var preferred = !!p.preferred;
    var amount = "$" + COPAY[preferred ? "preferred" : "standard"].specialty + " copay";
    var after = copayPlan ? "" : ' <span class="chip-regular">after deductible</span>';
    return preferred
      ? '<span class="chip chip-copay"><span>' + amount + after + "</span></span>"
      : '<span class="chip chip-copay-high"><span><b>' + amount + "</b>" + after + "</span></span>";
  }

  function providerCard(p) {
    var chips =
      copayChip(p) +
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

  // Swipeable row of result cards with pagination dots. variant adds a class
  // (e.g. "is-services" for the narrower service cards).
  function carousel(cards, variant) {
    return (
      '<div class="dot-results' + (variant ? " " + variant : "") + '" role="region" aria-label="Results">' +
      '<div class="carousel-track" role="list">' +
      cards.map(function (c) { return '<div class="carousel-item" role="listitem">' + c + "</div>"; }).join("") +
      "</div>" +
      '<div class="carousel-dots" aria-hidden="true">' +
      cards.map(function (_, i) { return "<span" + (i === 0 ? ' class="is-active"' : "") + "></span>"; }).join("") +
      "</div></div>"
    );
  }

  // Dot opens by explaining how provider tier affects primary vs specialty cost.
  function intro() {
    return (
      "<p>The providers you choose can affect what you pay. Your plan has two in-network provider tiers:</p>" +
      "<ul><li><b>Preferred:</b> higher-quality care with a lower copay</li>" +
      "<li><b>Standard:</b> covered care with a higher copay</li></ul>" +
      (showCopays
        ? "<p>For <b>primary care</b>, a Preferred visit is <b>$" + COPAY.preferred.primary + "</b>" + (copayPlan ? "" : " after your deductible") +
          " ($" + COPAY.standard.primary + " Standard). " +
          "For <b>specialty care</b>, it's <b>$" + COPAY.preferred.specialty + "</b> Preferred ($" + COPAY.standard.specialty + " Standard). " +
          "Virtual visits through Included Health are <b>$0</b>.</p>"
        : "<p>For both <b>primary care</b> and <b>specialty care</b>, a Preferred visit costs less than a Standard one" +
          (copayPlan ? "" : " once you meet your deductible") + ". Virtual visits through Included Health cost less too.</p>") +
      "<p>Want me to find care for you?</p>"
    );
  }

  function planName() {
    return copayPlan ? "Included Health Copay-Only Plan" : "Included Health HSA Plan";
  }

  // Where each path's results land: providers after the knee pain questions,
  // confirm and preferences; facilities straight after "Lab or imaging".
  var RESULTS = { providers: 7, facilities: 2 };

  // Dot never offers more than this many quick replies at once.
  var MAX_QUICK_REPLIES = 3;

  // Quick prompts under the results, per path. advance: the prompt moves the
  // walkthrough to the next step instead of getting an in-place reply.
  var PROMPTS = {
    providers: [
      { id: "more", label: "Show me more providers" },
      { id: "busy", label: "These providers don't have availability" },
    ],
    facilities: [
      { id: "more", label: "Show me more facilities" },
      { id: "refine", label: "Refine facility search criteria" },
      { id: "busy", label: "These facilities don't have availability" },
    ],
  };

  function resultCards(kind, set, ctx) {
    var list = kind === "providers" ? PROVIDERS : FACILITIES;
    var costRange = ctx.toggles.costRange === true;
    return carousel(
      list.slice(set * PAGE_SIZE, (set + 1) * PAGE_SIZE).map(function (item) {
        return kind === "providers" ? providerCard(item) : facilityCard(item, costRange);
      })
    );
  }

  function followUpReply(kind, id, ctx) {
    var providers = kind === "providers";
    if (id === "more") {
      return (
        dotTurn(
          providers
            ? "<p>Here are three more in-network orthopedists near you who treat knee pain.</p>"
            : "<p>Here are three more labs and imaging centers near you.</p>"
        ) + resultCards(kind, 1, ctx)
      );
    }
    if (id === "refine") {
      return dotTurn(
        providers
          ? "<p>Sure. What would you like to change? You can tell me a different ZIP code, a preferred gender, languages spoken, or a focus like sports injuries or knee surgery.</p>"
          : "<p>Sure. What would you like to change? You can tell me a different ZIP code, the type of test or scan, or how far you're willing to travel.</p>"
      );
    }
    return dotTurn(
      providers
        ? "<p>Sorry about that. I can look for orthopedists with sooner openings, or you can start a " + (showCopays ? "$0 " : "") + "virtual visit with an Included Health doctor about your knee in the meantime. I can also connect you with the Care Team to help you book.</p>"
        : "<p>Sorry about that. I can look for other facilities with sooner openings, or connect you with the Care Team to help you book.</p>"
    );
  }

  // The member's quick-prompt messages and Dot's replies after the results.
  // Prompts disappear once one is sent; after "Show me more" the unused ones
  // return, but only while the walkthrough is still on the results step.
  // Returns true when the newest one is still sending or Dot is still typing.
  function followUpTurns(turns, kind, ctx) {
    // Facilities results are its last step, so every later step is still "on results".
    var onResults = kind === "facilities" || ctx.index === RESULTS[kind];
    for (var i = 0; i < followUps.length; i++) {
      var f = followUps[i];
      var newest = onResults && i === followUps.length - 1;
      var pending = newest && followPhase !== "done";
      turns.push(memberTurn(f.label, null, newest ? (followPhase === "sending" ? "sending" : "sent") : null));
      if (pending) {
        if (followPhase === "typing") turns.push(typingTurn());
        return true;
      }
      turns.push(followUpReply(kind, f.id, ctx));
    }
    var last = followUps[followUps.length - 1];
    if (onResults && (!last || last.id === "more")) {
      var used = followUps.map(function (u) { return u.id; });
      var open = PROMPTS[kind]
        .filter(function (pr) {
          return used.indexOf(pr.id) === -1;
        })
        .slice(0, MAX_QUICK_REPLIES);
      if (open.length) {
        turns.push(
          '<div class="chip-buttons chip-buttons-after">' +
            open
              .map(function (pr) {
                return (
                  '<button class="chip-button" type="button" ' +
                  (pr.advance ? 'data-dot="' + pr.id + '"' : 'data-followup="' + pr.id + '"') + ">" + pr.label + "</button>"
                );
              })
              .join("") +
            "</div>"
        );
      }
    }
    return false;
  }

  // Service card (Figma 2653:31518): icon, optional Recommended tag, title,
  // two short paragraphs and a full-width button.
  function serviceCard(o, active) {
    return (
      '<article class="service-card" data-space>' +
      '<div class="service-content">' +
      '<div class="service-top">' +
      '<span class="service-icon"><img src="' + A + 'person-medical.svg" width="24" height="24" alt="" data-icon="person-medical"></span>' +
      (o.recommended ? '<span class="service-tag" data-type="Caption · 12/16 Medium" data-color="surface/brand/weak">Recommended</span>' : "") +
      "</div>" +
      '<h3 class="service-title" data-type="Title 4 · 16/24 Bold">' + o.title + "</h3>" +
      '<div class="service-body" data-type="Body 2 · 14/20 Medium">' +
      o.body.map(function (t) { return "<p>" + t + "</p>"; }).join("") +
      "</div></div>" +
      '<button class="service-cta" type="button"' +
      (active && o.action ? ' data-dot="' + o.action + '"' : " disabled") + ">" + o.cta + "</button>" +
      "</article>"
    );
  }

  // The recommended imaging center uses the same card as facility search.
  function recommendedFacility(f, ctx) {
    return '<div class="dot-results clinic-preview">' + facilityCard(f, ctx.toggles.costRange === true) + "</div>";
  }

  function conversation(ctx) {
    var index = ctx.index;
    var path = ctx.switches.path;
    var turns = [];

    // index 0 — Dot opens with the primary/specialty cost explanation.
    turns.push(
      dotTurn(
        intro(),
        chip("Search for care", "find", index === 0) + chip("Learn more about my plan", null, false)
      )
    );
    if (index < 1) return turns.join("");

    // index 1 — member starts the search; Dot asks what kind of provider.
    turns.push(memberTurn("Search for care", "turn-find", stepStatus(1, index)));
    if (index === 1 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Happy to help. What kind of provider would you like to see? Choose from the options below or type what you need in the chat.</p>",
        chip("A primary care provider", null, false) + chip("Lab or imaging", "facilities", index === 1)
      )
    );
    if (index < 2) return turns.join("");

    var providers = path === "providers";
    turns.push(memberTurn(providers ? typedText(1) : "Lab or imaging", "turn-answer", stepStatus(2, index)));

    // Facilities path: keep the shorter flow straight to results.
    if (!providers) {
      if (!typingDone) return waiting(turns);
      turns.push(
        dotTurn(
          "<p>Here are freestanding labs and imaging centers near you, with lower cost options first.</p>",
          null,
          { id: "turn-results" }
        ) + resultCards("facilities", 0, ctx)
      );
      followUpTurns(turns, "facilities", ctx);
      return turns.join("");
    }

    // index 2 — what the member wants to see the orthopedist about.
    if (index === 2 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>What would you like to see an orthopedist about?</p>"
      )
    );
    if (index < 3) return turns.join("");

    // index 3 — Dot asks for a little more about the knee pain.
    turns.push(memberTurn(typedText(2), "turn-reason", stepStatus(3, index)));
    if (index === 3 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>I'm sorry your knee is bothering you. Can you tell me a bit more about it?</p>"
      )
    );
    if (index < 4) return turns.join("");

    // index 4 — Dot suggests kinds of care for the knee pain; PCP is recommended.
    turns.push(memberTurn(typedText(3), "turn-detail", stepStatus(4, index)));
    if (index === 4 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Thanks for sharing that. Here are two kinds of care that can help with knee pain like yours. A primary care provider is often a good place to start.</p>"
      ) +
        carousel(
          CARE_OPTIONS.map(function (o) { return serviceCard(o, index === 4); }),
          "is-services"
        )
    );
    if (index < 5) return turns.join("");

    // index 5 — confirm location + plan before searching.
    turns.push(memberTurn("Find an orthopedist", "turn-ortho", stepStatus(5, index)));
    if (index === 5 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Got it. I'll look for orthopedists who treat knee and sports injuries near <b>" + MEMBER_ZIP +
          "</b> using your <b>" + planName() + "</b>. Sound good?</p>",
        chip("Yes, search", "confirm-search", index === 5) + chip("Change ZIP code", null, false)
      )
    );
    if (index < 6) return turns.join("");

    // index 6 — ask about personal preferences.
    turns.push(memberTurn("Yes, search", "turn-confirm", stepStatus(6, index)));
    if (index === 6 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Before I pull your matches, do you have any personal preferences?</p>" +
          '<p class="select-help">💡 Tip: You can mention gender, languages spoken or expertise.</p>'
      )
    );
    if (index < 7) return turns.join("");

    // index 7 — Dot pulls up orthopedist matches + quick prompts.
    turns.push(memberTurn(typedText(6), "turn-preferences", stepStatus(7, index)));
    if (index === 7 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Give me a few seconds to pull up your matches.</p>",
        null,
        { id: "turn-results", holdMs: 2000 }
      ) +
        // Appears with the cards, after the pause.
        '<div class="dot-message results-note" data-type="Body 1 · 16/24 Medium"><p>Here are your top matches. Providers with the purple badge ' +
        '<img class="note-badge" src="' + PS + 'badge-preferred-star.svg" width="16" height="16" alt="">' +
        " are <b>Preferred Providers</b>, which means they have the best patient outcomes and cost you less.</p></div>" +
        resultCards("providers", 0, ctx)
    );
    // Then, without waiting to be asked, Dot steers the member to a lower-cost
    // imaging center in case the orthopedist orders an X-ray.
    var after = copayPlan ? "" : " after your deductible";
    turns.push(
      dotTurn(
        "<p>If your provider orders X-rays or other imaging of your knee, I highly recommend one of our lower-cost imaging centers. " +
          "You can save hundreds out of pocket compared with one that is affiliated with a hospital.</p>" +
          "<p>" + IMAGING_CENTER.name + " is nearby. " +
          (showCopays
            ? "Your copay there is <b>$" + IMAGING_COPAY.recommended + "</b>" + after + ", compared with <b>$" + IMAGING_COPAY.hospital + "</b> at a hospital-affiliated imaging center."
            : "Your copay there is lower than at a hospital-affiliated imaging center.") +
          " If your orthopedist orders an X-ray, ask them to send the order here.</p>",
        null,
        { id: "turn-imaging" }
      ) + recommendedFacility(IMAGING_CENTER, ctx)
    );
    followUpTurns(turns, "providers", ctx);
    return turns.join("");
  }

  function escapeText(t) {
    return String(t).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // On the TYPED steps the input is live: the member types their answer and
  // sends it to move the story forward.
  function chatInput(ctx) {
    var live = typingDone && TYPED[ctx.index] && (ctx.index === 1 || ctx.switches.path === "providers");
    return (
      '<div class="chat-input' + (live ? " is-live" : "") + '" data-space data-dim>' +
      (live
        ? '<input class="chat-text" type="text" aria-label="Message Dot" placeholder="Describe what you need..." data-type="Body 1 · 16/24 Medium">'
        : '<p class="chat-placeholder" data-type="Body 1 · 16/24 Medium">Describe what you need...</p>') +
      '<div class="chat-buttons"><span class="chat-plus"><img src="' + A + 'plus.svg" width="16" height="16" alt="" data-icon="plus"></span>' +
      (live
        ? '<button class="chat-send-button" type="button" data-send aria-label="Send"><img class="chat-send" src="' + A + 'send.svg" width="48" height="48" alt=""></button>'
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
    copayPlan = ctx.toggles.deductible === false;
    showCareKeys = ctx.toggles.careKeys !== false;
    showCopays = ctx.toggles.copays !== false;
    // Keep the results-step quick prompts in the thread for the steps after it;
    // drop them when going back before the results or switching path.
    if (ctx.switches.path !== lastPath || (ctx.step !== lastStep && ctx.index < RESULTS[ctx.switches.path])) {
      followUps = [];
      lastPath = ctx.switches.path;
    }
    if (ctx.step !== lastStep) followPhase = "done";
    if (ctx.step !== lastStep) {
      typingDone = ctx.index === 0;
      sendDone = typingDone;
      lastStep = ctx.step;
    }
    return (
      (ctx.mode === "desktop" ? webNav() : mobileNav()) +
      '<div class="chat-scroll"><div class="chat-column">' + conversation(ctx) + "</div></div>" +
      '<div class="chat-dock"><div class="chat-column">' + chatInput(ctx) + "</div></div>"
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

  // ---------- Smooth updates ----------
  // Each update re-renders the screen, so keep the thread where the member was
  // reading, ease it down to the newest message, and fade in only the turns
  // that weren't there before (instead of the whole conversation repainting).

  var savedTop = 0; // the thread's last scroll position, carried across re-renders
  // Turns already on screen. Typing dots and quick prompts come and go, so
  // they're tracked apart from the turns that stay.
  var settled = { count: 0, typing: false, prompts: false };

  function scroller() {
    return document.querySelector(".screen .chat-scroll");
  }

  function settle() {
    var col = document.querySelector(".screen .chat-scroll .chat-column");
    if (!col) return;
    var now = { count: 0, typing: false, prompts: false };
    for (var i = 0; i < col.children.length; i++) {
      var kid = col.children[i];
      var transient =
        kid.getAttribute("aria-label") === "Dot is typing" ? "typing" : kid.classList.contains("chip-buttons-after") ? "prompts" : null;
      if (transient) {
        now[transient] = true;
        if (!settled[transient]) kid.classList.add("is-entering");
      } else {
        if (now.count >= settled.count) kid.classList.add("is-entering");
        now.count += 1;
      }
    }
    settled = now;
  }

  // app.refresh() rebuilds the thread at the top; put it back, settle, then ease down.
  function refresh(noScroll) {
    var sc = scroller();
    if (sc) savedTop = sc.scrollTop;
    app.refresh();
    sc = scroller();
    if (sc) sc.scrollTop = savedTop;
    settle();
    if (!noScroll) scrollToLatest();
  }

  // Dot "types" dots for a moment, then the reply appears and types itself out.
  // onShow only fires on a fresh render (not app.refresh, which keeps scroll),
  // so the reply typewriter is kicked off from inside the dots timer below,
  // right after the refresh that swaps the dots for the reply.
  function show(ctx) {
    var sc = scroller();
    if (sc) sc.scrollTop = savedTop;
    settle();
    scrollToLatest(ctx);
    var stepName = ctx.step && ctx.step.name;
    var isReply = ctx.index > 0; // index 0 is the opening question, not a reply
    if (typingDone) {
      // Re-entered an already-answered step (e.g. device/path switch): reveal
      // immediately without re-animating.
      if (isReply) runReplyTypewriter(stepName);
      for (var i = 0; i < followUps.length; i++) typedSteps[stepName + "#" + (i + 1)] = true;
      return;
    }
    var step = ctx.step;
    // "Sending..." under the member's message, then "Sent" and Dot's typing dots.
    setTimeout(function () {
      if (lastStep !== step) return;
      sendDone = true;
      refresh();
      setTimeout(function () {
        if (lastStep !== step) return;
        typingDone = true;
        // Don't scroll yet: the typewriter hides the pending cards first, then scrolls.
        refresh(isReply);
        // The reply is now in the DOM; type it out and hold its chips/cards.
        if (isReply) runReplyTypewriter(stepName);
      }, 700);
    }, SEND_MS);
  }

  // A quick prompt after the results: send it as the member's message (the
  // prompts disappear), then the same Sending/Sent, typing and reply sequence.
  function sendFollowUp(id, label) {
    if (followPhase !== "done") return;
    var step = lastStep;
    followUps.push({ id: id, label: label });
    followPhase = "sending";
    refresh();
    setTimeout(function () {
      if (lastStep !== step) return;
      followPhase = "typing";
      refresh();
      setTimeout(function () {
        if (lastStep !== step) return;
        followPhase = "done";
        refresh(true);
        runReplyTypewriter(step.name + "#" + followUps.length);
      }, 700);
    }, SEND_MS);
  }

  function currentIndex() {
    var m = /[?&]step=(\d+)/.exec(location.search);
    return m ? parseInt(m[1], 10) - 1 : 0;
  }

  // Send what the member typed: it becomes their message and the story continues.
  function sendTyped() {
    var box = document.querySelector(".screen .chat-text");
    if (!box) return;
    var text = box.value.trim();
    if (!text) {
      box.focus();
      return;
    }
    var index = currentIndex();
    typed[index] = text;
    var sc = scroller();
    if (sc) savedTop = sc.scrollTop;
    if (index === 1) app.setSwitch("path", "providers");
    app.next();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.classList && e.target.classList.contains("chat-text")) {
      e.preventDefault();
      sendTyped();
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-send]")) {
      sendTyped();
      return;
    }
    var f = e.target.closest("[data-followup]");
    if (f) {
      sendFollowUp(f.getAttribute("data-followup"), f.textContent);
      return;
    }
    var b = e.target.closest("[data-dot]");
    if (!b) return;
    var sc = scroller();
    if (sc) savedTop = sc.scrollTop;
    var action = b.getAttribute("data-dot");
    if (action === "providers" || action === "facilities") app.setSwitch("path", action);
    app.next();
  });

  document.addEventListener(
    "scroll",
    function (e) {
      if (e.target.classList && e.target.classList.contains("chat-scroll")) savedTop = e.target.scrollTop;
    },
    true
  );

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
    summary: "A member with knee pain asks Dot, the AI assistant, to find an orthopedist, then learns how to save on an X-ray at a freestanding imaging center.",
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
      { key: "deductible", label: "Show deductible", checked: true },
      { key: "careKeys", label: "Show Care Keys", checked: true },
      { key: "copays", label: "Show copays", checked: true },
      { key: "costRange", label: "Facility cost range", checked: false },
    ],
    onRestart: function () {
      lastStep = null;
      typed = {};
      savedTop = 0;
      settled = { count: 0, typing: false, prompts: false };
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
        notes: function (ctx) {
          return [
            "The demo starts on Dot's message: Preferred vs Standard tiers and primary vs specialty copays.",
            "Copays: $10 Preferred / $100 Standard for primary care, $40 Preferred / $300 Standard for specialists.",
            "Scenario checkboxes: Show deductible, Show Care Keys and Show copays each turn their mentions on or off.",
            ctx.toggles.deductible === false
              ? "Deductible off: no deductible, so copays apply from the first visit."
              : "Deductible on: copays apply after the deductible.",
          ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "What kind of provider",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Dot asks what kind of provider they want to see. Type that you'd like to see an orthopedist in the chat, then send."
            : "Dot asks what kind of provider they want to see. Select Lab or imaging.";
        },
        notes: [
          "Quick prompts offer A primary care provider or Lab or imaging.",
          "The member types what they want instead (an orthopedist) and sends it; that's what moves the story forward.",
          "Next without typing sends \"I'd like to see an orthopedist\". Lab or imaging takes the Facilities path.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "What it's about",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Dot asks what they want to see the orthopedist about. Type Knee pain in the chat, then send."
            : "Dot shows lower cost facilities. Swipe through the facility cards.";
        },
        notes: function (ctx) {
          return ctx.switches.path === "providers"
            ? [
                "After the provider type, Dot asks what the visit is about so it can match the right orthopedist.",
                "No quick replies: the member answers in their own words (Knee pain).",
              ]
            : [
                "Facilities path skips the orthopedist questions and goes straight to results.",
                "Three lab and imaging facilities appear as cards in a swipeable row.",
                "Quick prompts follow; sending one shows it as the member's message and the prompts disappear.",
                "Show me more facilities adds a second set of three cards.",
                "Toggle Facility cost range to switch the chips to a per-visit copay range.",
              ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "Tell me more",
        address: ADDRESS,
        instruction: "Dot asks for more about the knee pain. Type I fell running a few weeks ago. in the chat, then send.",
        notes: [
          "Dot acknowledges the pain and asks the member to tell it a bit more.",
          "No quick replies: the member types that they fell running a few weeks ago.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Kinds of care",
        address: ADDRESS,
        instruction: "Dot suggests two kinds of care for the knee pain. Select Find an orthopedist.",
        notes: [
          "Service cards (Figma 2653:31518): a primary care provider (recommended) and an orthopedist.",
          "Each card explains what that provider does for knee pain, with a button to find one.",
          "The member goes with the orthopedist, so the search continues from there.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Confirm location and plan",
        address: ADDRESS,
        instruction: "Dot confirms the ZIP and plan before searching for orthopedists. Select Yes, search.",
        notes: function (ctx) {
          return [
            ctx.toggles.deductible === false
              ? "Dot confirms it will search near the member's ZIP using their Included Health Copay-Only Plan."
              : "Dot confirms it will search near the member's ZIP using their Included Health HSA Plan.",
          ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "Personal preferences",
        address: ADDRESS,
        instruction: "Dot asks about personal preferences. Type them (or No preferences) in the chat, then send.",
        notes: [
          "Dot offers a tip: the member can mention gender, languages, or expertise.",
          "No quick reply: the member types any preferences, or No preferences, to have Dot pull up the matches.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Orthopedist results",
        address: ADDRESS,
        instruction: "Dot pulls up orthopedists, then recommends a lower-cost imaging center in case the knee needs an X-ray.",
        notes: function (ctx) {
          return [
            "Dot says it's pulling up matches, then pauses 2 seconds before the cards appear.",
            "With the cards, Dot explains the purple badge: Preferred Providers have the best patient outcomes and cost less.",
            "Three orthopedists who treat knee pain appear as cards in a swipeable row. Specialist copays: $40 Preferred, $300 Standard.",
            "Without being asked, Dot then steers the member to low cost: if the provider orders X-rays or other imaging, use a recommended imaging center.",
            "The recommended center ($25 copay, placeholder, vs $250 hospital-affiliated) uses the same card as facility search.",
            "Quick prompts follow; sending one shows it as the member's message and the prompts disappear.",
            "Show me more providers adds a second set of three full cards; the other prompts come back after it.",
            ctx.toggles.deductible === false ? "Deductible off: copay chips drop \"after deductible\"." : null,
            ctx.toggles.copays === false ? "Copays off: no dollar amounts in the chips or Dot's messages." : null,
            ctx.toggles.careKeys !== false ? "The Care Key icon by the name marks Care Key providers, matching care search." : null,
          ].filter(Boolean);
        },
        render: page,
        onShow: show,
      },
    ],
  });
})();
