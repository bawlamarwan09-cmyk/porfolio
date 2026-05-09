"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, ExternalLink, Github, Layers, Rocket, Search, Wrench } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Project } from "@/data/projects";

export function CaseStudy({ project }: { project: Project }) {
  const { t, locale } = useI18n();

  return (
    <article className="relative pt-28 pb-24">
      <div className="absolute inset-0 -z-10 bg-radial" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted hover:text-fg transition"
        >
          <ArrowLeft size={14} className="rtl-flip" /> {t.caseStudy.back}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              {project.category} · {project.year}
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight"
            >
              {project.title[locale]}
            </motion.h1>
            <p className="mt-4 text-lg text-muted max-w-2xl">{project.tagline[locale]}</p>
            <p className="mt-3 text-fg/80 max-w-2xl">{project.description[locale]}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tk) => (
                <span key={tk} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs">
                  {tk}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.55)] transition"
                >
                  <ExternalLink size={14} /> Live demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm hover:bg-white/[0.06] transition"
                >
                  <Github size={14} /> Source code
                </a>
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl glass gradient-border aspect-[4/3]"
          >
            <Image src={project.cover} alt={project.title[locale]} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-30 mix-blend-overlay`} />
          </motion.div>
        </div>

        <Section icon={Search} title={t.caseStudy.problem}>
          <p className="text-fg/85">{project.problem[locale]}</p>
        </Section>

        <Section icon={Search} title={t.caseStudy.research}>
          <p className="text-fg/85">{project.research[locale]}</p>
        </Section>

        <Section icon={Layers} title={t.caseStudy.uiux}>
          <p className="text-fg/85">{project.uiux[locale]}</p>
        </Section>

        <Section icon={Cpu} title={t.caseStudy.architecture}>
          <p className="text-fg/85">{project.architecture[locale]}</p>
        </Section>

        <Section icon={CheckCircle2} title={t.caseStudy.features}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.features[locale].map((f) => (
              <li key={f} className="flex items-start gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={Wrench} title={t.caseStudy.challenges}>
          <ul className="space-y-2">
            {project.challenges[locale].map((c) => (
              <li key={c} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-fg/85">{c}</li>
            ))}
          </ul>
        </Section>

        <Section icon={Rocket} title={t.caseStudy.result}>
          <div className="rounded-3xl glass gradient-border p-6 sm:p-8">
            <p className="font-display text-2xl sm:text-3xl">{project.result[locale]}</p>
          </div>
        </Section>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.caseStudy.screenshots}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative aspect-video overflow-hidden rounded-2xl glass"
                >
                  <Image src={s} alt={`${project.title[locale]} screenshot ${i + 1}`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.caseStudy.mobile}</p>
            <div className="relative mt-3 aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/10 bg-card">
              <Image src={project.mobile} alt={`${project.title[locale]} mobile`} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl glass gradient-border p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl sm:text-3xl">{t.caseStudy.cta}</p>
            <p className="mt-2 text-muted">Réserver un appel — احجز مكالمة</p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_14px_50px_rgba(139,92,246,0.55)] transition"
          >
            Start <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <div className="flex items-center gap-3">
        <span className="inline-grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
          <Icon size={16} className="text-primary" />
        </span>
        <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-5 max-w-3xl">{children}</div>
    </section>
  );
}
