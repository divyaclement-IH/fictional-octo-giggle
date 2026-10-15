# Full Guidelines

# Included Health DESIGN.md

## Overview

Included Health is an **AI‑first, human‑supported front door to high‑quality clinical care**, helping members understand what’s going on and what to do next with clear, safe guidance. Experiences should feel **warm, trustworthy, and clinically grounded**—combining expert care standards with consumer‑grade clarity and polish—never gimmicky, generic, or “bot‑ish.” We design for **emotional safety and medical accuracy first**, then efficiency and convenience.

---

## Principles

### Design with Care

### Human. Always.

Design with empathy, clarity, and care — especially in moments that matter most.

Our experiences are grounded in human needs, not system constraints. We design for emotional safety, comprehension, and trust across every ability, context, and state of mind. When things go wrong, the system responds with calm, kindness, and clear paths forward.

*Rules the agent should follow*

* Reduce cognitive and emotional burden: Prefer one primary action per screen, clear hierarchy, and short, plain-language copy over dense walls of text.  
* Design for emotional safety: Avoid surprise states or dead ends; always show what’s happening, what’s expected of the member, and what happens next.  
* Ground in human needs, not system constraints: If a layout or flow choice conflicts, bias toward member comprehension, safety, and trust over backend convenience.  
* Fail calmly: In error or edge states, use calm tone, clear explanations, and a safe next step instead of blame, technical jargon, or abrupt stops.

### Clear by design

Make the right thing obvious through hierarchy, structure, and intent.

Clarity is not neutral; it’s designed. We use hierarchy, motion, and constraint to guide attention and decision-making. Every element earns its place, and nothing competes without purpose.

*Rules the agent should follow*

* One clear primary action: On each surface, visually emphasize a single primary CTA; demote or convert other actions to secondary/tertiary patterns.  
* Use hierarchy, not decoration: Use typographic scale, spacing, and color prominence to guide attention; avoid adding icons or color solely for decoration.  
* Constrain to clarify: Prefer progressive disclosure (expanders, separate steps, details-on-demand) over dense single screens.  
* Every element must earn its place: Remove or demote UI that doesn’t support a clear member job; avoid competing focal points on the same surface.

### Confident, not rigid

Design systems should adapt, evolve, and lead — not constrain creativity.

Our system sets strong foundations while allowing flexibility where it matters. We favor principles and patterns over prescriptions, enabling teams to respond to new contexts, technologies, and member needs with confidence.

*Rules the agent should follow*

* Start from system patterns: Use existing components and tokens first (buttons, cards, chips, messaging patterns) before inventing anything new.  
* Extend, don’t fork: When something new is required, extend semantic tokens or patterns (for example, new semantic color or chip variant) instead of one-off styling.  
* Adapt to context safely: It’s acceptable to adjust layout, density, or component combinations as long as core affordances, semantics, and accessibility rules stay intact.  
* Prefer reversible decisions: When choosing between patterns, prefer those that are easy to adjust or generalize later over highly bespoke layouts that will be hard to maintain.


---

## Colors

Visual Reference  
[https://www.figma.com/design/VT79VSlhYlpl0g2JS9vLKt/Anatomy--IH-Design-System?node-id=7950-110279\&p=f\&t=PuN4Sj7ZnYpcLUVu-0](https://www.figma.com/design/VT79VSlhYlpl0g2JS9vLKt/Anatomy--IH-Design-System?node-id=7950-110279&p=f&t=PuN4Sj7ZnYpcLUVu-0)

### Three-tiered structure

Our color system is structured into three tiers.

1. **Core tokens**  
     
   - Core tokens form the atoms of the palette, covering every possible tint and tone from the brand palette.  
   - Core colors are never used directly in design or implementation.  
   - Core tokens are intentionally not published directly from the IH Library so they are not used in design mockups.  
   - When a new use case arises where existing semantic tokens are not sufficient, create a new semantic token.

   

2. **Semantic tokens**  
     
   - Semantic tokens are the colors used in the product.  
   - They are identified by meaning, such as brand or success, to indicate where and how they should be used and their prominence on screen.  
   - Every semantic token references a core token.  
   - Separating atoms from meaning supports future theming and modes.

   

3. **Component tokens**  
     
   - Component tokens are reserved for exceptional or intentionally deviant use cases.  
   - They should be used sparingly and only when absolutely necessary.  
   - There are currently no standard component tokens.

### Demonstration examples

Example progression across the system:

- Core token: blue/300  
- Semantic token: surface/brand/base  
- Component token: component/progress-bar/completion/color/surface

component/progress-bar/completion/color/surface is a demonstration only and is not an actual published token.

### Semantic categories

- surface  
- text  
- border

### Prominence model

- weakest  
- weak  
- base  
- strong  
- strongest

### Dark mode

### Dark mode is architecturally supported but not yet published in this DESIGN.md. Do not generate new dark-mode variants or tokens (for example, surface/\*/on-dark) beyond what is explicitly documented here. Treat this spec as light-theme only until a dedicated dark-mode palette is added.

### Core palette

#### Blue

| Token | Hex |
| :---- | :---- |
| blue/100 | \#F6FAFE |
| blue/200 | \#E6EFFE |
| blue/300 | \#D0E2FF |
| blue/400 | \#A6C8FF |
| blue/500 | \#81ADF6 |
| blue/600 | \#578EE8 |
| blue/700 | \#0012E7 |
| blue/800 | \#002380 |
| blue/900 | \#001048 |

#### Purple

| Token | Hex |
| :---- | :---- |
| purple/100 | \#FAF9FF |
| purple/200 | \#F1F0FF |
| purple/300 | \#E0DCFD |
| purple/400 | \#C6BDFB |
| purple/500 | \#AD9FF0 |
| purple/600 | \#917CE1 |
| purple/700 | \#6A4CDE |
| purple/800 | \#3C1B8F |
| purple/900 | \#190745 |

#### Orange

| Token | Hex |
| :---- | :---- |
| orange/100 | \#FEF9F7 |
| orange/200 | \#FCF3F0 |
| orange/300 | \#FDD7CD |
| orange/400 | \#F8B3A0 |
| orange/500 | \#EC9179 |
| orange/600 | \#DA694C |
| orange/700 | \#B54325 |
| orange/800 | \#711100 |
| orange/900 | \#3B0000 |

#### Green

| Token | Hex |
| :---- | :---- |
| green/100 | \#F7FBF9 |
| green/200 | \#EAFAF1 |
| green/300 | \#C6EBDB |
| green/400 | \#8CD9BC |
| green/500 | \#54C49E |
| green/600 | \#00A87C |
| green/700 | \#00835D |
| green/800 | \#005330 |
| green/900 | \#002E1E |

#### Amber

| Token | Hex |
| :---- | :---- |
| amber/100 | \#FFFBF5 |
| amber/200 | \#FCF4E6 |
| amber/300 | \#F5DCC3 |
| amber/400 | \#ECBC8A |
| amber/500 | \#DD9E56 |
| amber/600 | \#C97A00 |
| amber/700 | \#A55600 |
| amber/800 | \#662600 |
| amber/900 | \#350500 |

#### Red

| Token | Hex |
| :---- | :---- |
| red/100 | \#FEF9F8 |
| red/200 | \#FDF2F1 |
| red/300 | \#FDD6D4 |
| red/400 | \#FAB1AE |
| red/500 | \#ED8E8C |
| red/600 | \#DB6566 |
| red/700 | \#CB0C31 |
| red/800 | \#7F0009 |
| red/900 | \#3C0002 |

#### Grey

| Token | Hex |
| :---- | :---- |
| grey/100 | \#FAFAFA |
| grey/200 | \#F2F2F2 |
| grey/300 | \#E1E1E1 |
| grey/400 | \#C6C6C6 |
| grey/500 | \#ACACAC |
| grey/600 | \#8F8F8F |
| grey/700 | \#6D6D6D |
| grey/800 | \#3B3B3B |
| grey/900 | \#181818 |

#### Base neutrals

| Token | Hex |
| :---- | :---- |
| white | \#FFFFFF |
| black | \#000000 |

#### Black transparencies

| Token | Hex |
| :---- | :---- |
| black-transparent/10 | \#0000001A |
| black-transparent/20 | \#00000033 |
| black-transparent/30 | \#0000004D |
| black-transparent/40 | \#00000066 |
| black-transparent/50 | \#00000080 |
| black-transparent/60 | \#00000099 |
| black-transparent/70 | \#000000B3 |
| black-transparent/80 | \#000000CC |
| black-transparent/90 | \#000000E6 |

#### White transparencies

| Token | Hex |
| :---- | :---- |
| white-transparent/10 | \#FFFFFF1A |
| white-transparent/20 | \#FFFFFF33 |
| white-transparent/30 | \#FFFFFF4D |
| white-transparent/40 | \#FFFFFF66 |
| white-transparent/50 | \#FFFFFF80 |
| white-transparent/60 | \#FFFFFF99 |
| white-transparent/70 | \#FFFFFFB3 |
| white-transparent/80 | \#FFFFFFCC |
| white-transparent/90 | \#FFFFFFE6 |

### Semantic color tokens

#### Surface

| Token | Core token | Hex | Usage |
| :---- | :---- | :---- | :---- |
| surface/neutral/base | white | \#FFFFFF | Primary card and container background; main content surfaces on light theme. |
| surface/neutral/weakest | grey/100 | \#FAFAFA | Default app background and page surfaces; large layouts and canvases. |
| surface/neutral/weak | grey/200 | \#F2F2F2 | Subtle section backgrounds, lightly grouped content, and dividers. |
| surface/neutral/disabled | grey/200 | \#F2F2F2 | Background for disabled inputs, buttons, and controls. |
| surface/neutral/base | grey/700 | \#6D6D6D |  |
| surface/neutral/strong | grey/800 | \#3B3B3B | Dark neutral surfaces for chips, tags, and dense UI on light theme. |
| surface/neutral/strongest | grey/900 | \#181818 | Highest-contrast neutral surface; use sparingly for banners or inverted shells. |
| surface/brand/weakest | blue/100 | \#F6FAFE | Very light brand-tinted surfaces (informational cards, low-emphasis highlights). |
| surface/brand/weak | blue/200 | \#E6EFFE | Brand-tinted sections and low-emphasis CTAs. |
| surface/brand/base | blue/700 | \#0012E7 | Primary brand surfaces (primary buttons, key nav states); limit to one dominant use per screen. |
| surface/brand/strong | blue/800 | \#002380 | Pressed/active states or high-emphasis brand strips. |
| surface/brand/strongest | blue/900 | \#001048 | Rare, strongest brand backgrounds (for example, hero bands or marketing-only moments). |
| surface/accentOne/weakest | blue/300 | \#D0E2FF | Secondary accent surfaces (secondary info, non-critical highlights). |
| surface/accentOne/weak | blue/600 | \#578EE8 | Accent containers and charts where full brand is too strong. |
| surface/accentOne/base | blue/700 | \#0012E7 | Alternate brand-tinted surfaces when primary brand is already in use. |
| surface/accentOne/strong | blue/800 | \#002380 | Pressed/active for accentOne surfaces. |
| surface/accentTwo/weakest | purple/100 | \#FAF9FF | Subtle purple-tinted backgrounds (supporting flows). |
| surface/accentTwo/weak | purple/200 | \#F1F0FF | Accent sections and cards that should be distinct from brand blue. |
| surface/accentTwo/base | purple/700 | \#6A4CDE | Accent surfaces for secondary actions or status not mapped to success/warning/danger. |
| surface/accentTwo/strong | purple/800 | \#3C1B8F | Pressed/active for accentTwo surfaces. |
| surface/success/weakest | green/100 | \#F7FBF9 | Background for success banners, confirmation cards, and success chips. |
| surface/success/weak | green/200 | \#EAFAF1 | Lighter success contexts (inline success states, subtle highlights). |
| surface/success/base | green/700 | \#00835D | Primary success backgrounds for strong confirmations and affirmations. |
| surface/success/strong | green/800 | \#005330 | Pressed/active success states or strong success strips. |
| surface/warning/weakest | amber/100 | \#FFFBF5 | Background for warning banners and gentle caution states. |
| surface/warning/weak | amber/200 | \#FCF4E6 | Lighter warning contexts (inline warnings, subtle prompts). |
| surface/warning/base | amber/700 | \#A55600 | Primary warning surfaces for critical-but-recoverable situations. |
| surface/warning/strong | amber/800 | \#662600 | Pressed/active warning or strongest caution strips. |
| surface/danger/weakest | red/100 | \#FEF9F8 | Background for error banners and destructive confirmations. |
| surface/danger/weak | red/200 | \#FDF2F1 | Lighter error contexts (inline errors, input backgrounds with error). |
| surface/danger/base | red/700 | \#CB0C31 | Primary danger surfaces for destructive actions and blocking errors. |
| surface/danger/strong | red/800 | \#7F0009 | Pressed/active danger or the strongest high-stakes error surfaces. |
| surface/overlay/weak | black-transparent/10 | \#0000001A | Light overlay for hover and subtle elevation. |
| surface/overlay/base | black-transparent/30 | \#0000004D | Standard scrim for dialogs and sticky headers over scroll. |
| surface/overlay/strong | black-transparent/80 | \#000000CC | Blocking scrim for critical modals; dim everything behind.  |

**Important usage rules:**

- Never reference black-transparent/\* or white-transparent/\* core tokens directly in product UI.  
- Always use surface/overlay/\* for overlays and scrims; do not invent custom transparency levels.

#### 

#### Text

| Token | Core token | Hex | Usage |
| :---- | :---- | :---- | :---- |
| text/primary light | white | \#FFFFFF | Text on dark brand or neutral surfaces (for example, surface/brand/base, surface/neutral/strong, surface/neutral/strongest); never on light surfaces. |
| text/placeholder | grey/600 | \#8F8F8F | Placeholder text inside inputs; must never be used for actual member-entered data. |
| text/secondary | grey/700 | \#6D6D6D | Secondary labels, metadata, and helper text; never for primary body content. |
| text/primary dark | grey/900 | \#181818 | Default body and heading text on light neutral surfaces (surface/neutral/weakest, surface/neutral/weak, surface/neutral/base). |
| text/disabled | grey/600 | \#8F8F8F | Disabled labels and values; always paired with a disabled surface or control state. |
| text/brand/weak | blue/200 | \#E6EFFE | Subtle brand text on dark brand surfaces only (for example, surface/brand/base or stronger). |
| text/brand/base | blue/700 | \#0012E7 | Primary brand text on neutral surfaces (links, emphasized inline text). |
| text/brand/strong | blue/800 | \#002380 | Strong brand emphasis (for example, section titles or key metrics) on light neutral surfaces. |
| text/success/weak | green/200 | \#EAFAF1 | Success text on dark success surfaces only; do not use on white or neutral backgrounds. |
| text/success/base | green/700 | \#00835D | Primary success labels and status text on neutral surfaces. |
| text/success/strong | green/800 | \#005330 | High-emphasis success text (for example, key confirmation headline). |
| text/warning/weak | amber/200 | \#FCF4E6 | Warning text on dark warning surfaces only; do not use on white or neutral backgrounds. |
| text/warning/base | amber/700 | \#A55600 | Primary warning labels and body text on neutral surfaces. |
| text/warning/strong | amber/800 | \#662600 | High-emphasis warning text (for example, “Important: …”). |
| text/danger/weak | red/200 | \#FDF2F1 | Danger text on dark danger surfaces only; do not use on white or neutral backgrounds. |
| text/danger/base | red/700 | \#CB0C31 | Primary error labels and body copy on neutral surfaces. |
| text/danger/strong | red/800 | \#7F0009 | High-emphasis destructive/error text (for example, destructive action headers). |

#### Border

| Token | Core token | Hex | Usage |
| :---- | :---- | :---- | :---- |
| border/weakest | grey/300 | \#E1E1E1 | Hairline dividers and low-emphasis boundaries between sections. |
| border/weak | grey/400 | \#C6C6C6 | Component outlines for low-emphasis surfaces (cards, tiles) on light backgrounds. |
| border/base | grey/600 | \#8F8F8F | Default control borders (inputs, selects) in resting state on light surfaces. |
| border/strong | grey/700 | \#6D6D6D | High-emphasis borders around focusable regions and key containers. |
| border/strongest | grey/900 | \#181818 | Rarely used; highest-contrast borders for critical framing only. |
| border/contrast | white | \#FFFFFF | Borders used to separate elements on dark backgrounds (for example, around chips on surface/neutral/strongest). |
| border/brand/weakest | blue/300 | \#D0E2FF | Soft brand border for cards or controls in brand-tinted contexts. |
| border/brand/weak | blue/600 | \#578EE8 | Interactive borders (hover/active) on brand-adjacent UI. |
| border/brand/base | blue/700 | \#0012E7 | Primary focus or selected borders on neutral surfaces. |
| border/brand/strong | blue/800 | \#002380 | Strong brand borders for selected tabs or key nav items. |
| border/success/weakest | green/300 | \#C6EBDB | Success outlines around cards or banners on success background. |
| border/success/weak | green/600 | \#00A87C | Borders for success variant controls. |
| border/success/base | green/700 | \#00835D | High-emphasis success borders for key confirmation containers. |
| border/success/strong | green/800 | \#005330 | Rare; strongest success-outline emphasis. |
| border/warning/weakest | amber/300 | \#F5DCC3 | Warning outlines on warning backgrounds. |
| border/warning/weak | amber/600 | \#C97A00 | Borders for warning variant controls. |
| border/warning/base | amber/700 | \#A55600 | Primary warning borders for banners or critical callouts. |
| border/warning/strong | amber/800 | \#662600 | Rare; strongest warning-outline emphasis. |
| border/danger/weakest | red/300 | \#FDD6D4 | Danger outlines on danger backgrounds. |
| border/danger/weak | red/600 | \#DB6566 | Borders for error variant controls. |
| border/danger/base | red/700 | \#CB0C31 | Primary error borders for banners and destructive groupings. |
| border/danger/strong | red/800 | \#7F0009 | Rare; strongest destructive-outline emphasis. |

### Accessible color combinations

When choosing color combinations, maintain at least:

- 4.5:1 contrast ratio for body text and smaller.  
- 3:1 contrast ratio for large text (≥ 18pt regular or 14pt bold).  
- 3:1 contrast ratio for non-text UI elements (icons, borders, focus rings).

For clinical content and high-stakes flows, aim for AAA where practical (7:1 for body, 4.5:1 for large text).

Vetted pairings (examples):

- surface/neutral/weakest or surface/neutral/base \+ text/primary/dark  
- surface/neutral/strong or surface/neutral/strongest \+ text/primary/light  
- surface/brand/base \+ text/primary/light  
- surface/success/base \+ text/primary/light  
- surface/warning/base \+ text/primary/light  
- surface/danger/base \+ text/primary/light  
- surface/overlay/base \+ text/primary/light for modal headings and body

Rules:

- Do not invent ad-hoc pairs; always choose from the semantic surface/text tokens.  
- Never use text/\*/weak tokens on light neutral surfaces; reserve them for dark brand or status surfaces as documented above.  
- All final combinations must meet or exceed the ratios above.

## Usage rules 

- Never use raw hex values in product UI decisions when a semantic token exists.  
- Never reference core palette tokens directly in product UI.  
- Use semantic tokens for all product decisions.  
- Use component tokens only when a semantic token cannot express the intended use.  
- All final combinations must meet WCAG AA contrast or better.

---

## Typography

Visual reference [https://www.figma.com/design/VT79VSlhYlpl0g2JS9vLKt/Anatomy--IH-Design-System?node-id=179-103847\&p=f\&t=PuN4Sj7ZnYpcLUVu-0](https://www.figma.com/design/VT79VSlhYlpl0g2JS9vLKt/Anatomy--IH-Design-System?node-id=179-103847&p=f&t=PuN4Sj7ZnYpcLUVu-0)

### Font family

**Figtree** is a clean yet friendly geometric sans serif font for usage in web and mobile apps. Included Health uses Figtree across both print and digital surfaces in marketing and member-facing apps.

Reference: [https://fonts.google.com/specimen/Figtree/about](https://fonts.google.com/specimen/Figtree/about)

### Supported weights

- **Bold 700**  
- **Medium 500**

### Character set reference

#### Bold 700

ABCDEFGHIJKLMNOPQRSTUVWXYZ  
abcdefghijklmnopqrstuvwxyz  
0123456789 \!@\#$%^&\*()

#### Medium 500

ABCDEFGHIJKLMNOPQRSTUVWXYZ  
abcdefghijklmnopqrstuvwxyz  
0123456789 \!@\#$%^&\*()

### Type scale

| Name | Font size / line height | Weights | Tracking | Usage |
| :---- | :---- | :---- | :---- | :---- |
| Display 1 | 64 / 72 | Bold 700 | \-0.02em | Hero headlines in marketing or high-level introductions; avoid in core product flows. |
| Display 2 | 40 / 48 | Bold 700 | \-0.015em | Large headlines on key product surfaces (for example, major dashboard or hero modules). |
| Title 1 | 32 / 40 | Bold 700 | \-0.01em | Primary section headers on major screens. |
| Title 2 | 24 / 32 | Bold 700 | \-0.005em | Section headers inside cards, modals, and core layouts. |
| Title 3 | 20 / 32 | Bold 700 | 0em | Sub-section headers and key labels above dense content blocks. |
| Title 4 | 16 / 24 | Bold 700 | 0em | Inline section titles, card titles, and short prompts. |
| Body 1 | 16 / 24 | Bold 700 | 0em | Primary body text when emphasis or scannability is critical (for example, key confirmations). |
| Body 1 | 16 / 24 | Medium 500 | 0em | Default body text for most member-facing copy. |
| Body 2 | 14 / 20 | Bold 700 | 0em | Short, emphasized supporting text (labels, chips). |
| Body 2 | 14 / 20 | Medium 500 | 0em | Dense or secondary body copy (helper text, metadata). |
| Caption | 12 / 16 | Bold 700, Medium 500 | 0em | Supporting microcopy, labels, and badge text. |
| Footer | 11 / 16 | Bold 700, Medium 500 | 0em | Footnotes, legal lines, and low-emphasis metadata. |

---

## Spacing

Visual Reference  
[https://www.figma.com/design/VT79VSlhYlpl0g2JS9vLKt/Anatomy--IH-Design-System?node-id=19445-142467\&t=PuN4Sj7ZnYpcLUVu-0](https://www.figma.com/design/VT79VSlhYlpl0g2JS9vLKt/Anatomy--IH-Design-System?node-id=19445-142467&t=PuN4Sj7ZnYpcLUVu-0)

### Spacing scale

The spacing scale is designed to provide a range of options from very small to very large increments, suitable for various design needs such as padding, margins, layout grids, and alignment between elements.

| Name | Size (rem) | Size (pixels) |
| :---- | :---- | :---- |
| 0 | 0 | 0px |
| 2x-small | 0.25rem | 4px |
| x-small | 0.5rem | 8px |
| small | 0.75rem | 12px |
| medium | 1rem | 16px |
| large | 1.5rem | 24px |
| x-large | 2rem | 32px |
| 2x-large | 3rem | 48px |
| 3x-large | 4rem | 64px |

### Usage guidelines

#### Base unit

The base unit (1rem \= 16px) should be used as the starting point for most spacing decisions. Adjust up or down the scale depending on the specific need and context.

#### Small values (0px to 8px)

Use within smaller components and compact pieces of the user interface.

Examples:

- gap between button groups  
- padding within input components  
- vertical spacing between elements in a card or list item

#### Medium values (12px to 24px)

Use for larger components and non-compact pieces of the user interface.

Examples:

- padding within cards  
- spacing between icons and text in cards  
- space between sections of content on small screens

#### Large values (32px to 64px)

Use for layout only.

Examples:

- spacing between sections on large screens

### Responsive design

Consider how spacing might need to adjust across screen sizes.

In many cases, smaller spaces are appropriate for mobile views, while larger spaces can be used in desktop layouts.

### Breakpoints

For responsive behavior, use these canonical breakpoints:

sm: 640px  
md: 768px  
lg: 1024px  
xl: 1280px

Use smaller spacing values on sm views (mobile), and allow more generous spacing on lg/xl where layout permits.

### Customization & deduplication 

While the predefined scale should cover most needs, occasional exceptions may be necessary. When deviating from the scale, ensure that changes are justified and documented.

Treat the main spacing scale table (with rem and pixel values) as the single source of truth. Do not maintain a separate “token values in pixels” table; if one exists, remove it or ensure it simply references the primary table above.

---

## Elevation

Elevation uses subtle drop shadows to communicate hierarchy, separation, and scroll state. The system defines three levels: No Elevation, Elevation 1, and Elevation 2\.

In general, use No Elevation for flatter, more integrated surfaces, Elevation 1 for standard card-based components, and Elevation 2 sparingly for UI that needs stronger separation when it becomes sticky or overlays scrolling content.

| Level | Token | Box-shadow | Usage |
| :---- | :---- | :---- | :---- |
| No Elevation | elevation/none | none | Flat surfaces that should feel embedded in the page (tables, simple cards, inline tiles). |
| Elevation 1 | elevation/1.0 | 2px 4px rgba(0,0,0,0.08) | Default cards and containers that need light separation from the background. |
| Elevation 2 | elevation/2.9 | 6px 16px rgba(0,0,0,0.16) | Sticky headers, floating toolbars, and overlays that must clearly sit above scrolling content. |

### Usage

#### No Elevation

- Use for new homepage cards and tiles.  
- Use for tables.  
- Best when the surface should feel lightweight and embedded in the layout.

#### Elevation 1

- Use for existing cards and tiles.  
- Best for default container surfaces that need light separation from the background.

#### Elevation 2

- Use for tabs or headers when content underneath is scrolled.  
- Best for sticky UI that needs to feel anchored above the content layer.

### Guidance

Use elevation intentionally, not decoratively.

Default to the lowest level that preserves clarity, and increase elevation only when it helps communicate hierarchy, persistence, or scroll behavior.

Rules:

Use the lowest elevation that preserves clarity.  
Do not stack multiple shadow values; use the named tokens above.  
Do not introduce new custom box-shadow values in product UI.

---

## Icons

Icons provide quick, scannable cues for meaning and status. They should clarify actions and information, not decorate or add noise. Use icons consistently across platforms so they feel like a single, coherent set.

### Library and sources

- Use icons from the **Included Health icon library**, which is built primarily from **Streamline Regular** and **Streamline Bold** sets.  
- Do not introduce new icon styles or one‑off illustrations without coordination with the Design System team.  
- If you need an icon that isn’t in the library:  
  - First, check the Streamline Regular/Bold sets to see if an existing icon fits the use case.  
  - If a match exists, contact the Design System team to have it added to the library.  
  - If not, work with the Design System team to find, create, or approve a new icon.

### Styles: Regular vs Bold

- The library provides icons in at least two weights: **Regular** and **Bold**.  
- Use **Bold** for small sizes (anything smaller than 16px). Regular strokes are too thin to read well at that scale.  
- Use Regular or Bold **consistently within a UI region**; do not mix weights arbitrarily.  
- A Bold icon is not just a filled version of Regular; it often has different strokes and shapes.  
  - Do **not** use Bold as a hover state for a Regular icon—rapidly toggling between the two can look awkward.  
  - For hover or active states, prefer **color changes, background treatments, or subtle motion** instead of switching between Regular and Bold.

### Sizes

Standard icon sizes:

- **12px** – use **Bold only** (Regular is too thin at this size).  
- **16px**  
- **20px**  
- **24px**  
- **32px**

Usage notes:

- Use the smallest size that remains legible and balanced with surrounding text and components.  
- For icons used inside circular or pill‑shaped containers (for example, grey icon circles), use **24px Regular** inside the container for best balance.  
- Ensure icons are centered within their hit area and aligned with the layout grid so they don’t appear visually off‑center.

| Token | Size | Usage |
| :---- | :---- | :---- |
| icon/size/xs | 12px | Very small indicators; use Bold only. |
| icon/size/sm | 16px | Default icon size for most controls. |
| icon/size/md | 20px | Icons paired with larger text or in dense cards. |
| icon/size/lg | 24px | Hero icons, circular icon containers. |
| icon/size/xl | 32px | Larger illustrative moments in cards or tiles. |

### Color and accessibility

- Icon colors must follow the **semantic color tokens**:  
  - Default/actionable icons: text/primary dark or text/brand/\*.  
  - Disabled icons: text/disabled.  
  - Status icons: text/success/\*, text/warning/\*, or text/danger/\* where they represent status.  
- Maintain sufficient **contrast** between icons and background to meet accessibility standards, especially for critical or status icons.  
- Avoid using **color alone** to signal meaning in high‑stakes contexts; pair status icons with labels or helper text where appropriate.

### Usage guidelines

- Use icons **only where they add clarity**—reinforcing an action, indicating status, or improving scannability in dense lists.  
- Avoid purely decorative icons that do not change comprehension or behavior.  
- Pair icons with **clear labels** in most cases; icons alone should be reserved for universally recognizable actions (for example, a standard close “X”).  
- Keep icon metaphors consistent across the product.

### Accessibility

- Provide accessible names/labels for icons that identify **what they do or represent**.  
- Do not rely on icon shape alone to convey critical information; ensure that labels or text equivalents exist.

---

## Motion 

---

## Layering 

---

## Components

### Component inventory

- Accordion  
- Avatar  
- Badge  
- Banner  
- Bottom Tab Bar \[native\]  
- Button  
- Button Dock  
- Calendar  
- Card  
- Card Carousel  
- Care Filters  
- Checkbox  
- Contact Module  
- Date Input  
- Dependent Picker  
- Dropdown  
- Fair Price Indicator  
- Icon  
- Icon Button  
- Link  
- Loader  
- Map  
- Maximum Summary  
- Messaging  
  - Disclaimer  
  - Timestamp  
  - System Message  
  - Chat input  
  - Jump to latest  
  - Response  
  - Quick reply  
  - Multi-select reply  
  - Service card  
  - Option card  
  - Preview card   
  - Load more card  
  - Confirmation card  
  - Request card \- advocacy (not added yet)  
  - Request card \- review (not added yet)  
- Modal  
- Navigation \[native\]  
- Navigation Drawer \[web\]  
- Option Button  
- Photo Hero  
- Pill  
- Primary Navigation \[web\]  
- Progress Bar  
- Promo Bullets  
- Radio  
- Search Field  
- Secondary Navigation  
- Segmented Button  
- Sheet  
- Skeleton Loader  
- Slider  
- Table  
- Tabs  
- Tag  
- Text Area  
- Text Field  
- Tile  
- Timeline  
- Toast

### Avatars

Avatars visually represent people, locations, or Dot in the product. They provide a quick anchor for identity and context (who this is about, where care is happening, or when Dot is speaking) and should always feel clear, respectful, and consistent.

#### What avatars can represent

- **People** – members, care team, providers, support.  
- **Locations** – clinics, facilities, or geographic anchors.  
- **Dot** – the Included Health AI assistant.  
- **Badges** – optional overlays (for example, BH) that convey specialization or role.

#### Avatar elements

Each avatar can display some combination of:

- **Photo (conditional)**  
  - Preferred when we have an approved, up‑to‑date photo.  
  - Cropped and framed consistently according to brand guidance.  
- **Initials (conditional)**  
  - Used when no photo is available.  
  - Default to first \+ last initials from the person’s name.  
- **Location pin (conditional)**  
  - Used when the primary meaning is a place.  
- **Dot (conditional)**  
  - Used when the entity speaking/acting is Dot (AI), not a human.  
- **BH badge or similar (conditional)**  
  - Used to represent behavioral health or other key specialties when appropriate.

Do not mix multiple, competing meanings in a single avatar (for example, both Dot and a person photo). Choose the element that best matches the context.

#### Sizes and usage

- Use standard avatar sizes (small, medium, large) and keep them consistent within a surface.  
- In dense tables or lists, use smaller avatars; in hero/profile contexts, use larger avatars.  
- Ensure avatars align to the grid and text baselines.

#### Interaction

- Avatars are **non‑interactive** by default.  
- When avatars appear inside an interactive component, the **parent component** owns the tap/click behavior, not the avatar.

#### Content and privacy

- Use only approved and appropriate photos; never use joke images or unrelated artwork.  
- When a real person’s photo is not available or appropriate, use initials or a generic placeholder that still fits the system.  
- Respect member privacy and clinical context when deciding whether to show photos.

#### Accessibility

- Provide accessible names/labels that identify **who or what** the avatar represents.  
- Do not rely on the avatar alone to convey critical information; pair with text labels.

---

### Badges

Badges are small visual indicators used to highlight information, typically a number counter, a short word, an icon, or a simple dot. They draw attention to new, unread, or important content without overwhelming the interface.

#### When to use

Use badges to:

- Indicate **unread or new items**.  
- Show **notification counts**.  
- Display a single, important **status** (for example, online/offline, verified).  
- Highlight **new features or content**.

Badges are **never interactive/clickable**. Any tap/click behavior belongs to the parent element (for example, tab, list item, card).

#### Anatomy

A badge can contain:

1. **Container (badge)**  
     
   - Small pill or circular shape.  
   - Size proportional to the element it’s associated with.

   

2. **Label or Icon**  
     
   - Center‑aligned content.  
   - Can be:  
     - Number (for example, 1, 12, 99+),  
     - Short text (for example, New, Delayed),  
     - Icon, or  
     - Dot (no label).

   

3. **Outline (optional)**  
     
   - Width: **2px**.  
   - Color: matches the parent background (usually bg/primary).  
   - Used when the badge sits on top of another element.

#### Types, sizes, and variants

Badges come in two sizes (small, medium) and three main content types (number, icon, text), each with primary and secondary variants across danger, warning, success, brand, and neutral styles, plus a dot type in small only.

**Number badges**

- Minimum size about **20×20px**.  
- Text style: **Caption – Bold**.  
- Horizontal padding: small (about 2x-small / 4px).  
- Expand horizontally for 2–3 digits.

**Text badges**

- For short words like “New” or “Delayed”.  
- Heights:  
  - Small: **20px**.  
  - Medium: **24px**.  
- Horizontal padding around **8px** (x-small).  
- Small: Caption – Bold; Medium: Body 2\.

**Icon badges**

- Small: icon 10px, container 20×20px.  
- Medium: icon 12px, container 24×24px.  
- Used when an icon alone can clearly convey meaning.

**Dot badges**

- Dot only, size \~8×8px.  
- Used as a subtle indicator when number/label is unnecessary.

For accessibility at high zoom, badges should scale with the UI; exception is when attached to images that do not scale (for example, static avatars).

#### Placement

- Typically on or near the **top‑right corner** of the associated icon/element.  
- Can sit between text and controls inside components when that better fits the layout.  
- Keep badges close enough to clearly associate them with their target.

#### Color and style

Use semantic colors aligned with meaning:

- **Danger (red)** – default notification and error.  
- **Warning (yellow)** – warnings/caution.  
- **Success (green)** – positive/online (future use).  
- **Brand** – brand‑specific emphasis (future use).  
- **Neutral (grey)** – offline/low‑emphasis (future use).

Badges should be small and unobtrusive but high enough contrast to be visible.

#### Behavior

- Badges are not interactive.  
- Notification badges should clear or hide once associated content is viewed or acknowledged.

##### Dot animation (optional, Dot variant)

- Small animated dot for high‑value notifications.  
- Appears by “bouncing” into place:  
  - Fades in small,  
  - Grows slightly past final size,  
  - Settles at final size.  
- Typical use: on **Bottom Tab Bar** when Home loads with notifications or new notification arrives.

#### Properties (summary)

- type: dot (default), number, text, icon  
- style: danger (default), warning, success, brand, neutral  
- hierarchy: primary (default), secondary  
- size: small (default), medium (no medium for dot)  
- isAnimated (dot only): false (default), true  
- outline: none (default), white (for gray/dense backgrounds)  
- roundedCorners: all (default), partial (when flush to an edge)

#### Accessibility

- Ensure sufficient color contrast.  
- Provide accessible names or additional context (for example, “3 unread messages”).  
- Do not use badges as the sole location of critical information.

---

### **Footer**

The footer provides a consistent, branded closing for member experiences and centralizes legal links. It reinforces our promise (“Designed to treat you better.™”) and gives members clear access to required policies.

#### What it does

* Shows the **brand tagline** in a strong band at the bottom of the page.  
* Surfaces **site-wide legal links** (Terms of Service, Privacy Policy, Member Service Agreement).  
* Displays the **copyright line** for Included Health.

Use the footer on member-facing web pages where:

* the experience represents the broader Included Health product (not a narrow embedded widget), and  
* legal/brand framing is required at the bottom of the layout.

#### Anatomy

The footer has two stacked zones:

1. **Tagline bar (required)**  
   * Full-bleed horizontal bar.  
   * Background: surface/brand/base.  
   * Text: text/primary light.  
   * Centered line of copy:

     * Designed to treat you better.™  
2. **Legal area (required)**  
   * Background: surface/neutral/primary.  
   * Center-aligned content for the **stacked** variant, or space-between alignment for the **inline** variant.  
   * Elements:  
     * **Link list**

       * Terms of Service  
       * Privacy Policy  
       * Member Service Agreement  
       * Each uses the standard **Link** styling.  
     * **Copyright line**

       * © 20XX Included Health (year kept up to date).

#### Layout variants

Use one of two layout variants depending on context and available width:

1. **Stacked (vertical)**  
   * Links stacked vertically, center-aligned with comfortable vertical spacing.  
   * Copyright appears on its own line below the links.  
   * Recommended for narrow viewports or simple layouts.  
2. **Inline (horizontal)**  
   * Links appear in a single row with consistent horizontal spacing.  
   * Copyright appears on the same row, right-aligned or at the far end.  
   * Recommended for wider/desktop layouts.

Both variants:

* Maintain consistent padding above/below the content.  
* Keep the tagline bar visually distinct from the legal area.

#### Behavior

* The footer sits at the **bottom of the page content** and scrolls with the page (not sticky).  
* Only one footer should appear per page/surface.  
* Links open in the same tab unless legal requirements dictate otherwise.

#### Content guidelines

* Tagline text is fixed: Designed to treat you better.™

  * Sentence case, includes the trademark symbol.  
* Legal links use exactly:  
  * Terms of Service  
  * Privacy Policy  
  * Member Service Agreement  
* Avoid additional marketing copy or CTAs; keep the footer focused on brand promise and legal content.

#### Accessibility

* Ensure sufficient color contrast between:  
  * tagline text and brand background, and  
  * links/text and the neutral background.  
* Links:  
  * are keyboard focusable in a logical order, and  
  * have accessible names matching their visible labels.  
* Do not rely on color alone to indicate link state; follow Link component guidance for focus/hover states.

### 

---

### Messaging components

Messaging is a first‑class surface at Included Health. These components work together to make conversations with Dot and the care team feel calm, clinically grounded, and easy to act on.

#### Dot responses

Dot responses are the core message pattern for conversations between the member, Dot, and human Care Team members. This pattern ensures each sender has a distinct, consistent visual treatment so it’s always clear who is speaking.

**What it does**

- Displays messages from Dot, Care Team, and the member within a single thread.  
- Automatically chooses the correct visual treatment based on sender type.  
- Keeps sender identity and context clear across multi‑message exchanges.

**When and why to use**

- In all conversation threads that show Dot and/or Care Team messages.  
- Rendered automatically by the messaging system; not manually toggled per message.

**Use for**

- Any conversational view where Dot or Care Team messages appear.

---

##### Anatomy

| Element | Required? | Detail |
| :---- | :---- | :---- |
| Avatar | Conditional | Uses the Avatar component for Dot and Care Team senders. Do not re‑render the avatar on every bubble from the same sender group when messages are sent back‑to‑back. |
| Sender label | Conditional | Identifies who is speaking (for example, “Dot”, or “First Last · Care Team member”). Appears above or alongside the first bubble in a group. |
| Message bubble | Required | Contains the message text. Supports multiple lines and should not truncate content. |
| Thinking indicator | Conditional | For Dot only, to show Dot is generating a response; dismisses automatically when ready. |
| Typing indicator | Conditional | For Care Team only, to show that a human is typing; dismisses when message is sent. |

##### Interaction

- Message bubbles are non‑interactive by default.  
- Interactive content inside a bubble is limited to **hyperlinks**.

##### Content guidelines

- Use sentence case.  
- Keep content plain text; do not rely on rich text styling for meaning.  
- Keep messages concise and scannable, splitting longer thoughts into multiple messages if needed.

##### Accessibility

- Dot thinking and Care Team typing indicators should be exposed via live regions.  
- Screen readers should read the sender label before message content (for example, “Dot: …”).

---

#### Disclaimer

The Dot disclaimer communicates the limitations of Dot’s AI‑generated responses so members understand what Dot can and cannot do. It sets appropriate expectations and reinforces that Dot does not replace professional medical advice.

**What it does**

- Communicates limitations of Dot’s AI‑generated answers.  
- Clarifies that Dot is not a substitute for professional medical advice.

**When and why to use**

- At the **start of every Dot conversation**.

**Spec**

- **Element**: Copy only.  
- **Required**.  
- **Default copy**:  
  Dot can provide generalized AI‑generated answers for select healthcare questions and connect you to the Care Team any time, but it is not a substitute for professional medical advice.

**Interaction**

- No tappable elements; static text.

**Accessibility**

- Read in sequence by screen readers as part of the conversation intro.

---

#### Timestamp & new message indicator

These elements give members temporal context and highlight when new messages arrive after they return to a thread.

**What it does**

- Adds timestamps in the thread so members can see when messages were sent.  
- Shows a “New message” marker/count when there are unread messages.

**When and why to use**

- In Dot and care‑team conversation threads.  
- System‑generated only.

##### Timestamp

- Required.  
- Centered on its own line between messages.  
- Format (examples):  
  - Same day: 12:34 PM  
  - Yesterday: Yesterday · 12:34 PM  
  - Older: Tuesday, Oct 15 · 12:34 PM  
- Insert when there is a meaningful gap (for example, about an hour) rather than between every message.  
- Non‑interactive.

##### New message indicator

- Conditional; shown when member returns to a thread with unread messages.  
- Appears alongside the first timestamp that separates “read” from “new” messages.  
- Labels: New message, 1 New message, 3 New messages.  
- Persists until all new messages are scrolled into view, then dismisses automatically.  
- Non‑interactive.

##### Accessibility

- Treat the new message indicator as dynamic content; expose in a live region with count.  
- Timestamps should be read in normal message flow.

---

#### Issue / Topic input

The Issue / Topic input is the first step in a Dot conversation where the member describes what they need help with in their own words.

**What it does**

- Prompts the member to describe their issue in natural language.  
- Optionally offers tap‑to‑choose suggestions.  
- Sends the description into the thread as a message.

**When and why to use**

- At the start of a new Dot conversation or when the member is raising a new concern.

##### Anatomy

- **Text input field (required)**  
  - Single‑line input.  
  - Includes clear label/placeholder (for example, “Describe what you need help with…”).  
- **Suggestion chips (optional)**  
  - Tap‑to‑insert example phrases.  
  - Editable after insertion.  
- **Primary action – Send (required)**  
  - Sends the input as a message.  
- **Secondary action – Stop / Cancel (optional)**  
  - Cancels the Issue / Topic step and returns to prior state.

##### Behavior

- Member can type or tap suggestions; Send places the text in the thread and advances the flow.  
- Suggestion chips are shortcuts only; always optional.

##### Content guidelines

- Encourage plain, conversational language.  
- Keep labels and suggestions short and concrete.  
- Do not lead toward a specific diagnosis; focus on what they’re experiencing/need.

##### Accessibility

- Input must have a clear label.  
- Buttons/chips must have accessible names matching their text.  
- The step’s appearance should be announced as a prompt.

---

#### Participant joined system message

System‑generated message that tells the member when a new person (for example, a Care Team member) joins the conversation. “Care is here” is one example of this pattern.

**What it does**

- Notifies the member a new human participant has entered the thread.  
- Clarifies who is present and why.

**When and why to use**

- Automatically when a Care Team member or other human participant is added to a conversation.

##### Tech spec

- **Timestamp (required)**  
  Uses the standard Timestamp component.  
    
- **System copy (required)**  
  System‑generated, for example:  
    
  - “Care is here.”  
  - “\[Name\] is now your Care Team member.”  
  - “\[Name\] joined the conversation to help with your needs.”

Copy must identify who joined and/or their role when known.

##### Interaction

- Non‑interactive.

##### Content guidelines

- Clear, neutral, professional language.  
- Sentence case, no emojis/humor.

##### Accessibility

- Announce via live region when new participant joins, including name and role if available.

---

#### “Jump to latest” icon button

System‑generated control to help members quickly return to the most recent messages after scrolling up.

**What it does**

- Jumps to the latest message.  
- Shows a badge with count when new messages arrive while scrolled up.

**When and why to use**

- Automatically in conversation threads when the member scrolls up past a threshold.

##### Tech spec

- **Icon button (required)**  
    
  - Standard Icon Button component.  
  - Fixed at bottom center above the composer.  
  - Appears when the member scrolls up; disappears when at bottom.


- **Notification badge (conditional)**  
    
  - Shows count of new messages since leaving the bottom.  
  - Dismisses when member taps the button and scrolls to latest.

##### Interaction

- Tap scrolls to latest with a smooth animation, then dismisses the button.

##### Accessibility

- Icon button must have a descriptive accessible name (for example, “3 new messages, jump to latest message”).  
- On activation, move focus to the first new message.  
- Badge count must be included in the accessible label.

---

#### Quick replies

Quick replies are suggested responses members can tap instead of typing.

**What it does**

- Provides tap‑to‑choose options.  
- Reduces friction for simple, structured answers.  
- Captures clean inputs for downstream logic/analytics.

**When and why to use**

- After a clear, focused question with a small set of appropriate answers.  
- To lower effort, steer toward safe responses, and standardize inputs.

**Avoid when**

- Member needs a rich, nuanced answer.  
- Many valid answers and none are clearly dominant.  
- Forcing choices would feel coercive or unsafe.

##### Anatomy

- **Prompt message (required)** – targeted question.  
- **Quick reply chips (required)** – tappable chips directly below the prompt.  
- **Free‑text composer (required)** – always present and usable.

##### Interaction

- Tapping a chip sends that text as the member’s message (or structured payload \+ text).  
- Chip row is typically removed/disabled after selection.  
- Member can always type instead; chips are optional.

##### Content guidelines

- Labels short and concrete.  
- Options mutually exclusive when possible.  
- Avoid leading to diagnosis; focus on describing state/needs.  
- Sentence case, no punctuation (unless a question).

##### Telemetry / eventing

**Impressions**

- Event when quick replies are rendered.  
- Props: conversation\_id, message\_id, quick\_reply\_set\_id, options, surface, flow\_name.

**Selections**

- Event when a chip is tapped.  
- Props: conversation\_id, message\_id, quick\_reply\_set\_id, option\_id, option\_label, position\_index, timestamp.

**Overrides (optional)**

- Event when user types instead after chips are shown.  
- Props: conversation\_id, message\_id, quick\_reply\_set\_id, override\_type.

##### Accessibility

- Each chip is a button with label as accessible name.  
- Row appears in reading order immediately after prompt.  
- Composer remains fully usable via keyboard and assistive tech.

---

#### Multi‑select chips

Multi‑select chips let members select more than one option at a time.

**What it does**

- Enables multiple selections in one step.  
- Moves selected options into the typing bar as a combined answer.

**When and why to use**

- When capturing multiple related answers (symptoms, goals, reasons).  
- Option set is finite and not overly long.  
- Multi‑selection adds necessary nuance.

**Avoid when**

- Single choice required for safety/routing.  
- Option set large or open‑ended.  
- Hierarchy complex enough that a form is clearer.

##### Anatomy

- **Prompt message (required)**.  
- **Chip row (required)** – secondary medium chips beneath the prompt.  
- **Typing bar with selected chips (required)** – selected options appear as tokens/combined list.

##### Interaction

- Tap chip to select; it appears in typing bar and is marked selected.  
- Tap again to deselect; removed from typing bar and unselected.  
- Typing bar aggregates selections (for example, comma‑separated list).  
- Member can add free text in addition to chips.  
- Send submits all selected options (+ optional text) as one message.

##### Content guidelines

- Options short, concrete, member‑friendly.  
- Avoid heavy jargon.  
- “Other” should open a text path; ensure mutual exclusivity with other chips.  
- “None of these” must be mutually exclusive with others.

##### Telemetry / eventing

**Impressions**

- When chip set is rendered.  
- Props: conversation\_id, message\_id, multiselect\_set\_id, options, surface, flow\_name.

**Selection / deselection**

- Each toggle.  
- Props: conversation\_id, message\_id, multiselect\_set\_id, option\_id, option\_label, action (selected/deselected), position\_index, timestamp.

**Submission**

- When message with chips is sent.  
- Props: conversation\_id, message\_id, multiselect\_set\_id, selected\_option\_ids, selected\_option\_labels, selection\_count, has\_free\_text, free\_text\_length (no raw PHI).

**Overrides (optional)**

- When user clears all chips and only types.  
- Props: conversation\_id, message\_id, multiselect\_set\_id, override\_type.

##### Accessibility

- Treat chip row as multi‑select control (group label \+ individual buttons/checkboxes).  
- Announce selection/deselection changes.  
- Ensure keyboard access and non‑color selection states.

---

#### Service cards

Service cards surface high‑value services or flows (for example, urgent care, visit scheduling, provider search) as structured, tappable options inside the conversation.

**What it does**

- Presents service entry points as cards.  
- Each has a title, short description, and primary CTA.

**When and why to use**

- When Dot/Care Team identifies one or more concrete services the member can/should use next.  
- To explain what a service is, set expectations, and provide an obvious action.  
- Avoid for generic marketing or purely informational messages.

##### Anatomy

- **Avatar / chip (optional)** – Dot avatar \+ small “Recommendation” chip when Dot is recommending.  
- **Title (required)** – service name.  
- **Sub‑title/meta (optional)** – key info (time, modality, etc.).  
- **Description (optional)** – 1–2 sentences of what/why.  
- **Primary CTA (required)** – main action.  
- **Secondary CTA (optional)** – secondary action.

##### Interaction

- Primary CTA opens associated flow (scheduling, search, etc.).  
- Secondary CTA triggers defined secondary behavior.  
- Only CTAs should be interactive.

##### Content guidelines

- Titles: 3–6 words, clear, sentence case.  
- Descriptions: 1–2 sentences; explain what and why.  
- CTAs: 1–3 words, outcome‑based.

##### Telemetry / eventing

**Impressions**

- When a service card or set is rendered.  
- Props: conversation\_id, message\_id, card\_id, card\_type/service\_type, position\_index, surface, flow\_name.

**Primary CTA click**

- Props: conversation\_id, message\_id, card\_id, card\_type/service\_type, cta\_id/cta\_type, cta\_label, destination, position\_index, timestamp.

**Secondary CTA click (if any)**

- Same shape, with cta\_type \= secondary.

**Dismiss/bypass (optional)**

- When card is bypassed/dismissed.  
- Props: conversation\_id, message\_id, card\_id, card\_type, dismiss\_type.

##### Accessibility

- CTAs must have accessible names; include context from title if needed.  
- Cards must be reachable/operable via keyboard in visual order.

---

#### Option cards

Option cards present 2–3 clear paths forward as richer choices in the conversation.

**What it does**

- Summarizes each option with title, description, and CTA.  
- Lets members compare a small set of routes and pick one.

**When and why to use**

- When Dot has narrowed to a small number of options requiring an explicit choice.  
- For timeframes, modalities, or support level tradeoffs.  
- Avoid when there is a single obvious next step or many options requiring search/filtering.

##### Anatomy

- **Icon container (optional)**.  
- **Static chip (optional)** – for labels like “Recommended”.  
- **Title (required)**.  
- **Sub‑title/meta (optional)**.  
- **Description (optional)**.  
- **CTA button (required)**.

Cards are usually shown as a row of 2–3.

##### Interaction

- Tap CTA to commit to that option and launch associated flow.  
- Only CTA is interactive.

##### Content guidelines

- Titles: 3–6 words, make tradeoffs clear.  
- Descriptions: 1–2 sentences describing who it’s for and what to expect.  
- CTAs: 1–3 words, outcome‑based.

##### Telemetry / eventing

**Impressions**

- When option card set renders.  
- Props: conversation\_id, message\_id, option\_set\_id, options, surface, flow\_name.

**Option selection**

- When primary CTA clicked.  
- Props: conversation\_id, message\_id, option\_set\_id, option\_id, option\_label, position\_index, cta\_label, destination, timestamp.

**Bypass (optional)**

- When set is bypassed without a selection.  
- Props: conversation\_id, message\_id, option\_set\_id, bypass\_type.

##### Accessibility

- CTA accessible names should distinguish options.  
- Logical reading/focus order.  
- Do not rely solely on color to differentiate.

---

#### Preview cards

Preview cards surface concise snapshots of recommended providers or services directly in the conversation.

**What it does**

- Shows key details about a single entity (usually a provider).  
- Lets members quickly assess fit and logistics.  
- Provides clear actions to move forward.

**When and why to use**

- When recommending specific providers/services and member needs enough context to choose.  
- After Dot has clarified needs and narrowed to a set of appropriate entities.

##### Anatomy

- **Avatar / Photo (required)** – using Avatar component.  
- **Primary line (required)** – name \+ credentials.  
- **Secondary lines (required)** – role/specialty, modality, network/plan fit, etc.  
- **Meta row/tags (optional)** – “Accepting new patients”, etc.  
- **Primary CTA (required)**.  
- **Secondary CTA (optional)**.

##### Interaction

- Primary CTA launches associated flow (scheduling, messaging, details).  
- Secondary CTA opens secondary flow.  
- Card body is informational.

##### Content guidelines

- Lead with identity and fit.  
- Keep text tight and scannable.  
- Sentence case; CTAs short and outcome‑based.  
- Tone calm and clinically grounded.

##### Telemetry / eventing

**Impressions**

- When preview cards render.  
- Props: conversation\_id, message\_id, preview\_set\_id, cards (id/type/entity\_id/position), surface, flow\_name.

**Primary CTA clicks**

- Props: conversation\_id, message\_id, preview\_set\_id, card\_id, entity\_type, entity\_id, position\_index, cta\_label, destination, timestamp.

**Secondary CTA clicks (if any)**

- Same with cta\_type \= secondary.

**No‑engagement (optional)**

- When flow advances without any CTA clicks.

##### Accessibility

- Titles and entity identity must be exposed.  
- CTAs must have descriptive accessible names including context.  
- Logical tab/focus order.

---

#### Load more card

Appears at the end of a carousel to surface additional results without navigating away.

**What it does**

- Appears as the last card in a carousel when more results exist.  
- Loads additional cards inline when tapped.

**When and why to use**

- When result count exceeds initial display (for example, provider matches \> initial set).  
- System‑generated only.

##### Anatomy

- **Illustration (required)** – context‑relevant illustration (for example, Provider Match).  
- **CTA button (required)** – secondary style; label “View more \[context\]” (for example, “View more matches”).

##### Interaction

- Always last card in carousel.  
- Matches size of other cards.  
- Tap loads 3 more cards; Load more remains while more results exist.  
- Appears when results \> 6; each tap loads 3 more; removed when all results loaded.

##### Content guidelines

- CTA label “View more \[context\]”.  
- Sentence case, short and specific.

##### Accessibility

- Announce loading of new cards (for example, “3 more matches loaded”) via live region.  
- Move focus to first newly added card.

---

#### Visit confirmation card

Summarizes a scheduled visit directly in the conversation.

**What it does**

- Confirms a visit is scheduled/updated.  
- Shows key visit details.  
- Provides action to view/manage.

**When and why to use**

- After a visit (for example, urgent care) is successfully scheduled or rescheduled via Dot/messaging.

##### Anatomy

- **Header (required)**  
    
  - Generic variant: title (for example, “Urgent visit”) \+ short confirmation line.  
  - Provider‑specific variant: avatar \+ provider name/credentials \+ role line.


- **Highlight band (required)**  
    
  - Day \+ date.  
  - Time \+ time zone.


- **Details list (required)**  
    
  - Visit type.  
  - Location.  
  - Modality.  
  - Visit cost (if available).


- **Primary CTA (required)**  
    
  - For example, “See visit details”, “Change this visit”.


- **Secondary CTA (optional)**  
    
  - For important secondary paths (for example, emergency guidance).

##### Behavior

- System‑generated after successful schedule/reschedule.  
- Inserted into thread and persists as a record.  
- Primary CTA opens visit details or management view.  
- Secondary CTA opens secondary flow.

##### Error and fallback behavior

- Only render card when scheduling/rescheduling returns a clear success response with a valid visit\_id.  
- If scheduling returns error/indeterminate state:  
  - Do not render a partial/pending confirmation card.  
  - Show appropriate error/retry pattern instead.  
- If a confirmed visit later fails (for example, downstream cancellation), surface via error/cancellation pattern, not by silently editing/removing the original card.

##### Telemetry / eventing

**Impressions**

- When confirmation card is rendered.  
- Props: conversation\_id, message\_id, confirmation\_type, visit\_id, visit\_type, surface, flow\_name.

**Primary CTA click**

- Props: conversation\_id, message\_id, confirmation\_type, visit\_id, visit\_type, cta\_label, cta\_type \= primary, destination, timestamp.

**Secondary CTA click (if any)**

- Same shape, cta\_type \= secondary.

##### Content guidelines

- Explicit header and confirmation.  
- Highlight band always includes day/date/time/time zone.  
- Details short and consistent labels.  
- CTAs 1–3 words, outcome‑based, sentence case.  
- Tone calm, reassuring, precise.

##### Accessibility

- Expose header, highlight band, and details in reading order.  
- CTAs must have descriptive accessible names.  
- Treat card as a state‑change announcement via live region when it appears.

---

## Patterns

### Forms

Forms collect information from members so we can move care, coverage, and benefits workflows forward (for example, signing up, requesting a service, or performing a search). Good forms reduce cognitive and emotional load, make requirements obvious, and help members feel confident they’re doing the right thing.

#### Structure

- Prefer a single, vertical column for fields.  
- Group related fields logically and support them with short helper text where needed.  
- Place the primary action (Submit, Continue, Next) at the bottom.

#### Required and optional fields

- Mark all required field labels with an asterisk \* at the end of the label.  
- Use an asterisk even when:  
  - all fields on the screen are required, or  
  - there is only one required field and it is the sole focus.  
- Do not:  
  - add “(Optional)” to labels, or  
  - show a legend like “Fields marked with \* are required.”  
- If a screen only contains optional questions, treat the screen as optional and provide a clear way to skip it.

#### Submit and alternative actions

- Keep the primary button enabled; do not disable it when fields are incomplete/invalid.  
- Use a single primary action:  
  - **Submit** – send data to system.  
  - **Continue** – move forward in linear flow.  
  - **Next / Back** – move between steps.  
- For optional screens, provide secondary actions like “Skip”, “Not now”.

#### Validation methods

Use **Validate on submit** by default, with Live/Guided validation when it clearly helps.

##### 1\. Validate on submit (default)

- Validate all fields on submit.  
- Show inline error messages by field.  
- If two+ fields have errors, also show a summary banner at top and move viewport so it’s visible.

##### 2\. Live validation

- Display an error when current input would result in error.  
- While editing: only for serious/non‑obvious errors; use sparingly.  
- After editing (on blur): show immediately if invalid.

##### 3\. Guided validation

- For complex requirements (passwords, character limits).  
- Show instructional text before or when field gains focus.  
- Do not show red error text until field has been unfocused at least once and input is invalid.

##### Text area with character limit

- Show current / max count below field.  
- While under limit: neutral styling.  
- Over limit: count and message in error style, with clear explanation.

#### Content guidelines for form actions

- **Continue / Cancel** – dual actions when only one way to move forward and cannot skip or go back.  
- **Next / Back** – dual actions for multi‑step flows.  
- **Enter** – preferred verb for inputting information (instead of “type”).  
- **Submit** – reserved for sending data to system.

---

### Empty states

Empty states clarify where content could exist, but currently does not. Unlike errors, empty states usually do not indicate a problem and can sometimes give the member a way to add or discover content.

#### Header

- Use second‑person POV when applicable (“You don’t have any lab results yet”), otherwise neutral.  
- Sentence case.  
- 3–7 words.  
- No punctuation unless a question.

#### Body copy

- Use second‑person POV when applicable.  
- Proper punctuation.  
- 1–2 sentences.  
- Explain why it’s empty and/or what will appear there in future.

#### CTA

- Neutral POV.  
- Sentence case, no punctuation.  
- 1–3 words.  
- Clearly describe the action (for example, “Upload document”).  
- Keep language consistent with header/body.

---

### Success states

Success states are discrete steps in a flow—usually longer or higher‑effort ones—where it’s crucial to clearly confirm a process has completed and what happens next.

#### Header

- Second‑person POV when applicable (“You’re all set”), otherwise neutral.  
- Sentence case.  
- 3–7 words.  
- Optional exclamation mark (used sparingly).

#### Body copy

- Second‑person POV when applicable.  
- Proper punctuation.  
- 1–2 sentences.  
- Reinforce what was completed and what the member can do next.

#### CTA

- Neutral POV.  
- Sentence case, no punctuation.  
- 1–3 words.  
- Clear and specific about the action (for example, “View details”, “Continue”).  
- Match header/body so the outcome is obvious.

---

### Error states

Error states make problems visible, easy to understand, and helpful to recover from. They should clearly communicate what went wrong, what it means for the member, and the safest next step—without blame, panic, or jargon.

#### Error types

- **Field validation**  
  - Validate on submit: inline errors after primary action.  
  - Live validation: only when reliably helpful.  
- **Screen‑level banner**  
  - At top when multiple fields or whole submission have issues.  
- **Inline banner (card or modal)**  
  - Scoped to a specific container.  
- **Error screen**  
  - Full screen when the entire experience or key task is blocked.

#### Levels

- **Danger (red)** – severe errors requiring member action or representing destructive changes.  
- **Warning (yellow)** – precautions and critical instructions that help prevent errors.

#### What error messages should do

- Tell the member what happened.  
- Provide a solution if one exists, ideally a single clear action.  
- Be specific about ranges/values when relevant.  
- Be timely:  
  - Don’t interrupt while the member is fixing the issue.  
  - Don’t delay errors that would help them avoid mistakes.

#### Content guidelines

- **Do not accuse**  
  - Avoid blame; passive voice is acceptable if it reduces blame.  
- **Take accountability**  
  - Own system‑side errors (“Sorry, something went wrong on our end.”).  
- **Be clear**  
  - Avoid technical jargon and error codes.  
- **Be concise**  
  - Short, specific, meaningful.  
- **Be actionable**  
  - Provide a clear next step (“Add a weight”, not just “Weight can’t be blank.”).  
- **Be positive**  
  - Avoid harsh or negative language.  
- **Use sentence case**  
  - Avoid ALL CAPS.  
- **Avoid humor/fluff**  
  - No “oops”/“whoopsie” in clinical contexts.

---

## Content Strategy

Content strategy in UX is about delivering the right content to the right audience, at the right time, in the right way. This guide gives writers and non-writers the tools they need to create clear, inclusive, clinically safe content throughout our app.

#### Strategy Statement

We help members make informed decisions about their healthcare needs by creating content that empowers them to self-serve and guides them to the care they need in the easiest way possible.

#### Content Goals

With every piece of content we publish, we aim to…

· Break down barriers in the traditional healthcare system  
· Provide great healthcare without all the headaches  
· Address common pain points members encounter with coverage, costs, and care  
· Make healthcare feel more simple, less stressful, and less complicated

#### Guiding Principles

Conversational  
There are certain ways a healthcare company talks about healthcare, and then there are the ways that actual people talk about healthcare. Our writing should sound like it’s coming from a real person — something that still feels new in the healthcare space. Through our conversational voice and tone, we can make people feel like Included Health is a place that will take care of them in a new and better way.

Easy  
Our communications need to feel easy. Overly text-heavy, dense content is hard to digest and easy to ignore. We use structure, hierarchy, and scannable formatting to help members quickly find what matters so they can move forward without confusion.

Practical  
Our content is designed to be useful or practical rather than attractive. We create clean, basic communications that guide members to what they need and want, help them take the next best step, and empower them to make informed decisions.

Inclusive  
We aim to provide positive healthcare experiences for all members. Our content should be respectful, accurate, unbiased, and consistent with the preferences of the individuals and communities being discussed. Content must also be accessible so that all users, including those with different mental and physical abilities, can read and understand what we write.

#### Brand Voice Alignment

Our content should reflect Included Health’s brand personality:

Tenacious  
We don’t shy away from solving the hard problems. We keep at it, working with steadfast determination until we reach our goal.

Kind  
We care, and it shows. No matter the situation, we arrive with an attitude of goodwill and compassion as the same warm, empathetic ear you feel you can always turn to.

Smart  
We know our stuff. We have to. And while we never come across as a know-it-all, we are the thoughtful partner who can answer healthcare questions, big and small. For those answers we don’t have at the ready, we know where and how to find them.

Surprising  
We’re here to do this thing that doesn’t seem like it can be done, and to do so in ways that are refreshingly better, easier, and that make the day a little more bright.

#### UX Copy Guidelines

These guidelines standardize common text elements so experiences stay consistent across surfaces and contributors.

Text Elements  
Below are the commonly used text components that make up titles, headers, body copy, and more. These guidelines should be used to keep copy consistent. For more specific text rules, refer to the relevant pattern/component pages within the design system.

Text Element, POV, Case, Punctuation, Word Count, Other

Page Titles  
Neutral  
Title Case  
Always omit punctuation  
1–3 words  
Used once per page or surface.

Headers  
Second person (“you” and “your”) or neutral  
Sentence case  
Always omit punctuation (unless in the form of a question)  
3–7 words; should not exceed 2 lines  
Lead with the member’s objective.

Body Copy  
Second person (“you” and “your”) or neutral  
Sentence case  
Always use standard punctuation  
No official word-count limit; keep as concise as possible  
Break down bulky paragraphs into lists; always lead with the user’s objective.

CTAs  
Neutral (with the exception of “Contact us”)  
Sentence case  
Always omit punctuation  
1–3 words  
Be clear and specific about the action the member will take. Use consistent language for both the CTA and the header/body copy so the outcome is obvious.

Lists  
Second person (“you” and “your”) or neutral  
Sentence case  
Consistency is key — if one item in the list is a full sentence that requires punctuation, all list items should include punctuation. Otherwise, punctuation can be omitted.  
No official word-count limit; keep as concise as possible  
Use a bulleted list when order does not matter; use a numbered list when the sequence must be followed in a specific order. Be consistent with structure (for example, if you start one bullet with a verb, the rest should start with a verb as well).

#### Common Terminology (UX/UI Glossary)

Use these standard terms in UI labels, buttons, and system messages. Prefer this vocabulary over near-synonyms so copy stays consistent across products.

Gestural Terms

Click  
Generic term for actions performed with a mouse or trackpad on desktop interfaces. Do not use for touch devices.

Scroll  
Used to describe the movement of content as a member moves in a particular direction.

Select  
Preferred generic term for indicating choice in an interface. Use instead of “click” or “tap” in most UX copy.

Swipe  
Gesture term reserved for touchscreen devices. Do not use as a desktop-equivalent term.

Tap  
Gesture term reserved for touchscreen devices. Do not use as a desktop-equivalent term.

Toggle  
Gesture term used for controls that switch a state on or off.

Type  
Generic term for entering text via a physical or digital keyboard.

Dual Actions

Add / Remove  
Use “add” and “remove” as dual actions in flows where members can add or remove content. Avoid mixing with “create/delete” in the same pattern.

Continue / Cancel  
Use this pair when moving forward or backing out of a flow.

Next / Back  
Use to move step-by-step through a known multi-step flow.

Next / Previous  
Use when navigating between pages or items in a sequence (for example, paginated results).

Affirmative Actions

Agree  
Use when a member is giving consent or accepting terms. Do not use interchangeably with “OK” in high-stakes or legal contexts.

Enter  
Use when a member is inputting new information into the system.

OK / okay  
Use as a simple acknowledgment or confirmation, not for consent.

Send  
Use for sending or submitting a message.

Share  
Use when sending information or artifacts (documents, visit summary) to another person or team.

Start  
Use when beginning a flow or process.

Submit  
Use when sending data into the system, typically via forms or applications. Avoid using “Submit” to label chat or messaging actions.

Dismissive Actions

Close  
Generic term for dismissing a window, dialog, or surface.

Delete  
Use when permanently erasing something the member created or uploaded.

Dismiss  
Use when clearing a temporary message, alert, or notification without deleting underlying data.

Skip  
Use when bypassing an optional step in a multi-step flow.

General Actions

Book  
More casual and conversational alternative to “Schedule” when space is tight.

Choose  
Decision-making verb for selecting between options (for example, choosing a doctor).

Schedule  
Use for booking an appointment or visit.

Upload  
Use for transferring files or documents into the product.

View  
Use to allow members to see additional or more detailed information; prefer “View” over “See” for clarity.

Miscellaneous

App / Website  
“App” refers to the Included Health mobile app. “Website” refers to experiences at includedhealth.com.

Button  
Use when referring to UI elements that trigger an action or submit data.

Log in / Login  
Use “log in” as the verb (for example, “Log in to your account”). Use “login” as the noun (for example, “On the login screen…”).

Log out / Logout  
Use “log out” as the verb and “logout” as the noun if needed.

Sign up / Signup  
Use “sign up” as the verb and “signup” as the noun. Prefer “sign up” over “register” in member-facing copy.

---

### Do’s and Don’ts

#### Do’s

* **Design for emotional and cognitive safety.**  
  Reduce anxiety and effort, especially in clinical and financial flows. Make it obvious what’s happening, what’s expected of the member, and what happens next.  
* **Be clear by design.**  
  Use hierarchy, spacing, and structure so the right thing to do is visually obvious. Aim for one primary action per surface whenever possible.  
* **Keep AI and clinical care tightly grounded.**  
  Make Dot’s capabilities and limits explicit, and anchor guidance in credible clinical pathways. Use Dot to clarify and route, not to over-promise or replace clinicians.  
* **Use semantic tokens everywhere.**  
  Rely on surface/text/border semantic tokens (brand, neutral, success, warning, danger, overlay) instead of raw hex values or core palette tokens.  
* **Write plain, precise copy.**  
  Use sentence case, everyday language, and short sentences. Clearly label actions by outcome (for example, “See visit details”, “Upload document”) rather than mechanics (“Click here”).  
* **Optimize for accessibility by default.**  
  Maintain contrast, support keyboard and screen readers, and avoid using color alone for meaning. Treat dynamic content (new messages, errors, confirmations) as state changes that should be announced.  
* **Prefer familiar patterns over novelty.**  
  Use established components (cards, chips, badges, forms, messaging patterns) and extend them thoughtfully before inventing new patterns.  
* **Instrument key patterns.**  
  Emit impression and interaction events for structured patterns (quick replies, multi-select chips, cards, confirmations) with enough context to measure performance and safety.  
* **Fail safely and visibly.**  
  Use error patterns that explain what went wrong, what it means, and how to recover—owning system issues and guiding the member to the safest next step.

#### Don’ts

* **Don’t create generic or “bot-ish” healthcare UI.**  
  Avoid designs that feel like generic insurance dashboards, chatbots, or tech demos. The experience should feel distinctly Included Health and clinically grounded.  
* **Don’t overload screens or cards.**  
  Avoid dense walls of text, stacked CTAs, or mixed metaphors within the same surface. If everything looks important, nothing is.  
* **Don’t bypass semantic tokens.**  
  Don’t hard-code hex colors or use core palette tokens directly in mocks or implementation. Don’t invent one-off component colors instead of extending the semantic layer.  
* **Don’t rely on color, icon, or motion alone.**  
  Never make critical meaning depend only on color, an icon, or an animation. Always pair with clear text labels and accessible names.  
* **Don’t blame or confuse members in errors.**  
  Avoid accusatory language (“you did X wrong”), technical codes, vague “Something went wrong”, or dead-end errors without a next step.  
* **Don’t use playful or cutesy tone in clinical moments.**  
  Skip humor, emojis, and casual interjections (“oops”, “whoopsie”) in error messages, Dot disclaimers, visit flows, and serious health contexts.  
* **Don’t force a single rigid path when flexibility is safer.**  
  Avoid patterns that trap members in one way of responding (for example, only quick replies, no free text) when nuance or additional context might matter.  
* **Don’t invent new components lightly.**  
  Don’t design bespoke patterns where existing components (cards, forms, chips, messaging patterns, confirmation cards) can be adapted to the use case.  
* **Don’t hide real state changes.**  
  Don’t silently change or remove confirmations (for example, visits) when something fails downstream. Surface changes via explicit confirmation, error, or cancellation patterns.

---
