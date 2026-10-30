/* Crown Castle Demo: a copy of the Dot find-care demo (demos/dot-chat).
   Dot conversation: a member asks Dot to find providers or facilities.
   Mobile follows Figma 2UJLBp93sigLx4o9mXzzFD node 1118:28018; web follows
   the "Navigate your care" web screenshot. Both share one message style. */
(function () {
  "use strict";

  var A = "assets/";
  // Cards reuse the care-search (provider-search) demo's icons, avatars and
  // markup verbatim, so the in-chat cards are the same design as the results page.
  var PS = "../provider-search/assets/";

  // Orthopedist matches for the member's shoulder pain search. Each record keeps
  // the care-search card shape so the in-chat cards render identically.
  var PROVIDERS = [
    {
      name: "Dr. Alex Johnson, MD",
      photo: true,
      offerings: ["telehealth"],
      preferred: true,
      specialties: "Orthopedic Surgery · Sports Medicine",
      summary: "Specializes in shoulder and sports injuries, starting with conservative care like physical therapy before considering surgery.",
      clinic: "Steel City Orthopedics & Sports Medicine",
      address: "425 Penn Ave, Pittsburgh, PA 15222",
      distance: "0.6 mi",
    },
    {
      name: "Dr. Jessica Yu, MD",
      preferred: true,
      careKey: true,
      specialties: "Orthopedic Surgery · Shoulder & Elbow",
      summary: "Treats shoulder pain from rotator cuff and labral injuries to arthritis, and walks you through every option before you decide.",
      clinic: "Three Rivers Orthopedics",
      address: "3600 Forbes Ave, Pittsburgh, PA 15213",
      distance: "3 mi",
    },
    {
      name: "Dr. Emily Tran, NP",
      preferred: true,
      offerings: ["lgbtq"],
      specialties: "Orthopedics · Sports Medicine",
      summary: "Helps active patients recover from overuse injuries like tennis shoulder with home exercise plans and steady follow-up.",
      clinic: "Healthy Motion Orthopedics",
      address: "1350 Locust St, Pittsburgh, PA 15219",
      distance: "1.4 mi",
    },
    {
      name: "Dr. Marcus Reed, DO",
      photo: true,
      careKey: true,
      specialties: "Sports Medicine · Orthopedics",
      summary: "Focuses on non-surgical treatment for joint and muscle injuries, with same-week visits for new shoulder and elbow pain.",
      clinic: "East End Sports Medicine",
      address: "5200 Centre Ave, Pittsburgh, PA 15232",
      distance: "4 mi",
    },
    {
      name: "Dr. Hannah Kim, MD",
      preferred: true,
      specialties: "Orthopedic Surgery · Arthroscopy",
      summary: "Performs minimally invasive shoulder arthroscopy and guides patients through recovery and getting back to activity.",
      clinic: "South Hills Orthopedic Institute",
      address: "1050 Bower Hill Rd, Pittsburgh, PA 15243",
      distance: "7 mi",
    },
    {
      name: "Dr. Sofia Alvarez, MD",
      preferred: true,
      offerings: ["telehealth"],
      specialties: "Orthopedics · Sports Medicine",
      summary: "Builds rehab plans for knee, hip and shoulder injuries, with virtual follow-ups between in-person visits.",
      clinic: "North Shore Orthopedic Care",
      address: "300 Lincoln Ave, Bellevue, PA 15202",
      distance: "5 mi",
    },
  ];


  // Steps where the member answers by typing in the chat instead of a quick
  // reply: what kind of provider (the chips only offer primary care or
  // lab/imaging), what it's about, a bit more about it, and any preferences. Sending moves the
  // story forward; Next without typing uses the fallback.
  var TYPED = {
    1: "I'd like to see an orthopedist",
    2: "My shoulder has been hurting pretty bad since I played tennis last week. I’ve dislocated this shoulder before",
    3: "It feels stable but it really hurts and I'm nervous about moving it too much",
    5: "Yes",
    7: "Someone close by. No other preferences",
  };
  var typed = {}; // step index -> what the member typed

  function typedText(i) {
    return escapeText(typed[i] || TYPED[i]);
  }

  // Lower-cost facilities first, matching the care-search facility results.
  var FACILITIES = [
    { name: "North Hills Advanced Imaging Center", type: "Diagnostic Imaging or Radiology Center", address: "4800 McKnight Rd, Pittsburgh, PA 15237", distance: "8 mi", cost: "lower" },
    { name: "Quest Diagnostics", type: "Laboratory", address: "1001 Liberty Ave, Pittsburgh, PA 15222", distance: "0.5 mi", cost: "lower" },
    { name: "Oakland Hospital Lab Services", type: "Laboratory", address: "200 Lothrop St, Pittsburgh, PA 15213", distance: "3 mi", cost: "higher" },
    { name: "Three Rivers Imaging Consultants", type: "Diagnostic Imaging or Radiology Center", address: "2000 Smallman St, Pittsburgh, PA 15222", distance: "1.2 mi", cost: "lower" },
    { name: "South Hills Health Lab", type: "Laboratory", address: "1500 Washington Rd, Pittsburgh, PA 15228", distance: "6 mi", cost: "lower" },
    { name: "Monroeville Radiology Center", type: "Diagnostic Imaging or Radiology Center", address: "4000 William Penn Hwy, Monroeville, PA 15146", distance: "13 mi", cost: "higher" },
  ];

  // Results come in sets: the first set, then "Show me more" adds the next one.
  var PAGE_SIZE = 3;

  var showCareKeys = true; // "Show Care Keys" checkbox under Scenario, shared with provider-search
  var MEMBER_ZIP = "15222"; // the member's ZIP, confirmed before the provider search

  // Provider offering chips (Figma 2643:29840) — copied from provider-search.
  var OFFERINGS = {
    premium: { label: "Premium care physician", icon: "chip-heart.svg", tone: "neutral" },
    telehealth: { label: "Offers telehealth", icon: "chip-video.svg", tone: "success" },
    lgbtq: { label: "LGBTQ+ affirming", icon: "chip-rainbow-heart.svg", tone: "success" },
  };

  var app = null;
  var lastStep = null;
  var typingDone = false; // Dot "thinks" each time a step with a new reply is entered
  // The member's newest message shows "Sending..." for a moment, then "Sent".
  // Dot's "Thinking..." turn comes in with the message and lasts THINK_MS in all.
  var SEND_MS = 400;
  var THINK_MS = 1600;
  var sendDone = false;

  // Checkboxes (in the Versions section): Show deductible, Show Care Keys, Show copays.
  var copayPlan = false; // "Show deductible" unchecked: no deductible wording
  var showCopays = true; // "Show copays" checkbox: dollar amounts in chips and Dot's copy
  var costTag = "range"; // "Facility cost tag" switch: range | level | both

  // Range tags carry dollar amounts, so without copays every option shows the cost level.
  function rangeTags() {
    return showCopays && costTag !== "level";
  }

  // Quick prompts the member sends after the results, in order. Each one gets
  // the same Sending/Sent, typing and reply sequence as a step; followPhase is
  // "sending", "typing" or "done" for the newest one.
  var followUps = [];
  var followPhase = "done";
  var lastPath = null;

  // --- Reply streaming: after "Thinking...", Dot's header sits alone for a
  //     moment, then the reply arrives a paragraph at a time, each fading from
  //     pale grey to full black. Chips and cards below it stay hidden until
  //     the text is done. Each step's reply streams once; re-renders
  //     (device/path switches) don't re-animate a finished one. Honors
  //     reduced motion. ---
  var HEADER_MS = 300; // header alone before the first paragraph
  var PARAGRAPH_MS = 350; // between paragraphs
  var typedSteps = {}; // step name -> true once its reply has finished streaming
  var typeTimer = null;

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  // A pause in the reply sequence (sending, typing dots, holding cards).
  // Reduced motion skips them, so the reply shows right away.
  function pause(ms) {
    return prefersReducedMotion() ? 0 : ms;
  }

  // Stream the newest Dot reply a paragraph at a time, then show its chips/cards.
  // A reply can be several Dot messages in a row (e.g. the matches, then an
  // imaging recommendation): each one streams in turn after the previous one's
  // cards appear.
  function runReplyStream(stepName) {
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
    // The first message takes over from "Thinking...": its header is already
    // on screen, so it stays put instead of fading in again.
    segments[0].turn.classList.remove("is-entering");
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
      streamMessage(seg.turn.querySelector(".dot-message"), screen, function () {
        // A message can hold its cards back for a moment after the text
        // (data-hold, ms), e.g. "Give me a few seconds..." before the matches.
        var hold = pause(parseInt(seg.turn.getAttribute("data-hold"), 10) || 0);
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
          typeTimer = setTimeout(nextSegment, i < segments.length ? pause(PARAGRAPH_MS) : 0);
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

  // Stream a message a paragraph at a time: each paragraph or list item lands
  // whole, fading from pale grey to full black, and the chat scrolls to fit
  // it. A message with no paragraphs is one piece. Reduced motion shows it all.
  function streamMessage(msg, screen, done) {
    if (!msg || prefersReducedMotion()) return done();
    var pieces = [];
    var lists = [];
    Array.prototype.forEach.call(msg.children, function (el) {
      if (el.tagName === "UL" || el.tagName === "OL") {
        lists.push(el);
        Array.prototype.forEach.call(el.children, function (li) {
          pieces.push(li);
        });
      } else if (/^(P|DIV|H\d)$/.test(el.tagName)) {
        pieces.push(el);
      }
    });
    // Plain text, or text with inline tags only: the whole message is one piece.
    var whole = !pieces.length;
    if (whole) pieces = [msg];
    pieces.forEach(function (el) {
      el.style.display = "none";
    });
    lists.forEach(function (el) {
      el.style.display = "none";
    });
    var i = 0;
    typeTimer = setTimeout(function next() {
      var el = pieces[i];
      if (el.parentNode && el.parentNode.style.display === "none") el.parentNode.style.display = "";
      el.style.display = "";
      el.classList.remove("is-streaming");
      void el.offsetWidth; // restart the fade
      el.classList.add("is-streaming");
      scrollToLatest({ screen: screen });
      i += 1;
      typeTimer = setTimeout(i < pieces.length ? next : finish, i < pieces.length ? PARAGRAPH_MS : 150);
    }, HEADER_MS);
    function finish() {
      typeTimer = null;
      done();
    }
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
    // Quick replies only show while they're the current choice: once the member
    // picks one (or the story moves on), the whole set disappears.
    if (chips && chips.indexOf("data-dot=") === -1) chips = "";
    return (
      '<section class="turn dot-turn"' + (opts.id ? ' id="' + opts.id + '"' : "") +
      (opts.holdMs ? ' data-hold="' + opts.holdMs + '"' : "") + ' aria-label="Dot">' +
      dotHeader() +
      '<div class="dot-message" data-type="Body 1 · 16/24 Medium">' + body + "</div>" +
      (chips ? '<div class="chip-buttons">' + chips + "</div>" : "") +
      "</section>"
    );
  }

  // Dot's logo dots move between a cluster of three and a four-dot diamond.
  var THINKING_LOGO =
    '<svg class="dot-thinking-logo" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" data-icon="Dot">' +
    '<defs><linearGradient id="dot-thinking-fill" x1="0" y1="1" x2="1" y2="0">' +
    '<stop stop-color="#0012E7"/><stop offset="1" stop-color="#6A4CDE"/></linearGradient></defs>' +
    '<circle cx="10" cy="10" r="1"/><circle cx="10" cy="10" r="1"/><circle cx="10" cy="10" r="1"/><circle cx="10" cy="10" r="1"/>' +
    "</svg>";

  function thinkingTurn() {
    return (
      '<section class="turn dot-turn" aria-label="Dot is thinking">' +
      // Keyed to the clock, so a re-render (e.g. at "Sent") doesn't restart the morph.
      dotHeader().replace(/<img [^>]*>/, THINKING_LOGO.replace("<svg ", '<svg style="--think-offset:-' + Math.round(performance.now() % 1600) + 'ms" ')) +
      '<p class="thinking" data-type="Caption · 12/16 Medium">Thinking…</p></section>'
    );
  }

  // status: "sending" | "sent" | null. Only the member's newest message shows one.
  function memberTurn(text, id, status) {
    var sending = status === "sending";
    status = !status
      ? ""
      : sending
      ? '<p class="send-status is-sending" data-type="Caption · 12/16 Medium" role="status">Sending…</p>'
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

  // Dot's "Thinking..." comes in together with the member's message.
  function waiting(turns) {
    return turns.concat(thinkingTurn()).join("");
  }

  // active: the chip answers the current question. A set with no active chip is
  // dropped by dotTurn, so answered quick replies disappear.
  function chip(label, action, active) {
    return (
      '<button class="chip-button" type="button"' +
      (active && action ? ' data-dot="' + action + '"' : " disabled") + ">" + label + "</button>"
    );
  }

  // --- Card pieces copied verbatim from demos/provider-search/demo.js so the
  //     in-chat cards are the same design as the care-search results. Assets
  //     resolve from the provider-search folder (PS). ---

  // Avatar badge (Carrum Figma 141:1172): purple verification badge with a
  // white star, in a 16px box that it overflows slightly top and bottom.
  function verifiedBadge() {
    return (
      '<span class="badge-verified badge-star-verified" role="img" aria-label="IH Preferred Provider" title="IH Preferred Provider" data-icon="Verification Badge">' +
      '<img src="' + A + 'badge-verified-avatar.svg" width="16.0256" height="16.6718" alt=""></span>'
    );
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

  // Older card design: the chip names the tier, then the copay in bold.
  function copayChip(p) {
    var preferred = !!p.preferred;
    var amount = "$" + COPAY[preferred ? "preferred" : "standard"].specialty + " copay" + (copayPlan ? "" : " after deductible");
    // Without copays the chip just names the tier.
    var label = preferred ? "Preferred" : "Standard";
    var text = showCopays ? label + ": <b>" + amount + "</b>" : label;
    return '<span class="chip chip-tier is-' + (preferred ? "preferred" : "standard") + '"><span>' + text + "</span></span>";
  }

  // Plain-text tier explainer for a set of provider cards. Dot only explains
  // the tiers actually shown: Preferred, Standard, or both. (The Included
  // Health Plan Key box is only in the Traditional experience.)
  // lead: the sentence before it. One tier reads as one paragraph; when both
  // show, each tier gets its own bullet.
  function tierMessage(lead, list) {
    var preferred = list.some(function (p) { return p.preferred; });
    var standard = list.some(function (p) { return !p.preferred; });
    var parts = [];
    if (preferred) parts.push("<b>Preferred providers</b> (those with the purple badge) meet our highest quality standards and usually have a lower copay than <b>Standard providers</b>.");
    if (standard) parts.push("<b>Standard providers</b> are covered too, usually with a higher copay.");
    if (parts.length < 2) return "<p>" + lead + " " + parts.join("") + "</p>";
    return "<p>" + lead + "</p><ul>" + parts.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
  }

  function providerSet(set) {
    return PROVIDERS.slice(set * PAGE_SIZE, (set + 1) * PAGE_SIZE);
  }

  function providerCard(p) {
    var chips =
      copayChip(p) +
      '<span class="chip chip-network"><img src="' + PS + 'check-circle.svg" width="12" height="12" alt="">In-network</span>';
    return (
      '<article class="provider-card">' +
      '<div class="provider-content"><div class="card-top">' +
      '<div class="provider-header">' +
      avatar(p) +
      '<div class="provider-title">' +
      '<p class="provider-name">' + p.name +
      (p.careKey && showCareKeys ? careKeyIcon() : "") + "</p>" +
      '<p class="provider-specialties">' + p.specialties + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + p.name + '">' +
      '<img src="' + PS + 'bookmark.svg" width="24" height="24" alt=""></button>' +
      "</div>" +
      // Dot view: cap at 2 chips (copay + network); offerings are omitted here.
      '<div class="chips">' + chips + "</div>" +
      '<p class="provider-summary">' + p.summary + "</p>" +
      '</div><div class="card-bottom">' +
      '<img class="divider" src="' + PS + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><div class="clinic-address">' +
      '<p class="clinic-name">' + p.clinic + "</p>" +
      '<p class="clinic-street">' + p.address + "</p></div>" +
      '<p class="clinic-distance">' + p.distance + "</p></div>" +
      "</div></div>" +
      '<div class="button-stack">' +
      '<button class="btn-outline" type="button">View full profile</button>' +
      '<button class="btn-solid" type="button">Schedule appointment</button>' +
      "</div></article>"
    );
  }

  // Two chip versions: the Lower/Higher cost facility chip (with arrow), or a
  // per-visit copay range, picked by the "Facility cost tag" switch (see rangeTags).
  var COPAY_AMOUNT = { lower: "$10–$50", higher: "$100–$200" };
  var COPAY_RANGE = { lower: COPAY_AMOUNT.lower + " per visit", higher: COPAY_AMOUNT.higher + " per visit" };

  function costChip(cost, range) {
    var lower = cost === "lower";
    // Range tag: "$10–$50 after deductible" with a deductible, "$10–$50 per
    // visit" without. Level and Both don't change.
    var after = range && costTag !== "both" && !copayPlan ? '<span class="chip-regular"> after deductible</span>' : "";
    var cls = "chip chip-cost is-" + cost + (after ? " has-after" : "");
    if (range) {
      // "Both": "Lower cost facility: $10–$50 per visit", range in bold.
      return costTag === "both"
        ? '<span class="' + cls + ' is-range has-label">' + (lower ? "Lower" : "Higher") + " cost facility: <b>" + COPAY_RANGE[cost] + "</b></span>"
        : '<span class="' + cls + ' is-range">' + (after ? COPAY_AMOUNT[cost] + after : COPAY_RANGE[cost]) + "</span>";
    }
    var label = lower ? "Lower cost facility" : "Higher cost facility";
    return (
      '<span class="' + cls + '">' +
      '<img class="cost-arrow" src="' + PS + (lower ? "cost-lower-arrow.svg" : "cost-higher-arrow.svg") + '" width="12" height="12" alt="">' +
      label + "</span>"
    );
  }

  function facilityCard(f, range) {
    return (
      '<article class="provider-card facility-card">' +
      '<div class="provider-content"><div class="card-top">' +
      '<div class="provider-header">' +
      '<img class="facility-avatar" src="' + PS + 'facility-avatar.svg" width="48" height="48" alt="">' +
      '<div class="provider-title">' +
      '<p class="provider-name">' + f.name + "</p>" +
      '<p class="provider-specialties">' + f.type + "</p></div>" +
      '<button class="bookmark-button" type="button" aria-label="Save ' + f.name + '">' +
      '<img src="' + PS + 'bookmark.svg" width="24" height="24" alt=""></button></div>' +
      '<div class="chips facility-chips">' + costChip(f.cost, range) +
      '<span class="chip chip-network"><img src="' + PS + 'check-circle.svg" width="12" height="12" alt="">In-network</span></div>' +
      '</div><div class="card-bottom">' +
      '<img class="divider" src="' + PS + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><p class="facility-address">' + f.address + "</p>" +
      '<p class="clinic-distance facility-distance">' + f.distance + "</p></div>" +
      "</div></div>" +
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

  // Provider types Dot offers after the plan and ZIP check (Service Card,
  // Figma IsbGOKYwvvVi214VFgPRdA 11845:24200). Riley goes with the orthopedist.
  var PROVIDER_TYPES = [
    {
      title: "Orthopedist",
      recommended: true,
      body: "Focuses on bones and joints, including the shoulder.",
      cta: "Find an orthopedist",
      action: "ortho",
    },
    {
      title: "Primary care doctor",
      body: "A good starting point for an initial evaluation and help coordinating next steps.",
      cta: "Find a primary care doctor",
    },
    {
      title: "Sports medicine doctor",
      body: "Focuses on activity-related concerns and non-surgical care.",
      cta: "Find a sports medicine doctor",
    },
  ];

  function providerTypeCard(o, active) {
    return (
      '<article class="service-card" data-space>' +
      '<div class="service-content">' +
      '<div class="service-top">' +
      '<img class="service-icon" src="' + A + 'provider-type-icon.svg" width="40" height="40" alt="" data-icon="person-medical">' +
      (o.recommended ? '<span class="service-tag" data-type="Caption · 12/16 Medium" data-color="surface/brand/weak">Recommended</span>' : "") +
      "</div>" +
      '<h3 class="service-title" data-type="Title 4 · 16/24 Bold">' + o.title + "</h3>" +
      '<p class="service-body" data-type="Body 2 · 14/20 Medium">' + o.body + "</p>" +
      "</div>" +
      '<button class="service-cta" type="button"' +
      (active && o.action ? ' data-dot="' + o.action + '"' : " disabled") + ">" + o.cta + "</button>" +
      "</article>"
    );
  }

  function planName() {
    return copayPlan ? "Included Health Copay-Only Plan" : "Included Health HSA Plan";
  }

  // Where each path's results land: providers after the shoulder questions,
  // confirm and preferences; facilities straight after "Lab or imaging".
  var RESULTS = { providers: 8, facilities: 3 };

  // Dot never offers more than this many quick replies at once.
  var MAX_QUICK_REPLIES = 3;

  // Quick prompts under the results, per path. advance: the prompt moves the
  // walkthrough to the next step instead of getting an in-place reply.
  var PROMPTS = {
    providers: [
      { id: "more", label: "Show me more providers" },
      { id: "refine", label: "Refine provider search criteria" },
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
    var costRange = rangeTags();
    return carousel(
      list.slice(set * PAGE_SIZE, (set + 1) * PAGE_SIZE).map(function (item) {
        return kind === "providers" ? providerCard(item) : facilityCard(item, costRange);
      }),
      kind === "providers" ? "is-providers" : ""
    );
  }

  function followUpReply(kind, id, ctx) {
    var providers = kind === "providers";
    if (id === "more") {
      return (
        dotTurn(
          providers
            ? tierMessage("Here are three more in-network orthopedists near you who treat shoulder pain.", providerSet(1))
            : "<p>Here are three more labs and imaging centers near you.</p>"
        ) + resultCards(kind, 1, ctx)
      );
    }
    if (id === "refine") {
      return dotTurn(
        providers
          ? "<p>Sure. What would you like to change? You can tell me a different ZIP code, a preferred gender, languages spoken, or a focus like sports injuries or shoulder surgery.</p>"
          : "<p>Sure. What would you like to change? You can tell me a different ZIP code, the type of test or scan, or how far you're willing to travel.</p>"
      );
    }
    return dotTurn(
      providers
        ? "<p>Sorry about that. I can look for orthopedists with sooner openings, or you can start a " + (showCopays ? "$0 " : "") + "virtual visit with an Included Health doctor about your shoulder in the meantime. I can also connect you with the Care Team to help you book.</p>"
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
        turns.push(thinkingTurn());
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

  function conversation(ctx) {
    var index = ctx.index;
    var path = ctx.switches.path;
    var turns = [];

    // index 2 (the first step) — from Home, the member sends the Find a
    // doctor quick prompt and Dot asks what they'd like to be seen for.
    turns.push(memberTurn("Find a doctor", "turn-find", stepStatus(2, index)));
    if (index === 2 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Hi Riley — I can help with that. To point you to the right kind of doctor, can you tell me what you’re hoping to be seen for?</p>"
      )
    );
    if (index < 3) return turns.join("");

    // Facilities path: the member answers Lab or imaging and goes straight to results.
    if (path !== "providers") {
      turns.push(memberTurn("Lab or imaging", "turn-answer", stepStatus(3, index)));
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

    // index 3 — Riley describes the shoulder; Dot asks whether it feels stable.
    turns.push(memberTurn(typedText(2), "turn-reason", stepStatus(3, index)));
    if (index === 3 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Ouch — sorry to hear that. Knowing it’s the same shoulder you’ve dislocated before is helpful. " +
          "Are you able to move the shoulder normally right now, or does it feel unstable/like it might slip out?</p>"
      )
    );
    if (index < 4) return turns.join("");

    // index 4 — Dot asks whether Riley wants to be seen in person or by video.
    turns.push(memberTurn(typedText(3), "turn-detail", stepStatus(4, index)));
    if (index === 4 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>That sounds really uncomfortable.</p>" +
          "<p>Do you feel like you need to be seen in person for a hands-on exam (and possibly imaging), " +
          "or would you be open to starting with a video visit today to get quick guidance on next steps?</p>",
        chip("In person", "in-person", index === 4) + chip("Video visit", null, false)
      )
    );
    if (index < 5) return turns.join("");

    // index 5 — confirm plan + location before searching.
    turns.push(memberTurn("In person", "turn-visit", stepStatus(5, index)));
    if (index === 5 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Got it. I can search using the <b>" + planName() + "</b> and look near <b>" + MEMBER_ZIP +
          "</b>. Are those still right?</p>"
      )
    );
    if (index < 6) return turns.join("");

    // index 6 — Dot offers provider types as service cards.
    turns.push(memberTurn(typedText(5), "turn-confirm", stepStatus(6, index)));
    if (index === 6 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Will do. Based on what you’ve shared, a few different provider types could suit your needs. Which would you like to look for?</p>"
      ) +
        carousel(
          PROVIDER_TYPES.map(function (o) { return providerTypeCard(o, index === 6); }),
          "is-services"
        )
    );
    if (index < 7) return turns.join("");

    // index 7 — ask about preferences.
    turns.push(memberTurn("Find an orthopedist", "turn-ortho", stepStatus(7, index)));
    if (index === 7 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Before I pull your matches, do you have any specific preferences?</p>" +
          '<p class="select-help">💡 Tip: You can mention gender, languages spoken or expertise.</p>'
      )
    );
    if (index < 8) return turns.join("");

    // index 8 — Dot pulls up orthopedist matches + quick prompts.
    turns.push(memberTurn(typedText(7), "turn-preferences", stepStatus(8, index)));
    if (index === 8 && !typingDone) return waiting(turns);
    turns.push(
      dotTurn(
        "<p>Give me a few seconds to pull up your matches.</p>",
        null,
        { id: "turn-results", holdMs: 3500 }
      ) +
        // The tier explainer appears with the cards, after the pause.
        '<div class="dot-message results-note" data-type="Body 1 · 16/24 Medium">' +
        tierMessage("Here are your top matches.", providerSet(0)) + "</div>" +
        resultCards("providers", 0, ctx)
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

  // The conversation's indexes count from Dot's old opening (cost explainer,
  // what kind of provider), which this demo replaces with Find a doctor: the
  // first step is chat index 2.
  var CHAT_START = 2;
  function chatCtx(ctx) {
    var c = Object.assign({}, ctx);
    c.index = ctx.index + CHAT_START;
    return c;
  }

  function page(ctx) {
    ctx = chatCtx(ctx);
    copayPlan = ctx.toggles.deductible === false;
    showCareKeys = ctx.toggles.careKeys !== false;
    showCopays = ctx.toggles.copays !== false;
    costTag = ctx.switches.costTag || "range";
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
        kid.getAttribute("aria-label") === "Dot is thinking" ? "typing" : kid.classList.contains("chip-buttons-after") ? "prompts" : null;
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
    ctx = chatCtx(ctx);
    var sc = scroller();
    if (sc) sc.scrollTop = savedTop;
    settle();
    scrollToLatest(ctx);
    var stepName = ctx.step && ctx.step.name;
    var isReply = ctx.index > 0; // index 0 is the opening question, not a reply
    if (typingDone) {
      // Re-entered an already-answered step (e.g. device/path switch): reveal
      // immediately without re-animating.
      if (isReply) runReplyStream(stepName);
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
        if (isReply) runReplyStream(stepName);
      }, pause(THINK_MS - SEND_MS));
    }, pause(SEND_MS));
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
        runReplyStream(step.name + "#" + followUps.length);
      }, pause(THINK_MS - SEND_MS));
    }, pause(SEND_MS));
  }

  function currentIndex() {
    var m = /[?&]step=(\d+)/.exec(location.search);
    return (m ? parseInt(m[1], 10) - 1 : 0) + CHAT_START;
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
    title: "Crown Castle Demo",
    home: CrownHome.home("dot", function () {
      return app;
    }),
    feedback: true,
    summary: "A member with shoulder pain asks Dot, the AI assistant, to find an orthopedist.",
    demoSwitch: {
      label: "Demo",
      current: "dot",
      options: [
        { id: "traditional", label: "Traditional", href: "../crown-castle-traditional/" },
        { id: "dot", label: "Dot" },
      ],
    },
    switches: [
      {
        // Milestones: whole-experience versions. P0 is everything shown today;
        // P1 is the same flow for now, to change once its design is ready.
        key: "milestone",
        label: "Milestones",
        section: "versions",
        menu: true,
        options: [
          { id: "p0", label: "P0", description: "The current experience." },
          { id: "p1", label: "P1", description: "A copy of P0 for now." },
        ],
      },
      {
        key: "path",
        label: "Path",
        shortcut: "p",
        options: [
          { id: "providers", label: "Providers" },
          { id: "facilities", label: "Facilities" },
        ],
      },
      {
        // Facility cost tag: just the copay range, the cost level (arrow + Lower/Higher
        // cost facility), or both ("Lower cost facility: $10–$50 per visit").
        key: "costTag",
        label: "Facility cost tag",
        section: "versions",
        showIf: { key: "path", id: "facilities" },
        options: [
          { id: "range", label: "Range" },
          { id: "level", label: "Level" },
          { id: "both", label: "Both" },
        ],
      },
    ],
    toggles: [
      { key: "deductible", label: "Show deductible", checked: false },
      { key: "careKeys", label: "Show Care Keys", checked: false },
      { key: "copays", label: "Show copays", checked: true },
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
        name: "Find a doctor",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Riley selected Find a doctor on Home. Dot asks what they're hoping to be seen for. Type what's going on with the shoulder in the chat (or select Next), then send."
            : "Riley selected Find a doctor on Home. Dot asks what they're hoping to be seen for. Select Next to answer Lab or imaging.";
        },
        notes: function (ctx) {
          return [
            "A new Dot chat starts with the Find a doctor quick prompt from Home as the member's message.",
            "Dot greets Riley and asks what they're hoping to be seen for, so it can point them to the right kind of doctor.",
            ctx.switches.path === "providers"
              ? "No quick replies: Riley answers in their own words. Next without typing sends: My shoulder has been hurting pretty bad since I played tennis last week. I’ve dislocated this shoulder before"
              : "Facilities path: the member answers Lab or imaging.",
            "Checkboxes in Versions: Show deductible, Show Care Keys and Show copays each turn their mentions on or off.",
          ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "Is it stable",
        address: ADDRESS,
        instruction: function (ctx) {
          return ctx.switches.path === "providers"
            ? "Dot asks whether the shoulder moves normally or feels unstable. Type how it feels in the chat (or select Next), then send."
            : "Dot shows lower cost facilities. Swipe through the facility cards.";
        },
        notes: function (ctx) {
          return ctx.switches.path === "providers"
            ? [
                "Dot acknowledges the pain and notes it's the shoulder Riley dislocated before.",
                "It asks whether Riley can move the shoulder normally or whether it feels unstable, like it might slip out.",
                "No quick replies: Riley types that it feels stable but hurts, and they're nervous about moving it.",
              ]
            : [
                "Facilities path skips the orthopedist questions and goes straight to results.",
                "Three lab and imaging facilities appear as cards in a swipeable row.",
                "Quick prompts follow; sending one shows it as the member's message and the prompts disappear.",
                "Show me more facilities adds a second set of three cards.",
                "Facility chips show the per-visit copay range ($10–$50 or $100–$200); without copays they show Lower or Higher cost.",
              ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "In person or video",
        address: ADDRESS,
        instruction: "Dot asks whether Riley needs a hands-on exam in person or would start with a video visit today. Select In person.",
        notes: [
          "Dot acknowledges the discomfort, then asks how Riley wants to be seen: in person for a hands-on exam (and possibly imaging), or a video visit today for quick guidance.",
          "Quick replies: In person or Video visit. Riley picks In person.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Confirm plan and location",
        address: ADDRESS,
        instruction: "Dot confirms the plan and ZIP before searching. Type Yes in the chat (or select Next), then send.",
        notes: function (ctx) {
          return [
            ctx.toggles.deductible === false
              ? "Dot checks it should search with the Included Health Copay-Only Plan near 15222."
              : "Dot checks it should search with the Included Health HSA Plan near 15222. Uncheck Show deductible for the Copay-Only Plan.",
            "No quick replies: Riley types Yes. Next without typing sends Yes.",
          ];
        },
        render: page,
        onShow: show,
      },
      {
        name: "Provider types",
        address: ADDRESS,
        instruction: "Dot offers three provider types that could help. Select Find an orthopedist.",
        notes: [
          "Service cards in a swipeable row (Figma 11845:24200): orthopedist (Recommended), primary care doctor and sports medicine doctor.",
          "Each card says what that provider type focuses on, with a button to find one.",
          "Riley goes with the orthopedist, so the search continues from there.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Preferences",
        address: ADDRESS,
        instruction: "Dot asks about preferences. Type Someone close by. No other preferences in the chat (or select Next), then send.",
        notes: [
          "Dot offers a tip: the member can mention gender, languages, or expertise.",
          "No quick reply: Riley types their preferences (Someone close by. No other preferences) to have Dot pull up the matches.",
        ],
        render: page,
        onShow: show,
      },
      {
        name: "Orthopedist results",
        address: ADDRESS,
        instruction: "Dot pulls up orthopedists near Riley. Swipe through the cards, or send a quick prompt.",
        notes: function (ctx) {
          return [
            "Dot says it's pulling up matches, then pauses 3.5 seconds before the cards appear.",
            "With the cards, Dot explains in plain text only the tiers shown: Preferred for the first set, both once a Standard provider appears. The Plan Key box is only in Traditional.",
            "Cards use the older design: the copay chip names the tier (Preferred / Standard), with View full profile and Schedule appointment.",
            "Three orthopedists who treat shoulder pain appear as cards in a swipeable row. Specialist copays: $40 Preferred, $300 Standard.",
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
