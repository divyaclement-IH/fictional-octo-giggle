# fictional-octo-giggle
experimenting

## Demo shell

Every demo uses one shell (`shell/`): a 300px side panel on the left and a flat
stage that holds a phone or desktop frame, built to the Demo shell spec. The
billing history demo (`demos/billing-history/`) is the reference demo.

Plain HTML, CSS and JS with no build step. Serve the repo and open it:

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765/ (it redirects to the billing history demo).

Keys: → next · ← back · R restart · M switch device.

### Making a new demo

Copy `demos/billing-history/`, then pass your own title, summary and steps to
`DemoShell.mount()` (see the comment at the top of `shell/shell.js`). Tag
elements with `data-type`, `data-space`, `data-icon`, `data-dim` and
`data-color` to make them show up in the Specs overlay.
