# Assets & Icons Guidelines

**Scope:** Image/SVG imports, icon usage policy  
**Related files:** `components.md`

---

## Image and SVG Imports

**CRITICAL:** Always use the `@/` alias for ALL asset imports (images AND SVGs) to prevent broken links and intermittent loading failures:

```typescript
// ✅ CORRECT - Use @/ alias (configured in vite.config.ts as alias to ./src)
import imgExample from '@/imports/image-5.png';
import svgPaths from '@/imports/PreviewCard/svg-qgziiwukqm';
import { imgIOsLockScreen1 } from '@/imports/IOsLockScreen/svg-6o9wv';

// ❌ WRONG - Relative paths can break
import imgExample from '../../../../imports/image-5.png';
import svgPaths from '../../../../imports/PreviewCard/svg-qgziiwukqm';
```

**Why:**
- The `@/` alias is configured in vite.config.ts to map to `./src`
- Vite's asset handling works reliably with this alias across all file depths
- Relative paths from deeply nested components fail to resolve consistently
- **SVG imports with relative paths cause intermittent failures** where images appear broken on initial load but work after refresh
- This happens because Vite's module resolution order changes between loads, creating race conditions
- The `@/` alias eliminates this inconsistency

---

## Icon Usage

**CRITICAL: Never approximate or recreate icons from memory or generic libraries.**

### Icon Policy

- **ALWAYS use exact icons from Figma designs** when provided
- **NEVER approximate** icons using SVG paths from memory, generic icon libraries, or AI generation
- **ASK for Figma designs** if icons are missing or unclear
- **DO NOT use** generic icon libraries (Heroicons, Lucide, FontAwesome) unless explicitly approved

### When you need an icon

1. **Check if Figma imports exist** in `/src/imports/` for the specific icon
2. **If not found**, explicitly ask the user: "I need the [icon name] icon from Figma for [component/feature]. Can you provide it?"
3. **Wait for the design** before implementing the component with icons

### Why this matters

- Icon style, weight, and proportions are part of the brand design system
- Approximated icons break visual consistency
- Users can tell when icons don't match the design
- It's faster to wait for the correct asset than to redo incorrect work
