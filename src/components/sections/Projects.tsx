"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <FilterPill active={filter === "All"} onClick={() => setFilter("All")}>
            {t.projects.filterAll}
          </FilterPill>
          {projectCategories.map((c) => (
            <FilterPill key={c} active={filter === c} onClick={() => setFilter(c)}>{c}</FilterPill>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[260px]">
          {filtered.map((p, i) => {
            const big = i === 0 || i === 3;
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl glass gradient-border ${
                  big ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2 lg:row-span-1"
                }`}
              >
                <Link href={`/projects/${p.slug}`} className="block h-full">
                  <div className="relative h-56 sm:h-64 lg:h-full w-full overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title[locale]}
                      fill
                      sizes="(max-width:768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${p.accent} mix-blend-overlay opacity-30`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
                      <span>{p.category}</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl">{p.title[locale]}</h3>
                    <p className="mt-1 max-w-xl text-sm text-muted line-clamp-2">{p.description[locale]}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {p.tech.slice(0, 4).map((tt) => (
                        <span key={tt} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-fg/80">
                          {tt}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {p.liveUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(p.liveUrl!, "_blank"); }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 px-3 py-1 text-[11px] text-fg hover:from-primary/50 hover:to-secondary/50 transition"
                        >
                          <ExternalLink size={11} /> Live demo
                        </span>
                      )}
                      {p.repoUrl && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(p.repoUrl!, "_blank"); }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-fg/80 hover:bg-white/[0.08] transition"
                        >
                          <Github size={11} /> Code
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute right-5 top-5 inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-bg/40 backdrop-blur opacity-0 -translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm hover:bg-white/[0.06] transition"
          >
            {t.projects.bilingualCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function FilterPill({
  active, onClick, children
}: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs sm:text-sm transition border ${
        active
          ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/40 text-fg"
          : "border-white/10 bg-white/[0.02] text-muted hover:text-fg hover:bg-white/[0.05]"
      }`}
    >
      {children}
    </button>
  );
}
