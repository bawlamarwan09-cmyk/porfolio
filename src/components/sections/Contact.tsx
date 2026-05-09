"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Instagram, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const budgets = ["< 2k€", "2k - 5k€", "5k - 15k€", "15k+ €"];

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl glass gradient-border p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={t.contact.name}>
                <input required name="name" type="text" className="input" />
              </Field>
              <Field label={t.contact.email}>
                <input required name="email" type="email" className="input" />
              </Field>
            </div>
            <Field label={t.contact.project}>
              <textarea required name="project" rows={5} className="input resize-none" />
            </Field>
            <Field label={t.contact.budget}>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <label key={b} className="cursor-pointer">
                    <input type="radio" name="budget" value={b} className="peer sr-only" />
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-muted peer-checked:border-primary/60 peer-checked:bg-primary/10 peer-checked:text-fg transition">
                      {b}
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_14px_50px_rgba(139,92,246,0.55)] transition disabled:opacity-70"
              >
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} className="rtl-flip" />}
                {sent ? t.contact.success : t.contact.bilingualSend}
              </button>
              <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-fg transition">
                {site.email}
              </a>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-2 rounded-3xl glass gradient-border p-6 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Direct</p>
            <h3 className="mt-3 font-display text-2xl">Let's talk.</h3>
            <p className="mt-2 text-sm text-muted">{site.location}</p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <SocialChip href={site.socials.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialChip href={site.socials.github} icon={Github} label="GitHub" />
              <SocialChip href={site.socials.instagram} icon={Instagram} label="Instagram" />
              <SocialChip href={site.socials.email} icon={Mail} label="Email" />
            </div>
            <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs text-muted">Response time</p>
              <p className="mt-1 font-display text-xl">&lt; 24h</p>
            </div>
          </motion.aside>
        </div>
      </div>

    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted">{label}</span>
      {children}
    </label>
  );
}

function SocialChip({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-sm hover:bg-white/[0.06] transition"
    >
      <Icon size={14} className="text-muted group-hover:text-fg transition" />
      <span>{label}</span>
    </a>
  );
}
