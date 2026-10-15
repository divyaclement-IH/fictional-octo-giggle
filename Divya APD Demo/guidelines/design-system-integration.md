# Design System Integration

**Scope:** How to use Included Health DESIGN.md and design system references  
**Related files:** Main Guidelines.md

---

## References

This prototype integrates with the **Included Health Design System** for consistency with brand guidelines while maintaining implementation independence.

**Reference Documents:**

**Location:** Repository root and `/guidelines/` folder

1. **`Included Health DESIGN.md`** (repo root)
   - Full brand principles, color tokens, typography scale
   - Voice and tone guidelines, messaging patterns
   - Semantic token philosophy and naming conventions
   - **Use for:** New work, copy guardrails, semantic naming

2. **`guidelines/figma-ingestion-guide.md`**
   - Order of precedence (Guidelines.md > implemented components > DESIGN.md)
   - How existing components already align with IH brand colors
   - What to use vs. what NOT to do from DESIGN.md

---

## How to Use DESIGN.md

✅ **DO use DESIGN.md for:**
- Principles when designing new surfaces (Human always, Clear by design, Confident not rigid)
- Voice and tone when writing new copy
- Semantic token **names** when adding new styles
- Typography guidance for new text elements
- Reference for IH brand color values (blues, greens, greys)

❌ **DO NOT:**
- Bulk find-replace hex values in existing components to "match DESIGN.md"
- Re-theme `src/styles/theme.css` globally
- Replace existing `healthcare/` components with generic "design system" layouts
- Add dark mode (light mode only until officially published)

---

## Rationale

**Why this approach:**

**Existing components already align** with IH Anatomy color palette:
- Blue primary (`#0012E7`), neutrals (`#E1E1E1`, `#6D6D6D`, `#3B3B3B`)
- Member bubble background (`#E6EFFE`)
- Typography uses Figtree across healthcare components

**DESIGN.md is for incremental enhancement**, not wholesale replacement. Use it to guide new work while preserving the fidelity of existing Figma-sourced implementations.

**Order of precedence:**
1. **Guidelines.md** - Critical constraints and routing to specific guidelines
2. **Implemented components** - Already built and tested healthcare components
3. **Figma imports** - Designs provided by user for new features
4. **DESIGN.md** - Brand principles and semantic naming for new work
