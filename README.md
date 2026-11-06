# fictional-octo-giggle
experimenting

## Demo shell

Every demo uses one shell (`shell/`): a 300px side panel on the left and a flat
stage that holds a phone or desktop frame, built to the Demo shell spec.

Demos:
- `demos/billing-history/`: the reference demo.
- `demos/provider-search/`: provider search results, built from the
  [APD 2026 Figma](https://www.figma.com/design/UpuyK0SM5gT38b2d6XkBA8/APD-2026?node-id=2634-11825)
  (desktop frame).
  Mobile follows the [mobile Figma](https://www.figma.com/design/UpuyK0SM5gT38b2d6XkBA8/APD-2026?node-id=2643-30666):
  a map with a draggable results sheet over it, and Filter opening a slide-up sheet.
  The Scenario section has a "Show Care Keys" checkbox to hide every Care Key mention.
  **Search type** (Providers | Facilities, under Mobile/Desktop, or press **F**) switches instantly to
  facility search for diagnostic imaging and labs ([Figma](https://www.figma.com/design/UpuyK0SM5gT38b2d6XkBA8/APD-2026?node-id=2638-27425),
  card [2647:30790](https://www.figma.com/design/UpuyK0SM5gT38b2d6XkBA8/APD-2026?node-id=2647-30790)), keeping your step, version and device.
  Link straight to it with `?search=facilities`.
  Facilities has its own Version menu (shown only while Facilities is selected):
  - **V1 · Cost level**: chips say Lower or Higher cost facility; the plan card explains copay ranges.
  - **V2 · Copay range** (`&fversion=f2`): chips show $10–$50 or $100–$200 per visit, with no arrow; no "How much will you pay?" section.
  Versions, picked from the Version menu in the side panel:
  - **P1 · Plain text**: the Plan Key card holds the deductible note and badge meanings.
  - **P2 · Modals**: no Plan Key. A plan summary (no amounts) sits above the map on desktop (above the first provider on mobile); badges are buttons that explain themselves, with a text legend inside the plan summary.
  - **P3 · Deductible tracker**: like P2, plus deductible progress ($1,250 of $3,000, placeholder).

- `demos/dot-chat/`: a Dot (AI assistant) conversation where a member asks to find
  providers or facilities. Mobile follows the
  [Dot Figma](https://www.figma.com/design/2UJLBp93sigLx4o9mXzzFD/Dot-onboarding-exploration?node-id=1118-28018);
  web matches the same message style. Click chips to advance (Dot types, then replies); **Path**
  (or **P**) picks providers or facilities. **See all** opens care search on the matching tab and
  device, with a **Back to Dot** link.

- `demos/tiering-current/`: "Tiered Providers & Facilities (1/1/27)", a copy of
  `demos/dot-chat/` to iterate on separately, with the older provider cards and Plan Key.
  Its **Traditional** side is `demos/tiering-current-traditional/`, a copy of care search,
  so the Traditional / Dot switch stays inside this demo. Both use the care search assets in
  `demos/provider-search/assets/`.

- `demos/crown-castle/`: "Crown Castle Demo", a copy of the tiering demo above to iterate on
  separately. Its **Traditional** side is `demos/crown-castle-traditional/`; like the original,
  the bare link opens on Traditional.

- `demos/quality-badging/`: "Provider Quality Badging", a copy of the tiering demo to try
  versions of the provider card. Its **Traditional** side is `demos/quality-badging-traditional/`.
  Providers only: the Providers / Facilities switch is hidden (shell `hidden: true`), and the Dot
  chat ends at the provider results (no imaging message or quick prompts after them). The Dot
  switch opens step 8 already finished (`?complete=1`), and Dot's cards use the mobile card
  design (335px, mobile placement and save menus) on web too. Dot's cards show the same chips as care
  search's mobile cards, offerings included.
  **Versions** (above Mobile / Desktop) pick a whole configuration: **V1** (the default: quality
  tag above the photo, left-aligned, and the save icon in the card's top right corner, on web and
  mobile) or **V2** (quality tag in the top right corner on web, save icon next to the name).
  Picking one sets the menus and checkboxes; `&milestone=v2` opens on V2.
  A bare link opens on V1: gradient style, "Highest Quality Provider", above the photo on web
  and mobile, save icon in the card's top right corner on both, and deductible, Care Keys,
  copays and tier chips all off. **Photo ring** (on by default) and **Photo badge** (off by
  default), either or both, add a 2px ring around the photo and/or the design system's Badge Verified seal on its
  corner, in the Quality tag's color with the Quality icon in white, on cards with the tag.
  The side panel calls its Versions section **Configure** here (closed by default), and Milestones **Versions** (moved above Mobile / Desktop), with no
  descriptions under the dropdowns.
  The **Provider card** menu in Configure (`&card=v2`) picks the card:
  - **V1**: the tier chip ("Preferred provider: $40 copay") and the avatar badge.
  - **V2 · Attribute line**: plain text under the address, "Top quality for orthopedics · 8 mi · Available today".
  - **V3 · Why this provider**: a row on Preferred cards that opens to the quality reasons.
  - **V4 · Recommended chip**: V1 plus a "Recommended" pill in the design system's Dark gradient at the card's top right, on Preferred
    cards.
  - **V5 · Best match band**: V1 plus a thin Dark gradient band across the top of Preferred cards,
    "Best match for you" in white.
  The **Page structure** menu (`&page=v2`) frames the list:
  - **V1**: the current page copy.
  - **V2 · Ranked for you**: headers and Dot's message say providers are listed best match first,
    and each card has its rank (1, 2, 3...) just left of it, in the margin on desktop care search
    and on the card's left edge on phone and in Dot, so the cards don't move.
  **Save icon (web)** (`&save=name`) places the save icon on web: **Top right corner** (pinned to
  the card's top, under the quality tag or V4 chip when there is one) or **Next to name** (16px).
  **Save icon (mobile)** (`&saveMobile=header`) does the same on mobile: **Top right corner**
  (pinned to the card's corner at 20px), **Top right, by the name** (20px), or **Next to name** (16px).
  Card buttons read **View profile** and **Schedule**.
  Quality is three menus, shown as styled text rather than a chip:
  **Quality style** (`&quality=q1`: Dark gradient, gold, green, accent purple
  (color/text/accentOne/base, #6A4CDE), or brand blue (color/text/brand/base, #0012E7)), **Quality icon** (`&qualityIcon=medal-star`: star, or the design system's
  medal-star, award-ribbons-heart or award-ribbon-star, or each style's own),
  **Quality copy** (`&qualityCopy=c2`: "Top 10% of Orthopedists" (Primary Care Providers on
  Traditional), "Top provider", or "Highest Quality Provider"), and
  **Quality placement (web)** (`&qualityPlace=under-name`), which picks where it sits on web: top
  right corner (the default, wherever the save icon is), above the photo, under the name, next to the name, in the chip row, or under the address. **Quality placement (mobile)**
  (`&qualityPlaceMobile=top-right`) picks the same spots on mobile (default: above the photo); its
  top right corner is a row of its own, beside the save icon when that's at the top right.
  Each tag ends in a small info icon in its own color; it opens a popup (modal on desktop, sheet on
  phone) explaining the rating. The popup copy is a placeholder.
  V2 and V3 drop the tier name from the chip (just the copay) and the avatar badge. Quality
  reasons and availability are placeholders. Show deductible and Show Care Keys start off. **Show tier chips** turns the
  Preferred/Standard copay chip, the star on the photo and the Plan Key on and off.

Plain HTML, CSS and JS with no build step. Serve the repo and open it:

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765/ and pick a demo.

Keys: → next · ← back · R restart · M switch device.

The address bar keeps your place, for example
`demos/provider-search/?version=p2&step=2&device=mobile`, so reloading or
sharing the link opens the same version, step and device (plus options like `careKeys=0`).

### Making a new demo

Copy `demos/billing-history/`, then pass your own title, summary and steps to
`DemoShell.mount()` (see the comment at the top of `shell/shell.js`), and add
a link to it in the root `index.html`. To show iterations of a page, pass
`versions: [{ id, label, description, steps }]` instead of `steps`. Tag
elements with `data-type`, `data-space`, `data-icon`, `data-dim` and
`data-color` to make them show up in the Specs overlay.
