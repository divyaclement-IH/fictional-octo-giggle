import React, { useEffect } from "react";

const SKEL: React.CSSProperties = {
  background: "linear-gradient(90deg, #efefef 25%, #e4e4e4 50%, #efefef 75%)",
  backgroundSize: "750px 100%",
  animation: "skel-shimmer 1.3s infinite linear",
  borderRadius: 8,
  flexShrink: 0,
};

interface HomeSkeletonProps {
  onDone: () => void;
}

export default function HomeSkeleton({ onDone }: HomeSkeletonProps) {
  useEffect(() => {
    const t = setTimeout(onDone, 950);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div style={{ width: "100%", height: "100%", background: "white", overflow: "hidden" }}>
      <style>{`@keyframes skel-shimmer { 0% { background-position: -375px 0; } 100% { background-position: 375px 0; } }`}</style>

      {/* Status bar */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <div style={{ ...SKEL, width: 42, height: 14, borderRadius: 4 }} />
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ ...SKEL, width: 18, height: 12, borderRadius: 3 }} />
          <div style={{ ...SKEL, width: 16, height: 12, borderRadius: 3 }} />
          <div style={{ ...SKEL, width: 26, height: 12, borderRadius: 3 }} />
        </div>
      </div>

      {/* Nav bar row */}
      <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ ...SKEL, width: 140, height: 16, borderRadius: 4 }} />
      </div>

      <div style={{ padding: "20px 16px 0", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Logo */}
        <div style={{ ...SKEL, width: 40, height: 40, borderRadius: 10 }} />

        {/* Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ ...SKEL, width: "88%", height: 30, borderRadius: 8 }} />
          <div style={{ ...SKEL, width: "64%", height: 30, borderRadius: 8 }} />
        </div>

        {/* Input box */}
        <div style={{ ...SKEL, width: "100%", height: 76, borderRadius: 20 }} />

        {/* Chips row */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ ...SKEL, width: 132, height: 44, borderRadius: 24 }} />
          <div style={{ ...SKEL, width: 108, height: 44, borderRadius: 24 }} />
          <div style={{ ...SKEL, width: 98, height: 44, borderRadius: 24 }} />
        </div>

        {/* "Covered by" row */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ ...SKEL, width: 148, height: 18, borderRadius: 5 }} />
        </div>

        {/* Your actions header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
          <div style={{ ...SKEL, width: 118, height: 24, borderRadius: 6 }} />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ ...SKEL, width: 24, height: 24, borderRadius: 12 }} />
            <div style={{ ...SKEL, width: 10, height: 18, borderRadius: 3 }} />
          </div>
        </div>

        {/* Action cards carousel */}
        <div style={{ display: "flex", gap: 10, overflow: "hidden" }}>
          <div style={{ ...SKEL, width: 260, height: 110, borderRadius: 16, flexShrink: 0 }} />
          <div style={{ ...SKEL, width: 260, height: 110, borderRadius: 16, flexShrink: 0, opacity: 0.5 }} />
        </div>

        {/* Get care header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ ...SKEL, width: 90, height: 24, borderRadius: 6 }} />
          <div style={{ ...SKEL, width: 60, height: 18, borderRadius: 5 }} />
        </div>

        {/* Get care tiles */}
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ ...SKEL, flex: 1, height: 130, borderRadius: 16 }} />
          <div style={{ ...SKEL, flex: 1, height: 130, borderRadius: 16 }} />
        </div>
      </div>
    </div>
  );
}
