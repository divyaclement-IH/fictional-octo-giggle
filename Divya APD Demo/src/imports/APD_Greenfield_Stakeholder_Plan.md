# APD Prototype — Greenfield Stakeholder Plan

**Intent:** Plan a **from-scratch** build of the APD linear demo: journey, interactions, main beats, a **non-technical view of how implementation fits design and story** (§4—incl. **§4.6 reusable UI in Make**), and how major **screens break down into reusable patterns** for alignment (§6).

---

## 1. Executive summary

We will deliver a **single-path**, **facilitator-ready** mobile prototype that walks a Walmart plan member through **virtual primary onboarding**, a **wellness video visit**, **gastro specialist discovery and booking**, **day-of insurance access**, a **human-in-the-loop post-visit chat** (Dot and Sarah), and **My Health / Home**. Visuals and copy should stay aligned with **product design** (IH Anatomy and related Figma reference work remain the visual north star); **implementation** builds **reusable UI inside Figma Make** and documents it there—Make does not ship with Anatomy as an attached design system (see §4.6). The first release prioritizes **story clarity** over optional branches (labs, alternate care threads, billing scenarios, etc.).

---

## 2. Product intent and guardrails

**Persona:** A member using **virtual primary care (APD)** who follows **one primary-care path** into a **gastro referral** and ongoing **care plan** visibility.

**Guardrails (v1 narrative):**

- **One care story** — Primary / wellness / gastro / care plan. No parallel product variants (e.g. separate “classic” plan skin) unless explicitly added later.
- **No mandatory medical-intake wizard** in the happy path — the story jumps to the right lock or chat beats per design.
- **One specialist booking experience** — End-to-end assistance through confirmation for the gastro visit.
- **One wellness video treatment** — Consistent provider, duration, and end-and-continue behavior.
- **Identifiers stay coherent** — Provider names, dates, and appointment times stay consistent across lock screens, chats, and confirmations.

---

## 3. End-to-end journey (macro beats)

Linear order for the baseline story:

1. **Welcome lock** → open **onboarding / triage chat**  
2. **Scheduling confirmation** (end of tour)  
3. **Wellness visit lock** → **join** → **live video**  
4. **Post-visit wellness assessment** (summary, referral, carousel, profile, booking assistance, confirmation)  
5. **Gastro day-of lock** → **insurance card** interaction  
6. **Post-visit check-in chat** (Dot → Sarah → Dot, care plan cue)  
7. **My Health** → **Home** (stable end state)

---

## 4. Implementation overview (high level)

This section describes **how the pieces fit together** without choosing languages, frameworks, or how **Figma Make** (or any implementation path) should store data. The build team—including Make—**selects the technical approach** that best matches **design intent** and delivery constraints.

### 4.1 Two sources of truth

| Track | What it defines | Owned by |
|-------|-----------------|----------|
| **Visual & interaction design** | Layout, tokens, motion, breakpoints, gestures—specified in **Figma reference files** (e.g. IH Anatomy as the visual benchmark). Final interactive UI is realized as **reusable components built in Make** (§4.6). | Design / Figma + Make implementation. |
| **Story & content** | Chapter order (§3), spoken lines, who speaks when, member input expectations, dates/times/names **once** (single **story bible**—see §7), and which **inline patterns** appear (confirmation card, carousel, care plan card). | Product / design copy, maintained in a **structured narrative source** (e.g. ordered script files alongside this plan) so text can change without rewriting the whole app. |

Implementation’s job is to **bind** the two: when the story says “Sarah sends this line next,” the screen still **looks like** the approved reference design; when reference design updates, **Make-side reusable components** are adjusted so the story does not break.

### 4.2 How a chapter “runs”

Each **chapter** (§5) is a **sequence of beats**: some are full screens (lock, video), some are **messages inside one chat shell**, some are **inline inserts** (cards, carousel) inside that shell. The prototype **advances** the member along that sequence—linear in v1—until the chapter’s **exit condition** is met (see each chapter’s “Chapter complete when”).

The exact mechanism—state machine, scene index, scripted queue—is **left to the implementer**. What matters for stakeholders is **order**, **dependencies** (e.g. insurance gesture before gastro chat), and **consistent identifiers** across surfaces.

### 4.3 Where Figma Make fits

**Figma Make** (or equivalent) should decide:

- How to represent **conversation turns** and **progress indicators** in code or data.
- How to load or mirror the **narrative script** (parse files, paste blocks, CMS, etc.).
- How to map **embedded UI names** from the script (e.g. care plan card) to **reusable components implemented and documented** in the Make project (§4.6).
- How to handle **participant changes** (Dot → Sarah → Dot) and **Sarah leaving** as presence or animation.

Nothing in this plan requires a specific format beyond “**ordered, editable, version-controlled story content**” plus **§6** names for reusable UI blocks (screen anatomy and narrative script layer).

### 4.4 Changing the demo over time

| Change type | Typical flow |
|-------------|----------------|
| **Visual** | Update reference design in Figma (e.g. Anatomy) → refresh the **matching reusable components in Make** and project docs; script usually unchanged. |
| **Copy or order** | Edit narrative source + story bible → implementation reflects new turns or timings; locks and confirmations stay in sync via shared names/dates. |
| **Scope** | Add/remove a chapter or beat in §5 and §3 first, then adjust design frames and script together. |

### 4.5 Success criteria for “implementation fits the plan”

- Facilitator can complete §3 **in order** without hidden shortcuts.
- Lock **clock/date**, notifications, chat, confirmations, and My Health rows **tell one timeline** (no contradictory dates or names).
- Inline UI called out in the script **matches** the reusable patterns named in **§6**, as implemented and documented in Make (§4.6).

### 4.6 Reusable components in Figma Make (not a linked design system)

**Included Health Anatomy** and related Figma libraries stay the **visual reference** for typography, color, spacing, and patterns—but **Figma Make does not treat Anatomy as an integrated or automatically synced design system.** There is no built-in concept of “load Anatomy here.”

For this prototype, **Make should define a library of reusable UI components**—for example lock chrome, notification banners, chat bubbles, composer, cards, carousel tiles, tab shells, video controls—that can be **composed and invoked** wherever the journey needs them. Those components should:

- **Mirror** the approved reference designs (Anatomy-aligned where required by stakeholders).
- **Stay discoverable** through **documentation maintained in or alongside the Make project** (what each piece is for, when to use it, main variants)—so editors know what exists without reading source line-by-line.
- **Use names and roles** that line up with **§6** so narrative scripts and specs stay easy to align.

When Anatomy or product design changes, people **update the reference in Figma** and then **update the corresponding Make components** by hand (or future tooling)—expect that workflow; do not assume automatic propagation from library to Make.

---

## 5. Chapters — goals, interactions, and main beats

Each chapter is a **build chapter** for design and engineering: same content you would sequence in Figma storyboards.

### 5.1 Tour + Initial Triage

**Goal:** From a lock-screen notification into Dot-led triage, ending on a **clear scheduling confirmation** (thanks message, appointment details, primary action).

**Surfaces:** Lock screen → conversational thread (assistant left, member right; optional rich blocks or images).

**Main beats (typical ~12 frames):**

1. Lock screen and notification; member enters the chat.  
2. Early dialogue — context and trust.  
3. Continued triage — Q&A; highlight important prompts per design.  
4. Context shift — avatars or header may reflect move into care-specific conversation.  
5. Selection / info — card or chooser step (often tied to policy notes on the board).  
6. Deeper triage — professional persona and richer responses.  
7. Closing — confirmation card with **View details** (or equivalent).

**Interactions:** Read → tap reply or quick action → read. Sticky notes on frames mark **business rules** to preserve when copy changes.

**Chapter complete when:** Member sees confirmed scheduling and a clear next step.

---

### 5.2 Wellness exam

**Goal:** Same-day wellness visit from notification through live video.

**Main beats:**

1. **Lock screen** — Date/time; notification to join soon (e.g. **Dr. Scott Henderson**).  
2. **Join** — Tap notification / join path (waiting room only if storyboard includes it).  
3. **Video** — Provider main view; member PiP; duration indicator (e.g. **18:00**); controls; **End call**.

**Interactions:** Low branching; prioritize **correct provider identity**, **duration**, and **clean transition** to post-visit.

**Chapter complete when:** Call ends and flow continues to post-visit assessment.

---

### 5.3 Post-visit wellness assessment

**Goal:** Summarize the wellness visit, capture a simple logistics preference, introduce gastro referral, let the member explore specialists, complete booking assistance, and **confirm** the gastro appointment.

**Surfaces:** Post-visit summary → chat → **horizontal specialist cards** → **full provider profile** → booking thread (optional “booking in progress” style banner).

**Main beats (~8 frames in reference boards):**

1. Post-visit summary — visit complete; links as designed; Dot opens recap.  
2. Delivery vs pickup (or equivalent logistics choice).  
3. Referral introduction — three gastro options.  
4. **Carousel** — scroll specialist cards (e.g. **Joseph Moreno, MD**, tier, distance, ratings).  
5. **Profile (top)** — match story, confidence, **Get help with booking**.  
6. **Profile (bottom)** — reviews, location map, credentials; persistent CTA.  
7. **Booking assistance** — e.g. “Help with Booking”; preference check (e.g. Friday mornings); optional status banner.  
8. **Cost / confirmation** — copay messaging; optional member question; **confirmed** date and time.

**Story-level branches:** Delivery vs pickup; which specialist leads to profile; optional mid-flow questions (e.g. cost) **without** changing the agreed booking unless product says otherwise.

**Chapter complete when:** Specialist appointment is confirmed with date/time shown.

---

### 5.4 Day of specialist visit

**Goal:** Day-of gastro visit with **fast insurance access** from the lock screen.

**Main beats:**

1. **Lock screen** — Upcoming visit notification; instructions to **press and hold** for insurance at check-in.  
2. **Insurance card** — Digital card over blurred lock (plan, member, ID, group).

**Interactions:** Gesture and card content are **non-negotiable** for the story; clock/time should match the design source of truth across frames.

**Chapter complete when:** Member has viewed the insurance card and can proceed to the post-appointment chat per flow.

---

### 5.5 Post-visit check-in (three days later — HITL)

**Goal:** Check-in after the specialist visit escalates to **Sarah (Nurse Care Manager)** for education and logistics, then returns to **Dot**, with an in-chat **care plan** touchpoint.

**Main beats (~7 frames):**

1. Dot asks how the visit went; member raises follow-up (e.g. endoscopy).  
2. Dot offers human support; member accepts.  
3. Sarah introduces and continues from Dr. Moreno’s context.  
4. Member chooses learning path; Sarah covers prep and recovery; asks if procedure is scheduled.  
5. Member shares plan; Sarah addresses **network** and optional **facility change** for cost (yes/no).  
6. **Care plan card** in thread — plans, progress, prescriptions; Sarah notes care plan updated in app.  
7. Dot returns — documentation confirmed; closes politely.

**Story-level branches:** Accept/decline NCM; general vs specific education; scheduled or not; accept/decline alternate facility. For a **linear demo**, teams may script one **happy path** while keeping this list for future parity.

**Chapter complete when:** Conversation hands off to My Health / care plan entry as designed.

---

### 5.6 My Health and Home

**Goal:** Persistent hub for **activity**, **prescriptions**, and **care team**, plus **Home** as a stable landing with return path to My Health.

**My Health — main beats:**

1. **Activity** — Timeline (e.g. visits by month) with optional row detail.  
2. **Prescriptions** — List with status tags; rows open detail when in scope.  
3. **Medication detail** *(optional v1)* — Full-screen detail with sub-sections per design.  
4. **Care Team** — Populated list or empty state.

**Home:** Closing state with navigation back to My Health as needed.

**Scope note:** Decide explicitly whether **medication detail** is in v1 or stubbed.

**Chapter complete when:** Member can reach Home and revisit My Health without breaking the narrative.

---

## 6. Screen anatomy — components per surface

This section names **composite parts** each screen type is built from—useful for specs and for naming **reusable Make components** that implement those parts (see §4.6). IH Anatomy in Figma remains the **design reference**; Make holds the **running implementation**. Naming here is descriptive, not tied to code.

### 6.1 Lock screen

| Part | Role |
|------|------|
| **Background** | Wallpaper or gradient filling the viewport. |
| **Clock** | Large time—value comes from the **canonical story timeline** for that beat (welcome vs wellness day vs gastro day-of), not an arbitrary default. Same moment in the story should use the **same** time everywhere (locks, chats, confirmations). |
| **Date** | Day/date line—also **story-driven** so it reinforces “when” the chapter occurs relative to other chapters (e.g. wellness **Friday Jan 8** vs gastro **Friday Jan 15**). |
| **System chrome** *(optional)* | Status bar; bottom shortcuts (e.g. flashlight, camera) if the frame is device-realistic. |
| **Notification** | See §6.2. Tappable to enter the next step (chat, join flow, etc.). |

**Story consistency:** Treat **time**, **date**, **provider names**, and **appointment strings** as one agreed **story bible** (or timeline table). When they change in Figma or copy docs, update every surface that shows that moment—including this lock screen—so the narrative does not contradict itself.

**Lock screen + insurance (gastro day-of):** Same base parts; add **press-and-hold** on the notification (or designated area) and an **insurance overlay** (§6.3) on success.

---

### 6.2 Notification (on lock screen)

Composite inside the banner/stack:

| Part | Role |
|------|------|
| **App icon** | Brand mark for Included Health / app. |
| **Title** | Short headline (e.g. “Get ready for your visit”). |
| **Body** | Supporting line(s)—provider name, timing, or instruction (e.g. press and hold for insurance). |
| **Timestamp** *(optional)* | Relative label such as **now**. |
| **Tap target** | Whole banner or explicit affordance → triggers navigation. |

---

### 6.3 Insurance card (overlay)

Shown over a **dimmed or blurred** lock continuation:

| Part | Role |
|------|------|
| **Card container** | Rounded panel, elevation/shadow per system. |
| **Section label** | e.g. “Health Insurance”. |
| **Plan name** | Bold primary line (“Personalized Wellbeing Copay Plan”). |
| **Member name** | Primary subscriber display name. |
| **Member ID** | Masked or formatted ID. |
| **Group / other identifiers** | As required by the storyboard. |

Dismiss or collapse behavior follows design (tap outside, release hold, etc.).

---

### 6.4 Chat / messaging thread

| Part | Role |
|------|------|
| **Header** | Screen title; optional **back**; optional **overflow** menu. |
| **Participant strip** *(optional)* | Avatars or role labels when Dot / Sarah / provider identity matters. |
| **Message list** | Scrollable column of **message bubbles**: assistant (typically left), member (typically right); optional timestamps and read treatment. |
| **Rich inserts** | Inline **images**, **cards**, or **carousels** between or within the scroll region. |
| **Quick replies / chips** *(optional)* | Horizontally arranged choices (delivery vs pickup, yes/no). |
| **Composer** | Text field, optional attachments, **send** action. |

**Booking-assistance variant:** Optional **status banner** above the list (e.g. “Booking in progress…”).

---

### 6.5 Scheduling confirmation card (end of tour)

Typically a card or modal step:

| Part | Role |
|------|------|
| **Success headline** | e.g. “Thanks for scheduling!” |
| **Appointment summary** | Provider name, date, time (stacked rows or key-value lines). |
| **Primary CTA** | e.g. **View details**. |
| **Secondary actions** *(optional)* | Add to calendar, dismiss. |

---

### 6.6 Join visit (pre-video)

Bridge surface between lock and video:

| Part | Role |
|------|------|
| **Preview or placeholder** *(optional)* | Provider or neutral hold state. |
| **Appointment summary** | Reinforces date, time, provider. |
| **Primary CTA** | **Join** / enter visit. |

---

### 6.7 Active video visit

| Part | Role |
|------|------|
| **Remote video** | Full-area provider feed. |
| **Picture-in-picture** | Member self-view; optional camera flip control. |
| **Duration / label chip** | e.g. provider name + timer (**18:00**). |
| **Controls** | Mute, camera off/on, **end call** (prominent). |

---

### 6.8 Post-visit summary header

Static or semi-static block at top of assessment chapter:

| Part | Role |
|------|------|
| **Title** | e.g. “Post-Visit Summary”. |
| **Visit meta** | Provider, patient reference if shown. |
| **Secondary links / rows** | Notes, goals, labs—per storyboard. |
| **Close / back** *(optional)* | Exits or collapses summary. |

Often sits above the chat stream (§6.4).

---

### 6.9 Specialist carousel + specialist card

**Carousel:** Horizontal scroll container with **page snaps** or padding; optional **dot indicators** for position.

**Each specialist card:**

| Part | Role |
|------|------|
| **Photo** | Headshot. |
| **Name + credential** | e.g. Joseph Moreno, MD. |
| **Specialty / tier** | Gastroenterology; network tier label. |
| **Distance / location cue** | Miles or facility hint. |
| **Rating / reviews** | Stars and count. |
| **Primary CTA** | Book / **See full profile** / **Get help with booking**. |

---

### 6.10 Specialist profile (full screen or large sheet)

| Part | Role |
|------|------|
| **Hero** | Photo, name, specialty. |
| **Match / rationale block** | Why recommended; confidence if shown. |
| **Reviews / social proof** | Links or excerpts. |
| **Map / address** | Facility location. |
| **Credentials** | Years, board certification, etc. |
| **Sticky footer CTA** | **Get help with booking** (repeated if long scroll). |

---

### 6.11 Care plan card (inline in chat)

| Part | Role |
|------|------|
| **Visual anchor** | Icons or illustration strip. |
| **Headline** | Value prop (review plans, track progress). |
| **Supporting line** | Short description. |
| **Interaction** | Tap → My Health / care plan destination. |

---

### 6.12 My Health hub

| Part | Role |
|------|------|
| **Bottom navigation** | Home, Messages *(if in scope)*, My Health / Activity—per IA. |
| **Section tabs** *(within My Health)* | **Activity**, **Prescriptions**, **Care Team**. |
| **Activity list** | Month headers; rows with title, datetime, status chevron. |
| **Prescriptions list** | Drug name, dose, **status pill** (e.g. Just started); chevron → detail. |
| **Care Team** | Provider list or **empty state** copy + illustration. |

---

### 6.13 Medication detail *(optional v1)*

| Part | Role |
|------|------|
| **Header** | Back, title “Medication Details”, overflow optional. |
| **Drug title row** | Name, strength, form tags. |
| **Sub-tabs** *(optional)* | Details, Cost, Drug safety. |
| **Body sections** | Overview, directions, pharmacy, support links. |

Often hides bottom nav until back.

---

### 6.14 Home

| Part | Role |
|------|------|
| **Scroll body** | Cards for visits, actions, benefits—per final design. |
| **Bottom navigation** | Same shell as My Health for consistency. |

---

### 6.15 Narrative script (conversation layer)

Chat-heavy chapters are driven by a **narrative script**—not a single Figma “component,” but a **structured content layer** you maintain next to visual specs (spreadsheet, doc, or structured file). It keeps dialogue, choices, and embedded UI in order.

| Element | Role |
|---------|------|
| **Turn** | One ordered step in the conversation (can map to a storyboard frame or several). |
| **Speaker** | Who sends the turn—e.g. Dot, Sarah, Member, or system. |
| **Copy** | What is said or typed; optional **variants** if you later support branches. |
| **Member input** *(optional)* | Expected tap on **quick reply**, free-text prompt, or silence if the beat is assistant-only. |
| **Embedded UI** *(optional)* | Inline block that uses the **visual** components from this section—e.g. confirmation card (§6.5), specialist carousel (§6.9), care plan card (§6.11). Reference by name so design and build stay aligned. |

The **same story bible** that fixes clock/date on the lock screen (§6.1) should supply **dates and names inside** the script so booking confirmations, notifications, and My Health rows all match.

---

## 7. Cross-cutting principles

- **Reference design, reusable Make UI** — Follow IH Anatomy (and related Figma) for look-and-feel; implement and document **reusable components inside Figma Make** (§4.6). Updates flow **reference → Make components**, not via an automatic design-system bridge.  
- **One timeline / story bible** — Provider names, appointment strings, and **lock-screen date/time** are defined once for the demo narrative and reused everywhere; they are not independent placeholder fields.  
- **Demo discipline** — The facilitator path should run **without hidden keyboard shortcuts** in the shipping experience.  
- **Branch inventory** — Even if v1 is linear, **document** fork points (especially HITL) so later releases do not contradict the boards.

---

*Document version: 1.4 — Greenfield stakeholder plan (flow, implementation overview incl. Make reusable components, screen anatomy, narrative script layer).*
