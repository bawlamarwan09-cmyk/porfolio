import { Locale } from "@/i18n/dictionaries";

export type Post = {
  slug: string;
  cover: string;
  date: string;
  read: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
};

export const posts: Post[] = [
  {
    slug: "why-businesses-need-automation",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    date: "2025-09-12",
    read: "6 min",
    title: {
      en: "Why Businesses Need Automation in 2025",
      fr: "Pourquoi les entreprises ont besoin d'automatisation en 2025",
      ar: "لماذا تحتاج الشركات إلى الأتمتة في 2025"
    },
    excerpt: {
      en: "Manual work is the silent killer of margins. Here's how to find and remove it.",
      fr: "Le travail manuel est le tueur silencieux des marges. Voici comment l'éliminer.",
      ar: "العمل اليدوي هو القاتل الصامت للهوامش. كيف نكتشفه ونحذفه."
    }
  },
  {
    slug: "api-vs-scraping",
    cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    date: "2025-08-04",
    read: "5 min",
    title: {
      en: "API vs Scraping: which one should you choose?",
      fr: "API vs Scraping : que choisir ?",
      ar: "API أم Scraping: ماذا نختار؟"
    },
    excerpt: {
      en: "A practical decision framework with cost, legal and reliability tradeoffs.",
      fr: "Un cadre de décision avec coûts, légalité et fiabilité.",
      ar: "إطار قرار عملي بين التكلفة، القانون، والموثوقيّة."
    }
  },
  {
    slug: "reservation-systems-improve-business",
    cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    date: "2025-07-21",
    read: "7 min",
    title: {
      en: "How Reservation Systems Improve Business",
      fr: "Comment les systèmes de réservation améliorent le business",
      ar: "كيف تُحسِّن أنظمة الحجز الأعمال"
    },
    excerpt: {
      en: "Direct bookings, fewer no-shows, and predictable revenue. The math.",
      fr: "Réservations directes, moins de no-shows, revenus prévisibles.",
      ar: "حجوزات مباشرة، أقل no-shows، عائدات قابلة للتوقّع."
    }
  },
  {
    slug: "building-modern-web-platforms",
    cover: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200&q=80",
    date: "2025-06-09",
    read: "8 min",
    title: {
      en: "Building Modern Web Platforms",
      fr: "Construire des plateformes web modernes",
      ar: "بناء منصّات ويب حديثة"
    },
    excerpt: {
      en: "Architecture choices that don't lock you in and scale to 6 figures of users.",
      fr: "Choix d'architecture sans vendor lock-in, scalables à 6 chiffres d'utilisateurs.",
      ar: "قرارات معماريّة بلا قيود مع توسّع لمئات الآلاف من المستخدمين."
    }
  },
  {
    slug: "ai-automation-for-businesses",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    date: "2025-05-15",
    read: "6 min",
    title: {
      en: "AI Automation for Businesses",
      fr: "Automatisation IA pour les entreprises",
      ar: "أتمتة الأعمال بالذكاء الاصطناعي"
    },
    excerpt: {
      en: "From hype to ROI: where AI actually pays off in operations.",
      fr: "Du hype au ROI : où l'IA paie réellement en opérations.",
      ar: "من الضجّة إلى العائد: أين تدفع AI فعلاً في العمليّات."
    }
  },
  {
    slug: "every-business-needs-a-dashboard",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    date: "2025-04-02",
    read: "5 min",
    title: {
      en: "Why Every Business Needs a Dashboard",
      fr: "Pourquoi chaque entreprise a besoin d'un dashboard",
      ar: "لماذا تحتاج كل شركة إلى لوحة تحكّم"
    },
    excerpt: {
      en: "If you can't see it, you can't improve it. Build the cockpit.",
      fr: "Ce qui ne se mesure pas ne s'améliore pas. Construisez le cockpit.",
      ar: "ما لا يُقاس لا يُحسَّن. ابنِ الكوكبيت."
    }
  }
];
