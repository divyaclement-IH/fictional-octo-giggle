/* Provider Quality Badging (Traditional): a copy of care search
   (demos/provider-search) paired with the Dot demo (demos/quality-badging),
   so the Traditional / Dot switch stays inside this demo.
   Provider search results: a member reviews matched primary care providers. */
(function () {
  "use strict";

  var A = "../provider-search/assets/"; // shares care search's assets

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
  // Checkboxes (in the Versions section), each on its own: Show deductible, Show Care Keys, Show copays.
  var copayOnly = false; // "Show deductible" unchecked: a copay plan with no deductible
  var showCopays = true; // "Show copays" unchecked: no dollar amounts on cards or plan cards
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
  var QUALITY_GROUP = "Primary Care Providers";
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

  // Mobile "Top right corner": the card's class that pins the save icon there.
  function saveCornerClass() {
    return deviceMode === "mobile" && saveMobile === "corner" ? " save-corner" : "";
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
  var QUALITY_SCOPE = "primary care";
  var QUALITY_REASONS = [
    "Strong results keeping patients healthy, like on-time screenings",
    "Follows care guidelines for ongoing conditions",
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

  function readScenario(ctx) {
    copayOnly = ctx.toggles.deductible === false;
    showCareKeys = ctx.toggles.careKeys !== false;
    showCopays = ctx.toggles.copays !== false;
    showTierChips = ctx.toggles.tierChips !== false;
    photoRing = ctx.toggles.photoRing === true;
    photoBadge = ctx.toggles.photoBadge === true;
    costTag = ctx.switches.costTag || "range";
    cardVersion = ctx.switches.card || "v1";
    pageVersion = ctx.switches.page || "v1";
    deviceMode = ctx.mode;
    saveSpot = ctx.switches.save || "name";
    saveMobile = ctx.switches.saveMobile || "name";
    qualityVersion = ctx.switches.quality || "q1";
    qualityCopy = ctx.switches.qualityCopy || "c3";
    qualityIcon = ctx.switches.qualityIcon || "star";
    qualityPlace = ctx.switches.qualityPlace || "top-right";
    qualityPlaceMobile = ctx.switches.qualityPlaceMobile || "above-avatar";
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
  // Avatar badge (Carrum Figma 141:1172): purple verification badge with a
  // white star, in a 16px box that it overflows slightly top and bottom.
  function verifiedBadge(tappable) {
    var img =
      '<span class="badge-verified badge-star-verified"' + (tappable ? "" : ' role="img" aria-label="IH Preferred Provider"') +
      ' title="IH Preferred Provider" data-icon="Verification Badge">' +
      '<img src="../quality-badging/assets/badge-verified-avatar.svg" width="16.0256" height="16.6718" alt=""></span>';
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
        (showsSeal(p) ? qualitySeal(p) : p.preferred && showTierChips && !qualityAsText() ? verifiedBadge(tappable) : "") + "</span>"
      );
    }
    return (
      '<span class="avatar is-initials"' + (first ? " data-dim" : "") + ">" +
      '<img class="avatar-bg" src="' + A + 'avatar-initials-bg.svg" width="48" height="48" alt="">' +
      '<span class="avatar-initials" aria-hidden="true">' + initials(p.name) + "</span>" +
      (showsSeal(p) ? qualitySeal(p) : p.preferred && showTierChips && !qualityAsText() ? verifiedBadge(tappable) : "") + "</span>"
    );
  }

  function providerCard(p, opts) {
    var first = opts.first;
    var bookmark =
      '<button class="bookmark-button" type="button" aria-label="Save ' + p.name + '">' +
      '<img src="' + A + 'bookmark.svg" width="24" height="24" alt=""' + (first ? ' data-icon="bookmark"' : "") + "></button>";
    var chips;
    if (opts.oon) {
      chips =
        '<span class="chip chip-neutral">Out-of-network rates apply</span>' +
        '<span class="chip chip-oon">Out-of-network</span>';
    } else {
      // Older card design: the chip names the tier, then the copay in bold.
      // Without copays it just names the tier; without a deductible it drops "after deductible".
      var amount = (opts.top ? "$10" : "$100") + " copay" + (copayOnly ? "" : " after deductible");
      var label = opts.top ? "Preferred provider" : "Standard Provider";
      var text = showCopays ? label + ": <b>" + amount + "</b>" : label;
      // V2 and V3 leave quality to the text, so the chip is just the copay.
      if (qualityAsText()) text = showCopays ? "<b>" + amount + "</b>" : "";
      chips = !text || !showTierChips ? "" :
        '<span class="chip chip-tier is-' + (opts.top ? "preferred" : "standard") + '"' +
        (first ? ' data-type="Caption · 12/16 Medium"' : "") + "><span>" + text + "</span></span>";
      if (opts.cfg.networkChip) {
        chips +=
          '<span class="chip chip-network"><img src="' + A + 'check-circle.svg" width="12" height="12" alt=""' +
          (first ? ' data-icon="check-circle"' : "") + ">In-network</span>";
      }
    }
    return (
      '<article class="provider-card' + saveCornerClass() + photoRingClass(p) + '" data-card="' + cardVersion + '"' + photoRingAttrs(p) + (first ? " data-space data-dim" : "") + ">" +
      rankMarker(opts.rank) +
      (opts.oon ? "" : bestMatchBand(p)) +
      '<div class="provider-content"' + (first ? " data-space" : "") + ">" +
      qualityText(p, "above-avatar") +
      '<div class="provider-header">' +
      avatar(p, first, opts.cfg && opts.cfg.explainBadges) +
      '<div class="provider-title">' +
      '<p class="provider-name"' + (first ? ' data-type="Title 4 · 16/24 Bold"' : "") + ">" + p.name +
      (p.careKey && showCareKeys ? careKeyIcon(opts.cfg && opts.cfg.explainBadges) : "") + qualityText(p, "name-line") + (bookmarkByName() ? bookmark : "") + "</p>" +
      qualityText(p, "under-name") +
      '<p class="provider-specialties"' + (first ? ' data-type="Caption · 14/20 Medium" data-color="text/neutral/strong"' : "") + ">" + p.specialties + "</p></div>" +
      headerAside(p, cardVersion === "v4" && !opts.oon ? bestMatchChip(p) : "", bookmark) +
      "</div>" +
      '<div class="chips">' + qualityText(p, "chips") + chips + offeringChips(p) + "</div>" +
      '<p class="provider-summary"' + (first ? ' data-type="Body 2 · 14/20 Medium"' : "") + ">" + p.summary + "</p>" +
      (cardVersion === "v3" && !opts.oon ? whyRow(p) : "") +
      '<img class="divider" src="' + A + 'divider.svg" width="520" height="1" alt="">' +
      '<div class="clinic"><div class="clinic-address">' +
      '<p class="clinic-name"' + (first ? ' data-type="Body 2 · 14/20 Bold"' : "") + ">" + p.clinic + "</p>" +
      '<p class="clinic-street' + (opts.top ? "" : " is-small") + '">' + p.address + "</p>" +
      qualityText(p, "below-address") +
      (cardVersion === "v2" ? attributeLine(p) + "</div></div>" :
        "</div>" + '<p class="clinic-distance"' + (first ? ' data-color="text/success/strongest"' : "") + ">" + p.distance + "</p></div>") +
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
    var ranked = pageVersion === "v2";
    var ranking = ranked
      ? "Providers are listed in order, best match first. We rank them by how well they fit your preferences and their quality of care. "
      : "We rank providers based on how well they match your preferences and their overall quality of care. ";
    // V2 names the ranking in the headers too.
    var topTitle = ranked
      ? (inNetworkList ? "Your top in-network matches, ranked for you" : "Your top matches, ranked for you")
      : (inNetworkList ? "Top in-network matches" : "Top matches");
    var otherTitle = ranked
      ? "More matches, #" + (TOP_MATCHES.length + 1) + " to #" + (TOP_MATCHES.length + OTHER_MATCHES.length)
      : (inNetworkList ? "Other in-network matches" : "Other top matches");
    var otherNote = ranked ? "Still listed best match first." : "Providers are ranked based on your preferences";
    var description = !inNetworkList
      ? ranking
      : network.includeOON
        ? "Out-of-network providers are listed after your in-network matches. " + ranking
        : "All providers below are in your network. " + ranking;
    return (
      '<section class="results">' +
      (mobile
        ? mobileHeader("top-matches", topTitle, description, legend)
        : '<div class="results-header" id="top-matches">' +
          '<div class="section-title-row"><h2 data-type="Title 3 · 20/32 Bold">' +
          topTitle + "</h2>" +
          '<button class="text-link is-underlined" type="button">How this works</button></div>' +
          '<p class="section-description" data-type="Body 2 · 14/20 Medium">' + description + "</p>" +
          legend + "</div>") +
      (slot ? '<div class="content-module">' + slot + "</div>" : "") +
      '<div class="cards" data-space>' +
      TOP_MATCHES.map(function (p, i) { return providerCard(p, { cfg: cfg, top: true, first: i === 0, rank: i + 1 }); }).join("") +
      "</div>" +
      (mobile
        ? mobileHeader("other-matches", otherTitle, otherNote)
        : '<div class="results-header" id="other-matches"><div class="section-title-row">' +
          '<h2 data-type="Title 3 · 20/32 Bold">' + otherTitle + "</h2></div>" +
          (ranked ? '<p class="section-description">' + otherNote + "</p>" : "") + "</div>") +
      '<div class="cards is-continued">' +
      OTHER_MATCHES.map(function (p, i) { return providerCard(p, { cfg: cfg, top: false, rank: TOP_MATCHES.length + i + 1 }); }).join("") +
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

  // Included Health Plan Key (Figma 2671:32131): what the two in-network tiers
  // mean. Replaces the earlier Plan Key card (Figma 2638:27114) in this demo.
  function planKeyCard() {
    // It explains the tier chips, so it goes when "Show tier chips" is off.
    if (!showTierChips) return "";
    return (
      '<div class="tier-key" id="plan-card" data-space data-dim>' +
      '<p class="tier-key-title" data-type="Body 1 - Bold · 16/24">Plan Key</p>' +
      // Follows the Show deductible / Show copays checkboxes.
      '<p class="tier-key-plan" data-type="Body 1 · 16/24 Medium">' +
      (copayOnly
        ? "You’re on a copay plan. " + (showCopays ? "The copays shown are what you pay per visit." : "You pay a copay per visit.")
        : "You’re on a plan with a deductible. " + (showCopays ? "The copays shown only apply after you’ve met your deductible." : "Copays only apply after you’ve met your deductible.")) +
      "</p>" +
      '<p class="tier-key-plan" data-type="Body 1 · 16/24 Medium">Both tiers shown below are in-network.</p>' +
      '<div class="tier-key-rows" id="preferred-card">' +
      '<div class="tier-key-row"><span class="tier-key-tag is-preferred">Preferred provider</span>' +
      '<img src="../quality-badging/assets/badge-preferred-key-16.svg" width="16" height="16" alt="" data-icon="Verification Badge">' +
      "<span>Highest quality standards, lower copay</span></div>" +
      '<div class="tier-key-row is-standard"><span class="tier-key-tag is-standard">Standard provider</span>' +
      "<span>Covered, usually a higher copay</span></div>" +
      "</div></div>"
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
          : '<aside class="aside">' + map(cfg.shortMap && !(cfg.planKey && !showTierChips)) +
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
    var info = key === "quality" ? qualityLearn() : LEARN_MORE[key];
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
  var COPAY_AMOUNT = { lower: "$10–$50", higher: "$100–$200" };
  var COPAY_RANGE = { lower: COPAY_AMOUNT.lower + " per visit", higher: COPAY_AMOUNT.higher + " per visit" };

  function costChip(cost, large, range) {
    var lower = cost === "lower";
    var label = range ? COPAY_RANGE[cost] : lower ? "Lower cost facility" : "Higher cost facility";
    // "Label cost level" checked: "Lower cost facility: $10–$50 per visit", range in bold.
    var labeled = range && costTag === "both";
    if (labeled) label = (lower ? "Lower" : "Higher") + " cost facility: <b>" + COPAY_RANGE[cost] + "</b>";
    // Range tag on cards: "$10–$50 after deductible" with a deductible,
    // "$10–$50 per visit" without. Level and Both don't change.
    var after = range && !labeled && !large && !copayOnly;
    if (after) label = COPAY_AMOUNT[cost] + '<span class="chip-regular"> after deductible</span>';
    return (
      '<span class="chip chip-cost is-' + cost + (large ? " is-large" : "") + (range ? " is-range" : "") + (labeled ? " has-label" : "") + (after ? " has-after" : "") + '">' +
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
    // "Facility cost tag" picks range, cost level or both. Range tags are dollar
    // amounts, so they fall back to cost level when "Show copays" is unchecked.
    // (Cost level brings back the plan card's "How much will you pay?" ranges.)
    var range = showCopays && costTag !== "level";
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
      return ctx.toggles.copays !== false && ctx.switches.costTag !== "level"
        ? [
            FACILITY_NOTES[0],
            "The purple and orange chips show the copay range ($10–$50 or $100–$200 per visit), with no arrow, instead of \"Lower/Higher cost facility\".",
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
                "Changed from Plain text: no In-network chip on each card. The header and description say the whole list is in-network.",
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
                ? "Changed from Plain text: the deductible note moves from the Plan Key to a plan summary above the map on desktop (above the first provider on mobile)."
                : "Changed from Plain text: the deductible note moves from the Plan Key to a plan summary right above the first provider, so it's read before any copay.",
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
              "Changed from Plain text: no Plan Key. Each badge is a button that opens its explainer right where it appears.",
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
            "../quality-badging/?step=8&complete=1" +
            (fromParams.get("device") ? "&device=" + fromParams.get("device") : ""),
        }
      : null;

  app = DemoShell.mount({
    backLink: backLink,
    title: "Provider Quality Badging",
    versionsSectionLabel: "Configure",
    menuNotes: false, // no descriptions under the dropdowns
    feedback: true,
    demoSwitch: {
      label: "Demo",
      current: "traditional",
      options: [
        { id: "traditional", label: "Traditional" },
        // Dot opens on the orthopedist results, already shown in full.
        { id: "dot", label: "Dot", href: "../quality-badging/?step=8&complete=1" },
      ],
    },
    switches: [
      {
        // Milestones: whole-experience versions. P0 is everything shown today;
        // P1 is the same flow for now, to change once its design is ready.
        key: "milestone",
        label: "Presets",
        section: "versions",
        menu: true,
        options: [
          { id: "p0", label: "P0", description: "The current experience." },
          { id: "p1", label: "P1", description: "A copy of P0 for now." },
        ],
      },
      {
        // Page structure: how the results page frames the list. V2 says the
        // providers are ranked for the member and numbers each card.
        key: "page",
        label: "Page structure",
        section: "versions",
        menu: true,
        showIf: { key: "search", id: "providers" },
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
        showIf: { key: "search", id: "providers" },
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
        showIf: { key: "search", id: "providers" },
        options: [
          { id: "c3", label: "Highest Quality Provider" },
          { id: "c1", label: "Top 10% of Primary Care Providers" },
          { id: "c2", label: "Top provider" },
        ],
      },
      {
        // Quality icon: the tag's icon, in the style's color.
        key: "qualityIcon",
        label: "Quality icon",
        section: "versions",
        menu: true,
        showIf: { key: "search", id: "providers" },
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
        showIf: { key: "search", id: "providers" },
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
        showIf: { key: "search", id: "providers" },
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
        showIf: { key: "search", id: "providers" },
        options: [
          { id: "name", label: "Next to name", description: "Right after the provider's name, at 16px." },
          { id: "top", label: "Top right", description: "Right-aligned at the top of the card, below the quality tag or chip if there is one." },
        ],
      },
      {
        // Save icon on mobile, set apart from web.
        key: "saveMobile",
        label: "Save icon (mobile)",
        section: "versions",
        menu: true,
        showIf: { key: "search", id: "providers" },
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
        showIf: { key: "search", id: "providers" },
        options: [
          { id: "v1", label: "V1", description: "The current card: tier chip with the copay." },
          { id: "v2", label: "V2 · Attribute line", description: "Plain text by distance and availability, like \"Top quality for primary care.\"" },
          { id: "v3", label: "V3 · Why this provider", description: "A row that opens to the quality reason, keeping the default card clean." },
          { id: "v4", label: "V4 · Recommended chip", description: "V1 plus a blue-to-purple \"Recommended\" chip at the top right." },
          { id: "v5", label: "V5 · Best match band", description: "V1 plus a thin gradient band across the card's top that says \"Best match for you.\"" },
        ],
      },
      {
        // Providers only here; the switch stays so the code keeps working.
        key: "search",
        label: "Search type",
        hidden: true,
        options: [
          { id: "providers", label: "Providers" },
          {
            id: "facilities",
            label: "Facilities",
            hideVersions: true,
          },
        ],
      },
      {
        // Facility cost tag: just the copay range, the cost level (arrow + Lower/Higher
        // cost facility), or both ("Lower cost facility: $10–$50 per visit").
        key: "costTag",
        label: "Facility cost tag",
        section: "versions",
        showIf: { key: "search", id: "facilities" },
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
      { key: "photoRing", label: "Photo ring", checked: false },
      { key: "photoBadge", label: "Photo badge", checked: false },
    ],
    summary: "A member compares primary care providers and what each visit will cost.",
    onRestart: function () {
      network.includeOON = false;
      closeMenu();
    },
    versionsLabel: "Plan info",
    versions: [
      { id: "plain", label: "Plain text", description: "The Figma design, with an In-network chip on every card and the Plan Key below the map.", steps: baseSteps(V1) },
      { id: "modals", label: "Modals", description: "No Plan Key: a plan summary above the map, and badges that explain themselves.", steps: baseSteps(V3) },
      { id: "tracker", label: "Deductible tracker", description: "Like Modals, plus deductible progress.", steps: baseSteps(V2) },
    ],
  });
})();
