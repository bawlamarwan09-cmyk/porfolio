import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ux/CursorGlow";
import { ScrollProgress } from "@/components/ux/ScrollProgress";
import { Loader } from "@/components/ux/Loader";
import { LenisProvider } from "@/components/ux/LenisProvider";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — Full-Stack Developer Morocco`,
    template: `%s — ${site.shortName}`
  },
  description:
    "Développeur Full Stack freelance au Maroc spécialisé dans la création de plateformes web modernes, dashboards, systèmes de réservation et automatisation.",
  keywords: site.keywords,
  applicationName: site.shortName,
  authors: [{ name: site.shortName, url: site.url }],
  creator: site.shortName,
  alternates: {
    canonical: "/",
    languages: { en: "/", fr: "/", ar: "/" }
  },
  openGraph: {
    type: "website",
    title: `${site.shortName} — Full-Stack Developer Morocco`,
    description:
      "Développeur Full Stack freelance au Maroc — plateformes web, dashboards, systèmes de réservation, automatisation, IA.",
    url: site.url,
    siteName: site.shortName,
    locale: "en_US",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: site.shortName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — Full-Stack Developer`,
    description:
      "Plateformes web, dashboards, systèmes de réservation, automatisation, IA.",
    images: ["/og.svg"]
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.shortName,
    url: site.url,
    email: site.email,
    jobTitle: "Full-Stack Developer",
    address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
    sameAs: [site.socials.linkedin, site.socials.github, site.socials.instagram],
    knowsAbout: site.keywords
  };

  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-bg text-fg overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
        <I18nProvider>
          <LenisProvider>
            <Loader />
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
