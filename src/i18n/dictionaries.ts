export type Locale = "en" | "fr" | "ar";
export const LOCALES: Locale[] = ["en", "fr", "ar"];
export const DEFAULT_LOCALE: Locale = "en";

export const RTL_LOCALES: Locale[] = ["ar"];
export const isRTL = (l: Locale) => RTL_LOCALES.includes(l);

export const dict = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      cta: "Start a project"
    },
    hero: {
      badge: "Based in Morocco 🇲🇦",
      title: "Full-Stack Developer Building Modern Web Systems & Automation Solutions",
      subtitle:
        "I create scalable web applications, dashboards, automation systems, APIs, and digital experiences that solve real business problems.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Let's Work Together",
      bilingualPrimary: "Voir les projets — شوف المشاريع",
      bilingualSecondary: "Contactez-moi — تواصل معي",
      tagline: "Engineering. Automation. Growth."
    },
    stats: {
      title: "Trusted by founders and teams",
      subtitle: "Numbers that reflect impact, not vanity.",
      items: [
        { label: "Projects Built", value: 40 },
        { label: "Technologies Used", value: 25 },
        { label: "Automation Systems", value: 18 },
        { label: "APIs Integrated", value: 60 }
      ]
    },
    projects: {
      eyebrow: "Featured Work",
      title: "Real systems. Real outcomes.",
      subtitle:
        "Each project ships measurable business value: more bookings, less manual work, faster operations.",
      cta: "Read case study",
      filterAll: "All",
      bilingualCta: "Découvrir plus — اكتشف أكثر"
    },
    services: {
      eyebrow: "Services",
      title: "Software that compounds your business",
      subtitle:
        "From idea to production. I build the systems that automate your operations and unlock growth."
    },
    about: {
      eyebrow: "About",
      title: "Hi, I'm Marouane Baoulla.",
      body:
        "I'm a Full-Stack Developer passionate about building modern web applications. I enjoy turning ideas into real products using clean code and modern tools — from booking platforms and admin dashboards to containerized systems and academic engineering projects.",
      timelineTitle: "Experience timeline",
      mindsetTitle: "How I work",
      mindset: [
        "Start with the business problem, not the framework.",
        "Ship small, measure, iterate.",
        "Automate everything that doesn't need a human.",
        "Performance and accessibility are not optional."
      ]
    },
    tech: {
      eyebrow: "Tech Stack",
      title: "Tools I use to ship",
      subtitle: "A modern, battle-tested stack for products that need to scale."
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say",
      subtitle: "Founders and operators I've helped build, automate, and grow."
    },
    blog: {
      eyebrow: "Blog",
      title: "Insights on automation, AI & web platforms",
      subtitle: "Practical articles to help you make better technical decisions.",
      readMore: "Read article"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something that compounds.",
      subtitle:
        "Tell me about your project. I'll get back within 24 hours with a clear next step.",
      name: "Your name",
      email: "Email",
      project: "Project description",
      budget: "Estimated budget",
      send: "Send message",
      bilingualSend: "Réserver un appel — احجز مكالمة",
      success: "Thanks. I'll reply within 24h."
    },
    footer: {
      tagline: "Built in Morocco. Shipped to the world.",
      rights: "All rights reserved."
    },
    caseStudy: {
      back: "Back to projects",
      problem: "The business problem",
      research: "Research",
      uiux: "UI/UX process",
      architecture: "Technical architecture",
      features: "Key features",
      challenges: "Challenges solved",
      result: "Final result",
      screenshots: "Screenshots",
      mobile: "Mobile preview",
      tech: "Technologies",
      cta: "Start a similar project"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      services: "Services",
      about: "À propos",
      blog: "Blog",
      contact: "Contact",
      cta: "Commencer un projet"
    },
    hero: {
      badge: "Basé au Maroc 🇲🇦",
      title:
        "Développeur Full-Stack — Systèmes web modernes & solutions d'automatisation",
      subtitle:
        "Je conçois des applications web scalables, des dashboards, des systèmes d'automatisation, des APIs et des expériences digitales qui résolvent de vrais problèmes business.",
      ctaPrimary: "Voir les projets",
      ctaSecondary: "Travaillons ensemble",
      bilingualPrimary: "Voir les projets — شوف المشاريع",
      bilingualSecondary: "Contactez-moi — تواصل معي",
      tagline: "Ingénierie. Automatisation. Croissance."
    },
    stats: {
      title: "La confiance des fondateurs et des équipes",
      subtitle: "Des chiffres qui reflètent l'impact, pas la vanité.",
      items: [
        { label: "Projets livrés", value: 40 },
        { label: "Technologies maîtrisées", value: 25 },
        { label: "Systèmes d'automatisation", value: 18 },
        { label: "APIs intégrées", value: 60 }
      ]
    },
    projects: {
      eyebrow: "Projets phares",
      title: "Des vrais systèmes. De vrais résultats.",
      subtitle:
        "Chaque projet livre une valeur business mesurable : plus de réservations, moins de tâches manuelles, des opérations plus rapides.",
      cta: "Voir l'étude de cas",
      filterAll: "Tous",
      bilingualCta: "Découvrir plus — اكتشف أكثر"
    },
    services: {
      eyebrow: "Services",
      title: "Des logiciels qui font grandir votre business",
      subtitle:
        "De l'idée à la production. Je construis les systèmes qui automatisent vos opérations et débloquent votre croissance."
    },
    about: {
      eyebrow: "À propos",
      title: "Salut, moi c'est Marouane Baoulla.",
      body:
        "Développeur Full-Stack passionné par la création d'applications web modernes. J'aime transformer des idées en vrais produits avec du code propre et des outils modernes — plateformes de réservation, dashboards admin, systèmes conteneurisés et projets d'ingénierie.",
      timelineTitle: "Parcours",
      mindsetTitle: "Ma manière de travailler",
      mindset: [
        "Partir du problème business, pas du framework.",
        "Livrer petit, mesurer, itérer.",
        "Automatiser tout ce qui ne nécessite pas un humain.",
        "La performance et l'accessibilité ne sont pas optionnelles."
      ]
    },
    tech: {
      eyebrow: "Stack technique",
      title: "Les outils que j'utilise",
      subtitle: "Une stack moderne et éprouvée pour des produits qui scalent."
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "Ce que disent mes clients",
      subtitle:
        "Fondateurs et opérateurs que j'ai aidé à construire, automatiser et grandir."
    },
    blog: {
      eyebrow: "Blog",
      title: "Insights sur l'automatisation, l'IA & les plateformes web",
      subtitle: "Des articles concrets pour mieux décider techniquement.",
      readMore: "Lire l'article"
    },
    contact: {
      eyebrow: "Contact",
      title: "Construisons quelque chose qui compose dans le temps.",
      subtitle:
        "Parlez-moi de votre projet. Je reviens vers vous sous 24h avec une prochaine étape claire.",
      name: "Votre nom",
      email: "Email",
      project: "Description du projet",
      budget: "Budget estimé",
      send: "Envoyer le message",
      bilingualSend: "Réserver un appel — احجز مكالمة",
      success: "Merci. Je vous réponds sous 24h."
    },
    footer: {
      tagline: "Conçu au Maroc. Livré au monde.",
      rights: "Tous droits réservés."
    },
    caseStudy: {
      back: "Retour aux projets",
      problem: "Le problème business",
      research: "Recherche",
      uiux: "Processus UI/UX",
      architecture: "Architecture technique",
      features: "Fonctionnalités clés",
      challenges: "Défis résolus",
      result: "Résultat final",
      screenshots: "Captures",
      mobile: "Aperçu mobile",
      tech: "Technologies",
      cta: "Démarrer un projet similaire"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      services: "الخدمات",
      about: "من أنا",
      blog: "المدونة",
      contact: "تواصل",
      cta: "ابدأ مشروعك"
    },
    hero: {
      badge: "من المغرب 🇲🇦",
      title: "مطوّر فول-ستاك يبني أنظمة ويب حديثة وحلول أتمتة",
      subtitle:
        "أصمّم وأطوّر تطبيقات ويب قابلة للتوسّع، لوحات تحكم، أنظمة أتمتة، واجهات API وتجارب رقمية تحلّ مشاكل حقيقية للأعمال.",
      ctaPrimary: "شوف المشاريع",
      ctaSecondary: "تواصل معي",
      bilingualPrimary: "Voir les projets — شوف المشاريع",
      bilingualSecondary: "Contactez-moi — تواصل معي",
      tagline: "هندسة. أتمتة. نموّ."
    },
    stats: {
      title: "ثقة المؤسسين والفِرق",
      subtitle: "أرقام تعكس الأثر، لا المظهر.",
      items: [
        { label: "مشروع منجز", value: 40 },
        { label: "تقنية مستعملة", value: 25 },
        { label: "نظام أتمتة", value: 18 },
        { label: "API مدمج", value: 60 }
      ]
    },
    projects: {
      eyebrow: "أعمال مختارة",
      title: "أنظمة حقيقية. نتائج حقيقية.",
      subtitle:
        "كل مشروع يجلب قيمة قابلة للقياس: حجوزات أكثر، أعمال يدوية أقل، عمليات أسرع.",
      cta: "اقرأ دراسة الحالة",
      filterAll: "الكل",
      bilingualCta: "Découvrir plus — اكتشف أكثر"
    },
    services: {
      eyebrow: "الخدمات",
      title: "برمجيات تُنمّي عملك",
      subtitle:
        "من الفكرة إلى الإنتاج. أبني الأنظمة التي تؤتمت العمليات وتفتح أبواب النموّ."
    },
    about: {
      eyebrow: "من أنا",
      title: "مرحبا، أنا مروان باعلى.",
      body:
        "مطوّر فول-ستاك شغوف ببناء تطبيقات ويب حديثة. كنحب نحوّل الأفكار لمنتجات حقيقيّة بكود نظيف وأدوات حديثة — من منصّات الحجز ولوحات التحكّم إلى الأنظمة المُحَزَّمة بـ Docker ومشاريع الهندسة.",
      timelineTitle: "المسار",
      mindsetTitle: "كيف أشتغل",
      mindset: [
        "نبدأ من المشكل التجاري، ماشي من الفريموورك.",
        "نطلق صغير، نقيس، نُحسّن.",
        "نؤتمت كل ما لا يحتاج إنساناً.",
        "الأداء والإتاحة ليسا خياراً."
      ]
    },
    tech: {
      eyebrow: "التقنيات",
      title: "الأدوات التي أستخدمها",
      subtitle: "ستاك حديث ومُجرَّب لمنتجات قابلة للتوسّع."
    },
    testimonials: {
      eyebrow: "آراء العملاء",
      title: "ما يقوله العملاء",
      subtitle: "مؤسّسون ومشغّلون ساعدتهم على البناء والأتمتة والنموّ."
    },
    blog: {
      eyebrow: "المدونة",
      title: "مقالات حول الأتمتة والذكاء الاصطناعي ومنصات الويب",
      subtitle: "مقالات عملية لاتخاذ قرارات تقنية أفضل.",
      readMore: "قراءة المقال"
    },
    contact: {
      eyebrow: "تواصل",
      title: "خلّونا نبني شي حاجة كتكبر مع الوقت.",
      subtitle: "حدّثني على المشروع. كنرجع ليك في أقل من 24 ساعة بخطوة واضحة.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      project: "وصف المشروع",
      budget: "الميزانية التقديرية",
      send: "إرسال",
      bilingualSend: "Réserver un appel — احجز مكالمة",
      success: "شكراً. كنرجع ليك في أقل من 24 ساعة."
    },
    footer: {
      tagline: "صُمّم في المغرب. شُحن إلى العالم.",
      rights: "جميع الحقوق محفوظة."
    },
    caseStudy: {
      back: "الرجوع إلى المشاريع",
      problem: "المشكل التجاري",
      research: "البحث",
      uiux: "تصميم UI/UX",
      architecture: "الهندسة التقنية",
      features: "المميّزات الأساسية",
      challenges: "تحديات تمّ حلّها",
      result: "النتيجة النهائية",
      screenshots: "لقطات",
      mobile: "معاينة موبايل",
      tech: "التقنيات",
      cta: "ابدأ مشروعاً مشابهاً"
    }
  }
} as const;

export type Dict = typeof dict["en"];
