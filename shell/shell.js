/*
 * Demo shell. A demo calls DemoShell.mount(demo) with:
 *
 *   {
 *     title, summary,
 *     steps: [{
 *       name,          // step row label and annotation heading
 *       instruction,   // Next card text: what to do on this screen
 *       notes: [],     // annotation bullets
 *       address,       // desktop address pill
 *       render(ctx),   // returns the screen's HTML; ctx = { mode, step, index }
 *     }],
 *   }
 *
 * Inside a screen, elements with data-action="next" | "back" | "restart"
 * drive the walkthrough. Spec overlay hooks: data-type, data-space,
 * data-icon, data-dim and data-color (a token name from TOKENS).
 */
(function () {
  "use strict";

  var TOKENS = {
    "text/primary": "#000000",
    "text/secondary": "#3B3B3B",
    "text/tertiary": "#6D6D6D",
    "text/inverse": "#FFFFFF",
    "text/brand": "#0012E7",
    "text/success": "#0A7C3E",
    "border/weakest": "#E1E1E1",
    "border/weak": "#C6C6C6",
    "surface/default": "#FFFFFF",
    "surface/neutral/weakest": "#FAFAFA",
    "surface/neutral/weak": "#F2F2F2",
    "surface/brand/weak": "#E6EFFE",
    "surface/brand": "#0012E7",
    "surface/success/weak": "#E6F4EC",
  };

  var SPEC_OPTIONS = [
    { key: "type", label: "Type styles", checked: true },
    { key: "spacing", label: "Spacing", checked: true },
    { key: "icons", label: "Icon names", checked: false },
    { key: "dims", label: "Dimensions", checked: false },
    { key: "colors", label: "Color tokens", checked: false },
    { key: "grid", label: "Layout grid", checked: false },
  ];

  var OVERLAY_COLORS = {
    type: "#D6249F",
    spacing: "rgba(16, 163, 127, 0.28)",
    spacingTag: "#0B7A60",
    icons: "#0B6E99",
    dims: "#D9480F",
    colors: "#6741D9",
    grid: "rgba(229, 72, 77, 0.08)",
  };

  var GRIDS = {
    mobile: { columns: 4, margin: 16, gutter: 16 },
    desktop: { columns: 12, width: 1088, gutter: 24 },
  };

  var FRAME_SIZE = {
    // Outer footprint including the phone bezel (10px + 1px ring per side).
    mobile: { width: 375 + 22, height: 812 + 22 },
    desktop: { width: 1280 + 2, height: 800 + 2 },
  };
  var FRAME_CLEARANCE = 32;

  var CHEVRON =
    '<svg class="section-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var STATUS_ICONS =
    '<svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><g fill="#000">' +
    '<rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/>' +
    '<rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></g></svg>' +
    '<svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><g fill="#000">' +
    '<path d="M8 2.6c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .8 10.4 10.4 0 0 0 .8 3.7L2 5c1.6-1.5 3.7-2.4 6-2.4z"/>' +
    '<path d="M8 6.2c1.3 0 2.5.5 3.5 1.3l1.2-1.3A7 7 0 0 0 8 4.4a7 7 0 0 0-4.7 1.8l1.2 1.3c1-.8 2.2-1.3 3.5-1.3z"/>' +
    '<path d="M8 9.6l2.2-2.3a3.3 3.3 0 0 0-4.4 0L8 9.6z" transform="translate(0 1.4)"/></g></svg>' +
    '<svg width="27" height="13" viewBox="0 0 27 13" aria-hidden="true">' +
    '<rect x="0.5" y="0.5" width="23" height="12" rx="3.5" fill="none" stroke="#000" stroke-opacity=".35"/>' +
    '<rect x="2" y="2" width="20" height="9" rx="2" fill="#000"/>' +
    '<path d="M25 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2z" fill="#000" fill-opacity=".4"/></svg>';

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function mount(demo) {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var realPhone = window.matchMedia("(pointer: coarse) and (max-width: 767px)").matches;

    var state = {
      index: 0,
      mode: "mobile",
      specs: {},
      switching: 0,
    };
    SPEC_OPTIONS.forEach(function (o) {
      state.specs[o.key] = o.checked;
    });

    document.title = demo.title;
    if (realPhone) document.body.classList.add("is-real-phone");

    // ---------- Panel ----------

    var panel = el("aside", "panel");
    panel.setAttribute("aria-label", "Demo controls");
    panel.appendChild(el("h1", "panel-title", escapeHtml(demo.title)));
    panel.appendChild(el("p", "panel-summary", escapeHtml(demo.summary)));

    var deviceSwitch = el("div", "device-switch");
    deviceSwitch.setAttribute("role", "radiogroup");
    deviceSwitch.setAttribute("aria-label", "Device");
    var modeButtons = {};
    ["mobile", "desktop"].forEach(function (mode) {
      var b = el("button", null, mode === "mobile" ? "Mobile" : "Desktop");
      b.type = "button";
      b.setAttribute("role", "radio");
      b.addEventListener("click", function () {
        switchMode(mode);
      });
      modeButtons[mode] = b;
      deviceSwitch.appendChild(b);
    });
    panel.appendChild(deviceSwitch);

    function section(key, label, withBadge) {
      var wrap = el("section", "section");
      var header = el("button", "section-header");
      header.type = "button";
      header.id = "section-" + key + "-header";
      header.setAttribute("aria-expanded", "false");
      header.setAttribute("aria-controls", "section-" + key);
      header.innerHTML = "<span>" + label + "</span>";
      var badge = null;
      if (withBadge) {
        badge = el("span", "section-badge");
        header.appendChild(badge);
      }
      header.insertAdjacentHTML("beforeend", CHEVRON);
      var body = el("div", "section-body");
      body.id = "section-" + key;
      body.setAttribute("role", "region");
      body.setAttribute("aria-labelledby", header.id);
      body.hidden = true;
      header.addEventListener("click", function () {
        var open = header.getAttribute("aria-expanded") !== "true";
        header.setAttribute("aria-expanded", String(open));
        body.hidden = !open;
        if (key === "specs") drawOverlay();
      });
      wrap.appendChild(header);
      wrap.appendChild(body);
      panel.appendChild(wrap);
      return { header: header, body: body, badge: badge };
    }

    // Scenario
    var scenario = section("scenario", "Scenario");
    var stepList = el("ol", "steps");
    var stepButtons = demo.steps.map(function (step, i) {
      var li = el("li");
      var b = el("button", "step");
      b.type = "button";
      b.innerHTML =
        '<span class="step-number">' + (i + 1) + "</span><span>" + escapeHtml(step.name) + "</span>";
      b.addEventListener("click", function () {
        goTo(i);
      });
      li.appendChild(b);
      stepList.appendChild(li);
      return b;
    });
    scenario.body.appendChild(stepList);

    var nextCard = el("div", "next-card");
    nextCard.setAttribute("aria-live", "polite");
    nextCard.innerHTML = '<div class="next-card-label">Next</div><div class="next-card-text"></div>';
    var nextText = nextCard.querySelector(".next-card-text");
    scenario.body.appendChild(nextCard);

    var nav = el("div", "step-nav");
    var backBtn = el("button", "btn btn-secondary", "Back");
    var nextBtn = el("button", "btn btn-primary", "Next");
    backBtn.type = nextBtn.type = "button";
    backBtn.addEventListener("click", back);
    nextBtn.addEventListener("click", next);
    nav.appendChild(backBtn);
    nav.appendChild(nextBtn);
    scenario.body.appendChild(nav);

    var restartBtn = el("button", "btn btn-secondary btn-restart", "Restart");
    restartBtn.type = "button";
    restartBtn.addEventListener("click", restart);
    scenario.body.appendChild(restartBtn);

    scenario.body.appendChild(
      el("p", "keys-line", "Keys: → next · ← back · R restart · M switch device")
    );

    // Specs
    var specs = section("specs", "Specs");
    var specList = el("fieldset", "spec-options");
    specList.setAttribute("aria-label", "Spec overlay layers");
    SPEC_OPTIONS.forEach(function (o) {
      var label = el("label", "spec-option");
      var input = el("input");
      input.type = "checkbox";
      input.checked = o.checked;
      input.addEventListener("change", function () {
        state.specs[o.key] = input.checked;
        drawOverlay();
      });
      label.appendChild(input);
      label.appendChild(document.createTextNode(o.label));
      specList.appendChild(label);
    });
    specs.body.appendChild(specList);

    // Annotations
    var annotations = section("annotations", "Annotations", true);

    // ---------- Stage and frame ----------

    var stage = el("main", "stage");
    var frame = el("div", "frame is-mobile");
    frame.innerHTML =
      '<div class="frame-inner">' +
      '<div class="window-bar"><div class="window-dots"><span></span><span></span><span></span></div>' +
      '<div class="address-pill"></div></div>' +
      '<div class="status-bar"><span>9:41</span><span class="status-icons">' +
      STATUS_ICONS +
      "</span></div>" +
      '<div class="frame-content"><div class="frame-content-inner">' +
      '<div class="screen"></div><div class="spec-overlay" aria-hidden="true"></div></div></div>' +
      '<div class="home-bar"><span></span></div>' +
      "</div>";
    stage.appendChild(frame);

    var frameInner = frame.querySelector(".frame-inner");
    var frameContent = frame.querySelector(".frame-content");
    var contentInner = frame.querySelector(".frame-content-inner");
    var screen = frame.querySelector(".screen");
    var overlay = frame.querySelector(".spec-overlay");
    var addressPill = frame.querySelector(".address-pill");

    document.body.appendChild(panel);
    document.body.appendChild(stage);

    screen.addEventListener("click", function (e) {
      var target = e.target.closest("[data-action]");
      if (!target) return;
      e.preventDefault();
      var action = target.getAttribute("data-action");
      if (action === "next") next();
      else if (action === "back") back();
      else if (action === "restart") restart();
    });

    // ---------- Rendering ----------

    function renderPanel() {
      var step = demo.steps[state.index];
      stepButtons.forEach(function (b, i) {
        b.classList.toggle("is-done", i < state.index);
        if (i === state.index) b.setAttribute("aria-current", "step");
        else b.removeAttribute("aria-current");
      });
      nextText.textContent = step.instruction;
      backBtn.disabled = state.index === 0;
      nextBtn.disabled = state.index === demo.steps.length - 1;

      annotations.badge.textContent = step.notes.length;
      annotations.badge.setAttribute(
        "aria-label",
        step.notes.length + (step.notes.length === 1 ? " note" : " notes")
      );
      annotations.body.innerHTML =
        '<p class="annotation-name">' +
        escapeHtml(step.name) +
        '</p><ul class="annotation-notes">' +
        step.notes
          .map(function (n) {
            return "<li>" + escapeHtml(n) + "</li>";
          })
          .join("") +
        "</ul>";

      for (var mode in modeButtons) {
        modeButtons[mode].setAttribute("aria-checked", String(mode === state.mode));
      }
    }

    function renderScreen() {
      var step = demo.steps[state.index];
      screen.className = "screen mode-" + state.mode;
      screen.innerHTML = step.render({ mode: state.mode, step: step, index: state.index });
      addressPill.textContent = step.address || "";
      frameContent.scrollTop = 0;
      drawOverlay();
    }

    function render() {
      renderPanel();
      renderScreen();
    }

    // ---------- Walkthrough ----------

    function goTo(i) {
      i = Math.max(0, Math.min(demo.steps.length - 1, i));
      if (i === state.index) return;
      state.index = i;
      render();
    }

    function next() {
      goTo(state.index + 1);
    }

    function back() {
      goTo(state.index - 1);
    }

    function restart() {
      goTo(0);
    }

    // ---------- Device switch ----------

    function fitFrame() {
      if (realPhone) return;
      var size = FRAME_SIZE[state.mode];
      var w = stage.clientWidth - FRAME_CLEARANCE * 2;
      var h = stage.clientHeight - FRAME_CLEARANCE * 2;
      var scale = Math.min(1, w / size.width, h / size.height);
      frame.style.setProperty("--frame-scale", String(Math.max(scale, 0.05)));
    }

    function applyMode() {
      frame.classList.toggle("is-mobile", state.mode === "mobile");
      frame.classList.toggle("is-desktop", state.mode === "desktop");
      fitFrame();
    }

    function wait(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
    }

    function fadeContent(opacity, ms) {
      frameInner.style.transition = ms ? "opacity " + ms + "ms ease" : "none";
      frameInner.style.opacity = String(opacity);
      return wait(ms);
    }

    function switchMode(mode) {
      if (mode === state.mode || realPhone) return;
      state.mode = mode;
      renderPanel();
      var token = ++state.switching;

      if (reducedMotion.matches) {
        applyMode();
        renderScreen();
        return;
      }

      // Fade out 140ms, reshape 500ms, fade in 300ms.
      fadeContent(0, 140)
        .then(function () {
          if (token !== state.switching) return;
          frame.classList.add("is-reshaping");
          applyMode();
          renderScreen();
          return wait(500);
        })
        .then(function () {
          if (token !== state.switching) return;
          frame.classList.remove("is-reshaping");
          drawOverlay();
          return fadeContent(1, 300);
        });
    }

    // ---------- Spec overlay ----------

    function drawOverlay() {
      overlay.innerHTML = "";
      if (specs.header.getAttribute("aria-expanded") !== "true") return;

      var origin = contentInner.getBoundingClientRect();
      var scale = origin.width / contentInner.offsetWidth || 1;

      function box(node) {
        var r = node.getBoundingClientRect();
        return {
          x: (r.left - origin.left) / scale,
          y: (r.top - origin.top) / scale,
          w: r.width / scale,
          h: r.height / scale,
        };
      }

      function rect(x, y, w, h, style) {
        var d = el("div", "spec-box");
        d.style.cssText =
          "left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;" + (style || "");
        overlay.appendChild(d);
        return d;
      }

      function tag(x, y, html, color) {
        var t = el("div", "spec-tag", html);
        t.style.left = Math.max(0, x) + "px";
        t.style.top = Math.max(0, y) + "px";
        t.style.background = color;
        overlay.appendChild(t);
        return t;
      }

      function each(selector, fn) {
        Array.prototype.forEach.call(screen.querySelectorAll(selector), function (node) {
          if (node.getClientRects().length) fn(node, box(node));
        });
      }

      var width = contentInner.offsetWidth;
      var height = contentInner.offsetHeight;

      if (state.specs.grid) {
        var g = GRIDS[state.mode];
        var gridWidth = g.width ? Math.min(g.width, width) : width - g.margin * 2;
        var start = (width - gridWidth) / 2;
        var col = (gridWidth - g.gutter * (g.columns - 1)) / g.columns;
        for (var c = 0; c < g.columns; c++) {
          rect(start + c * (col + g.gutter), 0, col, height, "background:" + OVERLAY_COLORS.grid);
        }
      }

      if (state.specs.spacing) {
        each("[data-space]", function (node, b) {
          var cs = getComputedStyle(node);
          var pad = {
            top: parseFloat(cs.paddingTop),
            right: parseFloat(cs.paddingRight),
            bottom: parseFloat(cs.paddingBottom),
            left: parseFloat(cs.paddingLeft),
          };
          var fill = "background:" + OVERLAY_COLORS.spacing;
          function label(x, y, value) {
            tag(x, y, Math.round(value), OVERLAY_COLORS.spacingTag).style.transform =
              "translate(-50%, -50%)";
          }
          if (pad.top) {
            rect(b.x, b.y, b.w, pad.top, fill);
            label(b.x + b.w / 2, b.y + pad.top / 2, pad.top);
          }
          if (pad.bottom) {
            rect(b.x, b.y + b.h - pad.bottom, b.w, pad.bottom, fill);
            label(b.x + b.w / 2, b.y + b.h - pad.bottom / 2, pad.bottom);
          }
          if (pad.left) {
            rect(b.x, b.y + pad.top, pad.left, b.h - pad.top - pad.bottom, fill);
            label(b.x + pad.left / 2, b.y + b.h / 2, pad.left);
          }
          if (pad.right) {
            rect(b.x + b.w - pad.right, b.y + pad.top, pad.right, b.h - pad.top - pad.bottom, fill);
            label(b.x + b.w - pad.right / 2, b.y + b.h / 2, pad.right);
          }

          // Gaps between consecutive children of flex and grid containers.
          var children = Array.prototype.filter.call(node.children, function (child) {
            return child.getClientRects().length && getComputedStyle(child).position !== "absolute";
          });
          for (var i = 1; i < children.length; i++) {
            var a = box(children[i - 1]);
            var z = box(children[i]);
            var gap;
            if (z.y >= a.y + a.h - 0.5) {
              gap = z.y - (a.y + a.h);
              if (gap >= 1) {
                rect(b.x + pad.left, a.y + a.h, b.w - pad.left - pad.right, gap, fill);
                label(b.x + b.w / 2, a.y + a.h + gap / 2, gap);
              }
            } else if (z.x >= a.x + a.w - 0.5) {
              gap = z.x - (a.x + a.w);
              var top = Math.min(a.y, z.y);
              var bottom = Math.max(a.y + a.h, z.y + z.h);
              if (gap >= 1) {
                rect(a.x + a.w, top, gap, bottom - top, fill);
                label(a.x + a.w + gap / 2, top + (bottom - top) / 2, gap);
              }
            }
          }
        });
      }

      if (state.specs.dims) {
        each("[data-dim]", function (node, b) {
          rect(b.x, b.y, b.w, b.h, "box-shadow:inset 0 0 0 1px " + OVERLAY_COLORS.dims);
          var t = tag(b.x + b.w, b.y + b.h, Math.round(b.w) + " × " + Math.round(b.h), OVERLAY_COLORS.dims);
          t.style.transform = "translate(-100%, -100%)";
        });
      }

      if (state.specs.type) {
        each("[data-type]", function (node, b) {
          rect(b.x, b.y, b.w, b.h, "outline:1px dashed " + OVERLAY_COLORS.type);
          tag(b.x, b.y - 14, escapeHtml(node.getAttribute("data-type")), OVERLAY_COLORS.type);
        });
      }

      if (state.specs.icons) {
        each("[data-icon]", function (node, b) {
          rect(b.x, b.y, b.w, b.h, "box-shadow:inset 0 0 0 1px " + OVERLAY_COLORS.icons);
          tag(b.x, b.y + b.h + 2, escapeHtml(node.getAttribute("data-icon")), OVERLAY_COLORS.icons);
        });
      }

      if (state.specs.colors) {
        each("[data-color]", function (node, b) {
          var names = node.getAttribute("data-color").split(/\s+/);
          names.forEach(function (name, i) {
            var hex = TOKENS[name] || "transparent";
            tag(
              b.x + b.w,
              b.y + i * 16,
              '<span class="spec-swatch" style="background:' + hex + '"></span>' + escapeHtml(name),
              OVERLAY_COLORS.colors
            ).style.transform = "translateX(-100%)";
          });
        });
      }
    }

    // ---------- Keys ----------

    document.addEventListener("keydown", function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) {
        if (t.type !== "checkbox" && t.type !== "radio") return;
      }
      var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === "ArrowRight") next();
      else if (key === "ArrowLeft") back();
      else if (key === "r") restart();
      else if (key === "m") switchMode(state.mode === "mobile" ? "desktop" : "mobile");
      else return;
      e.preventDefault();
    });

    window.addEventListener("resize", function () {
      fitFrame();
      drawOverlay();
    });

    applyMode();
    render();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawOverlay);
  }

  window.DemoShell = { mount: mount, tokens: TOKENS };
})();
