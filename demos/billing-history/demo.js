/* Billing history demo: a member finds what they owe for a visit and pays it. */
(function () {
  "use strict";

  var ICONS = {
    "chevron-left": '<path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    "chevron-right": '<path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    video: '<rect x="2.5" y="6" width="13" height="12" rx="3" stroke="currentColor" stroke-width="1.75" fill="none"/><path d="M15.5 10.5l5-3v9l-5-3" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linejoin="round"/>',
    stethoscope: '<path d="M6 3v6a5 5 0 0 0 10 0V3M11 14v2a4 4 0 0 0 8 0v-2" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round"/><circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.75" fill="none"/>',
    chat: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linejoin="round"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.25" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linejoin="round"/><path d="M9 8h6M9 12h6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2.5" stroke="currentColor" stroke-width="1.75" fill="none"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.75" fill="none"/>',
  };

  function icon(name, extraClass) {
    return (
      '<svg class="icon' + (extraClass ? " " + extraClass : "") + '" viewBox="0 0 24 24" aria-hidden="true" data-icon="' +
      name + '">' + ICONS[name] + "</svg>"
    );
  }

  var VISITS = [
    { id: "0304", icon: "video", name: "Urgent care video visit", provider: "Dr. Maya Chen, MD", date: "Mar 4, 2026", owe: "$45.00", paidOn: null },
    { id: "0212", icon: "stethoscope", name: "Primary care visit", provider: "Dr. Luis Ortega, DO", date: "Feb 12, 2026", owe: "$0.00", paidOn: "Covered by insurance" },
    { id: "0108", icon: "chat", name: "Behavioral health session", provider: "Sam Patel, LCSW", date: "Jan 8, 2026", owe: "$30.00", paidOn: "Paid Jan 20" },
  ];

  // ---------- Shared pieces ----------

  function appHeader(title, withBack) {
    return (
      '<header class="app-header" data-dim>' +
      (withBack
        ? '<button class="icon-button" type="button" data-action="back" aria-label="Back">' + icon("chevron-left") + "</button>"
        : "<span></span>") +
      '<h1 class="t-title4" data-type="Title 4 · 16/24 Bold">' + title + "</h1><span></span></header>"
    );
  }

  function topNav() {
    return (
      '<nav class="top-nav"><div class="top-nav-inner">' +
      '<span class="wordmark t-title3" data-color="text/brand">Included Health</span>' +
      '<div class="nav-links t-body2-medium" data-type="Body 2 · 14/20 Medium">' +
      "<span>Home</span><span>Find care</span><span>Messages</span>" +
      '<span class="is-active" data-color="text/brand">Billing</span></div>' +
      '<span class="avatar t-caption-bold">JR</span></div></nav>'
    );
  }

  function chrome(ctx, title, withBack, body) {
    return ctx.mode === "desktop" ? topNav() + body : appHeader(title, withBack) + body;
  }

  function balanceCard(paid, ctx) {
    return (
      '<section class="card balance-card' + (paid ? " is-paid" : "") + '" data-space data-dim data-color="' +
      (paid ? "surface/success/weak" : "surface/brand/weak") + '">' +
      '<p class="t-body2-medium c-secondary" data-type="Body 2 · 14/20 Medium" data-color="text/secondary">Balance due</p>' +
      '<p class="t-title1" data-type="Title 1 · 32/40 Bold">' + (paid ? "$0.00" : "$45.00") + "</p>" +
      '<p class="t-body2 c-secondary" data-type="Body 2 · 14/20 Regular">' +
      (paid ? "You're all paid up. Nice." : "Due Apr 3, 2026 for 1 visit") + "</p>" +
      (paid || ctx.mode === "mobile"
        ? ""
        : '<button class="btn-app" type="button" data-action="next" data-dim>Review visit</button>') +
      "</section>"
    );
  }

  function visitRow(visit, paid) {
    var due = visit.id === "0304" && !paid;
    var status = due
      ? '<span class="chip chip-due" data-type="Caption · 12/16 Bold">Due</span>'
      : '<span class="chip chip-paid">Paid</span>';
    var sub = visit.id === "0304" && paid ? "Paid Mar 21" : visit.paidOn;
    var tag = due ? "button" : "div";
    return (
      "<li><" + tag + ' class="visit-row' + (due ? " is-actionable" : "") + '"' +
      (due ? ' type="button" data-action="next" data-space' : "") + ">" +
      '<span class="visit-icon" data-dim>' + icon(visit.icon) + "</span>" +
      '<span class="visit-main stack-4">' +
      '<span class="t-body1-medium" style="display:block"' + (due ? ' data-type="Body 1 · 16/24 Medium"' : "") + ">" + visit.name + "</span>" +
      '<span class="t-body2 c-secondary" style="display:block"' + (due ? ' data-type="Body 2 · 14/20 Regular" data-color="text/secondary"' : "") + ">" +
      visit.date + " · " + (due ? visit.provider : sub) + "</span></span>" +
      '<span class="visit-amount stack-4"><span class="t-title4" style="display:block">' + visit.owe + "</span>" + status + "</span>" +
      (due ? icon("chevron-right", "icon-sm c-tertiary") : "") +
      "</" + tag + "></li>"
    );
  }

  function visitsCard(paid) {
    return (
      '<section class="card" data-dim>' +
      '<div class="section-title"><h2 class="t-title3" data-type="Title 3 · 20/28 Bold">Visits</h2>' +
      '<span class="t-body2 c-tertiary">Last 12 months</span></div>' +
      '<ul class="visit-list">' + VISITS.map(function (v) { return visitRow(v, paid); }).join("") + "</ul></section>"
    );
  }

  // ---------- Screens ----------

  function historyScreen(paid) {
    return function (ctx) {
      if (ctx.mode === "desktop") {
        return chrome(ctx, "", false,
          '<main class="page" data-space>' +
          '<h1 class="t-title1" data-type="Title 1 · 32/40 Bold">Billing history</h1>' +
          '<div class="columns" data-space><div class="col-8">' + visitsCard(paid) + '</div><div class="col-4">' +
          balanceCard(paid, ctx) + "</div></div></main>");
      }
      return chrome(ctx, "Billing history", false,
        '<main class="page" data-space>' + balanceCard(paid, ctx) + visitsCard(paid) + "</main>");
    };
  }

  function lineItems() {
    return (
      '<dl class="line-items">' +
      '<div class="line-item t-body1"><dt>Visit fee</dt><dd>$129.00</dd></div>' +
      '<div class="line-item t-body1"><dt>Insurance paid<div class="t-body2 c-secondary" data-type="Body 2 · 14/20 Regular">Blue Shield PPO</div></dt><dd>−$84.00</dd></div>' +
      '<div class="line-item is-total t-title4" data-type="Title 4 · 16/24 Bold"><dt>You owe</dt><dd>$45.00</dd></div>' +
      "</dl>"
    );
  }

  function visitDetail(ctx) {
    var intro =
      '<div class="stack-4"><p class="t-body2-medium c-secondary">Mar 4, 2026 · 2:30 PM</p>' +
      '<h1 class="' + (ctx.mode === "desktop" ? "t-title1" : "t-title2") + '" data-type="' +
      (ctx.mode === "desktop" ? "Title 1 · 32/40 Bold" : "Title 2 · 24/32 Bold") + '">Urgent care video visit</h1>' +
      '<p class="t-body1 c-secondary" data-type="Body 1 · 16/24 Regular" data-color="text/secondary">With Dr. Maya Chen, MD</p></div>';
    var charges =
      '<section class="card" data-space data-dim><h2 class="t-title4" data-type="Title 4 · 16/24 Bold">Charges</h2>' + lineItems() + "</section>";
    var pay = '<button class="btn-app" type="button" data-action="next" data-dim data-color="surface/brand text/inverse">Pay $45.00</button>';

    if (ctx.mode === "desktop") {
      return chrome(ctx, "", true,
        '<main class="page" data-space>' +
        '<button class="btn-app btn-app-secondary" type="button" data-action="back" style="width:auto;height:40px;padding:0 16px 0 8px;gap:4px">' +
        icon("chevron-left", "icon-sm") + "Billing history</button>" +
        intro +
        '<div class="columns" data-space><div class="col-8">' + charges + '</div><div class="col-4">' +
        '<section class="card balance-card stack-8" data-space><p class="t-body2-medium c-secondary">You owe</p>' +
        '<p class="t-title1">$45.00</p><p class="t-body2 c-secondary">Due Apr 3, 2026</p>' +
        '<div style="padding-top:8px">' + pay + "</div></section></div></div></main>");
    }
    return chrome(ctx, "Visit details", true,
      '<main class="page" data-space>' + intro + charges + pay +
      '<p class="t-body2 c-secondary center">Questions about this bill? Message your Care Team.</p></main>');
  }

  function payScreen(ctx) {
    var amount =
      '<div class="amount-hero" data-space data-color="surface/neutral/weak"><p class="t-body2-medium c-secondary">Amount</p>' +
      '<p class="t-title1" data-type="Title 1 · 32/40 Bold">$45.00</p>' +
      '<p class="t-body2 c-secondary">Urgent care video visit · Mar 4</p></div>';
    var methods =
      '<section class="stack-8"><h2 class="t-title4" data-type="Title 4 · 16/24 Bold">Payment method</h2>' +
      '<div class="method is-selected" data-space data-dim data-color="surface/brand">' +
      '<span class="method-brand">VISA</span><span class="stack-4"><span class="t-body1-medium" style="display:block" data-type="Body 1 · 16/24 Medium">Visa •••• 4242</span>' +
      '<span class="t-body2 c-secondary" style="display:block">Expires 08/28</span></span><span class="radio-dot" data-dim></span></div>' +
      '<div class="method method-add" data-space><span class="method-brand">' + icon("plus", "icon-sm") + "</span>" +
      '<span class="t-body1-medium">Add a payment method</span></div></section>';
    var payNow =
      '<button class="btn-app" type="button" data-action="next" data-dim data-color="surface/brand text/inverse" style="gap:8px">' +
      icon("lock", "icon-sm") + "Pay now</button>" +
      '<p class="t-caption c-tertiary center" style="margin-top:12px" data-type="Caption · 12/16 Regular" data-color="text/tertiary">We\'ll email your receipt to j•••@example.com.</p>';

    if (ctx.mode === "desktop") {
      return chrome(ctx, "", true,
        '<main class="page" data-space><div class="columns"><div class="col-6-center stack-8">' +
        '<h1 class="t-title1" data-type="Title 1 · 32/40 Bold">Pay balance</h1>' +
        '<section class="card" data-space style="display:flex;flex-direction:column;gap:24px">' + amount + methods + "<div>" + payNow + "</div></section>" +
        "</div></div></main>");
    }
    return chrome(ctx, "Pay balance", true,
      '<main class="page" data-space>' + amount + methods + "<div>" + payNow + "</div></main>");
  }

  function paidScreen(ctx) {
    var body =
      '<div class="center stack-8" data-space>' +
      '<div class="success-mark" data-dim data-color="surface/success/weak">' + icon("check") + "</div>" +
      '<h1 class="t-title2" style="margin-top:16px" data-type="Title 2 · 24/32 Bold">Payment received</h1>' +
      '<p class="t-body1 c-secondary" data-type="Body 1 · 16/24 Regular">You paid $45.00 for your Mar 4 urgent care visit.</p></div>' +
      '<section class="card" data-space data-dim><dl class="line-items">' +
      '<div class="line-item t-body2"><dt class="c-secondary">Paid with</dt><dd>Visa •••• 4242</dd></div>' +
      '<div class="line-item t-body2"><dt class="c-secondary">Date</dt><dd>Mar 21, 2026</dd></div>' +
      '<div class="line-item t-body2"><dt class="c-secondary">Confirmation</dt><dd>IH-48213</dd></div></dl></section>' +
      '<button class="btn-app" type="button" data-action="next" data-dim>Back to billing history</button>' +
      '<button class="btn-app btn-app-secondary" type="button" style="margin-top:8px;gap:8px">' + icon("receipt", "icon-sm") + "Download receipt</button>";

    if (ctx.mode === "desktop") {
      return chrome(ctx, "", false,
        '<main class="page" data-space><div class="columns"><div class="col-6-center" style="padding-top:40px">' +
        '<div class="card" style="display:flex;flex-direction:column;gap:24px">' + body.replace('style="margin-top:8px;gap:8px"', 'style="margin-top:-16px;gap:8px"') +
        "</div></div></div></main>");
    }
    return chrome(ctx, "Payment", false,
      '<main class="page" data-space style="padding-top:48px">' + body + "</main>");
  }

  DemoShell.mount({
    title: "Billing history",
    summary: "A member checks what they owe for a recent visit and pays it with the card on file.",
    steps: [
      {
        name: "Billing history",
        address: "member.includedhealth.com/billing",
        instruction: "Select the Mar 4 urgent care visit to see what you owe.",
        notes: [
          "Balance due sits first so members see what they owe before any detail.",
          "Only visits with a balance are tappable; paid visits show how they were settled.",
          "The list covers the last 12 months; older visits live in statements.",
        ],
        render: historyScreen(false),
      },
      {
        name: "Visit details",
        address: "member.includedhealth.com/billing/visits/0304",
        instruction: "Select Pay $45.00 to pay this visit.",
        notes: [
          "Charges show the full fee, what insurance paid, then what's left.",
          "The plan name under Insurance paid helps members match their EOB.",
        ],
        render: visitDetail,
      },
      {
        name: "Pay balance",
        address: "member.includedhealth.com/billing/visits/0304/pay",
        instruction: "Select Pay now to pay with the Visa on file.",
        notes: [
          "The card on file is selected by default; members can add another.",
          "The amount is fixed to the visit balance, so there's no field to get wrong.",
          "The receipt email is masked for privacy.",
        ],
        render: payScreen,
      },
      {
        name: "Payment received",
        address: "member.includedhealth.com/billing/visits/0304/paid",
        instruction: "Select Back to billing history to see the updated balance.",
        notes: [
          "Confirmation number and card match what's on the emailed receipt.",
          "Download receipt saves a PDF for HSA or FSA claims.",
        ],
        render: paidScreen,
      },
      {
        name: "Updated history",
        address: "member.includedhealth.com/billing",
        instruction: "That's the whole flow. Select Restart to run it again.",
        notes: [
          "Balance due drops to $0.00 and the card turns green.",
          "The Mar 4 visit now reads Paid with the payment date.",
        ],
        render: historyScreen(true),
      },
    ],
  });
})();
