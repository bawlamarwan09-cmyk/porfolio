import { Locale } from "@/i18n/dictionaries";

export type ProjectCategory =
  | "Platform"
  | "Dashboard"
  | "SaaS"
  | "Booking"
  | "DevOps"
  | "Education";

export type LocalizedString = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type Project = {
  slug: string;
  category: ProjectCategory;
  cover: string;
  accent: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  problem: LocalizedString;
  research: LocalizedString;
  uiux: LocalizedString;
  architecture: LocalizedString;
  features: LocalizedList;
  challenges: LocalizedList;
  result: LocalizedString;
  screenshots: string[];
  mobile: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "hotel-reserve-and-gestion",
    category: "Booking",
    cover:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
    accent: "from-indigo-500 to-violet-500",
    year: "2025",
    repoUrl: "https://github.com/bawlamarwan09-cmyk/hotel-reserve-and-gestion",
    title: {
      en: "Hotel Reservation & Management Platform",
      fr: "Plateforme de réservation et gestion hôtelière",
      ar: "منصّة حجز وإدارة فندقيّة"
    },
    tagline: {
      en: "Direct bookings + full operations in one platform.",
      fr: "Réservations directes + opérations complètes en une plateforme.",
      ar: "حجوزات مباشرة + عمليّات كاملة في منصّة واحدة."
    },
    description: {
      en: "End-to-end hotel system: customer booking engine, room inventory, payments and an admin dashboard for the operator.",
      fr: "Système hôtelier complet : moteur de réservation, inventaire des chambres, paiements et dashboard admin.",
      ar: "نظام فندقي شامل: محرّك حجوزات للعميل، إدارة الغرف، المدفوعات، ولوحة تحكّم للمشغّل."
    },
    problem: {
      en: "Independent hotels rely on OTAs and lose 18-25% of revenue in commissions, with no realtime view of inventory across rooms and channels.",
      fr: "Les hôtels indépendants dépendent des OTAs et perdent 18 à 25% de leurs revenus en commissions, sans visibilité temps réel sur l'inventaire.",
      ar: "تعتمد الفنادق المستقلّة على المنصّات وتفقد 18-25٪ كعمولات، بلا رؤية فوريّة للإتاحة."
    },
    research: {
      en: "Mapped the booking flow of 3 hotels, audited friction points and identified the must-have admin features for daily operations.",
      fr: "Cartographie du parcours de réservation de 3 hôtels, audit des points de friction et identification des fonctionnalités admin clés.",
      ar: "تحليل رحلة الحجز في 3 فنادق، اكتشاف نقاط الاحتكاك وتحديد الوظائف الإداريّة الأساسيّة."
    },
    uiux: {
      en: "Clean public booking flow + dense admin panel optimized for daily operator usage.",
      fr: "Flow public épuré + panneau admin dense optimisé pour l'usage quotidien.",
      ar: "تدفّق حجز عمومي بسيط + لوحة تحكّم كثيفة محسّنة للاستعمال اليومي."
    },
    architecture: {
      en: "PHP backend with MySQL, server-rendered booking flow, role-based admin area, modular reservation logic.",
      fr: "Backend PHP avec MySQL, flow de réservation rendu serveur, espace admin par rôle, logique réservation modulaire.",
      ar: "Backend PHP مع MySQL، تدفّق حجز من الخادم، فضاء إدارة بالأدوار، منطق حجز معياري."
    },
    features: {
      en: [
        "Realtime room availability",
        "Reservation creation & cancellation",
        "Customer and operator areas",
        "Invoices & payment tracking",
        "Admin dashboard with daily KPIs"
      ],
      fr: [
        "Disponibilité chambres en temps réel",
        "Création & annulation de réservation",
        "Espaces client et opérateur",
        "Factures & suivi paiements",
        "Dashboard admin avec KPIs"
      ],
      ar: [
        "إتاحة الغرف فوراً",
        "إنشاء وإلغاء الحجوزات",
        "فضاء للعميل وللمشغّل",
        "فواتير وتتبّع المدفوعات",
        "لوحة إدارة بمؤشرات يوميّة"
      ]
    },
    challenges: {
      en: [
        "Concurrency on the same room at peak times",
        "Clear separation between public and admin areas",
        "Reliable invoice & status tracking"
      ],
      fr: [
        "Concurrence sur la même chambre en pic",
        "Séparation nette entre espace public et admin",
        "Suivi fiable des factures et statuts"
      ],
      ar: [
        "تنافس على نفس الغرفة في الذروة",
        "فصل واضح بين الواجهة العموميّة والإدارة",
        "تتبّع موثوق للفواتير والحالات"
      ]
    },
    result: {
      en: "A complete reservation + management product the hotel owner can run end-to-end without any external tool.",
      fr: "Un produit complet de réservation + gestion que le gérant peut piloter sans outil externe.",
      ar: "منتج متكامل للحجز والإدارة يديره صاحب الفندق دون أي أداة خارجيّة."
    },
    screenshots: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
    ],
    mobile:
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=900&q=80",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"]
  },
  {
    slug: "it-equipment-dashboard",
    category: "Dashboard",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    accent: "from-cyan-500 to-indigo-500",
    year: "2026",
    liveUrl: "https://v0-it-equipment-dashboard-steel.vercel.app",
    repoUrl: "https://github.com/bawlamarwan09-cmyk/dashboard",
    title: {
      en: "IT Equipment Dashboard",
      fr: "Dashboard de gestion d'équipement IT",
      ar: "لوحة تحكّم لإدارة المعدات المعلوماتيّة"
    },
    tagline: {
      en: "All your IT assets in one cockpit.",
      fr: "Tout votre parc IT dans un seul cockpit.",
      ar: "كلّ معدّاتك المعلوماتيّة في كوكبيت واحد."
    },
    description: {
      en: "Modern admin dashboard to track laptops, devices, assignments, status and maintenance across an organization.",
      fr: "Dashboard moderne pour suivre laptops, appareils, affectations, statuts et maintenance d'une organisation.",
      ar: "لوحة تحكّم حديثة لتتبّع الأجهزة، التخصيص، الحالات والصيانة داخل المؤسّسة."
    },
    problem: {
      en: "IT teams track equipment in spreadsheets, lose visibility on assignments, and waste hours during audits.",
      fr: "Les équipes IT suivent l'équipement dans des tableurs, perdent la visibilité sur les affectations et passent des heures en audit.",
      ar: "تعتمد فِرق IT على الجداول، تفقد الرؤية حول التخصيص، وتُهدر ساعات في التدقيق."
    },
    research: {
      en: "Studied real IT inventory workflows in SMBs to define the data model and the most-used screens.",
      fr: "Étude de workflows d'inventaire IT en PME pour définir le modèle de données et les écrans clés.",
      ar: "دراسة سير عمل جرد IT في الشركات الصغيرة لتعريف نموذج البيانات والشاشات الأهم."
    },
    uiux: {
      en: "Bento dashboard layout, dense filterable tables, status badges, quick-edit modals.",
      fr: "Layout bento, tables filtrables, badges de statut, modales d'édition rapide.",
      ar: "تخطيط بنتو، جداول قابلة للفلترة، شارات حالة، نوافذ تعديل سريعة."
    },
    architecture: {
      en: "Next.js + TypeScript app, component-driven UI, deployed on Vercel with edge-friendly data fetching.",
      fr: "Application Next.js + TypeScript, UI par composants, déployée sur Vercel.",
      ar: "تطبيق Next.js + TypeScript، واجهة بمكوّنات، منشور على Vercel."
    },
    features: {
      en: [
        "Equipment list with rich filtering",
        "Per-device assignment & status tracking",
        "Maintenance & history",
        "KPIs and category breakdown",
        "Responsive admin layout"
      ],
      fr: [
        "Liste d'équipement avec filtres avancés",
        "Affectation et suivi de statut par appareil",
        "Historique & maintenance",
        "KPIs et répartition par catégorie",
        "Layout admin responsive"
      ],
      ar: [
        "قائمة المعدات بفلاتر متقدّمة",
        "تخصيص وتتبّع الحالة لكل جهاز",
        "تاريخ وصيانة",
        "مؤشّرات وتوزيع بالفئات",
        "تخطيط إداري متجاوب"
      ]
    },
    challenges: {
      en: ["Designing a flexible inventory schema", "Keeping the UI fast on large lists"],
      fr: ["Schéma d'inventaire flexible", "UI performante sur grandes listes"],
      ar: ["سكيمة جرد مرنة", "أداء عالٍ على قوائم كبيرة"]
    },
    result: {
      en: "A clean dashboard product, live on Vercel, that replaces 3-4 spreadsheets with a single source of truth.",
      fr: "Un dashboard propre, en ligne sur Vercel, qui remplace 3-4 tableurs par une source de vérité unique.",
      ar: "لوحة تحكّم نظيفة منشورة على Vercel، تعوّض 3-4 ملفات Excel بمصدر بيانات موحّد."
    },
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
    ],
    mobile: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"]
  },
  {
    slug: "rachid-gym-platform",
    category: "SaaS",
    cover:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
    accent: "from-rose-500 to-orange-500",
    year: "2025",
    liveUrl: "https://gymproject-5eia.vercel.app",
    repoUrl: "https://github.com/bawlamarwan09-cmyk/rachidgym",
    title: {
      en: "Rachid Gym — Gym Management Platform",
      fr: "Rachid Gym — Plateforme de gestion de salle de sport",
      ar: "Rachid Gym — منصّة إدارة قاعة رياضيّة"
    },
    tagline: {
      en: "Members, subscriptions and check-ins, automated.",
      fr: "Membres, abonnements et accès, automatisés.",
      ar: "الأعضاء، الاشتراكات والدخول — مؤتمتة."
    },
    description: {
      en: "A full gym management web app: member onboarding, subscriptions, classes and a public-facing landing.",
      fr: "Application complète de gestion de salle de sport : adhésion, abonnements, cours et landing publique.",
      ar: "تطبيق كامل لإدارة قاعة الرياضة: التسجيل، الاشتراكات، الحصص وصفحة هبوط عموميّة."
    },
    problem: {
      en: "Gyms still manage members in notebooks or Excel, missing renewals and losing revenue.",
      fr: "Les salles de sport gèrent encore en cahier ou Excel et ratent les renouvellements.",
      ar: "القاعات الرياضيّة تُسيَّر بالدفاتر أو Excel وتُضيّع تجديد الاشتراكات."
    },
    research: {
      en: "Spoke with a real gym owner to model subscription types, classes and the daily reception flow.",
      fr: "Échanges avec un gérant de salle pour modéliser abonnements, cours et flux de réception.",
      ar: "حوارات مع مسيّر قاعة لنمذجة الاشتراكات، الحصص وتدفّق الاستقبال."
    },
    uiux: {
      en: "Bold landing for prospects + clean back-office for the staff, both responsive.",
      fr: "Landing forte pour prospects + back-office propre pour le staff, responsive.",
      ar: "صفحة هبوط قويّة للزبناء + لوحة خلفيّة نظيفة للطاقم، متجاوبة."
    },
    architecture: {
      en: "JavaScript fullstack app deployed on Vercel, simple data layer, modular pages for the gym public site and admin.",
      fr: "App JS fullstack déployée sur Vercel, couche de données simple, pages modulaires public/admin.",
      ar: "تطبيق JS فولستاك على Vercel، طبقة بيانات بسيطة، صفحات معياريّة عمومي/إدارة."
    },
    features: {
      en: [
        "Public gym landing page",
        "Members & subscriptions",
        "Class schedule",
        "Admin area",
        "Mobile-first responsive UI"
      ],
      fr: [
        "Landing publique",
        "Membres & abonnements",
        "Planning de cours",
        "Espace admin",
        "UI mobile-first"
      ],
      ar: [
        "صفحة هبوط عموميّة",
        "أعضاء واشتراكات",
        "جدول الحصص",
        "فضاء إدارة",
        "واجهة موبايل أوّلاً"
      ]
    },
    challenges: {
      en: ["Reusable layout for public + admin", "Fast deploy cycles on Vercel"],
      fr: ["Layout réutilisable public + admin", "Cycles de déploiement rapides sur Vercel"],
      ar: ["تخطيط قابل لإعادة الاستعمال", "دورات نشر سريعة على Vercel"]
    },
    result: {
      en: "A live, deployable product the gym can use today instead of paper subscriptions.",
      fr: "Un produit live et déployable que la salle peut utiliser dès aujourd'hui.",
      ar: "منتج جاهز ومنشور تستعمله القاعة عوض الورق."
    },
    screenshots: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80"
    ],
    mobile: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=80",
    tech: ["JavaScript", "Node.js", "HTML/CSS", "Vercel"]
  },
  {
    slug: "gym-docker",
    category: "DevOps",
    cover:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1600&q=80",
    accent: "from-emerald-500 to-cyan-500",
    year: "2025",
    liveUrl: "https://gym-docker-olive.vercel.app",
    repoUrl: "https://github.com/bawlamarwan09-cmyk/gym_docker",
    title: {
      en: "Gym Platform — Containerized with Docker",
      fr: "Plateforme Gym — Conteneurisée avec Docker",
      ar: "منصّة Gym — مُحَزَّمة بـ Docker"
    },
    tagline: {
      en: "Same product, production-ready with Docker.",
      fr: "Même produit, prêt à la production avec Docker.",
      ar: "نفس المنتج، جاهز للإنتاج مع Docker."
    },
    description: {
      en: "A Dockerized version of the gym platform: reproducible environment, isolated services, one-command deploy.",
      fr: "Version Dockerisée de la plateforme gym : environnement reproductible, services isolés, déploiement en une commande.",
      ar: "نسخة Docker من منصّة الرياضة: بيئة قابلة للتكرار، خدمات معزولة، نشر بأمر واحد."
    },
    problem: {
      en: "\"It works on my machine\" stops scaling. Each environment had its own bugs.",
      fr: "« Ça marche chez moi » ne scale pas. Chaque environnement avait ses bugs.",
      ar: "«كيخدم عندي» ما كيكبرش. كل بيئة عندها باگاتها."
    },
    research: {
      en: "Studied container best practices to split frontend, backend and database into clean services.",
      fr: "Étude des bonnes pratiques pour séparer front, back et base de données en services propres.",
      ar: "دراسة الممارسات الفضلى لفصل الواجهة، الخادم وقاعدة البيانات في خدمات نظيفة."
    },
    uiux: { en: "Same UI as the gym app, but production-grade behind the scenes.", fr: "Même UI que l'app gym, mais production-grade en coulisses.", ar: "نفس الواجهة، لكن المُحرّك جاهز للإنتاج." },
    architecture: {
      en: "Multi-container setup with Docker Compose, isolated app + db services, env-driven configuration.",
      fr: "Setup multi-conteneurs Docker Compose, services app + db isolés, configuration par env.",
      ar: "إعداد متعدّد الحاويات بـ Docker Compose، فصل التطبيق وقاعدة البيانات، إعداد عبر متغيّرات."
    },
    features: {
      en: [
        "One-command local setup",
        "Service isolation (app / db)",
        "Environment-based config",
        "Reproducible builds",
        "Vercel deployment"
      ],
      fr: [
        "Setup local en une commande",
        "Isolation des services (app / db)",
        "Config par environnement",
        "Builds reproductibles",
        "Déploiement Vercel"
      ],
      ar: [
        "تشغيل محلي بأمر واحد",
        "فصل الخدمات (app / db)",
        "إعداد حسب البيئة",
        "بناءات قابلة للتكرار",
        "نشر على Vercel"
      ]
    },
    challenges: {
      en: ["Networking between containers", "Persisting data safely"],
      fr: ["Réseautique entre conteneurs", "Persistance des données"],
      ar: ["الشبكة بين الحاويات", "حفظ البيانات بأمان"]
    },
    result: {
      en: "Deploy time dropped from hours to minutes, every dev gets the same environment.",
      fr: "Déploiement passé de plusieurs heures à quelques minutes, environnement identique pour chaque dev.",
      ar: "زمن النشر انخفض من ساعات إلى دقائق، نفس البيئة لكل المطوّرين."
    },
    screenshots: [
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
    ],
    mobile: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=80",
    tech: ["Docker", "Docker Compose", "JavaScript", "Node.js", "Vercel"]
  },
  {
    slug: "barbershop-booking",
    category: "Booking",
    cover:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80",
    accent: "from-amber-500 to-pink-500",
    year: "2025",
    repoUrl: "https://github.com/bawlamarwan09-cmyk/barbershop",
    title: {
      en: "Barbershop Booking System",
      fr: "Système de réservation de barbershop",
      ar: "نظام حجز لصالون الحلاقة"
    },
    tagline: {
      en: "Online appointments, no more phone calls.",
      fr: "Rendez-vous en ligne, fini les appels.",
      ar: "مواعيد عبر الإنترنت، بلا مكالمات."
    },
    description: {
      en: "Booking platform for barbers and clients: online appointments, services menu, and barber availability.",
      fr: "Plateforme de réservation pour barbers et clients : rendez-vous en ligne, menu services, dispo barber.",
      ar: "منصّة حجز للحلّاقين والزبناء: مواعيد، قائمة خدمات، توفّر الحلّاق."
    },
    problem: {
      en: "Barbershops manage bookings by phone, miss clients during peak hours and lose 15-30% of potential revenue.",
      fr: "Les salons gèrent par téléphone, ratent des clients en heure de pointe et perdent 15-30% de revenu potentiel.",
      ar: "الصالونات كتسير الحجوزات بالتيليفون، كتفوّت زبناء فالذروة وكتخسر 15-30٪ من الدخل."
    },
    research: { en: "Modeled the real flow of a small barbershop: services, durations, multiple barbers.", fr: "Modélisation du flow réel d'un salon : services, durées, plusieurs barbers.", ar: "نمذجة سير عمل صالون حقيقي: خدمات، مدد، عدّة حلاقين." },
    uiux: { en: "3-step booking: choose service → choose time → confirm.", fr: "Réservation en 3 étapes : service → créneau → confirmation.", ar: "حجز في 3 خطوات: خدمة → وقت → تأكيد." },
    architecture: { en: "PHP + MySQL backend, server-rendered booking, admin area for the barber.", fr: "Backend PHP + MySQL, réservation server-rendered, espace admin pour le barber.", ar: "Backend PHP + MySQL، حجز من الخادم، فضاء إدارة للحلّاق." },
    features: {
      en: ["Service catalog", "Time-slot booking", "Barber availability", "Admin agenda"],
      fr: ["Catalogue de services", "Réservation par créneau", "Disponibilité barber", "Agenda admin"],
      ar: ["قائمة الخدمات", "حجز بالأوقات", "توفّر الحلّاق", "أجندة إدارة"]
    },
    challenges: { en: ["Avoiding double-booking", "Mobile-first UX for fast bookings"], fr: ["Éviter le double-booking", "UX mobile-first"], ar: ["تجنّب الحجز المزدوج", "واجهة موبايل أوّلاً"] },
    result: { en: "More bookings captured, less time lost on the phone.", fr: "Plus de réservations, moins de temps au téléphone.", ar: "حجوزات أكثر ووقت أقل فالتيليفون." },
    screenshots: ["https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80"],
    mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"]
  },
  {
    slug: "pfe-project",
    category: "Education",
    cover:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
    accent: "from-purple-500 to-fuchsia-500",
    year: "2026",
    repoUrl: "https://github.com/bawlamarwan09-cmyk/pfe_project",
    title: {
      en: "Final Year Engineering Project (PFE)",
      fr: "Projet de Fin d'Études (PFE)",
      ar: "مشروع نهاية الدراسة (PFE)"
    },
    tagline: {
      en: "From research to a deployable product.",
      fr: "De la recherche à un produit déployable.",
      ar: "من البحث إلى منتج قابل للنشر."
    },
    description: {
      en: "End-of-studies engineering project combining research, system design and a working modern web app.",
      fr: "Projet de fin d'études combinant recherche, conception système et application web moderne.",
      ar: "مشروع نهاية الدراسة يجمع بين البحث، تصميم الأنظمة وتطبيق ويب حديث."
    },
    problem: {
      en: "Solve a real-world problem with a complete technical solution: research, architecture, implementation, deployment.",
      fr: "Résoudre un problème réel avec une solution technique complète : recherche, architecture, implémentation, déploiement.",
      ar: "حلّ مشكل حقيقي بحل تقني كامل: بحث، هندسة، تنفيذ، نشر."
    },
    research: {
      en: "Bibliographic study, requirements analysis, comparison of existing solutions, technology choices.",
      fr: "Étude bibliographique, analyse des besoins, benchmark des solutions, choix techniques.",
      ar: "دراسة مرجعيّة، تحليل الحاجيات، مقارنة الحلول، اختيارات تقنيّة."
    },
    uiux: {
      en: "Modern UI inspired by current SaaS standards, accessible and responsive.",
      fr: "UI moderne inspirée des standards SaaS actuels, accessible et responsive.",
      ar: "واجهة حديثة على معايير SaaS الحاليّة، متاحة ومتجاوبة."
    },
    architecture: {
      en: "TypeScript app with a clear separation between domain, data and UI layers.",
      fr: "Application TypeScript avec séparation claire entre couches domaine, données et UI.",
      ar: "تطبيق TypeScript بفصل واضح بين الدومين، البيانات والواجهة."
    },
    features: {
      en: ["Complete documentation", "TypeScript codebase", "Modular architecture", "Deployment-ready setup"],
      fr: ["Documentation complète", "Codebase TypeScript", "Architecture modulaire", "Prêt au déploiement"],
      ar: ["توثيق كامل", "كود TypeScript", "هندسة معياريّة", "جاهز للنشر"]
    },
    challenges: {
      en: ["Balancing academic depth and product mindset", "Designing for scalability from day one"],
      fr: ["Équilibre entre rigueur académique et logique produit", "Architecture scalable dès J1"],
      ar: ["توازن بين العمق الأكاديمي والروح المنتجاتيّة", "هندسة قابلة للتوسّع من اليوم الأوّل"]
    },
    result: {
      en: "An engineering project that ships a real working product, not just a report.",
      fr: "Un projet d'ingénieur qui livre un vrai produit, pas juste un rapport.",
      ar: "مشروع هندسي يخرج بمنتج حقيقي، ماشي غير تقرير."
    },
    screenshots: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1600&q=80"
    ],
    mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"]
  }
];

export const projectCategories: ProjectCategory[] = [
  "Booking",
  "Dashboard",
  "SaaS",
  "DevOps",
  "Education"
];
