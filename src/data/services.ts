import { Locale } from "@/i18n/dictionaries";

export type ServiceItem = {
  icon: string;
  title: Record<Locale, string>;
  desc: Record<Locale, string>;
  value: Record<Locale, string>;
};

export const services: ServiceItem[] = [
  {
    icon: "Code2",
    title: {
      en: "Web Application Development",
      fr: "Développement d'applications web",
      ar: "تطوير تطبيقات الويب"
    },
    desc: {
      en: "From MVP to enterprise platform. Fast, secure, and built to scale.",
      fr: "Du MVP à la plateforme entreprise. Rapide, sécurisé, scalable.",
      ar: "من MVP إلى منصّة مؤسّسية. سريعة، آمنة، وقابلة للتوسّع."
    },
    value: {
      en: "Faster time-to-market and lower long-term maintenance costs.",
      fr: "Mise sur le marché plus rapide, coûts de maintenance réduits.",
      ar: "وصول أسرع للسوق وكلفة صيانة أقل."
    }
  },
  {
    icon: "LayoutDashboard",
    title: {
      en: "Dashboard & Admin Systems",
      fr: "Dashboards & systèmes d'administration",
      ar: "لوحات تحكّم وأنظمة إدارة"
    },
    desc: {
      en: "Operational cockpits with RBAC, automations, and analytics.",
      fr: "Cockpits opérationnels avec RBAC, automatisations et analytics.",
      ar: "كوكبيت عمليّات بصلاحيّات أدوار، أتمتة وتحليلات."
    },
    value: {
      en: "Decisions made in seconds, not spreadsheets.",
      fr: "Décisions prises en secondes, pas en tableurs.",
      ar: "قرارات في ثوانٍ، لا في جداول."
    }
  },
  {
    icon: "Workflow",
    title: {
      en: "Automation Solutions",
      fr: "Solutions d'automatisation",
      ar: "حلول الأتمتة"
    },
    desc: {
      en: "n8n, custom workers and AI agents that remove repetitive work.",
      fr: "n8n, workers custom et agents IA pour supprimer les tâches répétitives.",
      ar: "n8n، عمّال مخصّصون ووكلاء AI يلغون العمل المتكرّر."
    },
    value: {
      en: "Recover 20-60h/week of human time.",
      fr: "Récupérez 20-60h/semaine de temps humain.",
      ar: "استرجاع 20-60 ساعة عمل بشري أسبوعياً."
    }
  },
  {
    icon: "Plug",
    title: {
      en: "API Integrations",
      fr: "Intégrations API",
      ar: "تكاملات API"
    },
    desc: {
      en: "Stripe, WhatsApp, ERPs, CRMs and your custom partners.",
      fr: "Stripe, WhatsApp, ERPs, CRMs et vos partenaires custom.",
      ar: "Stripe، واتساب، ERP، CRM وشركاء مخصّصون."
    },
    value: {
      en: "One source of truth across all your tools.",
      fr: "Une source de vérité unique pour tous vos outils.",
      ar: "مصدر بيانات موحّد لكل أدواتك."
    }
  },
  {
    icon: "Sparkles",
    title: {
      en: "AI Integrations",
      fr: "Intégrations IA",
      ar: "دمج الذكاء الاصطناعي"
    },
    desc: {
      en: "Embed LLMs into your product with safety, evals and cost control.",
      fr: "Intégrez des LLMs en production avec sécurité, évals et contrôle coût.",
      ar: "دمج LLM في المنتج بأمان، تقييم وضبط للتكلفة."
    },
    value: {
      en: "Smarter products without the AI hype tax.",
      fr: "Produits plus intelligents sans la taxe du hype IA.",
      ar: "منتجات أذكى دون مبالغة الـAI hype."
    }
  },
  {
    icon: "Layers",
    title: {
      en: "Custom Platforms",
      fr: "Plateformes sur mesure",
      ar: "منصّات مخصّصة"
    },
    desc: {
      en: "Marketplaces, multi-tenant SaaS, and bespoke business systems.",
      fr: "Marketplaces, SaaS multi-tenant et systèmes business sur mesure.",
      ar: "أسواق، SaaS متعدّد المستأجرين، وأنظمة عمل مخصّصة."
    },
    value: {
      en: "A platform that becomes your moat.",
      fr: "Une plateforme qui devient votre moat.",
      ar: "منصّة تتحوّل إلى ميزة تنافسيّة."
    }
  },
  {
    icon: "Palette",
    title: {
      en: "UI/UX Development",
      fr: "Développement UI/UX",
      ar: "تطوير UI/UX"
    },
    desc: {
      en: "Pixel-perfect, accessible, animated interfaces that convert.",
      fr: "Interfaces pixel-perfect, accessibles, animées qui convertissent.",
      ar: "واجهات دقيقة، متاحة، ومحرّكة بمعدّلات تحويل عالية."
    },
    value: {
      en: "Higher conversion, lower bounce, premium brand feel.",
      fr: "Conversion en hausse, bounce en baisse, perception premium.",
      ar: "تحويل أعلى، ارتداد أقل، إحساس برِيميوم."
    }
  }
];
