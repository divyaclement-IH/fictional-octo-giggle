import React, { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, Bookmark } from "lucide-react";
import svgPaths from "@/imports/04DotVisitCostsSelectingVisitTypesChipsInTypingBar/svg-84khbqxkn5";
import scSvgPaths from "@/imports/ServiceCards/svg-6g97jc679x";
import { LoopingSpringPop } from "@/imports/LoopingSpringPop-1";
import DotLogoMark from "@/components/DotLogoMark";
import FigmaEmail from "@/imports/01EmailApdLaunchEmailEntryPointChatWithDotOpensTheApp-1/index";
import DotEntryPoint from "@/imports/DotEntryPoint-1/index";
import HomeV1Import from "@/imports/Home-2/index";
import imgTabBar from "@/imports/01EmailApdLaunchEmailEntryPointChatWithDotOpensTheApp-1/19386aef5d1866a335ee087760c50e7a0fa494df.png";
import imgMailToolbar from "@/imports/01EmailApdLaunchEmailEntryPointChatWithDotOpensTheApp-1/6255888162f6120cd62331d81bf793e1ce0e2195.png";
import imgMailSender from "@/imports/01EmailApdLaunchEmailEntryPointChatWithDotOpensTheApp-1/fefdf54a37b37b36d4d019bb5c1621290a806f35.png";
import pcSvgPaths from "@/imports/PreviewCard-2/svg-wyi63ii6gh";
import imgDoctorAvatar from "@/imports/PreviewCard-2/4bbd80505ce020561d1be47b697389fbaec2fe3b.png";

// ── uid ──────────────────────────────────────────────────────────────────────
let _id = 0;
function uid() { return `m${++_id}`; }

// ── Shared atoms ─────────────────────────────────────────────────────────────

function DotLogo({ size = 20 }: { size?: number }) {
  const raw = useId().replace(/:/g, "s");
  return (
    <svg width={size} height={size} viewBox="0 0 18.8627 20" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <defs>
        <linearGradient id={`dg${raw}`} x1="0.267" x2="18.601" y1="13.75" y2="7.92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0012E7" /><stop offset="1" stopColor="#6A4CDE" />
        </linearGradient>
      </defs>
      <path d={svgPaths.p2770d280} fill={`url(#dg${raw})`} />
      <path d={svgPaths.p3403c600} fill={`url(#dg${raw})`} />
      <path d={svgPaths.p3a73f700} fill={`url(#dg${raw})`} />
      <path d={svgPaths.p1f581600} fill={`url(#dg${raw})`} />
    </svg>
  );
}

function StatusBar() {
  const c = "#1A1A23";
  return (
    <div style={{ height: 47, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 20px 10px", flexShrink: 0 }}>
      <span style={{ fontFamily: "'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif", fontWeight: 500, fontSize: 17, letterSpacing: -0.3, color: c, lineHeight: "20px" }}>9:41</span>
      <div style={{ display: "flex", gap: 6.5, alignItems: "center" }}>
        <svg width="19.97" height="12" viewBox="0 0 19.9707 12.0001" fill="none"><path d={svgPaths.pe92800} fill={c} /></svg>
        <svg width="17" height="12.5" viewBox="0 0 17 12.5001" fill="none"><path d={svgPaths.p2b7cea80} fill={c} /></svg>
        <svg width="27.33" height="13" viewBox="0 0 27.33 13" fill="none">
          <rect height="12" rx="3.5" stroke={c} width="24" x="0.5" y="0.5" opacity="0.4" strokeWidth="1" fill="none" />
          <path d={svgPaths.p223c2d00} fill={c} opacity="0.5" />
          <rect fill={c} height="9" rx="2" width="21" x="2" y="2" />
        </svg>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div style={{ height: 21, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8, flexShrink: 0 }}>
      <svg width="135" height="5" viewBox="0 0 135 5" fill="none">
        <path clipRule="evenodd" d={svgPaths.p2f14f2c0} fill="#1A1A23" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// ── Email Screen ─────────────────────────────────────────────────────────────
const HEADER_H = 164;
const EMAIL_CONTENT_H = 2906;
const TAB_BAR_H = 70;
const HOME_H = 21;
const FOOTER_H = TAB_BAR_H + HOME_H;

function EmailScreen({ onOpen }: { onOpen: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    const cta = el.closest('[data-name="IH Email Buttons"], [data-name="CTA: Primary [zz]"], [data-name="CTA: Primary [cm]"]');
    if (cta) onOpen();
  };
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", borderBottomLeftRadius: 44, borderBottomRightRadius: 44 }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: HEADER_H, background: "white", zIndex: 10 }}>
        <div style={{ width: 375, margin: "0 auto" }}>
          <StatusBar />
          <img src={imgMailToolbar} alt="" style={{ width: 375, height: 47, display: "block", objectFit: "cover" }} />
          <img src={imgMailSender} alt="" style={{ width: 375, height: 70, display: "block", objectFit: "cover" }} />
        </div>
      </div>
      <div onClick={handleClick} style={{ position: "absolute", top: HEADER_H, left: 0, right: 0, bottom: FOOTER_H, overflowY: "auto", overflowX: "hidden", WebkitOverflowScrolling: "touch" }}>
        <div style={{ position: "relative", width: 375, height: EMAIL_CONTENT_H - HEADER_H, margin: "0 auto", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -HEADER_H, left: 0, width: 375, height: EMAIL_CONTENT_H }}>
            <FigmaEmail />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: FOOTER_H, background: "white", borderBottomLeftRadius: 44, borderBottomRightRadius: 44, overflow: "hidden" }}>
        <div style={{ width: 375, margin: "0 auto" }}>
          <img src={imgTabBar} alt="" style={{ width: 375, height: TAB_BAR_H, display: "block", objectFit: "cover" }} />
          <div style={{ height: HOME_H, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8 }}>
            <svg width="135" height="5" viewBox="0 0 135 5" fill="none">
              <path clipRule="evenodd" d={svgPaths.p2f14f2c0} fill="#1A1A23" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Loading Screen ───────────────────────────────────────────────────────────
const SKEL: React.CSSProperties = {
  background: "linear-gradient(90deg, #efefef 25%, #e6e6e6 50%, #efefef 75%)",
  backgroundSize: "600px 100%",
  animation: "skel 1.4s infinite linear",
  borderRadius: 8,
  flexShrink: 0,
};

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1500);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div style={{ width: "100%", height: "100%", background: "white", display: "flex", flexDirection: "column", borderBottomLeftRadius: 44, borderBottomRightRadius: 44, overflow: "hidden" }}>
      <style>{`@keyframes skel{0%{background-position:-300px 0}100%{background-position:300px 0}}`}</style>
      <StatusBar />
      <div style={{ flex: 1, padding: "16px 16px 0", display: "flex", flexDirection: "column", gap: 20, overflow: "hidden" }}>
        <div style={{ ...SKEL, width: 32, height: 32, borderRadius: 8 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ ...SKEL, width: "82%", height: 28 }} />
          <div style={{ ...SKEL, width: "60%", height: 28 }} />
        </div>
        <div style={{ border: "1px solid #e8e8e8", borderRadius: 20, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ ...SKEL, width: 20, height: 20, borderRadius: "50%", flexShrink: 0 }} />
            <div style={{ ...SKEL, flex: 1, height: 16 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <div style={{ ...SKEL, width: 100, height: 32, borderRadius: 16 }} />
            <div style={{ ...SKEL, width: 32, height: 32, borderRadius: 16 }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[120, 96, 108].map((w, i) => <div key={i} style={{ ...SKEL, width: w, height: 40, borderRadius: 24 }} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ ...SKEL, width: 140, height: 16 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ ...SKEL, width: 110, height: 22 }} />
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ ...SKEL, width: 22, height: 22, borderRadius: 11 }} />
            <div style={{ ...SKEL, width: 10, height: 22 }} />
          </div>
        </div>
        <div style={{ border: "1px solid #e8e8e8", borderRadius: 16, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ ...SKEL, width: "70%", height: 16 }} />
          <div style={{ ...SKEL, width: "90%", height: 14 }} />
          <div style={{ ...SKEL, width: "80%", height: 14 }} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ ...SKEL, width: 24, height: 24, borderRadius: 12 }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {[0, 1, 2, 3].map(i => <div key={i} style={{ ...SKEL, width: i === 0 ? 20 : 8, height: 8, borderRadius: 4, opacity: i === 0 ? 1 : 0.3 }} />)}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ ...SKEL, width: 80, height: 20 }} />
          <div style={{ ...SKEL, width: 55, height: 16 }} />
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ ...SKEL, flex: 1, height: 100, borderRadius: 16 }} />
          <div style={{ ...SKEL, flex: 1, height: 100, borderRadius: 16 }} />
        </div>
      </div>
      <div style={{ borderTop: "1px solid #f0f0f0", display: "flex", height: 60, flexShrink: 0 }}>
        {["Home", "Messages", "Activity", "Me"].map((label, i) => (
          <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <div style={{ ...SKEL, width: 22, height: 22, borderRadius: 4, opacity: i === 0 ? 1 : 0.4 }} />
            <div style={{ ...SKEL, width: 36, height: 10 }} />
          </div>
        ))}
      </div>
      <HomeIndicator />
    </div>
  );
}

// ── Chat types ────────────────────────────────────────────────────────────────
type ChipSpec = { label: string };

type StreamBlock =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "ul"; items: string[]; prefixes?: string[] };

function blockWords(b: StreamBlock): number {
  if (b.kind === "p" || b.kind === "h") return b.text.trim().split(/\s+/).length;
  return b.items.reduce((s, item) => s + item.trim().split(/\s+/).length, 0);
}
function totalWords(blocks: StreamBlock[]) { return blocks.reduce((s, b) => s + blockWords(b), 0); }

type ChatMsg =
  | { id: string; kind: "welcome"; inactive: boolean }
  | { id: string; kind: "member"; text: string }
  | { id: string; kind: "typing" }
  | { id: string; kind: "dot"; blocks: StreamBlock[]; streaming: boolean; streamedWords: number; tip?: string; noLabel?: boolean }
  | { id: string; kind: "chips"; chips: ChipSpec[]; inactive: boolean }
  | { id: string; kind: "multiselect"; inactive: boolean }
  | { id: string; kind: "searching"; text: string; noLabel?: boolean }
  | { id: string; kind: "providers" }
  | { id: string; kind: "service-cards" };

// ── Copay data ────────────────────────────────────────────────────────────────
const COPAY_INFO: Record<string, string> = {
  "Primary care": "If you see someone virtually through Included Health, the copay will be $0. For in-person care, the copay will be $[XX] for a Preferred provider or $[XXX] for a Standard provider.",
  "Urgent care": "For virtual urgent care through Included Health, the copay is $0. For in-person urgent care, the copay will be $[XX] for a Preferred provider or $[XXX] for a Standard provider.",
  "Specialty care": "The copay will be $[XX] for a Preferred provider or $[XXX] for a Standard provider.",
  "Therapy": "Virtual therapy through Included Health is $0. In-person sessions with a Preferred provider are $[XX], or $[XXX] with a Standard provider.",
  "Psych": "Virtual psychiatric care through Included Health is $0. In-person sessions are $[XX] for Preferred or $[XXX] for Standard providers.",
  "ER": "Emergency room visits are $[XXX] per visit, regardless of network status.",
};

function buildCopayBlocks(selected: string[]): StreamBlock[] {
  return [
    { kind: "p", text: "Here are the copays for the visit types you selected:" },
    { kind: "ul", items: selected.map(s => COPAY_INFO[s] ?? "Please contact us for details."), prefixes: selected.map(s => `${s}:`) },
    { kind: "p", text: "One thing to keep in mind: You generally don't need to pay at the office. Wait for the claim to process so you can avoid overpaying or needing a refund." },
  ];
}

// ── Plan content blocks ───────────────────────────────────────────────────────
const planOverviewBlocks: StreamBlock[] = [
  { kind: "p", text: "The Included Health plan combines the care you may already know from us with real, up-front savings. It gives you access to:" },
  { kind: "ul", items: ["$0 virtual primary, urgent, and mental health care visits", "Clear, fixed, predictable copays", "Support finding the right provider for your needs"] },
  { kind: "p", text: "The more you understand the Included Health Plan, the more you'll get out of it. Feel free to ask any follow-up questions you may have, or select an option below to learn more." },
];

const providersBlocks: StreamBlock[] = [
  { kind: "p", text: "The providers and facilities you choose can affect what you pay." },
  { kind: "h", text: "Providers" },
  { kind: "p", text: "Your plan has two in-network provider tiers:" },
  { kind: "ul", items: ["Higher quality care with a lower copay", "Covered care with a higher copay"], prefixes: ["Preferred:", "Standard:"] },
  { kind: "h", text: "Facilities" },
  { kind: "p", text: "Freestanding labs and imaging centers often cost less than hospital-based facilities for the same service." },
  { kind: "p", text: "Here are some ways I can help you find the right care at the lowest cost:" },
];

const learnMoreBlocks: StreamBlock[] = [
  { kind: "p", text: "I can walk you through the topics below, or you can ask any followup questions you may have." },
];

const visitCostsBlocks: StreamBlock[] = [
  { kind: "p", text: "What kind of visits are you interested in learning about?" },
];

const surgeryBlocks: StreamBlock[] = [
  { kind: "p", text: "If surgery is needed, chat with me first so we can discuss your options." },
  { kind: "p", text: "For eligible procedures, we work with Carrum Health to schedule the surgery at a vetted surgical center with potential cost savings. You can also get a second opinion to compare your options or talk with the Care Team about what happens next." },
];

// ── Find a doctor flow content ────────────────────────────────────────────────
const tierBlocks: StreamBlock[] = [
  { kind: "p", text: "Your plan separates in-network providers into two tiers: Preferred and Standard." },
  { kind: "ul", items: [
    "meet Included Health's highest quality standards and have a lower copay.",
    "are still covered, but your copay will be higher.",
  ], prefixes: ["Preferred providers", "Standard providers"] },
];

const headsUpBlocks: StreamBlock[] = [
  { kind: "p", text: "Heads up: If you end up needing lab tests or imaging, keep in mind that freestanding imaging centers usually cost less than hospital based departments. The two settings bill differently and your plan copay reflects that difference." },
];

// ── Doctor data ───────────────────────────────────────────────────────────────
const DOCTORS = [
  {
    name: "Dr. Ana Villareal, MD",
    specialty: "Orthopedic Surgery",
    practice: "Berkeley Orthopedic Group",
    addressLine1: "1820 Alder St, Suite 200",
    addressLine2: "Berkeley, CA 94709",
    distance: "1.4 mi",
    why: "Specializes in sports-related knee injuries, including runner's knee and meniscus tears.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Dr. Marcus Bell, MD",
    specialty: "Orthopedics & Sports Medicine",
    practice: "East Bay Sports Medicine",
    addressLine1: "455 Shattuck Ave",
    addressLine2: "Berkeley, CA 94704",
    distance: "2.8 mi",
    why: "Focuses on non-surgical treatment first and has strong outcomes for overuse injuries from running.",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Dr. Ji-woo Han, MD",
    specialty: "Orthopedic Surgery",
    practice: "Oakland Orthopedic Specialists",
    addressLine1: "3110 Telegraph Ave",
    addressLine2: "Oakland, CA 94609",
    distance: "3.1 mi",
    why: "Same-week availability for new patients and experienced with knee pain from endurance sports.",
    photo: "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

// ── Shared chat atoms ─────────────────────────────────────────────────────────
function DotNameLabel() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <DotLogoMark size={20} oscillate />
      <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 12, color: "#5d5d69" }}>
        <span>Dot</span><span>•</span><span>AI Assistant</span>
      </div>
    </div>
  );
}

function TypingDot({ delay }: { delay: number }) {
  return (
    <motion.div
      style={{ width: 8, height: 8, borderRadius: "50%", background: "#5d5d69" }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <DotNameLabel />
      <div style={{ display: "flex", gap: 5, paddingLeft: 4 }}>
        <TypingDot delay={0} /><TypingDot delay={0.15} /><TypingDot delay={0.3} />
      </div>
    </div>
  );
}

function WelcomeChip({ label, inactive, onClick, strokeDelay }: {
  label: string; inactive: boolean; onClick: () => void; strokeDelay: number;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const STROKE_DUR = 0.5;

  useEffect(() => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setDims({ w: r.width, h: r.height });
    }
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {dims && (
        <svg width={dims.w} height={dims.h} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", overflow: "visible", zIndex: 1 }}>
          <motion.rect
            x={0.75} y={0.75}
            width={dims.w - 1.5} height={dims.h - 1.5}
            rx={dims.h / 2}
            fill="none"
            stroke="#6a4cde"
            strokeWidth={1.5}
            pathLength={1}
            strokeDasharray="1"
            initial={{ strokeDashoffset: 1 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ delay: strokeDelay, duration: STROKE_DUR, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      )}
      <motion.button
        ref={btnRef}
        whileTap={{ scale: inactive ? 1 : 0.93 }}
        onClick={() => !inactive && onClick()}
        style={{
          background: "white",
          border: "1.5px solid transparent",
          borderRadius: 9999,
          padding: "12px 16px",
          fontFamily: "Figtree, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          color: inactive ? "#b0b0b0" : "#0012e7",
          cursor: inactive ? "default" : "pointer",
          lineHeight: "20px",
          whiteSpace: "nowrap",
          outline: "none",
          display: "inline-block",
          opacity: inactive ? 0.5 : 1,
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: strokeDelay + STROKE_DUR * 0.72, duration: 0.22 }}
          style={{ display: "block" }}
        >
          {label}
        </motion.span>
      </motion.button>
    </div>
  );
}

function ChatChip({ label, inactive, isGradient, onClick }: { label: string; inactive: boolean; isGradient?: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: inactive ? 1 : 0.93 }}
      transition={{ duration: 0.08 }}
      onClick={() => !inactive && onClick()}
      style={{
        background: "white",
        border: isGradient ? "1.5px solid #6a4cde" : "1px solid #c6c6c6",
        borderRadius: 9999,
        padding: "12px 16px",
        fontFamily: "Figtree, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        color: inactive ? "#b0b0b0" : "#0012e7",
        cursor: inactive ? "default" : "pointer",
        lineHeight: "20px",
        whiteSpace: "nowrap",
        outline: "none",
        opacity: inactive ? 0.5 : 1,
        transition: "opacity 0.2s",
      }}
    >
      {label}
    </motion.button>
  );
}

function ComposerChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div style={{ background: "#0012E7", borderRadius: 9999, padding: "4px 8px 4px 12px", display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
      <span style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "white", lineHeight: "20px", whiteSpace: "nowrap" }}>{label}</span>
      <button onClick={onRemove} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", lineHeight: 0 }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p1acdb980} fill="white" /></svg>
      </button>
    </div>
  );
}

// ── Service cards ────────────────────────────────────────────────────────────

const SERVICE_CARD_DEFS = [
  {
    iconPath: scSvgPaths.p3f0a500,
    iconViewBox: "0 0 18.5016 19.9548",
    iconW: "18.5016", iconH: "19.9548",
    iconInset: "inset-[0.11%_3.75%_0.11%_3.74%]",
    title: "Primary care",
    subtitle: "Start here for a knee evaluation",
    description: "A PCP can assess your knee, rule out other causes, and refer you to a specialist if needed.",
    cta: "Find a PCP",
    recommended: true,
  },
  {
    iconPath: scSvgPaths.p28ad1f80,
    iconViewBox: "0 0 19.5041 19.8278",
    iconW: "19.5041", iconH: "19.8278",
    iconInset: "inset-[0.43%_1.21%_0.43%_1.27%]",
    title: "Orthopedist",
    subtitle: "Specialist in musculoskeletal care",
    description: "Find providers near you who specialize in knee and joint conditions from running injuries.",
    cta: "Find an orthopedist",
  },
];

function ServiceCard({ def, onCtaTap }: { def: typeof SERVICE_CARD_DEFS[0]; onCtaTap?: () => void }) {
  return (
    <div style={{
      background: "white",
      border: "1px solid #e1e1e1",
      borderRadius: 24,
      padding: 16,
      width: 268,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Icon + recommended badge row */}
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: 9999, background: "#e6effe", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 20, height: 20, overflow: "hidden" }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox={def.iconViewBox} preserveAspectRatio="none">
                <path d={def.iconPath} fill="#0012E7" />
              </svg>
            </div>
          </div>
          {def.recommended && (
            <div style={{
              background: "#e6effe", borderRadius: 8, padding: "4px 8px",
              fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 12,
              color: "#002380", lineHeight: "16px", flexShrink: 0, whiteSpace: "nowrap",
            }}>
              Recommended
            </div>
          )}
        </div>
        {/* Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 16, color: "#000", lineHeight: "24px" }}>{def.title}</p>
            <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#6d6d6d", lineHeight: "20px" }}>{def.subtitle}</p>
          </div>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#3b3b3b", lineHeight: "20px" }}>{def.description}</p>
        </div>
      </div>
      {/* CTA button */}
      <button
        onClick={onCtaTap}
        style={{
          width: "100%",
          border: "1px solid #c6c6c6",
          borderRadius: 24,
          background: "white",
          padding: "12px 16px",
          fontFamily: "Figtree, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          color: "#0012e7",
          cursor: onCtaTap ? "pointer" : "default",
          lineHeight: "20px",
          textAlign: "center",
        }}>
        {def.cta}
      </button>
    </div>
  );
}

function ServiceCardsMsg({ onCtaTap }: { onCtaTap?: (cta: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: "flex", gap: 11, overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" } as React.CSSProperties}
    >
      {SERVICE_CARD_DEFS.map((def, i) => (
        <div key={i} style={{ scrollSnapAlign: "start" }}>
          <ServiceCard def={def} onCtaTap={onCtaTap ? () => onCtaTap(def.cta) : undefined} />
        </div>
      ))}
    </motion.div>
  );
}

// ── Doctor cards ─────────────────────────────────────────────────────────────
function PersonAvatar() {
  return (
    <div style={{ width: 48, height: 48, borderRadius: 24, background: "#F2F2F2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
        <circle cx="11" cy="7" r="5" fill="#6D6D6D" />
        <path d="M1 22C1 16.477 5.477 12 11 12s10 4.477 10 10" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function DoctorCard({ doc }: { doc: typeof DOCTORS[0] }) {
  return (
    <div style={{
      background: "white",
      border: "1px solid #e1e1e1",
      borderRadius: 24,
      padding: 16,
      width: 311,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      flexShrink: 0,
    }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Avatar with verified badge */}
        <div style={{ position: "relative", width: 48, height: 48, flexShrink: 0 }}>
          <img
            alt=""
            src={doc.photo}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", borderRadius: 46, objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, border: "1px solid #e1e1e1", borderRadius: 46, pointerEvents: "none" }} />
          {/* BadgeVerified — purple star, bottom-right */}
          <div style={{ position: "absolute", bottom: -2, right: -2, width: 16, height: 16 }}>
            <svg width="16.03" height="16.67" viewBox="0 0 16.0256 16.6718" fill="none">
              <path d={pcSvgPaths.pefc7130} fill="#6A4CDE" stroke="white" strokeWidth="0.727273" />
            </svg>
            {/* checkmark star inner */}
            <div style={{ position: "absolute", top: "50%", left: "31.25%", right: "31.25%", height: 6, transform: "translateY(-50%)", overflow: "hidden" }}>
              <svg width="5.83" height="5.89" viewBox="0 0 5.8261 5.88923" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                <path d={pcSvgPaths.p2f785f80} fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Name + specialty */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 16, color: "#000", lineHeight: "24px" }}>{doc.name}</p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#3b3b3b", lineHeight: "20px" }}>{doc.specialty}</p>
        </div>

        {/* Bookmark button */}
        <div style={{ background: "white", width: 32, height: 32, borderRadius: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 16, height: 16, overflow: "hidden", position: "relative" }}>
            <svg width="10.14" height="14.1" viewBox="0 0 10.1369 14.0989" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <path d={pcSvgPaths.p314dc2c0} fill="#3B3B3B" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 4px", alignItems: "center" }}>
        {/* Preferred: $30 Copay — purple */}
        <div style={{ background: "#f1f0ff", borderRadius: 8, padding: "4px 8px", display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 12, color: "#3c1b8f", lineHeight: "16px" }}>
            {"Preferred provider: "}<span style={{ fontWeight: 700 }}>$30 copay</span>
          </span>
        </div>
        {/* In network — green */}
        <div style={{ background: "#edf9ed", borderRadius: 8, padding: "4px 8px", display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d={pcSvgPaths.p1ab53880} fill="#008200" />
          </svg>
          <span style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 12, color: "#004f00", lineHeight: "16px" }}>In network</span>
        </div>
      </div>

      {/* Why text */}
      <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#3b3b3b", lineHeight: "20px", margin: 0 }}>{doc.why}</p>

      {/* Divider */}
      <div style={{ height: 1, background: "#e1e1e1", width: "100%" }} />

      {/* Location */}
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 14, color: "#000", lineHeight: "20px" }}>{doc.practice}</p>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#3b3b3b", lineHeight: "20px" }}>
            {doc.addressLine1}<br />{doc.addressLine2}
          </p>
        </div>
        <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 14, color: "#008200", lineHeight: "20px", whiteSpace: "nowrap", flexShrink: 0 }}>{doc.distance}</p>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <button style={{ background: "#001048", borderRadius: 24, border: "none", padding: "8px 12px", fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "white", cursor: "pointer", lineHeight: "20px", width: "100%" }}>
          Schedule appointment
        </button>
        <button style={{ background: "white", borderRadius: 24, border: "1.5px solid #002380", padding: "8px 12px", fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#002380", cursor: "pointer", lineHeight: "20px", width: "100%" }}>
          View full profile
        </button>
      </div>
    </div>
  );
}

function DoctorCards() {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 311 + 14; // card width + gap
    const idx = Math.min(Math.round(el.scrollLeft / cardWidth), DOCTORS.length - 1);
    setActiveCard(idx);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          gap: 14,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingBottom: 2,
          // hide scrollbar
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        } as React.CSSProperties}
      >
        <style>{`.doctor-scroll::-webkit-scrollbar{display:none}`}</style>
        {DOCTORS.map((doc, i) => (
          <div key={i} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
            <DoctorCard doc={doc} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {DOCTORS.map((_, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: i === activeCard ? "#0012E7" : "#D9D9D9", transition: "background 0.2s" }} />
        ))}
      </div>
    </motion.div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function ComponentGallery({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClose}>
      <div style={{ background: "white", borderRadius: 20, padding: 32, minWidth: 400, maxWidth: 600 }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 18 }}>Component Gallery</p>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#666" }}>×</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 600, fontSize: 13, color: "#888", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>Dot Logo Mark</p>
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <DotLogoMark size={40} />
                <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "#999" }}>Static</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <DotLogoMark size={40} oscillate />
                <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "#999" }}>Oscillate</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <DotLogoMark size={40} spinning />
                <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "#999" }}>Spinning</p>
              </div>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 600, fontSize: 13, color: "#888", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>Spring Pop</p>
            <LoopingSpringPop duration={0.5} interval={2500}>
              <div style={{ width: 48, height: 48, background: "#0012E7", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <DotLogo size={24} />
              </div>
            </LoopingSpringPop>
          </div>
        </div>
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 12, color: "#bbb", marginTop: 24, textAlign: "center" }}>Press 0 to close</p>
      </div>
    </div>
  );
}

function HomeScreen({ onStartChat }: { onStartChat: () => void }) {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", borderBottomLeftRadius: 44, borderBottomRightRadius: 44, position: "relative" }}>
      <DotEntryPoint />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "white", pointerEvents: "none", zIndex: 10 }}>
        <StatusBar />
      </div>
      <div
        onClick={onStartChat}
        style={{ position: "absolute", top: 467, left: 16, width: 343, height: 136, borderRadius: 24, cursor: "pointer", zIndex: 20 }}
      />
    </div>
  );
}

function HomeV1Screen({ onFindDoctor }: { onFindDoctor: () => void }) {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const chip = target.closest('[data-name="Chip Interactive"]') as HTMLElement | null;
    if (chip && chip.textContent?.includes("Find a doctor")) {
      onFindDoctor();
    }
  }

  // The import uses an absolute 901px UiContainer inside an overflow-clip wrapper.
  // Rendering it at the natural phone height (844px) matches the Figma frame exactly:
  // the overflow-clip cuts the bottom of "Get care" and the hero + chips are fully visible.
  return (
    <div
      onClick={handleClick}
      style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", borderBottomLeftRadius: 44, borderBottomRightRadius: 44 }}
    >
      <HomeV1Import />
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<"email" | "loading" | "chat" | "home">("chat");
  const nextScreen = useRef<"chat" | "home">("chat");
  const [showGallery, setShowGallery] = useState(false);
  const [version, setVersion] = useState<1 | 2>(1);

  function startVersion(v: 1 | 2) {
    setVersion(v);
    setScreen(v === 1 ? "chat" : "email");
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "0") setShowGallery(g => !g); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#5D5D69", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, gap: 24 }}>
      <div style={{ position: "relative", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 390, height: 844, borderRadius: 48, overflow: "hidden", position: "relative", background: "white", isolation: "isolate", contain: "paint" }}>
          <AnimatePresence mode="wait">
            {screen === "email" && (
              <motion.div key="email" style={{ position: "absolute", inset: 0 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} transition={{ duration: 0.2 }}>
                <EmailScreen onOpen={() => { nextScreen.current = "chat"; setScreen("loading"); }} />
              </motion.div>
            )}
            {screen === "loading" && (
              <motion.div key="loading" style={{ position: "absolute", inset: 0 }}
                initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}>
                <LoadingScreen onDone={() => setScreen(nextScreen.current)} />
              </motion.div>
            )}
            {screen === "chat" && (
              <motion.div key="chat" style={{ position: "absolute", inset: 0 }}
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.4, ease: [0.05, 0.7, 0.1, 1] }}>
                <ChatScreen onClose={() => { nextScreen.current = "home"; setScreen("loading"); }} />
              </motion.div>
            )}
            {screen === "home" && (
              <motion.div key="home" style={{ position: "absolute", inset: 0 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <HomeScreen onStartChat={() => setScreen("chat")} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div style={{ width: 320, height: 24, background: "rgba(0,0,0,0.38)", filter: "blur(18px)", borderRadius: "50%", marginTop: -8 }} />
      </div>

      {/* Version restart buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignSelf: "flex-end", marginBottom: 40, flexShrink: 0 }}>
        {([1, 2] as const).map(v => (
          <motion.button
            key={v}
            onClick={() => startVersion(v)}
            whileTap={{ scale: 0.94 }}
            style={{
              background: version === v ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)",
              border: version === v ? "1px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.18)",
              borderRadius: 12,
              padding: "10px 18px",
              color: version === v ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.55)",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: 0.2,
              transition: "background 0.2s, border-color 0.2s, color 0.2s",
            }}
          >
            ↺ Start over {v}
          </motion.button>
        ))}
        <p style={{ fontFamily: "Figtree, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 2 }}>← → to navigate</p>
      </div>
    </div>
    {showGallery && <ComponentGallery onClose={() => setShowGallery(false)} />}
    </>
  );
}

// ── ChatScreen ────────────────────────────────────────────────────────────────
const VISIT_CHIPS: ChipSpec[] = [
  { label: "Primary care" }, { label: "Urgent care" }, { label: "Specialty care" },
  { label: "Therapy" }, { label: "Psych" }, { label: "ER" },
];

// Script steps for the "Find a doctor" flow
const FIND_DOCTOR_SCRIPT = [
  { userText: "An orthopedist. My knee has been bothering me since I started running." },
  { userText: "Find an orthopedist" },
  { userText: "Yes" },
  { userText: "No preferences" },
];

function ChatScreen({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMsg[]>([{ id: uid(), kind: "welcome", inactive: false }]);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [composerText, setComposerText] = useState("");
  const [scriptStep, setScriptStep] = useState(-1); // -1 = not in script; 0,1,2 = waiting for step N
  const [isTypingScript, setIsTypingScript] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onStreamDone = useRef<Map<string, () => void>>(new Map());
  const scriptSnapshots = useRef<ChatMsg[][]>([]); // snapshot[i] = state before step i executes
  const preScriptSnapshot = useRef<ChatMsg[] | null>(null);
  const stepGen = useRef(0); // incremented on restore to cancel in-flight step

  // Streaming engine
  useEffect(() => {
    if (!streamingId) return;
    const timer = setInterval(() => {
      setMessages(prev => {
        const idx = prev.findIndex(m => m.id === streamingId);
        if (idx === -1) { clearInterval(timer); return prev; }
        const msg = prev[idx] as Extract<ChatMsg, { kind: "dot" }>;
        const newCount = msg.streamedWords + 1;
        const next = [...prev];
        if (newCount >= totalWords(msg.blocks)) {
          clearInterval(timer);
          next[idx] = { ...msg, streamedWords: newCount, streaming: false };
          const cb = onStreamDone.current.get(streamingId);
          if (cb) setTimeout(cb, 150);
          setStreamingId(null);
        } else {
          next[idx] = { ...msg, streamedWords: newCount };
        }
        return next;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [streamingId]);

  // Scroll to bottom when new message blocks arrive
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  // Keep bottom pinned during streaming
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !streamingId) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, streamingId]);

  // After streaming ends, scroll again so tips / revealed content are visible
  const prevStreamingId = useRef<string | null>(null);
  useEffect(() => {
    const wasStreaming = prevStreamingId.current !== null;
    prevStreamingId.current = streamingId;
    if (wasStreaming && streamingId === null) {
      const t = setTimeout(() => {
        const el = scrollRef.current;
        if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [streamingId]);

  function addDotTurn(blocks: StreamBlock[], thinkMs: number, afterDone: () => void, tip?: string, removeId?: string, noLabel?: boolean) {
    setTimeout(() => {
      const typingId = uid();
      setMessages(prev => {
        const base = removeId ? prev.filter(m => m.id !== removeId) : prev;
        return [...base, { id: typingId, kind: "typing" as const }];
      });
      setTimeout(() => {
        const dotId = uid();
        onStreamDone.current.set(dotId, afterDone);
        setMessages(prev => [
          ...prev.filter(m => m.id !== typingId),
          { id: dotId, kind: "dot", blocks, streaming: true, streamedWords: 0, tip, noLabel },
        ]);
        setStreamingId(dotId);
      }, thinkMs);
    }, 160);
  }

  function addChips(chips: ChipSpec[]) {
    setMessages(prev => [...prev, { id: uid(), kind: "chips", chips, inactive: false }]);
  }

  function addMultiselect() {
    setMessages(prev => [...prev, { id: uid(), kind: "multiselect", inactive: false }]);
  }

  // ── Script step execution ─────────────────────────────────────────────────

  function executeScriptStep(n: number, gen: number) {
    if (gen !== stepGen.current) return;

    const { userText } = FIND_DOCTOR_SCRIPT[n];

    // Save snapshot of state before this step
    setMessages(prev => {
      scriptSnapshots.current[n] = [...prev];
      return prev;
    });

    // Animate typing into composer
    setIsTypingScript(true);
    setComposerText("");

    const charDelay = Math.max(40, Math.floor(600 / userText.length));
    let i = 0;
    const typeNext = () => {
      if (gen !== stepGen.current) return;
      i++;
      setComposerText(userText.slice(0, i));
      if (i < userText.length) {
        setTimeout(typeNext, charDelay);
      } else {
        // Pause, then auto-send
        setTimeout(() => {
          if (gen !== stepGen.current) return;
          setIsTypingScript(false);
          setComposerText("");
          setMessages(prev => [...prev, { id: uid(), kind: "member", text: userText }]);
          executeDotResponse(n, gen, () => {
            if (gen !== stepGen.current) return;
            setScriptStep(n + 1);
          });
        }, 450);
      }
    };
    setTimeout(typeNext, charDelay);
  }

  function executeDotResponse(step: number, gen: number, onDone: () => void) {
    if (step === 0) {
      // Show a brief dot message then the two service cards
      addDotTurn(
        [{ kind: "p", text: "For knee pain from running, here are a couple of care options I can help you find:" }],
        1000,
        () => {
          if (gen !== stepGen.current) return;
          setTimeout(() => {
            setMessages(prev => [...prev, { id: uid(), kind: "service-cards" }]);
            onDone();
          }, 200);
        }
      );
    } else if (step === 1) {
      addDotTurn(
        [{ kind: "p", text: "Should I use 94709 as the zip code for this search?" }],
        1000, onDone
      );
    } else if (step === 2) {
      addDotTurn(
        [{ kind: "p", text: "Before I pull your matches, do you have any personal preferences?" }],
        1000, onDone,
        "You can mention gender, languages spoken or expertise."
      );
    } else if (step === 3) {
      addDotTurn(tierBlocks, 1200, () => {
        if (gen !== stepGen.current) return;
        setTimeout(() => {
          if (gen !== stepGen.current) return;
          const searchId = uid();
          setMessages(prev => [...prev, { id: searchId, kind: "searching", text: "Searching for orthopedists near 94709 who are taking new patients...", noLabel: true }]);
          setTimeout(() => {
            if (gen !== stepGen.current) return;
            addDotTurn(
              [{ kind: "p", text: "Here are the Preferred orthopedists closest to you, so a visit with any of them is a $30 copay." }],
              800,
              () => {
                if (gen !== stepGen.current) return;
                setTimeout(() => {
                  setMessages(prev => [...prev, { id: uid(), kind: "providers" }]);
                  setTimeout(() => {
                    if (gen !== stepGen.current) return;
                    setMessages(prev => [...prev, { id: uid(), kind: "chips", inactive: false, chips: [
                      { label: "Show me more providers" },
                      { label: "Refine search criteria" },
                      { label: "These providers don't have availability" },
                    ]}]);
                    onDone();
                  }, 400);
                }, 300);
              },
              undefined, // no tip
              searchId,  // remove searching message when typing indicator appears
              true       // noLabel — continues the same Dot turn
            );
          }, 3000);
        }, 300);
      });
    }
  }

  // ── Arrow key navigation ──────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && scriptStep >= 0 && scriptStep < FIND_DOCTOR_SCRIPT.length && !isTypingScript) {
        const gen = stepGen.current;
        executeScriptStep(scriptStep, gen);
      }
      if (e.key === "ArrowLeft" && scriptStep >= 0) {
        stepGen.current++;
        const gen = stepGen.current;
        setStreamingId(null);
        setIsTypingScript(false);
        setComposerText("");

        if (scriptStep === 0) {
          // Go back to pre-script state (restore chips)
          if (preScriptSnapshot.current) {
            setMessages([...preScriptSnapshot.current]);
          }
          setScriptStep(-1);
        } else {
          // Restore to start of previous step
          const snapshot = scriptSnapshots.current[scriptStep - 1];
          if (snapshot) {
            setMessages([...snapshot]);
          }
          setScriptStep(scriptStep - 1);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [scriptStep, isTypingScript]);

  function handleFindDoctor(msgId: string) {
    // Save pre-script state so we can fully restore it with left arrow
    setMessages(prev => {
      preScriptSnapshot.current = [...prev];
      return prev;
    });

    // Mark the welcome chips inactive
    setMessages(prev => prev.map(m =>
      m.id === msgId ? { ...m, inactive: true } as ChatMsg : m
    ));

    // Add member bubble
    setMessages(prev => [...prev, { id: uid(), kind: "member", text: "Find a doctor" }]);

    // Dot's first response, then enter script mode
    addDotTurn(
      [{ kind: "p", text: "Happy to help. What kind of doctor are you looking for, and what would you like them to help with?" }],
      1000,
      () => { setScriptStep(0); }
    );
  }

  function handleServiceCardCta(cta: string, msgId: string) {
    // Only "Find an orthopedist" advances the script (step 1)
    if (cta !== "Find an orthopedist" || scriptStep !== 1) return;

    const gen = stepGen.current;

    // Save snapshot for left-arrow restore at step 2
    setMessages(prev => {
      scriptSnapshots.current[1] = [...prev];
      return prev;
    });

    // Add the member bubble directly (no typing animation)
    setMessages(prev => [...prev, { id: uid(), kind: "member", text: "Find an orthopedist" }]);

    // Dot's zip code response, then advance to step 2
    executeDotResponse(1, gen, () => {
      if (gen !== stepGen.current) return;
      setScriptStep(2);
    });
  }

  function handleChipTap(label: string, msgId: string) {
    if (label === "Find a doctor") {
      handleFindDoctor(msgId);
      return;
    }

    setMessages(prev => prev.map(m =>
      m.id === msgId ? { ...m, inactive: true } as ChatMsg : m
    ));
    setMessages(prev => [...prev, { id: uid(), kind: "member", text: label }]);

    switch (label) {
      case "Understand my plan":
        addDotTurn(planOverviewBlocks, 1000, () => {
          addChips([{ label: "High-quality, low-cost care" }, { label: "Visit costs" }, { label: "Surgery support" }]);
        });
        break;
      case "High-quality, low-cost care":
        addDotTurn(providersBlocks, 1400, () => {
          addChips([
            { label: "Find preferred providers/facilities" },
            { label: "Check if a provider is in network" },
            { label: "Explain how tiering works" },
            { label: "Learn more about my plan" },
          ]);
        });
        break;
      case "Learn more about my plan":
        addDotTurn(learnMoreBlocks, 800, () => {
          addChips([{ label: "Visit costs" }, { label: "Surgery support" }]);
        });
        break;
      case "Visit costs":
        setTimeout(() => {
          const typingId = uid();
          setMessages(prev => [...prev, { id: typingId, kind: "typing" }]);
          setTimeout(() => {
            setMessages(prev => prev.filter(m => m.id !== typingId));
            addMultiselect();
          }, 800);
        }, 160);
        break;
      case "Surgery support":
        addDotTurn(surgeryBlocks, 1200, () => {
          addChips([{ label: "Find a surgery center" }, { label: "Get a second opinion" }, { label: "Talk to the care team" }]);
        });
        break;
      default:
        break;
    }
  }

  function handleSend() {
    if (selectedChips.length === 0) return;
    const chips = [...selectedChips];
    setSelectedChips([]);
    setMessages(prev => prev.map(m => m.kind === "multiselect" ? { ...m, inactive: true } as ChatMsg : m));
    const text = chips.join(", ");
    setMessages(prev => [...prev, { id: uid(), kind: "member", text }]);
    addDotTurn(buildCopayBlocks(chips), 1400, () => {
      addChips([{ label: "Search for care" }, { label: "Learn about my plan" }]);
    });
  }

  const sendActive = selectedChips.length > 0;

  // Composer content state: typed script text or chips
  const showComposerText = composerText.length > 0;
  const showPlaceholder = !showComposerText && selectedChips.length === 0;

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "white", borderBottomLeftRadius: 44, borderBottomRightRadius: 44, overflow: "hidden" }}>
      <style>{`@keyframes cblink{0%,100%{opacity:1}50%{opacity:0}}`}</style>

      {/* Header */}
      <div style={{ flexShrink: 0 }}>
        <StatusBar />
        <div style={{ height: 56, borderBottom: "1px solid #e1e1e2", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px" }}>
          <div style={{ width: 48 }} />
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827" }}>Welcome to Included Health</p>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#0012e7", fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 16, cursor: "pointer", padding: "0 4px" }}>
            close
          </button>
        </div>
      </div>

      {/* Scrollable thread */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch", padding: "24px 16px 40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {messages.map((msg) => (
            <div key={msg.id}>
              <MsgBlock
                msg={msg}
                onChipTap={(label) => handleChipTap(label, msg.id)}
                onMultiselectTap={(label) => {
                  setSelectedChips(prev =>
                    prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]
                  );
                }}
                selectedChips={selectedChips}
                onServiceCardCta={(cta) => handleServiceCardCta(cta, msg.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Composer */}
      <div style={{ flexShrink: 0, padding: "0 16px 0" }}>
        <div style={{ background: "white", borderRadius: 24, boxShadow: "0 0 7.5px rgba(0,0,0,0.12)", padding: "16px 8px 8px", display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          <div style={{ paddingLeft: 8, paddingRight: 8, minHeight: 24, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
            {showPlaceholder && (
              <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 16, color: "#6d6d6d", flex: 1, lineHeight: "24px" }}>Describe what you need...</p>
            )}
            {showComposerText && (
              <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 400, fontSize: 16, color: "#000", flex: 1, lineHeight: "24px" }}>
                {composerText}
                <span style={{ display: "inline-block", width: 2, height: 16, background: "#0012E7", marginLeft: 1, verticalAlign: "middle", animation: "cblink 0.7s step-end infinite" }} />
              </p>
            )}
            {!showPlaceholder && !showComposerText && (
              <>
                {selectedChips.map(c => <ComposerChip key={c} label={c} onRemove={() => setSelectedChips(prev => prev.filter(x => x !== c))} />)}
                <div style={{ width: 2, height: 18, background: "#0012E7", animation: "cblink 1s step-end infinite" }} />
              </>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: "#f2f2f2", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p2d425280} fill="#0012E7" /></svg>
            </div>
            <button
              onClick={handleSend}
              disabled={!sendActive}
              style={{ width: 32, height: 32, borderRadius: 16, background: (sendActive || showComposerText) ? "#111827" : "#f2f2f2", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: sendActive ? "pointer" : "default", transition: "background 0.2s" }}
            >
              <svg width="13.09" height="12" viewBox="0 0 13.0909 12" fill="none">
                <path d={svgPaths.p28106800} fill={(sendActive || showComposerText) ? "white" : "#8F8F8F"} />
              </svg>
            </button>
          </div>
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
}

// ── WelcomeBlock ─────────────────────────────────────────────────────────────
const WELCOME_P1 = "How can I help?";
const WELCOME_P2 = "";
const W1 = WELCOME_P1.trim().split(/\s+/);
const W2 = WELCOME_P2.trim() ? WELCOME_P2.trim().split(/\s+/) : [];

function WelcomeBlock({ msg, onChipTap }: { msg: Extract<ChatMsg, { kind: "welcome" }>; onChipTap: (label: string) => void }) {
  const [wordCount, setWordCount] = useState(0);
  const [bodyStarted, setBodyStarted] = useState(false);
  const [bodyDone, setBodyDone] = useState(false);
  const totalWds = W1.length + W2.length;

  useEffect(() => {
    const t = setTimeout(() => setBodyStarted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!bodyStarted || bodyDone) return;
    const t = setInterval(() => {
      setWordCount(prev => {
        const next = prev + 1;
        if (next >= totalWds) { clearInterval(t); setBodyDone(true); }
        return next;
      });
    }, 55);
    return () => clearInterval(t);
  }, [bodyStarted, bodyDone]);

  const ease = [0.25, 0.1, 0.25, 1] as const;
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease, delay },
  });

  const cursor = <span style={{ display: "inline-block", width: 2, height: 14, background: "#0012E7", marginLeft: 2, verticalAlign: "middle", animation: "cblink 0.8s step-end infinite" }} />;
  const p1Text = W1.slice(0, Math.min(wordCount, W1.length)).join(" ");
  const p1Done = wordCount >= W1.length;
  const p2Text = p1Done ? W2.slice(0, wordCount - W1.length).join(" ") : "";
  const p2Streaming = p1Done && !bodyDone;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "inline-flex" }}>
          <DotLogoMark size={40} reveal oscillate />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.p {...fade(1.1)} style={{ fontFamily: "Figtree, sans-serif", fontWeight: 700, fontSize: 32, lineHeight: "40px", color: "#000" }}>
            Hey, Riley
          </motion.p>
          {bodyStarted && (
            <div style={{ fontFamily: "Figtree, sans-serif", fontWeight: 400, fontSize: 16, color: "#3b3b3b", lineHeight: 1.5 }}>
              <p style={{ marginBottom: p1Done ? 16 : 0 }}>
                {p1Text}{!p1Done && cursor}
              </p>
              {p1Done && (
                <p>{p2Text}{p2Streaming && cursor}</p>
              )}
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {!msg.inactive && bodyDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
            style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}
          >
            {["Find a doctor", "Ask about my coverage", "Understand my plan"].map((label, i) => (
              <WelcomeChip key={label} label={label} inactive={msg.inactive} onClick={() => onChipTap(label)} strokeDelay={i * 0.58} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── StreamingRichContent ──────────────────────────────────────────────────────
function StreamingRichContent({ blocks, wordCount, streaming }: { blocks: StreamBlock[]; wordCount: number; streaming: boolean }) {
  const cursor = <span style={{ display: "inline-block", width: 2, height: 14, background: "#0012E7", marginLeft: 2, verticalAlign: "middle", animation: "cblink 0.8s step-end infinite" }} />;
  const bodyStyle: React.CSSProperties = { fontFamily: "Figtree, sans-serif", fontWeight: 400, fontSize: 16, color: "#3b3b3b", lineHeight: 1.5 };

  let wordStart = 0;
  const nodes: React.ReactNode[] = [];

  blocks.forEach((block, bi) => {
    const isLastBlock = bi === blocks.length - 1;

    if (block.kind === "p" || block.kind === "h") {
      const words = block.text.trim().split(/\s+/);
      if (wordCount <= wordStart) { wordStart += words.length; return; }
      const shown = words.slice(0, wordCount - wordStart).join(" ");
      const done = wordCount >= wordStart + words.length;
      wordStart += words.length;
      nodes.push(
        <p key={bi} style={{ marginBottom: !isLastBlock && done ? 16 : 0, fontWeight: block.kind === "h" ? 700 : 400 }}>
          {shown}{!done && streaming && cursor}
        </p>
      );
      return;
    }

    const items: React.ReactNode[] = [];
    let anyShown = false;
    let ulFullyDone = true;

    block.items.forEach((itemText, ii) => {
      const words = itemText.trim().split(/\s+/);
      if (wordCount <= wordStart) { wordStart += words.length; return; }
      anyShown = true;
      const shown = words.slice(0, wordCount - wordStart).join(" ");
      const done = wordCount >= wordStart + words.length;
      if (!done) ulFullyDone = false;
      wordStart += words.length;
      const prefix = block.prefixes?.[ii];
      const isLastItem = ii === block.items.length - 1;
      items.push(
        <li key={ii} style={{ marginLeft: 24, marginBottom: !isLastItem && done ? 8 : 0 }}>
          {prefix && <><strong style={{ fontWeight: 700 }}>{prefix}</strong>{" "}</>}
          {shown}{!done && streaming && cursor}
        </li>
      );
    });

    if (!anyShown) return;
    nodes.push(
      <ul key={bi} style={{ listStyleType: "disc", marginBottom: !isLastBlock && ulFullyDone ? 16 : 0 }}>
        {items}
      </ul>
    );
  });

  return <div style={bodyStyle}>{nodes}</div>;
}

// ── MsgBlock ──────────────────────────────────────────────────────────────────
function MsgBlock({ msg, onChipTap, onMultiselectTap, selectedChips, onServiceCardCta }: {
  msg: ChatMsg;
  onChipTap: (label: string) => void;
  onMultiselectTap: (label: string) => void;
  selectedChips: string[];
  onServiceCardCta?: (cta: string) => void;
}) {
  if (msg.kind === "welcome") {
    return <WelcomeBlock msg={msg} onChipTap={onChipTap} />;
  }

  if (msg.kind === "member") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ background: "#e6effe", borderRadius: "24px 24px 0 24px", padding: 16, maxWidth: "calc(100% - 48px)" }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 400, fontSize: 16, color: "#000", lineHeight: "24px" }}>{msg.text}</p>
        </div>
      </motion.div>
    );
  }

  if (msg.kind === "typing") {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <TypingIndicator />
      </motion.div>
    );
  }

  if (msg.kind === "dot") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {!msg.noLabel && <DotNameLabel />}
        <div style={{ paddingRight: 32 }}>
          <StreamingRichContent blocks={msg.blocks} wordCount={msg.streamedWords} streaming={msg.streaming} />
          {!msg.streaming && msg.tip && (
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 12 }}>
              <Lightbulb size={16} color="#6d6d6d" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: "Figtree, sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: 15, color: "#6d6d6d", lineHeight: 1.5 }}>
                Tip: {msg.tip}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  if (msg.kind === "searching") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {!msg.noLabel && <DotNameLabel />}
        <div style={{ paddingRight: 32 }}>
          <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 16, color: "#8f8f8f", lineHeight: 1.5 }}>{msg.text}</p>
        </div>
      </motion.div>
    );
  }

  if (msg.kind === "providers") {
    return <DoctorCards />;
  }

  if (msg.kind === "service-cards") {
    return <ServiceCardsMsg onCtaTap={onServiceCardCta} />;
  }

  if (msg.kind === "chips") {
    return (
      <AnimatePresence>
        {!msg.inactive && (
          <motion.div
            initial={false}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } }}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {msg.chips.map((chip, i) => (
              <motion.div key={chip.label} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, duration: 0.2 }}>
                <ChatChip label={chip.label} inactive={msg.inactive} onClick={() => onChipTap(chip.label)} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  if (msg.kind === "multiselect") {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <DotNameLabel />
          <div style={{ paddingRight: 32 }}>
            <StreamingRichContent blocks={visitCostsBlocks} wordCount={totalWords(visitCostsBlocks)} streaming={false} />
          </div>
        </div>
        <AnimatePresence>
          {!msg.inactive && (
            <motion.div
              initial={false}
              exit={{ opacity: 0, y: -6, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } }}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <p style={{ fontFamily: "Figtree, sans-serif", fontWeight: 500, fontSize: 14, color: "#3b3b3b", lineHeight: "20px" }}>Select all that apply</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {VISIT_CHIPS.map((chip, i) => {
                  const isSelected = selectedChips.includes(chip.label);
                  return (
                    <motion.div key={chip.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
                      <button
                        onClick={() => onMultiselectTap(chip.label)}
                        style={{
                          background: isSelected ? "#0012e7" : "white",
                          border: isSelected ? "1px solid #0012e7" : "1px solid #c6c6c6",
                          borderRadius: 9999,
                          padding: "12px 16px",
                          fontFamily: "Figtree, sans-serif",
                          fontWeight: 500,
                          fontSize: 14,
                          color: isSelected ? "white" : "#0012e7",
                          cursor: "pointer",
                          lineHeight: "20px",
                          whiteSpace: "nowrap",
                          outline: "none",
                          transition: "background 0.15s, color 0.15s, border-color 0.15s",
                        }}
                      >
                        {chip.label}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return null;
}
