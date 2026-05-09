"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { tech } from "@/data/tech";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {tech.map((tk, i) => {
            const Icon = (Icons as any)[tk.icon] ?? Icons.Box;
            return (
              <motion.div
                key={tk.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl glass p-4 aspect-square"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition" />
                <Icon size={22} className={`relative ${tk.color}`} />
                <span className="relative text-[11px] sm:text-xs text-fg/80 tracking-wide">{tk.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
