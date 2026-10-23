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
