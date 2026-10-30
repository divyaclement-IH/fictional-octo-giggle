/* Crown Castle Home: the IH member home page the demo starts on, shared by
   the Dot side (demos/crown-castle) and the Traditional side
   (demos/crown-castle-traditional).
   Mobile follows the Anatomy Home (Figma VT79VSlhYlpl0g2JS9vLKt, node 50837:50112);
   desktop follows the web home screenshots.
   CrownHome.home(side) returns the shell's demo.home (opened by the Ortho Demo
   or Facility Demo button in Scenario).
   The Dot entry points (Ask Dot box, Find a doctor, Navigate your healthcare
   with Dot, Find care with chat assistant) start the Dot side; Search for
   local care starts the Traditional side. side is the page Home opened on. */
(function () {
  "use strict";

  var SRC = document.currentScript && document.currentScript.src;
  var H = SRC ? new URL("assets/home/", SRC).href : "../crown-castle/assets/home/";
  var CC = SRC ? new URL("assets/", SRC).href : "../crown-castle/assets/";
  var PS = SRC ? new URL("../provider-search/assets/", SRC).href : "../provider-search/assets/";

  // An entry point: a button that starts the Dot or Traditional side.
  function go(to) {
    return to ? ' data-home-go="' + to + '"' : "";
  }

  // 40px tile icon: Figma's tile icons carry their own circle; the desktop-only
  // ones are 24px design-system glyphs tinted brand blue on the same circle.
  function tileIcon(t) {
    return t.img
      ? '<img class="home-tile-icon" src="' + H + t.img + '" width="40" height="40" alt="" data-icon="' + t.icon + '">'
      : '<span class="home-tile-icon home-tile-glyph" style="--glyph:url(' + H + t.glyph + ')" data-icon="' + t.icon + '"></span>';
  }

  function tile(t) {
    var on = !!t.goes;
    return (
      "<" + (on ? 'button type="button"' : "div") + ' class="home-tile' + (on ? " is-next" : "") + '"' + go(t.goes) + ">" +
      '<span class="home-tile-top">' + tileIcon(t) +
      (t.noCost ? '<span class="home-chip-success" data-type="Caption · 12/16 Medium">No cost</span>' : "") +
      "</span>" +
      '<span class="home-tile-label" data-type="Body 1 · 16/24 Bold">' + t.label + "</span>" +
      "</" + (on ? "button" : "div") + ">"
    );
  }

  var T = {
    urgent: { label: "Start urgent care visit", img: "care-urgent.svg", icon: "video", noCost: true },
    therapy: { label: "Book therapy or psychiatry", img: "care-therapy.svg", icon: "head-heart", noCost: true },
    chat: { label: "Find care with chat assistant", img: "care-chat.svg", icon: "chat-bubble-sparkle", goes: "dot" },
    primary: { label: "Book primary care visit", img: "care-primary.svg", icon: "stethoscope-heart", noCost: true },
    bills: { label: "Review bills and insurance info", img: "care-bills.svg", icon: "file-medical-bill" },
    opinion: { label: "Request a second medical opinion", img: "care-second-opinion.svg", icon: "xray-hand" },
    more: { label: "View more benefits", img: "care-more.svg", icon: "list-bullets" },
    local: { label: "Search for local care", glyph: "icon-location-medical.svg", icon: "location-medical", goes: "traditional" },
    cancer: { label: "Book cancer support consult", glyph: "icon-cancer-ribbon.svg", icon: "medical-cancer-ribbon" },
    meds: { label: "Track medications", glyph: "icon-pill-bottle.svg", icon: "pill-bottle" },
  };

  // The Ask Dot box: Dot, the placeholder, For: (person) and a disabled send.
  // What Riley types into the Ask Dot box in the Facility Demo (Next sends it too).
  var DEFAULT_ASK = "My doctor ordered an MRI. Where should I go?";

  // The Ask Dot box. live: a real text box Riley types into and sends (Facility
  // Demo); otherwise the whole box is a button into the Dot chat.
  function askDot(who, live) {
    if (live) {
      return (
        '<div class="home-ask is-live" data-space data-dim>' +
        '<span class="home-ask-row"><img src="' + H + 'dot.svg" width="24" height="24" alt="" data-icon="Dot">' +
        '<input class="home-ask-input" type="text" aria-label="Ask Dot" placeholder="Ask me about care, benefits, costs..." data-type="Body 2 · 14/20 Medium"></span>' +
        '<span class="home-ask-actions"><span class="home-for" data-type="Body 2 · 14/20 Medium">For: <b>' + who + "</b>" +
        '<img src="' + H + 'arrow-down.svg" width="12" height="12" alt="" data-icon="arrow-down"></span>' +
        '<button class="home-send-button" type="button" data-home-ask aria-label="Send">' +
        '<img class="home-send" src="' + CC + 'send.svg" width="48" height="48" alt="" data-icon="Chat Input - Send button"></button></span>' +
        "</div>"
      );
    }
    return (
      '<button type="button" class="home-ask is-next"' + go("dot") + " data-space data-dim>" +
      '<span class="home-ask-row"><img src="' + H + 'dot.svg" width="24" height="24" alt="" data-icon="Dot">' +
      '<span class="home-ask-placeholder" data-type="Body 2 · 14/20 Medium">Ask me about care, benefits, costs...</span></span>' +
      '<span class="home-ask-actions"><span class="home-for" data-type="Body 2 · 14/20 Medium">For: <b>' + who + "</b>" +
      '<img src="' + H + 'arrow-down.svg" width="12" height="12" alt="" data-icon="arrow-down"></span>' +
      '<img class="home-send" src="' + CC + 'send.svg" width="48" height="48" alt="" data-icon="Chat Input - Send button"></span>' +
      "</button>"
    );
  }

  // Quick prompts under the Ask Dot box; Find a doctor starts the Dot chat.
  function prompts() {
    return (
      '<div class="home-prompts">' +
      '<span class="home-prompt">Ask about coverage</span>' +
      '<button type="button" class="home-prompt is-next"' + go("dot") + ">Find a doctor</button>" +
      '<span class="home-prompt">Feeling sick</span></div>'
    );
  }

  function welcome() {
    return (
      '<div class="home-welcome">' +
      '<h1 data-type="Title 2 · 24/32 Bold">What’s on your mind, Riley?</h1>' +
      '<p class="home-covered" data-type="Body 2 · 14/20 Medium">Covered by Google' +
      '<img src="' + H + 'check-badge.svg" width="16" height="16" alt="" data-icon="check-badge"></p></div>'
    );
  }

  var TABS = [
    { label: "Home", img: "tab-home-active.svg", h: "24.003", active: true },
    { label: "Messages", img: "tab-messages.svg" },
    { label: "Activity", img: "tab-activity.svg" },
    { label: "Me", img: "tab-me.svg" },
  ];

  // Figma's seven tiles, plus Search for local care in the grid's empty slot
  // so the Traditional side has a way in.
  function mobile(live) {
    var tiles = [T.urgent, T.therapy, T.chat, T.primary, T.bills, T.opinion, T.more, T.local];
    return (
      '<div class="home is-mobile-home">' +
      '<span class="home-bg" aria-hidden="true"><img class="home-hero-ellipse" src="' + H + 'hero-ellipse.svg" width="1019" height="678" alt=""></span>' +
      '<div class="home-m-nav"><img src="' + H + 'logo.svg" width="24.4616" height="26" alt="Included Health"></div>' +
      welcome() +
      '<div class="home-m-body">' +
      '<div class="home-ask-group">' + askDot("Riley", live) + prompts() + "</div>" +
      '<section class="home-get-care"><h2 data-type="Title 3 · 20/32 Bold">Get care</h2>' +
      '<div class="home-tiles">' + tiles.map(tile).join("") + "</div></section>" +
      "</div>" +
      '<nav class="home-tabbar">' +
      TABS.map(function (t) {
        return (
          '<a class="home-tab' + (t.active ? " is-active" : "") + '" href="#"><span class="home-tab-bar" aria-hidden="true"></span>' +
          '<img src="' + H + t.img + '" width="24" height="' + (t.h || 24) + '" alt="">' +
          '<span data-type="Caption 2 · 11/16">' + t.label + "</span></a>"
        );
      }).join("") +
      "</nav></div>"
    );
  }

  function chevron(cls) {
    return '<span class="home-glyph home-chevron ' + (cls || "") + '" style="--glyph:url(' + H + 'icon-arrow-right.svg)" data-icon="arrow-right"></span>';
  }

  function desktop(live) {
    var tiles = [T.urgent, T.therapy, T.primary, T.local, T.cancer, T.meds,
      { label: "Get a second opinion or advice", img: "care-second-opinion.svg", icon: "xray-hand" }, T.bills, T.more];
    return (
      '<div class="home is-desktop-home">' +
      '<nav class="home-web-nav"><img src="' + H + 'logo.svg" width="24.4616" height="26" alt="Included Health">' +
      '<div class="home-web-links"><a class="is-active" href="#">Home</a><a href="#"><span class="home-unread" aria-hidden="true"></span>Messages</a>' +
      '<a href="#">Activity</a><a href="#">Me</a></div></nav>' +
      '<div class="home-hero"><div class="home-col">' + welcome() + askDot("You", live) +
      prompts() + "</div></div>" +
      '<div class="home-col">' +
      '<section class="home-section"><div class="home-section-head"><h2 data-type="Title 2 · 24/32 Bold">Your next steps</h2>' +
      '<span class="home-count" data-type="Caption · 12/16 Bold">2</span>' + chevron("home-section-chevron") + "</div>" +
      '<div class="home-steps">' +
      '<div class="home-step"><div class="home-step-head"><img class="home-step-avatar" src="' + PS + 'avatar.png" width="40" height="40" alt="">' +
      '<div class="home-step-text"><p class="home-step-title" data-type="Body 1 · 16/24 Bold">Video visit for Riley</p>' +
      '<p class="home-step-sub">Dr. Julianna Smith, MD</p></div>' + chevron() + "</div>" +
      '<div class="home-step-foot"><span class="home-chip-neutral"><img src="' + H + 'icon-calendar.svg" width="24" height="24" alt="" data-icon="calendar">Today 3:40 PM</span>' +
      '<span class="home-round"><img src="' + H + 'icon-calendar-add.svg" width="24" height="24" alt="" data-icon="calendar-add"></span></div></div>' +
      '<button type="button" class="home-step is-next"' + go("dot") + ">" +
      '<span class="home-step-head"><span class="home-step-text"><span class="home-step-title" data-type="Body 1 · 16/24 Bold">Navigate your healthcare with Dot</span>' +
      '<span class="home-step-sub">Get help finding the right care</span></span>' + chevron() + "</span>" +
      '<span class="home-step-foot"><span class="home-chip-new" data-type="Caption · 12/16 Bold">New</span>' +
      '<span class="home-round"><span class="home-glyph" style="--glyph:url(' + H + 'icon-dots-horizontal.svg)" data-icon="dots-horizontal"></span></span></span>' +
      "</button>" +
      "</div></section>" +
      '<section class="home-section"><h2 data-type="Title 2 · 24/32 Bold">Get care</h2>' +
      '<div class="home-tiles">' + tiles.map(tile).join("") + "</div></section>" +
      '<section class="home-section"><div class="home-section-head"><h2 data-type="Title 2 · 24/32 Bold">Recommended for you</h2>' +
      '<span class="home-count is-neutral" data-type="Caption · 12/16 Bold">4</span></div>' +
      '<div class="home-rec"><span class="home-rec-image" aria-hidden="true"></span><div class="home-rec-text">' +
      '<p class="home-rec-title" data-type="Body 1 · 16/24 Bold">Schedule a video visit with a doctor.</p>' +
      '<p class="home-rec-body">See a primary care doctor for an annual check-up, help with a new or existing condition, prescription refills, and more.</p></div>' +
      chevron() + "</div></section>" +
      '<section class="home-contact"><span class="home-contact-icon"><span class="home-glyph" style="--glyph:url(' + H + 'icon-chat-bubble-heart.svg)" data-icon="chat-bubble-heart"></span></span>' +
      '<p class="home-contact-title" data-type="Title 3 · 20/28 Bold">Contact the Care Team</p>' +
      '<p class="home-contact-sub">Get help with your healthcare needs</p>' +
      '<span class="home-contact-button">Contact us</span>' +
      '<p class="home-contact-fine">You can also call us at <a href="#">(855) 633-6445</a><br>If you have an emergency, dial 911</p></section>' +
      "</div></div>"
    );
  }

  // Open the other side's first step, carrying the device and options (but
  // not this side's own step, version or path).
  function openSide(to, page, extra) {
    var q = new URLSearchParams(location.search);
    ["step", "home", "version", "path", "search", "from", "ask"].forEach(function (k) {
      q.delete(k);
    });
    q.set("step", "1");
    for (var k in extra || {}) q.set(k, extra[k]);
    location.href = page + "?" + q.toString();
  }

  window.CrownHome = {
    DEFAULT_ASK: DEFAULT_ASK,
    // side: "dot" | "traditional", the page Home is opened on. getApp returns
    // the shell's app once mounted. stories: per-story { steps, switches }
    // for this side (see the shell's home.buttons).
    home: function (side, getApp, stories) {
      stories = stories || {};
      var pages = { dot: "../crown-castle/", traditional: "../crown-castle-traditional/" };
      document.addEventListener("click", function (e) {
        var b = e.target.closest && e.target.closest("[data-home-go]");
        if (!b) return;
        e.preventDefault();
        var to = b.getAttribute("data-home-go");
        if (to === side) getApp().goTo(0);
        else openSide(to, pages[to]);
      });
      // Facility Demo: what Riley types in the Ask Dot box starts the Dot chat
      // (kept in ?ask= so the Dot side shows it as their first message).
      function sendAsk() {
        var box = document.querySelector(".screen .home-ask-input");
        if (!box) return;
        var text = box.value.trim();
        if (!text) {
          box.focus();
          return;
        }
        if (side === "dot") {
          var q = new URLSearchParams(location.search);
          q.set("ask", text);
          history.replaceState(null, "", location.pathname + "?" + q.toString() + location.hash);
          getApp().goTo(0);
        } else {
          openSide("dot", pages.dot, { ask: text });
        }
      }
      document.addEventListener("click", function (e) {
        if (e.target.closest && e.target.closest("[data-home-ask]")) sendAsk();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && e.target.classList && e.target.classList.contains("home-ask-input")) {
          e.preventDefault();
          sendAsk();
        }
      });
      return {
        // Two stories start from Home; ctx.story says which one was picked,
        // and each can list its own steps in Scenario.
        buttons: [
          Object.assign({ id: "ortho", label: "Ortho Demo" }, stories.ortho),
          Object.assign({ id: "facility", label: "Facility Demo" }, stories.facility),
        ],
        address: "member.includedhealth.com/home",
        instruction: function (ctx) {
          if (ctx.story === "facility") {
            return "Riley opens the app on Home. Type " + DEFAULT_ASK + " in the Ask Dot box, then send (or select Next).";
          }
          return ctx.mode === "mobile"
            ? "Riley opens the app on Home. Select the Ask Dot box or Find care with chat assistant for Dot, or Search for local care for Traditional."
            : "Riley opens the app on Home. Select the Ask Dot box, Find a doctor or Navigate your healthcare with Dot for Dot, or Search for local care for Traditional.";
        },
        notes: function (ctx) {
          return [
            ctx.mode === "mobile"
              ? "Mobile follows the Anatomy Home design (Figma 50837:50112), plus a Search for local care tile in the empty grid slot so Traditional has a way in."
              : "Desktop follows the web home: welcome, Ask Dot box with prompts, next steps, Get care, recommendations and Care Team.",
            "The Dot entry points start the Dot conversation; Search for local care starts care search (Traditional).",
            "Ortho Demo or Facility Demo in Scenario brings you back here from any step.",
            ctx.story === "facility"
              ? "Facility Demo: Riley types their question into the Ask Dot box, and it becomes their first message in a new Dot chat. Next without typing sends: " + DEFAULT_ASK
              : null,
            ctx.mode === "desktop" ? "The Recommended for you photo is a placeholder." : null,
          ].filter(Boolean);
        },
        // The Dot side's screen is a fixed-height chat layout, so Home
        // scrolls itself there; on Traditional the frame scrolls.
        render: function (ctx) {
          var live = ctx.story === "facility";
          var html = ctx.mode === "desktop" ? desktop(live) : mobile(live);
          return side === "dot" ? html.replace('<div class="home ', '<div class="home home-own-scroll ') : html;
        },
      };
    },
  };
})();
