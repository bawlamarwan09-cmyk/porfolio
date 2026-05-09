"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

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

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted"
          >
            <MapPin size={12} className="text-primary" />
            {t.hero.badge}
            <span className="mx-1 h-1 w-1 rounded-full bg-white/20" />
            <span className="text-fg/70">{t.hero.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight"
          >
            <span className="block">
              {t.hero.title.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="gradient-text">
                {t.hero.title.split(" ").slice(-3).join(" ")}
              </span>
            </span>
          </motion.h1>

          <motion.p
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
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_14px_50px_rgba(139,92,246,0.55)] transition-all"
            >
              <span>{t.hero.bilingualPrimary}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 rtl-flip" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-medium hover:bg-white/[0.06] transition"
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
            <span>Laravel</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>n8n</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>AI</span>
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
    </section>
  );
}
