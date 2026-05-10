"use client";
import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { useI18n } from "@/i18n/I18nProvider";
import { timeline } from "@/data/tech";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useIs3DEnabled } from "@/hooks/useIs3DEnabled";

const AboutFog = dynamic(
  () => import("@/components/three/AboutFog").then((m) => m.AboutFog),
  { ssr: false }
);

export function About() {
  const { t, locale } = useI18n();
  const enable3D = useIs3DEnabled();
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {enable3D && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <AboutFog />
        </div>
      )}
      <div className="absolute inset-0 -z-20 bg-radial opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.body} align="left" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl glass gradient-border p-6 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.about.timelineTitle}</p>
            <ol className="mt-6 relative border-l border-white/10 pl-6 space-y-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-secondary rtl:left-auto rtl:-right-[7px]" />
                  <p className="text-xs text-muted">{item.year}</p>
                  <p className="mt-1 font-display text-lg">{item.title[locale]}</p>
                  <p className="mt-1 text-sm text-muted">{item.body[locale]}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl glass gradient-border p-6 sm:p-8 flex flex-col"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.about.mindsetTitle}</p>
            <ul className="mt-6 space-y-3">
              {t.about.mindset.map((m) => (
                <li key={m} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-fg/90">{m}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 grid grid-cols-3 gap-2">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-sm hover:bg-white/[0.06] transition"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-sm hover:bg-white/[0.06] transition"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={site.socials.email}
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-sm hover:bg-white/[0.06] transition"
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
