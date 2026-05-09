"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict, DEFAULT_LOCALE, isRTL, Locale, LOCALES } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof dict["en"];
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("locale")) as Locale | null;
    if (stored && LOCALES.includes(stored)) {
      setLocaleState(stored);
    } else if (typeof navigator !== "undefined") {
      const nav = navigator.language.slice(0, 2) as Locale;
      if (LOCALES.includes(nav)) setLocaleState(nav);
    }
  }, []);

  useEffect(() => {
    const dir = isRTL(locale) ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem("locale", l); } catch {}
  };

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dict[locale] as typeof dict["en"], dir: isRTL(locale) ? "rtl" : "ltr" }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
