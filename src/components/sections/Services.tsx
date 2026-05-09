"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  const { t, locale } = useI18n();
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={s.icon + i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-3xl glass gradient-border p-6 sm:p-7 hover:-translate-y-1 transition-transform"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="relative">
                  <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{s.title[locale]}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc[locale]}</p>
                  <div className="mt-5 flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-fg/80">
                    <Icons.TrendingUp size={14} className="mt-0.5 text-primary" />
                    <span>{s.value[locale]}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
