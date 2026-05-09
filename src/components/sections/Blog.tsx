"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { posts } from "@/data/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Blog() {
  const { t, locale } = useI18n();
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.blog.eyebrow} title={t.blog.title} subtitle={t.blog.subtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass gradient-border"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={p.cover} alt={p.title[locale]} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
                  <span>{new Date(p.date).toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span>{p.read}</span>
                </div>
                <h3 className="mt-2 font-display text-lg leading-snug">{p.title[locale]}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{p.excerpt[locale]}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-fg/90 group-hover:text-primary transition">
                  {t.blog.readMore} <ArrowRight size={14} className="rtl-flip transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
