# Development Workflow

**Scope:** Step-by-step process for implementing new features and components  
**Related files:** `components.md`, `chat-scripts.md`, `app-architecture.md`

---

## Standard Workflow Steps

1. **Check component catalog** (`/src/app/components/healthcare/README.md`) - Review existing components
2. **Check style guide** (press ESC in app) - See what components exist visually
3. **Receive Figma link** for component/chapter
4. **Review design** in detail (layout, spacing, typography, colors, interactions)
5. **Map to existing healthcare components** first, then shadcn/ui components if needed
6. **Implement only what's shown** in the design
7. **Use absolute paths** for all image imports (`/src/imports/...`)
8. **Document component** in appropriate category README (purpose, props, story dependencies)
9. **Add to StyleGuide.tsx** with live example using story bible data
10. **Update master catalog** if adding a new component
11. **Verify against design** before marking complete

---

## Quick Summary

For reference in main Guidelines.md:

1. Check existing components (catalog + style guide)
2. Get Figma design
3. Implement with high fidelity
4. Document (README + StyleGuide)
5. Verify against design
