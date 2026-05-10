"use client";
import { useEffect, useState } from "react";

/**
 * Returns true only when the device should render heavy 3D scenes:
 * - viewport >= 768px
 * - prefers-reduced-motion not set
 * - WebGL supported (best-effort)
 */
export function useIs3DEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    let webgl = false;
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setEnabled(!reduced && wide && webgl);

    const onResize = () => {
      const w = window.matchMedia("(min-width: 768px)").matches;
      setEnabled((prev) => prev && w);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return enabled;
}
