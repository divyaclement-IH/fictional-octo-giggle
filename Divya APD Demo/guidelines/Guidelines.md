# APD Prototype Development Guidelines

**Quick Reference:** Core constraints that apply to all work in this prototype.

---

## Design-First Principle

**CRITICAL CONSTRAINT:** All implementation must be driven by Figma designs provided by the user.

### Rules

1. **DO NOT create or add anything on your own**
2. **DO NOT invent UI patterns, layouts, or components**
3. **ONLY adapt and implement designs provided via Figma links**
4. **Wait for Figma design links before implementing any visual component**

### Design System Reference

- **ALWAYS consult** `figma-ingestion-guide.md` for how to use `DESIGN.md` properly
- `DESIGN.md` provides brand principles, token tables, messaging patterns, voice and tone
- Use `DESIGN.md` for **semantic naming**, **new surfaces**, and **copy guardrails**
- **DO NOT** bulk-replace existing component colors/styles based on DESIGN.md
- Follow the order of precedence: Guidelines.md → Implemented components → Figma imports → DESIGN.md

### When a design is not yet provided

- Stub the component with placeholder structure only
- Document what design elements are needed
- Do not guess or create temporary visual designs
- Flag missing designs and wait for Figma links

### Core Principles

- **Simplicity**: Choose the simplest implementation that accurately represents the design
- **Reusability**: Build components that can be composed and reused across chapters
- **Design fidelity**: Match Figma designs precisely; do not embellish or improve

---

## Order of Precedence

When implementing features, follow this hierarchy:

1. **Guidelines.md** (this file) - Critical constraints and routing to specific guidelines
2. **Implemented components** - Existing healthcare components in `/src/app/components/healthcare/`
3. **Figma imports** - Designs provided by user for new features
4. **DESIGN.md** - Brand principles and semantic naming for new work

---

## Quick Reference: Critical Rules

**ALWAYS:**
- ✅ Check existing components first (`components.md`)
- ✅ Use `@/` alias for all asset imports (`assets-and-icons.md`)
- ✅ Wait for Figma designs before building UI
- ✅ Document components in README + StyleGuide
- ✅ Pull data from story bible (no hardcoded values)
- ✅ Use 12-hour time format without AM/PM on lock screen and status bar

**NEVER:**
- ❌ Invent UI or approximate icons
- ❌ Use relative paths for imports
- ❌ Create components without checking catalog
- ❌ Bulk-replace colors based on DESIGN.md
- ❌ Add features not shown in Figma

---

## Where to Find Specific Guidelines

Detailed documentation has been organized into focused files for easier navigation:

- **App layout & chapter app state**: `guidelines/app-architecture.md`  
  Desktop wrapper, appState.ts structure, adding new chapters

- **App navigation shell & exploration chapters**: `guidelines/app-navigation.md`  
  AppNavigationShell, bottom navigation, Chapter 6 pattern, action gates in navigation

- **Conversation scripts, action gates, and chat behavior**: `guidelines/chat-scripts.md`  
  ConversationTurn format, action gate patterns, chat timing, script formatting

- **Components, reuse patterns, and documentation**: `guidelines/components.md`  
  Component catalog, generic vs feature-specific, README and StyleGuide maintenance

- **Component-specific behaviors**: `guidelines/component-behaviors.md`  
  Carousel auto-tracking, LockNotification press-and-hold, SecondaryNavigation variants, CareTeamMemberCard

- **Assets, imports, and icons**: `guidelines/assets-and-icons.md`  
  @/ alias requirement, icon policy, why relative paths break

- **Design system integration**: `guidelines/design-system-integration.md`  
  How to use DESIGN.md, what to avoid, rationale

- **Detailed workflow steps**: `guidelines/workflow.md`  
  Step-by-step implementation process

---

## Implementation Constraints

### Video Visits
- Mock interface only (static/animated)
- No WebRTC or actual video streaming
- Display designed interface with provider photo, duration timer, controls

### Optional Features
- Medication Detail (§6.13): Stubbed until design provided
- Any "optional v1" features: Wait for user direction before implementing

### Story Bible
- Single source of truth for dates, times, provider names
- All components pull from centralized data
- No hardcoded values that should come from story bible

---

## Workflow Summary

Quick reference - see `guidelines/workflow.md` for detailed steps:

1. Check existing components (catalog + style guide)
2. Get Figma design
3. Implement with high fidelity
4. Document (README + StyleGuide)
5. Verify against design

---

## What NOT to Do

❌ Create placeholder UI with assumed styling  
❌ Add features not shown in Figma designs  
❌ Improve or enhance designs beyond what's provided  
❌ Build components before designs are available  
❌ Hardcode values that should come from story bible  
❌ Add animations or interactions not specified in designs  
❌ Use relative paths for asset imports  
❌ Approximate icons from memory or generic libraries  

---

## What TO Do

✅ Wait for Figma design links  
✅ Implement designs with high fidelity  
✅ Use shadcn/ui components as building blocks  
✅ Keep components simple and reusable  
✅ Document everything in READMEs  
✅ Maintain story bible consistency  
✅ Stub features without designs  
✅ Ask clarifying questions about design intent  
✅ Use `@/` alias for all imports  
✅ Check component catalog before building  

---

## Additional Resources

- **Full backup**: `guidelines/guidelines_full_backup.md` - Original full guidelines file
- **Figma ingestion guide**: `guidelines/figma-ingestion-guide.md` - How to use DESIGN.md
- **Action gates documentation**: `/docs/ACTION_GATES.md` - Full action gate examples
