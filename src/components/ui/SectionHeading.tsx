"use client";
import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow, title, subtitle, align = "center"
}: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted"
        >
          <span className="h-1 w-1 rounded-full bg-primary" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-base sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
