# Included Health design spec — Figma Make ingestion guide

This file tells **Figma Make** (and other AI-assisted editors) how to use `Included Health DESIGN.md` **together with** this prototype repo **without overwriting or “fixing” work that already matches IH Anatomy.**

## Order of precedence (highest first)

1. **`guidelines/Guidelines.md`** — APD prototype rules: implement from approved Figma references; do not invent UI; stub until design exists.
2. **`src/app/components/healthcare/`** — Implemented reusable components and their READMEs. These are the **canonical UI** for this Make project; colors already mirror IH core palette hex values exported from Figma (see mapping below).
3. **`src/imports/`** — Generated/imported Figma nodes; treat as **frozen reference** unless a stakeholder supplies an updated Figma link.
4. **`Included Health DESIGN.md`** (repo root) — Brand principles, full token tables, messaging patterns, voice and tone. Use for **new** surfaces, copy guardrails, and **semantic naming** — not as a mandate to re-theme existing components.

If DESIGN.md and an existing component disagree on visuals, **keep the component** until design explicitly updates the reference frame in Figma and someone refreshes the implementation.

## How this repo already aligns with DESIGN.md

| Area | DESIGN.md | This Make reference |
|------|-----------|---------------------|
| Typography | Figtree for member-facing apps | `font-['Figtree:...']` across healthcare components |
| Brand blues | e.g. blue/700 `#0012E7`, blue/800 `#002380`, blue/900 `#001048` | Lock icon, links, primary buttons, strokes |
| Neutrals | grey/300 `#E1E1E1`, grey/700 `#6D6D6D`, grey/800 `#3B3B3B` | Borders, secondary text, body copy |
| Member bubble | blue/200 `#E6EFFE` | `MessageBubble` member variant |
| Semantic greens / ambers (examples) | green/200 `#EAFAF1`, green/700 `#00835D`; amber callouts | `SpecialistCard`, `ConfirmationCard` callouts |

**`src/styles/theme.css`** still carries **default shadcn** semantic colors (oklch neutrals, etc.). That is **infrastructure** for generic shadcn primitives. The **healthcare journey UI** does not depend on that file for IH-brand blues and greys — do **not** bulk-replace `theme.css` to “match DESIGN.md” unless you are deliberately normalizing *all* primitives and regression-testing every screen.

## What to ingest from `Included Health DESIGN.md`

**Safe and valuable**

- Overview and **Principles** (Human always, Clear by design, Confident not rigid).
- **Semantic token philosophy** (surface / text / border; prominence levels) when **naming** new styles or variables.
- **Typography** scale and Figtree usage for **new** text.
- **Messaging / components** sections that describe Dot, care team, and chat patterns — align copy and structure with existing `ChatContainer`, `MessageBubble`, `CareTeamBubble`, etc.
- **Voice and tone** and vocabulary lists for **new copy**, respecting `Guidelines.md` (no embellishment beyond approved strings).

**Use with care**

- Full **core palette** tables: helpful as a lookup when adding new UI; **do not** use them to bulk-find-replace hex in existing components.
- **“Use semantic tokens everywhere” / “don’t hard-code hex”** — that is the **system target** for greenfield IH product work. In this repo, legacy Figma exports use hex literals **by design** for fidelity. For **new** code, prefer extracting CSS variables or Tailwind theme extensions that map to the same hex values (incremental cleanup), not a destructive pass.

**Do not do**

- The repo copy of `Included Health DESIGN.md` is **deduplicated** (single canonical document). You can attach the full file to Make without duplicate sections.
- Do not interpret DESIGN.md as permission to **replace** `figma-make-reference` components with generic “design system” layouts.
- Do not add **dark mode** tokens or screens based on DESIGN.md — the spec states light theme only until dark mode is published.

## Anatomy (Figma) relationship

**IH Anatomy** (`VT79VSlhYlpl0g2JS9vLKt`) is the visual benchmark. Figma Make does **not** sync libraries automatically (see `src/imports/APD_Greenfield_Stakeholder_Plan.md` §4.6). Workflow: **Figma frame → export/import or hand edits in Make** → update component README + StyleGuide when reusable pieces change.

## Suggested prompt snippet for Figma Make

You can paste this when attaching IH context:

> Follow `figma-make-reference/guidelines/Guidelines.md` and `IncludedHealth-Design-Ingestion.md`. Use Included Health DESIGN.md only for principles, voice, and token **names**; keep existing `healthcare` components and hex values unless changing a specific screen per an updated Figma reference. Do not re-theme `theme.css` globally. Light mode only.

## Maintenance

When you add a **new** reusable component:

1. Match Anatomy / DESIGN semantic intent where possible.
2. Document in the category `README.md` and `StyleGuide.tsx` per `Guidelines.md`.
3. If you introduce new hex values, add a row to the mapping section above (or a short comment in the component) linking to the Figma or DESIGN token name.
