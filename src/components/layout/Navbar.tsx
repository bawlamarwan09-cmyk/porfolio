"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Locale, LOCALES } from "@/i18n/dictionaries";

const localeLabels: Record<Locale, string> = { en: "English", fr: "Français", ar: "العربية" };

export function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "glass"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2">
            <span className="relative inline-grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
              MB
              <span className="absolute inset-0 rounded-lg blur-md bg-gradient-to-br from-primary to-secondary opacity-50 -z-10" />
            </span>
            <span className="font-display text-sm tracking-tight">Marouane Baoulla</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-2 text-sm text-fg/80 hover:text-fg transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-fg/80 hover:text-fg hover:bg-white/[0.06] transition"
                aria-label="Change language"
              >
                <Globe size={14} />
                <span className="uppercase tracking-wider">{locale}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl glass-strong"
                  >
                    {LOCALES.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLocale(l); setLangOpen(false); }}
                        className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-white/[0.06]"
                      >
                        <span>{localeLabels[l]}</span>
                        {locale === l && <Check size={14} className="text-primary" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-secondary px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_40px_rgba(139,92,246,0.45)] transition-shadow"
            >
              {t.nav.cta}
            </a>

            <button
              className="md:hidden inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between p-5">
              <span className="font-display">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10">
                <X size={18} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-5">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.05 * i } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl glass px-5 py-4 text-lg"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl bg-gradient-to-br from-primary to-secondary px-5 py-4 text-center text-lg font-medium"
                >
                  {t.nav.cta}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
