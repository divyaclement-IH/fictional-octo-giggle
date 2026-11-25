/* Provider Quality Badging: the provider profile page (Figma Provider
   Connect 2027, node 85:7933), shared by the Dot and Traditional demos.
   "View profile" on a card opens it over the frame's page area; Back closes it.
   Desktop frames get the web layout (a 660px column); mobile frames, and
   frames narrower than 600px, get the mobile layout (white sections on grey).
   A provider with the quality tag gets the "Highest quality provider" banner
   at the top, worded by the Quality copy menu. */
(function () {
  "use strict";

  var P = "../quality-badging/assets/profile/"; // Figma assets
  var PS = "../provider-search/assets/"; // the cards' photo

  var HOURS = [
    ["Monday", "8:00 AM - 5:00 PM"],
    ["Tuesday", "8:00 AM - 5:00 PM"],
    ["Wednesday", "8:00 AM - 5:00 PM"],
    ["Thursday", "8:00 AM - 5:00 PM"],
    ["Friday", "8:00 AM - 2:00 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ];
  var LANGUAGES = "Bulgarian, English, Hebrew (modern), Russian, Spanish";
  var HOSPITALS = [
    "Ahmc Garfield Medical Center L.P.",
    "Casa Colina Hospital and Centers for Healthcare",
    "USC Arcadia Hospital",
    "Huntington Memorial Hospital",
  ];

  var trigger = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function img(file, size, extra) {
    return '<img src="' + P + file + '" width="' + size + '" height="' + size + '" alt=""' + (extra || "") + ">";
  }

  function initials(name) {
    return name
      .replace(/^Dr\.\s*/, "")
      .split(",")[0]
      .split(/\s+/)
      .map(function (w) { return w.charAt(0); })
      .join("")
      .slice(0, 2);
  }

  function avatar(p) {
    return p.photo
      ? '<span class="pp-avatar"><img src="' + PS + 'avatar.png" alt=""></span>'
      : '<span class="pp-avatar is-initials" aria-hidden="true">' + initials(p.name) + "</span>";
  }

  function chip(icon, label) {
    return '<span class="pp-chip">' + (icon ? img(icon, 16) : "") + label + "</span>";
  }

  // Inline Banner, Compact (banner/bg default-inline, border default), with
  // the star and Body 2 Bold in color/text/brand/strong.
  function qualityBanner(text) {
    return (
      '<div class="pp-quality" role="note">' + img("quality-star.svg", 20) +
      '<p class="pp-quality-text">' + esc(text) + "</p></div>"
    );
  }

  function header(p, opts, mobile) {
    var network = chip("check-circle.svg", "In network");
    return (
      '<section class="pp-section pp-header">' +
      (opts.quality ? qualityBanner(opts.quality) : "") +
      '<div class="pp-identity">' + avatar(p) +
      '<div class="pp-identity-text"><h1 class="pp-name">' + esc(p.name) + "</h1>" +
      '<p class="pp-specialties">' + esc(p.specialties.replace(/ · /g, ", ")) + "</p>" +
      (mobile ? "" : '<div class="pp-chips">' + network + "</div>") +
      "</div></div>" +
      (mobile ? '<div class="pp-chips">' + network + "</div>" : "") +
      (mobile ? "</section>" + '<section class="pp-section">' : "") +
      '<div class="pp-why"><p class="pp-why-title">Why our analysis shows a strong fit for you</p>' +
      "<p>" + esc(p.summary) + "</p></div>" +
      (mobile
        ? ""
        : '<div class="pp-actions">' +
          '<button class="pp-btn is-outline" type="button">' + img("bookmark-16.svg", 16) + "Save provider</button>" +
          '<button class="pp-btn is-solid" type="button">Schedule appointment</button></div>') +
      "</section>"
    );
  }

  function hours() {
    return (
      '<div class="pp-block"><p class="pp-label">Hours</p><table class="pp-hours"><tbody>' +
      HOURS.map(function (h) { return "<tr><th scope=\"row\">" + h[0] + "</th><td>" + h[1] + "</td></tr>"; }).join("") +
      "</tbody></table></div>"
    );
  }

  function languages() {
    return '<div class="pp-block"><p class="pp-label">Languages spoken at facility</p><p class="pp-body">' + LANGUAGES + "</p></div>";
  }

  function location(p, mobile) {
    var map =
      '<div class="pp-map"><img class="pp-map-img" src="' + P + 'map.png" alt="Map of ' + esc(p.clinic) + '">' +
      '<span class="pp-map-time">' + img("car.svg", 16) + "8 min</span></div>";
    var details =
      '<div class="pp-details"><div class="pp-address"><div>' +
      '<p class="pp-label">' + esc(p.clinic) + "</p>" +
      '<p class="pp-body' + (mobile ? " is-strong" : "") + '">' + esc(p.address) + "</p></div>" +
      '<p class="pp-distance">' + esc(p.distance) + "</p></div>" +
      '<div class="pp-chips">' + chip("check-circle.svg", mobile ? "In-network" : "In network") +
      chip("telehealth.svg", "Offers telehealth") + "</div></div>";
    var more =
      '<button class="pp-link" type="button">Show other providers at this location' + img("arrow-down.svg", 12) + "</button>";
    return (
      '<section class="pp-section pp-location">' +
      '<div class="pp-title-row"><h2 class="pp-title">1 of 3 Locations</h2>' +
      '<span class="pp-pagination">' +
      '<button type="button" aria-label="Previous location">' + img("page-prev.svg", 48) + "</button>" +
      '<button type="button" aria-label="Next location">' + img("page-next.svg", 48) + "</button></span></div>" +
      (mobile
        ? '<div class="pp-location-info">' + map + details + '<hr class="pp-rule">' + hours() + '<hr class="pp-rule">' + languages() + more + "</div>"
        : '<div class="pp-columns">' + details + map + "</div>" +
          '<div class="pp-columns">' + languages() + hours() + "</div>" + more) +
      "</section>"
    );
  }

  function insurance(mobile) {
    var cost = '<button class="pp-btn is-brand" type="button">' + img("dollar-circle.svg", 16) + "Get a cost estimate</button>";
    var link = function (label) {
      return '<a class="pp-list-item" href="#">' + label + img("arrow-right.svg", 16) + "</a>";
    };
    return (
      '<section class="pp-section pp-insurance">' +
      '<div class="pp-insurance-head"><div><h2 class="pp-title">HSA Savers Basic</h2>' +
      '<div class="pp-chips"><span class="pp-chip is-neutral">2026 Plan</span>' + chip("check-circle.svg", "In network") + "</div></div>" +
      (mobile ? "" : cost) + "</div>" +
      (mobile
        ? '<div class="pp-links is-stacked">' + link("Read our policies and guidelines") + '<span class="pp-links-line"></span>' + link("Check status for other plans") + "</div>"
        : '<div class="pp-links">' + link("Read our policies and guidelines") + link("Check status for other plans") + "</div>") +
      '<p class="pp-callout">Please verify insurance and network coverage with the office before booking.</p>' +
      (mobile ? cost : "") +
      "</section>"
    );
  }

  function experience(mobile) {
    var top10 = function (program) {
      return '<p class="pp-top10">This is a <b>Top 10%</b> of training program for <b>' + program + "</b>.</p>";
    };
    var item = function (icon, text, callout) {
      return (
        '<li class="pp-exp"><div class="pp-exp-row">' + img(icon, 40) + "<p>" + text + "</p></div>" + (callout || "") + "</li>"
      );
    };
    return (
      '<section class="pp-section pp-experience">' +
      '<div><h2 class="pp-title">Provider experience</h2><p class="pp-sub">28 years of practice</p></div>' +
      '<ul class="pp-exp-list">' +
      item("exp-school.svg", "Studied at Chicago Medical School at Rosalind Franklin University") +
      // The Figma uses a different training icon on web and on mobile.
      item(mobile ? "exp-training.svg" : "exp-training-m.svg", "Trained at Northridge Hospital Medical Center", top10("Family Practice")) +
      item("exp-training-2.svg", "Trained at John Hopkins Hospital", top10("Fellowship")) +
      item("exp-board.svg", "Board certified in <b>Family Practice</b>") +
      "</ul></section>"
    );
  }

  function affiliations(p) {
    return (
      '<section class="pp-section pp-affiliations"><h2 class="pp-title">Hospital Affiliations</h2>' +
      '<p class="pp-muted">Patients have been admitted and treated by ' + esc(p.name) + " at the following hospitals.</p>" +
      '<ul class="pp-bullets">' + HOSPITALS.map(function (h) { return "<li>" + h + "</li>"; }).join("") + "</ul></section>"
    );
  }

  function awards() {
    return (
      '<section class="pp-section pp-awards"><h2 class="pp-title">Doctor Awards and Recognitions</h2>' +
      '<p class="pp-placeholder">Content in this area will display as-is today.</p></section>'
    );
  }

  function reviews() {
    return (
      '<section class="pp-section pp-reviews"><h2 class="pp-title">See what patients are saying</h2>' +
      '<div class="pp-review-buttons"><button class="pp-btn is-brand" type="button">Google reviews</button>' +
      '<button class="pp-btn is-brand" type="button">Yelp reviews</button></div></section>'
    );
  }

  function close() {
    var page = document.querySelector(".provider-profile");
    if (!page) return;
    var content = document.querySelector(".frame-content");
    if (content) content.style.overflowY = "";
    page.remove();
    if (trigger && document.contains(trigger)) trigger.focus();
    trigger = null;
  }

  // opts: { quality: banner text, or "" for none; nav: web primary nav HTML }
  function open(p, opts, from) {
    close();
    var content = document.querySelector(".frame-content");
    if (!content) return;
    var screen = document.querySelector(".screen");
    var mobile = (screen && screen.classList.contains("mode-mobile")) || content.offsetWidth < 600;
    trigger = from || null;

    var page = document.createElement("div");
    page.className = "provider-profile " + (mobile ? "is-mobile" : "is-web");
    page.setAttribute("role", "dialog");
    page.setAttribute("aria-label", p.name + " profile");
    page.style.top = content.offsetTop + "px";
    page.style.left = content.offsetLeft + "px";
    page.style.width = content.offsetWidth + "px";
    page.style.height = content.offsetHeight + "px";
    var rule = mobile ? "" : '<hr class="pp-rule">';
    page.innerHTML =
      (mobile
        ? '<nav class="pp-nav"><button type="button" aria-label="Back" data-profile-close>' + img("arrow-left-m.svg", 20) + "</button>" +
          '<button type="button" aria-label="Save provider">' + img("bookmark-m.svg", 26) + "</button></nav>"
        : (opts.nav || "") +
          '<nav class="pp-nav"><div class="pp-nav-inner"><button type="button" aria-label="Back" data-profile-close>' +
          img("arrow-left.svg", 22) + "</button>" +
          '<button type="button" aria-label="Save provider">' + img("bookmark.svg", 24) + "</button></div></nav>") +
      '<div class="pp-content">' +
      header(p, opts, mobile) + rule +
      location(p, mobile) + (mobile ? '<hr class="pp-rule is-section">' : "") +
      insurance(mobile) + rule +
      experience(mobile) + rule +
      affiliations(p) + rule +
      awards() + rule +
      reviews() +
      "</div>";
    content.parentElement.appendChild(page);
    content.style.overflowY = "hidden";
    page.querySelector("[data-profile-close]").focus({ preventScroll: true });
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-profile-close]")) {
      close();
      return;
    }
    // Static links in the profile don't navigate.
    if (e.target.closest(".provider-profile a[href='#']")) e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.querySelector(".provider-profile") && !document.querySelector(".learn-modal")) close();
  });

  window.QBProfile = { open: open, close: close };
})();
