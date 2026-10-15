import React, { useId } from "react";
import { motion } from "motion/react";

interface DotLogoMarkProps {
  size?: number;
  oscillate?: boolean;
  spinning?: boolean;
  reveal?: boolean;
}

export default function DotLogoMark({
  size = 40,
  oscillate = false,
  spinning = false,
  reveal = false,
}: DotLogoMarkProps) {
  const uid = useId().replace(/:/g, "");
  const [rotating, setRotating] = React.useState(false);
  const [revealDone, setRevealDone] = React.useState(!reveal);

  React.useEffect(() => {
    if (spinning) {
      const t = setTimeout(() => setRotating(true), 520);
      return () => clearTimeout(t);
    }
    setRotating(false);
  }, [spinning]);

  // Reset revealDone when reveal changes (e.g. component remounts)
  React.useEffect(() => {
    if (reveal) setRevealDone(false);
  }, [reveal]);

  const REVEAL_DUR = 0.72;
  // Non-linear reveal order: big-left first, then bottom, top, big-right
  const REVEAL_DELAYS = [0.30, 0.54, 0.18, 0];

  function oscillateProps(dy: number, dur: number, delay: number, reps: number) {
    if (!oscillate || spinning || !revealDone) return {};
    return {
      animate: { y: [0, -dy, 0] },
      transition: { duration: dur, repeat: reps, ease: "easeInOut", delay },
    };
  }

  const R = 11, dotR = 3.5;

  const blobs = [
    {
      d: "M18.8572 0C21.6186 0 23.8572 2.23939 23.8572 5.00081C23.857 7.76205 21.6185 10.0008 18.8572 10.0008C16.096 10.0007 13.8574 7.76198 13.8572 5.00081C13.8572 2.23946 16.0958 0.000109943 18.8572 0Z",
      cx: 18.86, cy: 5,     r: 5,   orbitX: 20, orbitY: 9,
      osc: oscillateProps(2.5, 1.8, 0.6, 1),
    },
    {
      d: "M31.358 10C35.4999 10.0002 38.858 13.358 38.858 17.5C38.858 21.642 35.4999 24.9998 31.358 25C27.2159 25 23.858 21.6421 23.858 17.5C23.858 13.3579 27.2159 10 31.358 10Z",
      cx: 31.36, cy: 17.5,  r: 7.5, orbitX: 31, orbitY: 20,
      osc: oscillateProps(4.5, 2.0, 0.25, 1),
    },
    {
      d: "M26.358 30C29.1192 30.0002 31.358 32.2387 31.358 35C31.358 37.7613 29.1192 39.9998 26.358 40C23.5966 40 21.358 37.7614 21.358 35C21.358 32.2386 23.5966 30 26.358 30Z",
      cx: 26.36, cy: 35,    r: 5,   orbitX: 20, orbitY: 31,
      osc: oscillateProps(3, 1.6, 0.4, 2),
    },
    {
      d: "M11.1326 13.3333C16.6554 13.3333 21.1326 17.8105 21.1326 23.3333C21.1326 28.8562 16.6554 33.3333 11.1326 33.3333C5.60972 33.3333 1.13257 28.8562 1.13257 23.3333C1.13257 17.8105 5.60972 13.3333 11.1326 13.3333Z",
      cx: 11.13, cy: 23.33, r: 10,  orbitX: 9,  orbitY: 20,
      osc: oscillateProps(6, 2.4, 0, 1),
    },
  ];

  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0, overflow: "visible" }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" overflow="visible">
        <defs>
          <linearGradient id={`g${uid}`} x1="1.666" y1="27.5" x2="38.335" y2="15.84" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0012E7" /><stop offset="1" stopColor="#6A4CDE" />
          </linearGradient>
        </defs>

        {blobs.map(({ d, cx, cy, r, orbitX, orbitY, osc }, i) => {
          const isLast = i === REVEAL_DELAYS.indexOf(Math.max(...REVEAL_DELAYS));

          if (reveal && !revealDone) {
            return (
              <motion.path
                key={i}
                d={d}
                fill={`url(#g${uid})`}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: REVEAL_DELAYS[i],
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  mass: 0.8,
                }}
                onAnimationComplete={isLast ? () => setRevealDone(true) : undefined}
              />
            );
          }

          return (
            <motion.path
              key={i}
              d={d}
              fill={`url(#g${uid})`}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={spinning ? {
                x: orbitX - cx,
                y: orbitY - cy,
                scale: dotR / r,
                opacity: rotating ? 0 : 1,
              } : {
                x: 0, y: 0, scale: 1, opacity: 1,
              }}
              transition={{
                x:       { duration: 0.46, ease: [0.2, 0, 0, 1] },
                y:       { duration: 0.46, ease: [0.2, 0, 0, 1] },
                scale:   { duration: 0.46, ease: [0.2, 0, 0, 1] },
                opacity: { duration: rotating ? 0.06 : 0.25 },
              }}
              {...osc}
            />
          );
        })}

        <g transform="translate(20, 20)">
          <motion.g
            animate={{ rotate: rotating ? 360 : 0 }}
            transition={rotating
              ? { duration: 1.4, repeat: Infinity, ease: "linear" }
              : { duration: 0.05 }}
          >
            {[0, 90, 180, 270].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle key={i}
                  cx={R * Math.sin(rad)} cy={-R * Math.cos(rad)} r={dotR}
                  fill={`url(#g${uid})`}
                  opacity={rotating ? (1 - i * 0.2) : 0}
                />
              );
            })}
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
