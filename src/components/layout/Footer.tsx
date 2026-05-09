"use client";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/data/site";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const links = [
    { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
    { icon: Github, href: site.socials.github, label: "GitHub" },
    { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
    { icon: Mail, href: site.socials.email, label: "Email" }
  ];

  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white">MB</span>
              <span className="font-display">Marouane Baoulla</span>
            </div>
            <p className="mt-3 text-sm text-muted max-w-xs">{t.footer.tagline}</p>
          </div>
          <div className="text-sm text-muted">
            <p className="text-fg mb-3 font-medium">Contact</p>
            <p>{site.email}</p>
            <p>{site.location}</p>
          </div>
          <div>
            <p className="text-fg mb-3 font-medium text-sm">Social</p>
            <div className="flex items-center gap-2">
              {links.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition"
                >
                  <Icon size={16} className="text-muted group-hover:text-fg transition" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {year} Marouane Baoulla. {t.footer.rights}</p>
          <p className="opacity-70">v1.0 · Built with Next.js, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
