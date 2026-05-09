export type TechItem = { name: string; icon: string; color: string };

export const tech: TechItem[] = [
  { name: "PHP", icon: "Code", color: "text-violet-300" },
  { name: "Laravel", icon: "Flame", color: "text-rose-300" },
  { name: "MySQL", icon: "Database", color: "text-sky-300" },
  { name: "React", icon: "Atom", color: "text-cyan-300" },
  { name: "Next.js", icon: "Triangle", color: "text-zinc-100" },
  { name: "Node.js", icon: "Server", color: "text-emerald-300" },
  { name: "Tailwind CSS", icon: "Wind", color: "text-teal-300" },
  { name: "Docker", icon: "Container", color: "text-blue-300" },
  { name: "APIs", icon: "Plug", color: "text-amber-300" },
  { name: "Git", icon: "GitBranch", color: "text-orange-300" },
  { name: "n8n", icon: "Workflow", color: "text-pink-300" },
  { name: "AI APIs", icon: "Sparkles", color: "text-fuchsia-300" }
];

export type TimelineItem = {
  year: string;
  title: { en: string; fr: string; ar: string };
  body: { en: string; fr: string; ar: string };
};

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: { en: "Final Year Project (PFE) & Modern Web Apps", fr: "Projet de Fin d'Études (PFE) & Web moderne", ar: "مشروع نهاية الدراسة وتطبيقات ويب حديثة" },
    body: {
      en: "Working on my graduation project with TypeScript / Next.js, while shipping new dashboards and tools.",
      fr: "Travail sur mon projet de fin d'études en TypeScript / Next.js, en parallèle de nouveaux dashboards et outils.",
      ar: "أشتغل على مشروع التخرّج بـ TypeScript / Next.js مع إطلاق لوحات تحكّم وأدوات جديدة."
    }
  },
  {
    year: "2025",
    title: { en: "Booking & Management Platforms", fr: "Plateformes de réservation & gestion", ar: "منصّات الحجز والإدارة" },
    body: {
      en: "Built hotel reservation, gym management, barbershop booking and a Dockerized version of the gym platform.",
      fr: "Réalisation : réservation hôtelière, gestion de salle de sport, réservation barbershop et version Dockerisée.",
      ar: "إنجاز: حجز فندقي، إدارة قاعة رياضيّة، حجز صالون حلاقة، ونسخة Docker للمنصّة الرياضيّة."
    }
  },
  {
    year: "2024",
    title: { en: "Full-Stack Developer — Learning by Building", fr: "Développeur Full-Stack — Apprendre en construisant", ar: "مطوّر فول-ستاك — تعلّم بالبناء" },
    body: {
      en: "Started building real web apps end-to-end: PHP / MySQL backends, modern JS / TypeScript frontends.",
      fr: "Début de projets web bout-en-bout : backends PHP / MySQL, frontends JS / TypeScript modernes.",
      ar: "بداية بناء تطبيقات ويب من أوّلها لتاليها: PHP / MySQL في الخلفيّة، JS / TypeScript حديث في الواجهة."
    }
  }
];
