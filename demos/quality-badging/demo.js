/* Provider Quality Badging: a copy of the Dot find-care demo (demos/dot-chat).
   Dot conversation: a member asks Dot to find providers or facilities.
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
  var typingDone = false; // Dot "thinks" each time a step with a new reply is entered
  // ?complete=1 (the Traditional side's Dot link): the first step opens with
  // its conversation already finished, no sending, typing or streaming.
  var startComplete = new URLSearchParams(location.search).get("complete") === "1";
  // The member's newest message shows "Sending..." for a moment, then "Sent".
  // Dot's "Thinking..." turn comes in with the message and lasts THINK_MS in all.
  var SEND_MS = 400;
  var THINK_MS = 1600;
  var sendDone = false;

  // Checkboxes (in the Versions section): Show deductible, Show Care Keys, Show copays.
  var copayPlan = false; // "Show deductible" unchecked: no deductible wording
  var showCopays = true; // "Show copays" checkbox: dollar amounts in chips and Dot's copy
  var costTag = "range"; // "Facility cost tag" switch: range | level | both
  var showTierChips = true; // "Show tier chips" checkbox: the Preferred/Standard copay chip and the avatar star
  var cardVersion = "v1"; // "Provider card" menu: v1 | v2 | v3 | v4 | v5

  // A Preferred provider's quality as styled text, not a chip. Three menus:
  // Quality style (icon and color), Quality copy (the words) and Quality
  // placement (the spot, per device).
  // Styles: q1 blue-to-purple gradient with a star, q2 gold with a medal,
  // q3 green with a shield, q4 accent purple (color/text/accentOne/base) with
  // a star, q5 brand blue (color/text/brand/base) with a star.
  var qualityVersion = "q1"; // "Quality style" menu: off | q1 | q2 | q3 | q4 | q5
  var qualityCopy = "c1"; // "Quality copy" menu: c1 | c2 | c3

  function qualityCopyText() {
    return { c1: "Top 10% of " + QUALITY_GROUP, c2: "Top provider", c3: "Highest Quality Provider" }[qualityCopy];
  }
  var qualityPlace = "top-right"; // "Quality placement (web)" menu (see qualitySpot)
  var qualityPlaceMobile = "above-avatar"; // "Quality placement (mobile)" menu

  // Where the tag goes, per device: above-avatar | top-right | under-name |
  // name-line | chips | below-address.
  function qualitySpot() {
    if (deviceMode === "mobile") return qualityPlaceMobile;
    return qualityPlace;
  }
  var QUALITY_GROUP = "Orthopedists";
  var qualityGradientId = 0;

  // A small info button after each quality tag (opens qualityLearn), in
  // the tag's own color. gradientId: V1's tag is gradient text, so its icon
  // strokes with the same gradient.
  function qualityInfo(gradientId) {
    var paint = "currentColor";
    var defs = "";
    if (gradientId) {
      paint = "url(#" + gradientId + ")";
      defs =
        '<defs><linearGradient id="' + gradientId + '" x1="0.3" y1="8" x2="11.7" y2="4" gradientUnits="userSpaceOnUse">' +
        '<stop offset="0" stop-color="#0012e7"/><stop offset="1" stop-color="#6a4cde"/></linearGradient></defs>';
    }
    return (
      '<button class="quality-info" type="button" data-learn="quality" aria-label="About this quality rating">' +
      '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">' + defs +
      '<circle cx="6" cy="6" r="5.25" fill="none" stroke="' + paint + '" stroke-width="1.2"/>' +
      '<circle cx="6" cy="3.6" r=".75" fill="' + paint + '"/>' +
      '<path d="M6 5.4v3.2" stroke="' + paint + '" stroke-width="1.2" stroke-linecap="round"/></svg></button>'
    );
  }

  // The info button's popup: what the quality tag means (placeholder copy).
  function qualityLearn() {
    var group = QUALITY_GROUP.toLowerCase();
    var title = qualityCopyText();
    var intro = {
      c1: "This provider ranks in the top 10% of " + group + " near you, based on Included Health's review of the quality of their care.",
      c2: "This provider is one of the highest-rated " + group + " near you, based on Included Health's review of the quality of their care.",
      c3: "This provider meets Included Health's highest quality standards for " + group + ".",
    }[qualityCopy];
    return {
      title: title,
      intro: intro,
      points: [
        "Patient outcomes: their patients tend to have fewer repeat visits and complications.",
        "Care guidelines: they follow proven, evidence-based care.",
        "Patient ratings: their patients rate their visits highly.",
      ],
    };
  }

  // The Quality copy, with the info icon kept on the same line as the last word.
  function qualityWords(info) {
    var words = qualityCopyText().split(" ");
    var last = words.pop();
    return "<span>" + words.join(" ") + " </span>" + '<span class="nowrap"><span>' + last + "</span>" + info + "</span>";
  }

  var deviceMode = "desktop"; // ctx.mode, for layouts that differ by device

  var saveSpot = "top"; // "Save icon" menu: top | name

  var saveMobile = "corner"; // "Save icon (mobile)" menu: corner | header | name

  // Save icon next to the name (16px) instead of at the header's top right,
  // per device: "Save icon (web)" on desktop, "Save icon (mobile)" on mobile.
  function bookmarkByName() {
    return deviceMode === "desktop" ? saveSpot === "name" : saveMobile === "name";
  }

  // "Top right corner" (mobile) and "Top right" (web): the card's class that
  // pins the save icon to the card's corner, not the name row.
  function saveCornerClass() {
    if (deviceMode === "mobile") return saveMobile === "corner" ? " save-corner" : "";
    return saveSpot === "top" ? " save-corner" : "";
  }

  // The header's top right, stacked: the Quality tag (Top right corner), V4's
  // chip, then the save icon. On mobile the Quality tag's version is one row.
  function headerAside(p, chip, bookmark) {
    var tag = qualityText(p, "top-right");
    var items = [tag, chip, bookmarkByName() ? "" : bookmark].filter(Boolean);
    if (items.length < 2) return items.join("");
    return '<div class="header-aside">' + items.join("") + "</div>";
  }

  // Quality icon menu: the tag's icon. The star is the original; the others are
  // the Anatomy: IH Design System icons (Style=Bold, 24px): medal-star
  // (2069:99862), award-ribbons-heart (2069:99845), award-ribbon-star
  // (2069:99828). "style" keeps each style's own icon (star, medal, shield).
  var qualityIcon = "star"; // "Quality icon" menu: star | medal-star | ribbons-heart | ribbon-star | style
  var QUALITY_ICONS = {
    "medal-star": [
      { evenodd: false, d: "M6.86145 7.87396C6.79095 7.80111 6.73595 7.71473 6.69977 7.62003L5.32977 3.65003C5.26914 3.46615 5.23875 3.27365 5.23977 3.08003V1.75003C5.23977 1.51937 5.28536 1.29099 5.37393 1.07801C5.4625 0.865041 5.5923 0.671677 5.75586 0.509043C5.91943 0.346409 6.11353 0.217714 6.327 0.130358C6.54048 0.0430028 6.76912 -0.00128947 6.99977 2.85741e-05H16.9998C17.4569 0.0104807 17.8918 0.199459 18.2114 0.526522C18.531 0.853585 18.7099 1.29275 18.7098 1.75003V3.02003C18.71 3.20705 18.6796 3.39285 18.6198 3.57003L17.3298 7.57003C17.2941 7.67517 17.2364 7.77149 17.1605 7.85254C17.0846 7.9336 16.9923 7.99752 16.8898 8.04003C16.7907 8.08445 16.6833 8.10741 16.5748 8.10741C16.4662 8.10741 16.3588 8.08445 16.2598 8.04003C14.9385 7.35042 13.4702 6.99028 11.9798 6.99028C10.4894 6.99028 9.02103 7.35042 7.69977 8.04003C7.60682 8.0805 7.50663 8.1017 7.40526 8.10236C7.30388 8.10302 7.20343 8.08312 7.10996 8.04386C7.01649 8.0046 6.93196 7.94681 6.86145 7.87396Z" },
      { evenodd: true, d: "M7.69458 9.80614C8.96906 8.95456 10.4674 8.50003 12.0002 8.50003C14.0549 8.50268 16.0246 9.32004 17.4774 10.7729C18.9302 12.2257 19.7476 14.1954 19.7502 16.25C19.7502 17.7828 19.2957 19.2812 18.4441 20.5557C17.5926 21.8302 16.3822 22.8235 14.966 23.4101C13.5499 23.9967 11.9917 24.1502 10.4883 23.8511C8.98495 23.5521 7.60403 22.814 6.52017 21.7301C5.43631 20.6463 4.6982 19.2653 4.39916 17.762C4.10013 16.2586 4.2536 14.7004 4.84018 13.2842C5.42676 11.8681 6.4201 10.6577 7.69458 9.80614ZM15.4748 20.2869C15.5037 20.1683 15.4951 20.0436 15.4502 19.93L14.4302 17.6C14.4113 17.5551 14.406 17.5055 14.4149 17.4576C14.4237 17.4096 14.4465 17.3652 14.4802 17.33L16.3102 15.53C16.4139 15.4603 16.4907 15.3573 16.5281 15.238C16.5654 15.1187 16.561 14.9903 16.5156 14.8739C16.4702 14.7575 16.3865 14.66 16.2783 14.5975C16.1701 14.535 16.0438 14.5112 15.9202 14.53H13.8302C13.7832 14.5283 13.7375 14.5133 13.6986 14.4868C13.6597 14.4602 13.6291 14.4232 13.6102 14.38L12.5202 12.04C12.4692 11.9438 12.3929 11.8633 12.2995 11.8071C12.2061 11.7509 12.0992 11.7213 11.9902 11.7213C11.8813 11.7213 11.7744 11.7509 11.681 11.8071C11.5876 11.8633 11.5113 11.9438 11.4602 12.04L10.3702 14.38C10.3514 14.4232 10.3208 14.4602 10.2819 14.4868C10.243 14.5133 10.1973 14.5283 10.1502 14.53H8.06025C7.93671 14.5112 7.81045 14.535 7.70224 14.5975C7.59403 14.66 7.51033 14.7575 7.46493 14.8739C7.41952 14.9903 7.41512 15.1187 7.45244 15.238C7.48976 15.3573 7.56658 15.4603 7.67025 15.53L9.50025 17.33C9.53651 17.3637 9.56095 17.4081 9.56996 17.4568C9.57897 17.5054 9.57206 17.5556 9.55025 17.6L8.55025 19.93C8.50535 20.0436 8.49679 20.1683 8.52574 20.2869C8.5547 20.4055 8.61974 20.5122 8.7119 20.5923C8.80406 20.6724 8.91881 20.7219 9.0403 20.7341C9.1618 20.7462 9.28407 20.7203 9.39025 20.66L11.8802 19.26C11.917 19.2399 11.9583 19.2293 12.0002 19.2293C12.0422 19.2293 12.0835 19.2399 12.1202 19.26L14.6102 20.66C14.7164 20.7203 14.8387 20.7462 14.9602 20.7341C15.0817 20.7219 15.1964 20.6724 15.2886 20.5923C15.3808 20.5122 15.4458 20.4055 15.4748 20.2869Z" },
    ],
    "ribbons-heart": [
      { evenodd: true, d: "M19.2968 4.60079C20.2574 6.03928 20.7701 7.73021 20.7701 9.45994C20.7688 10.6103 20.5409 11.7492 20.0995 12.8115C19.658 13.8738 19.0117 14.8388 18.1973 15.6513C17.3829 16.4638 16.4165 17.1079 15.3532 17.547C14.2899 17.986 13.1505 18.2113 12.0001 18.2099C10.2704 18.206 8.58063 17.6895 7.14434 16.7256C5.70804 15.7617 4.58964 14.3938 3.93044 12.7946C3.27124 11.1954 3.10081 9.43669 3.44069 7.74067C3.78057 6.04466 4.6155 4.48743 5.84 3.26572C7.0645 2.04401 8.62363 1.21264 10.3204 0.876636C12.0172 0.540634 13.7755 0.715077 15.3732 1.37793C16.9709 2.04078 18.3363 3.16229 19.2968 4.60079ZM12.0001 13.8533C12.2295 13.8533 12.452 13.7745 12.6301 13.6299C13.8701 12.6299 16.5001 10.2799 16.5001 8.41994C16.5001 5.80994 13.3501 4.84994 12.2301 7.41994C12.2109 7.46504 12.1789 7.50349 12.138 7.53052C12.0971 7.55755 12.0491 7.57196 12.0001 7.57196C11.9511 7.57196 11.9032 7.55755 11.8623 7.53052C11.8214 7.50349 11.7893 7.46504 11.7701 7.41994C10.6501 4.87994 7.50011 5.83994 7.50011 8.41994C7.50011 10.2799 10.1301 12.6299 11.3701 13.6299C11.5483 13.7745 11.7707 13.8533 12.0001 13.8533Z" },
      { evenodd: false, d: "M3.47016 15.0899C3.44432 15.0599 3.41197 15.0362 3.37557 15.0206C3.33918 15.005 3.2997 14.9979 3.26016 14.9999C3.21766 14.9995 3.17583 15.0105 3.13894 15.0315C3.10204 15.0526 3.0714 15.0831 3.05016 15.1199L0.630157 19.2699C0.539754 19.4316 0.496016 19.6151 0.503817 19.8002C0.511619 19.9852 0.570653 20.1645 0.674341 20.3179C0.778028 20.4714 0.922295 20.593 1.09106 20.6693C1.25983 20.7456 1.44646 20.7735 1.63016 20.7499L4.02016 20.3499L4.85016 22.6399C4.91572 22.8177 5.03042 22.9731 5.1809 23.0882C5.33139 23.2033 5.51146 23.2732 5.70016 23.2899C5.89561 23.3175 6.09486 23.2867 6.27281 23.2013C6.45076 23.1159 6.59946 22.9797 6.70016 22.8099L8.70016 19.4499C8.71766 19.4177 8.72683 19.3816 8.72683 19.3449C8.72683 19.3083 8.71766 19.2722 8.70016 19.2399C8.67177 19.1722 8.6179 19.1183 8.55016 19.0899C6.47137 18.3364 4.69025 16.934 3.47016 15.0899Z" },
      { evenodd: false, d: "M23.3702 19.27L21.0002 15.13C20.978 15.0927 20.9466 15.0618 20.9089 15.0403C20.8712 15.0189 20.8285 15.0076 20.7852 15.0076C20.7418 15.0076 20.6992 15.0189 20.6615 15.0403C20.6238 15.0618 20.5923 15.0927 20.5702 15.13C19.3548 16.9743 17.5767 18.3772 15.5002 19.13C15.4657 19.1425 15.4344 19.1624 15.4085 19.1883C15.3825 19.2142 15.3626 19.2455 15.3502 19.28C15.3327 19.3122 15.3235 19.3483 15.3235 19.385C15.3235 19.4217 15.3327 19.4578 15.3502 19.49L17.3502 22.84C17.4469 23.0029 17.5879 23.1349 17.7568 23.2208C17.9256 23.3066 18.1154 23.3427 18.304 23.3249C18.4926 23.3071 18.6722 23.2361 18.822 23.1202C18.9718 23.0042 19.0856 22.8481 19.1502 22.67L19.9802 20.38L22.3702 20.78C22.5539 20.8036 22.7405 20.7756 22.9093 20.6994C23.078 20.6231 23.2223 20.5014 23.326 20.348C23.4297 20.1945 23.4887 20.0153 23.4965 19.8302C23.5043 19.6452 23.4606 19.4616 23.3702 19.3V19.27Z" },
    ],
    "ribbon-star": [
      { evenodd: true, d: "M18.8731 3.98612C19.009 4.55554 18.9844 5.15147 18.8019 5.70772C19.3177 5.97304 19.7504 6.37535 20.0525 6.87047C20.3546 7.3656 20.5144 7.93439 20.5144 8.5144C20.5144 9.0944 20.3546 9.6632 20.0525 10.1583C19.7504 10.6534 19.3177 11.0558 18.8019 11.3211C18.9844 11.8773 19.009 12.4733 18.8731 13.0427C18.7372 13.6121 18.4462 14.1327 18.0322 14.5466C17.6183 14.9606 17.0977 15.2516 16.5283 15.3875C15.9589 15.5234 15.3629 15.4988 14.8067 15.3163C14.5413 15.8321 14.139 16.2648 13.6439 16.5669C13.1488 16.869 12.58 17.0288 12 17.0288C11.42 17.0288 10.8512 16.869 10.3561 16.5669C9.86095 16.2648 9.45864 15.8321 9.19332 15.3163C8.63707 15.4988 8.04113 15.5234 7.47172 15.3875C6.9023 15.2516 6.38171 14.9606 5.96777 14.5466C5.55382 14.1327 5.26275 13.6121 5.12687 13.0427C4.99099 12.4733 5.01563 11.8773 5.19806 11.3211C4.68229 11.0558 4.24961 10.6534 3.94751 10.1583C3.64542 9.6632 3.4856 9.0944 3.4856 8.5144C3.4856 7.93439 3.64542 7.3656 3.94751 6.87047C4.24961 6.37535 4.68229 5.97304 5.19806 5.70772C5.01563 5.15147 4.99099 4.55554 5.12687 3.98612C5.26275 3.41671 5.55382 2.89611 5.96777 2.48217C6.38171 2.06823 6.9023 1.77715 7.47172 1.64127C8.04113 1.50539 8.63707 1.53003 9.19332 1.71246C9.45864 1.19669 9.86095 0.76401 10.3561 0.461915C10.8512 0.159821 11.42 0 12 0C12.58 0 13.1488 0.159821 13.6439 0.461915C14.139 0.76401 14.5413 1.19669 14.8067 1.71246C15.3629 1.53003 15.9589 1.50539 16.5283 1.64127C17.0977 1.77715 17.6183 2.06823 18.0322 2.48217C18.4462 2.89611 18.7372 3.41671 18.8731 3.98612ZM9.72136 11.7545C9.81509 11.7648 9.90971 11.746 9.99237 11.7006L11.9301 10.6219C11.9668 10.6018 12.008 10.5913 12.0499 10.5913C12.0918 10.5913 12.133 10.6018 12.1698 10.6219L14.0775 11.7006C14.1596 11.7531 14.2565 11.7775 14.3536 11.7702C14.4507 11.7629 14.5429 11.7242 14.6161 11.6599C14.6893 11.5957 14.7397 11.5094 14.7597 11.4141C14.7797 11.3188 14.7681 11.2195 14.7268 11.1313L13.9577 9.3534C13.9363 9.30654 13.9306 9.25402 13.9414 9.20365C13.9522 9.15328 13.9789 9.10772 14.0176 9.07373L15.386 7.70536C15.4515 7.64659 15.4975 7.56908 15.5175 7.48335C15.5376 7.39761 15.5308 7.30778 15.4981 7.22603C15.4654 7.14428 15.4083 7.07455 15.3347 7.02629C15.261 6.97804 15.1743 6.95358 15.0863 6.95624H13.4982C13.4495 6.95641 13.4018 6.94232 13.3609 6.9157C13.3201 6.88907 13.288 6.85109 13.2685 6.80642L12.4395 5.01854C12.401 4.94297 12.3424 4.87951 12.2702 4.83519C12.1979 4.79087 12.1147 4.76741 12.03 4.76741C11.9452 4.76741 11.862 4.79087 11.7898 4.83519C11.7175 4.87951 11.6589 4.94297 11.6204 5.01854L10.8314 6.80642C10.8126 6.84956 10.782 6.88651 10.7431 6.91302C10.7042 6.93953 10.6587 6.95451 10.6116 6.95624H9.02352C8.9303 6.93819 8.83372 6.95154 8.74889 6.9942C8.66406 7.03687 8.59575 7.10644 8.55466 7.19205C8.51357 7.27765 8.50201 7.37446 8.52178 7.46733C8.54156 7.56021 8.59155 7.64391 8.66395 7.70536L10.0223 9.07373C10.0662 9.10378 10.0989 9.14756 10.1151 9.19818C10.1314 9.24881 10.1304 9.30342 10.1122 9.3534L9.34314 11.1313C9.30897 11.2192 9.30266 11.3154 9.32507 11.407C9.34749 11.4986 9.39754 11.5811 9.46843 11.6433C9.53932 11.7054 9.62763 11.7443 9.72136 11.7545Z" },
      { evenodd: false, d: "M13.9285 18.1021C14.5313 17.8294 15.069 17.4313 15.5058 16.9344C15.7521 16.9511 15.9993 16.9477 16.245 16.9244C16.279 16.9214 16.3133 16.9252 16.3458 16.9355C16.3784 16.9458 16.4086 16.9624 16.4347 16.9843C16.4854 17.0345 16.5142 17.1028 16.5146 17.1741V22.9972C16.5136 23.172 16.4667 23.3435 16.3786 23.4945C16.2905 23.6455 16.1643 23.7708 16.0126 23.8577C15.861 23.9447 15.6891 23.9903 15.5143 23.99C15.3395 23.9898 15.1678 23.9436 15.0164 23.8562L12.02 21.9984L9.02352 23.8662C8.87168 23.9538 8.69944 24 8.52411 24C8.34878 24 8.17654 23.9538 8.0247 23.8662C7.86856 23.7808 7.73808 23.6552 7.64676 23.5024C7.55545 23.3496 7.50661 23.1752 7.50532 22.9972V17.1841C7.50499 17.1487 7.51192 17.1136 7.52566 17.081C7.5394 17.0483 7.55967 17.0188 7.58522 16.9943C7.61186 16.9699 7.64365 16.9519 7.67825 16.9415C7.71284 16.9311 7.74933 16.9287 7.78499 16.9344C8.02762 16.9545 8.27149 16.9545 8.51412 16.9344C8.95094 17.4313 9.48869 17.8294 10.0915 18.1021C10.6943 18.3748 11.3483 18.5159 12.01 18.5159C12.6716 18.5159 13.3256 18.3748 13.9285 18.1021Z" },
    ],
  };
  var STAR_PATH = "M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.2 3.4 12.1l.7-4L1.2 5.3l4-.6z"; // in a 14px box

  // The icon at 14px in the tag's color, or in the Dark gradient (tilted like
  // --gradient-dark) when gradientId is given.
  function qualityIconSvg(name, gradientId) {
    var box = name === "star" ? 14 : 24;
    var paint = gradientId ? "url(#" + gradientId + ")" : "currentColor";
    var defs = gradientId
      ? '<defs><linearGradient id="' + gradientId + '" gradientUnits="userSpaceOnUse" x1="' + 0.02 * box + '" y1="' + 0.66 * box +
        '" x2="' + 0.98 * box + '" y2="' + 0.34 * box + '"><stop offset="0" stop-color="#0012e7"/><stop offset="1" stop-color="#6a4cde"/></linearGradient></defs>'
      : "";
    var paths = name === "star" ? [{ evenodd: false, d: STAR_PATH }] : QUALITY_ICONS[name];
    return (
      '<svg width="14" height="14" viewBox="0 0 ' + box + " " + box + '" aria-hidden="true">' + defs +
      paths.map(function (p) {
        return "<path" + (p.evenodd ? ' fill-rule="evenodd" clip-rule="evenodd"' : "") + ' d="' + p.d + '" fill="' + paint + '"/>';
      }).join("") +
      "</svg>"
    );
  }

  // Photo checkboxes, on cards that show the Quality tag (either or both):
  // Photo ring: a 2px ring around the photo in the tag's color (or the Dark gradient).
  // Photo badge: the design system's Badge Verified (Brand=Custom, Size=XS, Figma
  //   51167:13511) on the photo's corner: a 16px seal in the tag's color with
  //   a 1px white edge and the Quality icon in white (6px) in the center. It
  //   takes the place of the Preferred star badge.
  var photoRing = false; // "Photo ring" checkbox
  var photoBadge = false; // "Photo badge" checkbox
  var QUALITY_RING = {
    q1: "var(--gradient-dark)",
    q2: "#8a5a00",
    q3: "var(--text-success-strong)",
    q4: "#6a4cde",
    q5: "#0012e7",
  };
  function photoRingAttrs(p) {
    if (!photoRing || !p.preferred || qualityVersion === "off") return "";
    return ' style="--ring: ' + QUALITY_RING[qualityVersion] + '"';
  }
  function photoRingClass(p) {
    return photoRingAttrs(p) ? " photo-ring" : "";
  }

  var SEAL_PATH = "M7.2202 0.812922C7.65626 0.39547 8.34374 0.395471 8.7798 0.812923L9.58974 1.58828C9.838 1.82595 10.1811 1.93742 10.5216 1.89107L11.6326 1.73986C12.2308 1.65845 12.787 2.06253 12.8944 2.65657L13.0939 3.75992C13.155 4.09811 13.3671 4.38996 13.6698 4.55263L14.6575 5.08332C15.1893 5.36904 15.4017 6.02287 15.1394 6.56659L14.6523 7.57649C14.503 7.88604 14.503 8.24678 14.6523 8.55632L15.1394 9.56622C15.4017 10.1099 15.1893 10.7638 14.6575 11.0495L13.6698 11.5802C13.3671 11.7429 13.155 12.0347 13.0939 12.3729L12.8944 13.4762C12.787 14.0703 12.2308 14.4744 11.6326 14.393L10.5216 14.2417C10.1811 14.1954 9.83799 14.3069 9.58974 14.5445L8.7798 15.3199C8.34374 15.7373 7.65626 15.7373 7.2202 15.3199L6.41026 14.5445C6.162 14.3069 5.81892 14.1954 5.47838 14.2417L4.36738 14.393C3.76923 14.4744 3.21305 14.0703 3.10564 13.4762L2.90613 12.3729C2.84498 12.0347 2.63294 11.7429 2.3302 11.5802L1.3425 11.0495C0.810727 10.7638 0.598286 10.1099 0.860554 9.56622L1.34768 8.55632C1.497 8.24678 1.497 7.88603 1.34768 7.57649L0.860554 6.56659C0.598286 6.02287 0.810727 5.36904 1.3425 5.08332L2.3302 4.55263C2.63294 4.38996 2.84498 4.09811 2.90613 3.75992L3.10564 2.65657C3.21305 2.06253 3.76923 1.65845 4.36738 1.73986L5.47838 1.89107C5.81892 1.93742 6.162 1.82595 6.41026 1.58828L7.2202 0.812922Z";
  var sealId = 0;
  function showsSeal(p) {
    return photoBadge && p.preferred && qualityVersion !== "off";
  }
  function qualitySeal(p) {
    if (!showsSeal(p)) return "";
    var defs = "";
    var fill = QUALITY_RING[qualityVersion];
    if (qualityVersion === "q1") {
      var id = "quality-seal-" + ++sealId;
      defs = '<defs><linearGradient id="' + id + '" gradientUnits="userSpaceOnUse" x1="0.3" y1="11.2" x2="15.7" y2="5.8">' +
        '<stop offset="0" stop-color="#0012e7"/><stop offset="1" stop-color="#6a4cde"/></linearGradient></defs>';
      fill = "url(#" + id + ")";
    }
    // "Style's own" icons are drawn for color, so the white center uses the
    // closest design system icon instead.
    var icon = qualityIcon !== "style" ? qualityIcon : qualityVersion === "q2" ? "medal-star" : "star";
    var box = icon === "star" ? 14 : 24;
    var paths = icon === "star" ? [{ evenodd: false, d: STAR_PATH }] : QUALITY_ICONS[icon];
    return (
      '<span class="quality-seal" role="img" aria-label="' + qualityCopyText() + '">' +
      '<svg width="16" height="17" viewBox="0 0 16 17" aria-hidden="true">' + defs +
      '<path d="' + SEAL_PATH + '" style="fill: ' + fill + '" stroke="#fff"/>' +
      '<svg x="5" y="5.07" width="6" height="6" viewBox="0 0 ' + box + " " + box + '">' +
      paths.map(function (q) {
        return "<path" + (q.evenodd ? ' fill-rule="evenodd" clip-rule="evenodd"' : "") + ' d="' + q.d + '" fill="#fff"/>';
      }).join("") +
      "</svg></svg></span>"
    );
  }

  // The tag, only at its spot (one call per spot in the card markup): the
  // Quality style's icon and color with the Quality copy.
  function qualityText(p, spot) {
    if (!p.preferred || qualityVersion === "off" || qualitySpot() !== spot) return "";
    var at = " is-at-" + spot;
    var icon;
    var info;
    var style;
    if (qualityVersion === "q1") {
      var id = "quality-gradient-" + ++qualityGradientId;
      style = "is-gradient";
      icon =
        '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><defs><linearGradient id="' + id + '" x1="0.03" y1="0.66" x2="0.97" y2="0.34">' +
        '<stop offset="0" stop-color="#0012e7"/><stop offset="1" stop-color="#6a4cde"/></linearGradient></defs>' +
        '<path d="M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.2 3.4 12.1l.7-4L1.2 5.3l4-.6z" fill="url(#' + id + ')"/></svg>';
      info = qualityInfo(id + "-info");
    } else if (qualityVersion === "q2") {
      style = "is-gold";
      icon =
        '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M4 0.8h2.2L7 3.2 7.8.8H10L8.6 4.6A4.2 4.2 0 1 1 5.4 4.6z" fill="currentColor" opacity=".45"/>' +
        '<circle cx="7" cy="8.6" r="3.6" fill="currentColor"/><path d="M7 6.6l.6 1.3 1.4.2-1 1 .2 1.4L7 9.8l-1.2.7.2-1.4-1-1 1.4-.2z" fill="#fff"/></svg>';
      info = qualityInfo();
    } else if (qualityVersion === "q4" || qualityVersion === "q5") {
      style = qualityVersion === "q4" ? "is-accent" : "is-brand";
      icon =
        '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">' +
        '<path d="M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.2 3.4 12.1l.7-4L1.2 5.3l4-.6z" fill="currentColor"/></svg>';
      info = qualityInfo();
    } else {
      style = "is-green";
      icon =
        '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 .8l5 1.9v3.8c0 3.1-2.1 5.6-5 6.7-2.9-1.1-5-3.6-5-6.7V2.7z" fill="currentColor"/>' +
        '<path d="M4.6 7l1.6 1.6 3.2-3.2" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      info = qualityInfo();
    }
    // The Quality icon menu swaps the style's icon (unless it's "Style's own").
    if (qualityIcon !== "style") icon = qualityIconSvg(qualityIcon, style === "is-gradient" ? id + "-icon" : null);
    return '<span class="quality-text ' + style + at + '">' + icon + qualityWords(info) + "</span>";
  }

  // Page structure V2: cards carry their rank (1, 2, 3...) just left of the
  // card, outside it, so the cards stay where they are.
  var pageVersion = "v1"; // "Page structure" menu: v1 | v2
  function rankMarker(rank) {
    return pageVersion === "v2" && rank ? '<span class="rank-marker" aria-label="Ranked ' + rank + '">' + rank + "</span>" : "";
  }

  // V2 and V3 move quality into plain text; V1 and V4 keep the tier chip and avatar badge.
  function qualityAsText() {
    return cardVersion === "v2" || cardVersion === "v3";
  }

  // V5: V1 plus a thin gradient band across the card's top, on Preferred providers.
  function bestMatchBand(p) {
    return cardVersion === "v5" && p.preferred ? '<p class="best-match-band">Best match for you</p>' : "";
  }

  // V4: V1 plus a gradient "Recommended" chip at the card's top right, on
  // Preferred providers.
  function bestMatchChip(p) {
    return cardVersion === "v4" && p.preferred ? '<div class="best-match-slot"><span class="chip chip-best-match">' +
      '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0.5l1.3 3.6 3.7 1.4-3.7 1.4L6 10.5 4.7 6.9 1 5.5l3.7-1.4z" fill="currentColor"/></svg>' +
      'Recommended</span></div>' : "";
  }

  // Provider card V2 and V3 (quality badging): quality reads as plain text
  // instead of a tier name in the chip or a badge on the avatar. Quality,
  // reasons and availability are placeholders until real data lands.
  var QUALITY_SCOPE = "orthopedics";
  var QUALITY_REASONS = [
    "Strong results for patients with knee and sports injuries",
    "Follows care guidelines, like trying physical therapy before surgery",
    "Patients rate their visits highly",
  ];
  var AVAILABILITY = ["Available today", "Next available Tue", "Next available Thu", "Available this week"];
  var whyOpen = {}; // V3: provider name -> "Why this provider" is open

  function availability(p) {
    return AVAILABILITY[p.name.length % AVAILABILITY.length];
  }

  // V2: one plain line under the address with quality, distance and availability.
  function attributeLine(p) {
    var parts = [];
    if (p.preferred) parts.push("<b>Top quality for " + QUALITY_SCOPE + "</b>");
    parts.push(p.distance, availability(p));
    return '<p class="attribute-line">' + parts.join('<span aria-hidden="true"> · </span>') + "</p>";
  }

  // V3: a "Why this provider" row that opens to the quality reason. Only
  // providers with a quality reason (Preferred) get one.
  function whyRow(p) {
    if (!p.preferred) return "";
    var open = !!whyOpen[p.name];
    return (
      '<div class="why-row' + (open ? " is-open" : "") + '">' +
      '<button class="why-toggle" type="button" aria-expanded="' + open + '" data-why="' + p.name + '">Why this provider' +
      '<svg class="why-chevron" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "</button>" +
      '<div class="why-body"' + (open ? "" : " hidden") + ">" +
      '<p class="why-title">Top quality for ' + QUALITY_SCOPE + "</p>" +
      '<ul class="why-list">' + QUALITY_REASONS.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>" +
      '<p class="why-source">Based on Included Health\'s review of patient outcomes and care.</p>' +
      "</div></div>"
    );
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-why]");
    if (!t) return;
    var name = t.getAttribute("data-why");
    var open = !whyOpen[name];
    whyOpen[name] = open;
    t.setAttribute("aria-expanded", String(open));
    t.parentElement.classList.toggle("is-open", open);
    t.nextElementSibling.hidden = !open;
  });

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
        (showsSeal(p) ? qualitySeal(p) : p.preferred && showTierChips && !qualityAsText() ? verifiedBadge() : "") + "</span>"
      );
    }
    return (
      '<span class="avatar is-initials">' +
      '<img class="avatar-bg" src="' + PS + 'avatar-initials-bg.svg" width="48" height="48" alt="">' +
      '<span class="avatar-initials" aria-hidden="true">' + initials(p.name) + "</span>" +
      (showsSeal(p) ? qualitySeal(p) : p.preferred && showTierChips && !qualityAsText() ? verifiedBadge() : "") + "</span>"
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
    var label = preferred ? "Preferred provider" : "Standard Provider";
    var text = showCopays ? label + ": <b>" + amount + "</b>" : label;
    // V2 and V3 leave quality to the text, so the chip is just the copay.
    if (qualityAsText()) {
      if (!showCopays) return "";
      text = "<b>" + amount + "</b>";
    }
    if (!showTierChips) return "";
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
    if (preferred) parts.push("<b>Preferred providers</b> meet our highest quality standards and usually have a lower copay.");
    if (standard) parts.push("<b>Standard providers</b> are covered too, usually with a higher copay.");
    if (parts.length < 2) return "<p>" + lead + " " + parts.join("") + "</p>";
    return "<p>" + lead + "</p><ul>" + parts.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
  }

  function providerSet(set) {
    return PROVIDERS.slice(set * PAGE_SIZE, (set + 1) * PAGE_SIZE);
  }

  function providerCard(p, rank) {
    var bookmark =
      '<button class="bookmark-button" type="button" aria-label="Save ' + p.name + '">' +
      '<img src="' + PS + 'bookmark.svg" width="24" height="24" alt=""></button>';
    var chips =
      copayChip(p) +
      '<span class="chip chip-network"><img src="' + PS + 'check-circle.svg" width="12" height="12" alt="">In-network</span>';
    return (
      '<article class="provider-card' + saveCornerClass() + photoRingClass(p) + '" data-card="' + cardVersion + '"' + photoRingAttrs(p) + ">" +
      rankMarker(rank) +
      // The band goes inside card-top so carousel cards keep their three shared rows.
      '<div class="provider-content"><div class="card-top">' +
      bestMatchBand(p) +
      qualityText(p, "above-avatar") +
      '<div class="provider-header">' +
      avatar(p) +
      '<div class="provider-title">' +
      '<p class="provider-name">' + p.name +
      (p.careKey && showCareKeys ? careKeyIcon() : "") + qualityText(p, "name-line") + (bookmarkByName() ? bookmark : "") + "</p>" +
      qualityText(p, "under-name") +
      '<p class="provider-specialties">' + p.specialties + "</p></div>" +
      headerAside(p, cardVersion === "v4" ? bestMatchChip(p) : "", bookmark) +
      "</div>" +
      // Same chips as care search's mobile cards: tier, network, then offerings.
      '<div class="chips">' + qualityText(p, "chips") + chips + offeringChips(p) + "</div>" +
      '<p class="provider-summary">' + p.summary + "</p>" +
      (cardVersion === "v3" ? whyRow(p) : "") +
      '</div><div class="card-bottom">' +
      '<img class="divider" src="' + PS + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><div class="clinic-address">' +
      '<p class="clinic-name">' + p.clinic + "</p>" +
      '<p class="clinic-street">' + p.address + "</p>" +
      qualityText(p, "below-address") +
      (cardVersion === "v2" ? attributeLine(p) + "</div></div>" :
        "</div>" + '<p class="clinic-distance">' + p.distance + "</p></div>") +
      "</div></div>" +
      '<div class="button-stack">' +
      '<button class="btn-outline" type="button">View profile</button>' +
      '<button class="btn-solid" type="button">Schedule</button>' +
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
    var costRange = rangeTags();
    return carousel(
      list.slice(set * PAGE_SIZE, (set + 1) * PAGE_SIZE).map(function (item, i) {
        return kind === "providers" ? providerCard(item, set * PAGE_SIZE + i + 1) : facilityCard(item, costRange);
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
            ? tierMessage(
                pageVersion === "v2"
                  ? "Here are your next three matches, ranked <b>#4</b> to <b>#6</b>. They're in-network orthopedists near you who treat knee pain."
                  : "Here are three more in-network orthopedists near you who treat knee pain.",
                providerSet(1)
              )
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
    return '<div class="dot-results clinic-preview">' + facilityCard(f, rangeTags()) + "</div>";
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
        // The tier explainer appears with the cards, after the pause.
        '<div class="dot-message results-note" data-type="Body 1 · 16/24 Medium">' +
        tierMessage(
          pageVersion === "v2"
            ? "Here are your top matches, ranked for you. <b>#1</b> is the best fit for your knee pain, based on your preferences and each provider's quality of care."
            : "Here are your top matches.",
          providerSet(0)
        ) + "</div>" +
        resultCards("providers", 0, ctx)
    );
    // The chat ends with the provider results (no quick prompts after them).
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
    showTierChips = ctx.toggles.tierChips !== false;
    photoRing = ctx.toggles.photoRing !== false;
    photoBadge = ctx.toggles.photoBadge === true;
    costTag = ctx.switches.costTag || "range";
    cardVersion = ctx.switches.card || "v1";
    pageVersion = ctx.switches.page || "v1";
    // Dot's cards use the mobile card design on web too (placements, save
    // icon, size), so they always follow the mobile menus.
    deviceMode = "mobile";
    saveSpot = ctx.switches.save || "name";
    saveMobile = ctx.switches.saveMobile || "name";
    qualityVersion = ctx.switches.quality || "q1";
    qualityCopy = ctx.switches.qualityCopy || "c3";
    qualityIcon = ctx.switches.qualityIcon || "star";
    qualityPlace = ctx.switches.qualityPlace || "top-right";
    qualityPlaceMobile = ctx.switches.qualityPlaceMobile || "above-avatar";
    // Keep the results-step quick prompts in the thread for the steps after it;
    // drop them when going back before the results or switching path.
    if (ctx.switches.path !== lastPath || (ctx.step !== lastStep && ctx.index < RESULTS[ctx.switches.path])) {
      followUps = [];
      lastPath = ctx.switches.path;
    }
    if (ctx.step !== lastStep) followPhase = "done";
    if (ctx.step !== lastStep) {
      typingDone = ctx.index === 0 || startComplete;
      sendDone = typingDone;
      if (startComplete && ctx.step) typedSteps[ctx.step.name] = true;
      startComplete = false;
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

  // ---------- Quality info popup: the care search learn-more modal (modal on
  //            desktop, slide-up sheet on mobile), copied from Traditional. ----------
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

  function openLearnMore(trigger) {
    var info = qualityLearn();
    openModal(
      '<h2 class="learn-title" id="learn-title">' + info.title + "</h2>" +
        '<p class="learn-intro">' + info.intro + "</p>" +
        '<ul class="learn-points">' + info.points.map(function (pt) {
          return "<li>" + pt + "</li>";
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
    var learn = e.target.closest("[data-learn]");
    if (learn) {
      openLearnMore(learn);
      return;
    }
    if (e.target.closest("[data-learn-close]")) closeLearnMore();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLearnMore();
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
    title: "Provider Quality Badging",
    versionsSectionLabel: "Configure",
    menuNotes: false, // no descriptions under the dropdowns
    feedback: true,
    summary: "A member with knee pain asks Dot, the AI assistant, to find an orthopedist.",
    demoSwitch: {
      label: "Demo",
      current: "dot",
      options: [
        { id: "traditional", label: "Traditional", href: "../quality-badging-traditional/" },
        { id: "dot", label: "Dot" },
      ],
    },
    switches: [
      {
        // Presets: whole-configuration versions. Picking one sets the menus
        // and checkboxes below (V1 is the defaults; V2 puts the quality tag
        // above the photo, left-aligned, on web and mobile, and the web save
        // icon in the top right corner). Tweaks after that stay as they are.
        key: "milestone",
        label: "Presets",
        section: "versions",
        menu: true,
        options: [
          { id: "v1", label: "V1", apply: { switches: { page: "v1", quality: "q1", qualityCopy: "c3", qualityIcon: "star", qualityPlace: "top-right", qualityPlaceMobile: "above-avatar", save: "name", saveMobile: "name", card: "v1" }, toggles: { deductible: false, careKeys: false, copays: false, tierChips: false, photoRing: true, photoBadge: false } } },
          { id: "v2", label: "V2", apply: { switches: { page: "v1", quality: "q1", qualityCopy: "c3", qualityIcon: "star", qualityPlace: "above-avatar", qualityPlaceMobile: "above-avatar", save: "top", saveMobile: "name", card: "v1" }, toggles: { deductible: false, careKeys: false, copays: false, tierChips: false, photoRing: true, photoBadge: false } } },
        ],
      },
      {
        // Page structure: how the results page frames the list. V2 says the
        // providers are ranked for the member and numbers each card.
        key: "page",
        label: "Page structure",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "v1", label: "V1", description: "The current page copy." },
          { id: "v2", label: "V2 · Ranked for you", description: "Copy says providers are listed best match first, with a number left of each card." },
        ],
      },
      {
        // Quality: how a Preferred provider's quality reads on the card, as
        // styled text (no chip). Each version tries its own wording and spot.
        key: "quality",
        label: "Quality style",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "q1", label: "Dark gradient", description: "Blue-to-purple gradient text and star." },
          { id: "off", label: "Off", description: "No quality text." },
          { id: "q2", label: "Gold", description: "Gold text and medal." },
          { id: "q3", label: "Green", description: "Green text and shield." },
          { id: "q4", label: "Accent purple (accentOne)", description: "color/text/accentOne/base (#6A4CDE) text and star, no gradient." },
          { id: "q5", label: "Brand blue (brand)", description: "color/text/brand/base (#0012E7) text and star, no gradient." },
        ],
      },
      {
        // Quality copy: the words in the Quality tag, in any style.
        key: "qualityCopy",
        label: "Quality copy",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "c3", label: "Highest Quality Provider" },
          { id: "c1", label: "Top 10% of Orthopedists" },
          { id: "c2", label: "Top provider" },
        ],
      },
      {
        // Quality icon: the tag's icon, in the style's color.
        key: "qualityIcon",
        label: "Quality icon",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "star", label: "Star" },
          { id: "medal-star", label: "Medal with a star" },
          { id: "ribbons-heart", label: "Award ribbons with a heart" },
          { id: "ribbon-star", label: "Award ribbon with a star" },
          { id: "style", label: "Style's own (gradient & purple & blue: star, gold: medal, green: shield)" },
        ],
      },
      {
        // Quality placement (web): where the chosen Quality tag sits on the card.
        key: "qualityPlace",
        label: "Quality placement (web)",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "top-right", label: "Top right corner", description: "Above the save icon, wherever that is." },
          { id: "above-avatar", label: "Above the photo", description: "Left-aligned at the top of the card." },
          { id: "under-name", label: "Under the name", description: "Between the name and the specialty." },
          { id: "name-line", label: "Next to the name", description: "On the name line, right after the name." },
          { id: "chips", label: "In the chip row", description: "First in the row with the copay and network chips, still as text." },
          { id: "below-address", label: "Under the address", description: "With the clinic and distance, right above the buttons." },
        ],
      },
      {
        // Quality placement (mobile): the same spots, set apart from web.
        key: "qualityPlaceMobile",
        label: "Quality placement (mobile)",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "above-avatar", label: "Above the photo", description: "Left-aligned at the top of the card." },
          { id: "top-right", label: "Top right corner", description: "Its own row at the card's top right, beside the save icon when that's at the top right." },
          { id: "under-name", label: "Under the name", description: "Between the name and the specialty." },
          { id: "name-line", label: "Next to the name", description: "On the name line, right after the name." },
          { id: "chips", label: "In the chip row", description: "First in the row with the copay and network chips, still as text." },
          { id: "below-address", label: "Under the address", description: "With the clinic and distance, right above the buttons." },
        ],
      },
      {
        // Save icon: next to the provider's name (16px), or right-aligned at
        // the top of the card, under the quality tag or V4 chip when there is one.
        key: "save",
        label: "Save icon (web)",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "name", label: "Next to name", description: "Right after the provider's name, at 16px." },
          { id: "top", label: "Top right corner", description: "Pinned to the card's top right corner, below the quality tag or chip if there is one." },
        ],
      },
      {
        // Save icon on mobile, set apart from web.
        key: "saveMobile",
        label: "Save icon (mobile)",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "name", label: "Next to name", description: "Right after the provider's name, at 16px." },
          { id: "corner", label: "Top right corner", description: "Pinned to the card's corner at 20px, level with a quality tag above the photo." },
          { id: "header", label: "Top right, by the name", description: "At the header's right, centered on the name, at 20px." },
        ],
      },
      {
        // Provider card: versions of the provider card to explore quality
        // badging. V1 is the tier chip; V2 and V3 move quality into plain text.
        key: "card",
        label: "Provider card",
        section: "versions",
        menu: true,
        showIf: { key: "path", id: "providers" },
        options: [
          { id: "v1", label: "V1", description: "The current card: tier chip with the copay." },
          { id: "v2", label: "V2 · Attribute line", description: "Plain text by distance and availability, like \"Top quality for orthopedics.\"" },
          { id: "v3", label: "V3 · Why this provider", description: "A row that opens to the quality reason, keeping the default card clean." },
          { id: "v4", label: "V4 · Recommended chip", description: "V1 plus a blue-to-purple \"Recommended\" chip at the top right." },
          { id: "v5", label: "V5 · Best match band", description: "V1 plus a thin gradient band across the card's top that says \"Best match for you.\"" },
        ],
      },
      {
        // Providers only here; the switch stays so the code keeps working.
        key: "path",
        label: "Path",
        hidden: true,
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
      { key: "copays", label: "Show copays", checked: false },
      { key: "tierChips", label: "Show tier chips", checked: false },
      { key: "photoRing", label: "Photo ring", checked: true },
      { key: "photoBadge", label: "Photo badge", checked: false },
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
            "Checkboxes in Versions: Show deductible, Show Care Keys and Show copays each turn their mentions on or off.",
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
                "Facility chips show the per-visit copay range ($10–$50 or $100–$200); without copays they show Lower or Higher cost.",
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
        instruction: "Dot pulls up orthopedists. The chat ends with the cards.",
        notes: function (ctx) {
          return [
            "Dot says it's pulling up matches, then pauses 2 seconds before the cards appear.",
            "With the cards, Dot explains in plain text only the tiers shown: Preferred for the first set, both once a Standard provider appears. The Plan Key box is only in Traditional.",
            "Cards use the older design: the copay chip names the tier (Preferred provider / Standard Provider), with View profile and Schedule.",
            "Three orthopedists who treat knee pain appear as cards in a swipeable row. Specialist copays: $40 Preferred, $300 Standard.",
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
