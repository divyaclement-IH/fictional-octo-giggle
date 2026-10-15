Prompt for Figma Make

You are working in a Make kit that currently has a single, very long guidelines/Guidelines.md file containing all of my Prototype Development Guidelines. I want you to refactor and split this content into multiple, focused guideline files while preserving all of the existing rules and examples.

Follow these instructions exactly:

Create a backup of the current guidelines

Duplicate the current guidelines/Guidelines.md into a new file named:
guidelines/guidelines_full_backup.md
Do not edit the backup file after creating it.
Refactor the main overview file

Edit the existing guidelines/Guidelines.md so that it becomes:
A short, high-level overview (roughly 150–250 lines max).
A place for critical constraints and routing to more specific guideline files.
Keep only:
The Design-First Principle and rules (no inventing UI, no new components without Figma).
The order of precedence: Guidelines.md → Implemented components → Figma imports → DESIGN.md.
A brief summary of “What NOT to do” and “What TO do” (as short lists).
A short note about using DESIGN.md and figma-ingestion-guide.md.
Add a section explicitly telling Make where to find more detail, for example:
## Where to find specific guidelines

- App layout & chapter app state: `guidelines/app-architecture.md`
- App navigation shell & exploration chapters: `guidelines/app-navigation.md`
- Conversation scripts, action gates, and chat behavior: `guidelines/chat-scripts.md`
- Components, reuse patterns, and documentation: `guidelines/components.md`
- Component-specific behaviors (Carousel, CareTeamMemberCard, etc.): `guidelines/component-behaviors.md`
- Assets, imports, and icons: `guidelines/assets-and-icons.md`
- Design system integration with Included Health: `guidelines/design-system-integration.md`
- Detailed workflow steps: `guidelines/workflow.md`
md

Create the new guideline files and move content

Starting from the content currently in guidelines/Guidelines.md, create and populate the following files, moving entire sections so the rules stay intact. Do not invent new rules; just reorganize what exists.

a. guidelines/app-architecture.md

Include:
The entire “Desktop Wrapper (Viewport Presentation)” section.
The full App State (Chapter-Specific Screen Data) section: /src/data/appState.ts, appStateConfig, getAppStateForChapter, and “When to use / When not to use”.
The Chapter Addition Process / Standard Chapter Structure for narrative script, chapter component, story bible entry, router integration, and CHAPTER_ORDER.
Organize with headings such as:
## Viewport & Wrapper
## Chapter-Specific App State
## Adding New Chapters
b. guidelines/app-navigation.md

Include:
The “Example: Chapter 6 (My Health Exploration)” section (script snippet, chapter component, BottomNavigation integration, key patterns).
The full App Navigation Shell Pattern description (shell structure, AppNavProvider behavior, bottom nav, screen components, data pattern via getAppStateForChapter).
Organize with headings like:
## App Navigation Shell
## Exploration Chapters (e.g., Chapter 6 My Health)
c. guidelines/chat-scripts.md

Include everything related to narrative and chat behavior:
Conversation Scripts & Narrative Format:
ConversationTurn interface.
Field and value rules (speaker, type, text, component, expectation, etc.).
Action Gates (Interactive Chapter Breaks):
Text-based and component-based action gates.
action_gate vs ui_embed rules.
requiredAction naming conventions.
Chat Message Behavior Patterns:
Behavior for Dot, Sarah/care_team, user, and system messages.
Chat Interaction Timing:
Delays and auto-advancement logic.
Script Export Tool Requirements:
Field naming, mapping, and variable interpolation {variableName}.
Script File Formatting Conventions:
String quote usage.
Bulleted list formatting with • and \n\n.
Component text parsing for ServiceCard and SystemMessage.
Use clear headings like:
## ConversationTurn Interface
## Action Gates
## Chat Message Behavior
## Script Export Requirements
## Script Formatting
d. guidelines/assets-and-icons.md

Include:
The entire Image and SVG Imports section (the @/ alias rule, explanation of why relative paths break).
The full Icons and Visual Assets section (never approximate icons, always use Figma assets, no generic icon libraries without approval).
Organize with headings:
## Image and SVG Imports
## Icon Usage
e. guidelines/components.md

Include all component reuse and documentation rules:
Component Reuse:
Master catalog path and categories.
Instructions to always check existing components first.
Generic UI Component Pattern:
Generic vs feature-specific components.
When to extract vs when to keep feature-specific.
Component Documentation & Style Guide Maintenance:
When to add, update, or remove components.
Keeping README and StyleGuide.tsx in sync.
When NOT to update documentation.
How to open the style guide (ESC key).
Use headings such as:
## Component Catalog & Reuse
## Generic vs Feature-Specific Components
## Documentation & Style Guide
f. guidelines/component-behaviors.md

Include all component-specific behavior sections:
Carousel Component behavior and usage.
LockNotification Component press-and-hold behavior.
SecondaryNavigation Component variants and props.
CareTeamMemberCard Component Variants and data structures.
Organize with one heading per component:
## Carousel
## LockNotification
## SecondaryNavigation
## CareTeamMemberCard
g. guidelines/design-system-integration.md

Include the full Design System Integration content:
References to Included Health DESIGN.md and guidelines/figma-ingestion-guide.md.
The “DO use DESIGN.md for…” and “DO NOT…” lists.
The explanation of why existing components already align with IH Anatomy and why DESIGN.md is for incremental enhancement, not wholesale replacement.
Use headings:
## References
## How to Use DESIGN.md
## Rationale
h. guidelines/workflow.md

Move the detailed Workflow section (steps 1–11) into this file.
Keep the step list intact and clearly numbered.
Optionally, leave a short 3–5 bullet summary of the workflow in the main Guidelines.md with a link back to guidelines/workflow.md.
Clean up the original Guidelines.md after moving content

Remove large, detailed sections that have been moved into the new files.
Replace them with short, high-level summaries and clear references to the new files.
Ensure the remaining Guidelines.md focuses on:
Core design-first constraints.
Implementation constraints that are truly global.
A concise “What NOT to do / What TO do”.
A routing section that tells Make which file to consult for each domain.
General constraints for the refactor

Do not change the meaning of any rules.
Do not remove any critical do/don’t lists or code examples; only move them.
Preserve all code snippets as valid TypeScript/TSX where they already are.
Ensure that section headings and file names are descriptive so that Figma Make can easily identify which file to use for a given kind of task.
When you are done, I should have:

A shorter guidelines/Guidelines.md overview.
A guidelines/guidelines_full_backup.md backup of the original.
These new files populated with the corresponding sections from the original guidelines:
guidelines/app-architecture.md
guidelines/app-navigation.md
guidelines/chat-scripts.md
guidelines/assets-and-icons.md
guidelines/components.md
guidelines/component-behaviors.md
guidelines/design-system-integration.md
guidelines/workflow.md