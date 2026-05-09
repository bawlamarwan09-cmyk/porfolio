"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const { t, locale } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {testimonials.map((tm, i) => (
            <motion.figure
              key={tm.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="relative rounded-3xl glass gradient-border p-6 sm:p-8"
            >
              <Quote size={22} className="text-primary/70" />
              <blockquote className="mt-3 text-fg/90 sm:text-lg leading-relaxed">
                "{tm.quote[locale]}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image src={tm.avatar} alt={tm.name} fill sizes="40px" className="object-cover" unoptimized />
                </span>
                <span>
                  <span className="block text-sm font-medium">{tm.name}</span>
                  <span className="block text-xs text-muted">{tm.role[locale]}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
