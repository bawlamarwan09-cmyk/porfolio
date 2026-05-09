import { Locale } from "@/i18n/dictionaries";

export type Testimonial = {
  name: string;
  role: Record<Locale, string>;
  avatar: string;
  quote: Record<Locale, string>;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sara El Amrani",
    role: {
      en: "COO, Atlas Hotels Group",
      fr: "COO, Atlas Hotels Group",
      ar: "مديرة العمليّات، مجموعة أطلس الفنادق"
    },
    avatar: "https://i.pravatar.cc/200?img=47",
    quote: {
      en: "The booking platform paid for itself in 6 weeks. Direct revenue is up 38%.",
      fr: "La plateforme s'est rentabilisée en 6 semaines. Chiffre direct en hausse de 38%.",
      ar: "المنصّة استرجعت تكلفتها في 6 أسابيع. الدخل المباشر زاد 38٪."
    }
  },
  {
    name: "Karim B.",
    role: { en: "Founder, JobsMaroc", fr: "Fondateur, JobsMaroc", ar: "مؤسّس JobsMaroc" },
    avatar: "https://i.pravatar.cc/200?img=12",
    quote: {
      en: "He delivered a marketplace I thought needed a 6-person team. Solo. Clean.",
      fr: "Il a livré un marketplace que je pensais nécessiter une équipe de 6. Seul. Propre.",
      ar: "سلّم سوقاً كنت أظنّه يحتاج 6 أشخاص. لوحده. بنظافة."
    }
  },
  {
    name: "Nadia Z.",
    role: { en: "CEO, Casa F&B", fr: "CEO, Casa F&B", ar: "المديرة العامة، Casa F&B" },
    avatar: "https://i.pravatar.cc/200?img=32",
    quote: {
      en: "Order errors dropped 35%. Staff actually love the new POS.",
      fr: "Erreurs de commande –35%. Le staff adore le nouveau POS.",
      ar: "أخطاء الطلبات نزلت 35٪. الموظّفون يعشقون POS الجديد."
    }
  },
  {
    name: "Othmane R.",
    role: { en: "CTO, FinFlow", fr: "CTO, FinFlow", ar: "CTO، FinFlow" },
    avatar: "https://i.pravatar.cc/200?img=14",
    quote: {
      en: "Best engineer I've worked with on automation. Thinks like a founder.",
      fr: "Le meilleur ingénieur sur l'automatisation. Il pense comme un fondateur.",
      ar: "أفضل مهندس اشتغلت معه في الأتمتة. يفكّر كمؤسّس."
    }
  }
];
