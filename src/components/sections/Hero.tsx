"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { useIs3DEnabled } from "@/hooks/useIs3DEnabled";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

export function Hero() {
  const { t } = useI18n();
  const enable3D = useIs3DEnabled();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  // GSAP scroll-driven parallax: pinned-scrub + parallax-depth + camera-scroll-sync (subtle)
  useEffect(() => {
    let ctx: any;
    let killed = false;
    (async () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(sceneRef.current, {
          yPercent: 18,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to([headlineRef.current, subRef.current], {
          yPercent: -25,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to(blurRef.current, {
          yPercent: 60,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }, sectionRef);
    })();
    return () => {
      killed = true;
      ctx?.revert?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-[92vh]"
    >
      <div className="absolute inset-0 -z-10 bg-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

      {/* 3D scene layer (lazy) */}
      <div
        ref={sceneRef}
        className="absolute inset-0 -z-[5] pointer-events-auto"
        aria-hidden
      >
        {enable3D && <HeroScene />}
      </div>

      {/* Color blur halos */}
      <div ref={blurRef} className="absolute inset-0 -z-[4] pointer-events-none">
        <motion.div
          aria-hidden
          className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-secondary/25 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pointer-events-none">
        <div className="mx-auto max-w-4xl text-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted backdrop-blur"
          >
            <MapPin size={12} className="text-primary" />
            {t.hero.badge}
            <span className="mx-1 h-1 w-1 rounded-full bg-white/20" />
            <span className="text-fg/70">{t.hero.tagline}</span>
          </motion.div>

          <motion.h1
            ref={headlineRef}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
            style={{ textShadow: "0 6px 40px rgba(99,102,241,0.25)" }}
          >
            <span className="block">
              {t.hero.title.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="gradient-text">
                {t.hero.title.split(" ").slice(-3).join(" ")}
              </span>
            </span>
          </motion.h1>

          <motion.p
            ref={subRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-muted sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.45)] hover:shadow-[0_18px_60px_rgba(139,92,246,0.65)] transition-all"
            >
              <span>{t.hero.bilingualPrimary}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 rtl-flip" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-6 py-3.5 font-medium hover:bg-white/[0.08] transition"
            >
              <Sparkles size={16} className="text-primary" />
              <span>{t.hero.bilingualSecondary}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>TypeScript</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Three.js</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>PHP</span>
          </motion.div>
        </div>
      </div>

      {/* Floating UI cards */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pointer-events-none absolute left-6 top-40 hidden lg:block"
      >
        <div className="glass rounded-2xl px-4 py-3 animate-float">
          <p className="text-[11px] text-muted">Bookings today</p>
          <p className="font-display text-xl">+38%</p>
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="pointer-events-none absolute right-6 top-56 hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="glass rounded-2xl px-4 py-3 animate-float">
          <p className="text-[11px] text-muted">Manual hours saved</p>
          <p className="font-display text-xl">60h/week</p>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted"
      >
        <span>Scroll</span>
        <div className="h-9 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
