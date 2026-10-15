# Animated Blob Gradient — Implementation Spec

This documents the animated background used in the V4 homepage hero. Copy it exactly to reproduce the same effect in another Make demo.

---

## What it looks like

A soft, slowly drifting gradient made of three blurred colour blobs. They move independently across the top of the screen, overlapping and separating so the brightest spot shifts visibly over time. The gradient fades to white before it reaches the main content below.

---

## Where it goes in the component tree

The hero section needs two sibling layers inside a `relative` wrapper:

```
<div style={{ position: "relative" }}>
  {/* Layer 1 — the animated blob gradient (behind everything) */}
  <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
    WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 70%)",
    maskImage:       "linear-gradient(to bottom, black 40%, transparent 70%)" }}>
    <svg>…blobs here…</svg>
  </div>

  {/* Layer 2 — your actual content (on top) */}
  <div style={{ position: "relative" }}>
    {/* status bar, greeting, search bar, pills, etc. */}
  </div>
</div>
```

The `maskImage` on the blob wrapper is what creates the fade to white — it clips the gradient layer only, leaving the content above untouched. Do **not** put the mask on the content layer.

---

## The SVG

Paste this entire block as the contents of Layer 1's `<div>`:

```tsx
<svg
  width="375"
  height="100%"
  viewBox="0 0 375 400"
  preserveAspectRatio="xMidYMid slice"
  fill="none"
  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
>
  {/* Base tint — always visible even when blobs drift to the edges */}
  <rect width="375" height="400" fill="#f7f9ff" />

  <defs>
    <filter id="blob-blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="28" />
    </filter>
  </defs>

  {/* Blob 1 — large, sweeps left-to-right */}
  <circle r="180" fill="#e0e7ff" opacity="0.75" filter="url(#blob-blur)">
    <animate attributeName="cx" dur="9s" repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.2;0.5;0.8;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
      values="20;340;60;320;20" />
    <animate attributeName="cy" dur="9s" repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.2;0.5;0.8;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
      values="180;30;160;80;180" />
  </circle>

  {/* Blob 2 — medium, counter-sweeps right-to-left */}
  <circle r="160" fill="#e0e7ff" opacity="0.6" filter="url(#blob-blur)">
    <animate attributeName="cx" dur="12s" repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.35;0.65;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
      values="355;10;310;355" />
    <animate attributeName="cy" dur="12s" repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.35;0.65;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
      values="40;170;20;40" />
  </circle>

  {/* Blob 3 — lighter, oscillates centre-to-edges */}
  <circle r="150" fill="#eef2ff" opacity="0.9" filter="url(#blob-blur)">
    <animate attributeName="cx" dur="10s" repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.4;0.7;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
      values="188;360;10;188" />
    <animate attributeName="cy" dur="10s" repeatCount="indefinite"
      calcMode="spline"
      keyTimes="0;0.4;0.7;1"
      keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
      values="80;20;140;80" />
  </circle>
</svg>
```

---

## Key decisions and why

| Decision | Reason |
|---|---|
| `stdDeviation="28"` on the blur | Soft enough to look like a gradient, tight enough that movement is clearly visible |
| Three different durations (9s / 12s / 10s) | Keeps them out of phase so they never all land in the same spot at once |
| `calcMode="spline"` with `0.42 0 0.58 1` | Standard ease-in-out — motion accelerates and decelerates naturally |
| `values` span 0→375 (full width) and 20→180 (vertical range) | Makes the concentration point visibly migrate rather than just pulsing in place |
| Mask fades `black 40% → transparent 70%` | Gradient disappears before the search bar so content stays fully legible |
| Base rect `#f7f9ff` | Ensures the area never goes fully white when blobs drift to the edges |
| Blob colours `#e0e7ff` / `#eef2ff` | Light enough that dark copy remains readable over the gradient at all times |

---

## Tuning cheat sheet

- **Too subtle** → raise opacity or lower `stdDeviation`
- **Too dark / hurts legibility** → use lighter fill colours (closer to white) rather than lowering opacity, which also reduces visible movement
- **Movement not noticeable** → push `values` further apart (wider x travel, bigger y swing)
- **Too busy / distracting** → increase durations; `18s / 24s / 21s` is a good slow-ambient setting
- **Fades too early/late** → adjust the mask stop positions (`40%` and `70%`)
