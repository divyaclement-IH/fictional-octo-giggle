import { useState } from "react";

export type AppPhase =
  | "coverage"
  | "lock-screen"
  | "home-skeleton"
  | "home-dot"
  | "home-dot-s2"
  | "home-no-dot"
  | "scenarios";

export type HomeDest = "home-dot" | "home-dot-s2" | "home-no-dot" | "scenarios";

export function useScreenTransition(initial: AppPhase = "coverage") {
  const [appPhase, setAppPhase] = useState<AppPhase>(initial);
  const [skelDest, setSkelDest] = useState<HomeDest>("scenarios");

  function goSkeleton(dest: HomeDest) {
    setSkelDest(dest);
    setAppPhase("home-skeleton");
  }

  return { appPhase, setAppPhase, skelDest, goSkeleton };
}
