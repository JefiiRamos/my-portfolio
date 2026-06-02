"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";

const SLIDE_MS = 480;

function FlagBrazil() {
  return (
    <svg viewBox="0 0 28 20" className="lang-switcher__svg" aria-hidden>
      <rect width="28" height="20" fill="#009B3A" />
      <path d="M14 3.2 23.8 10 14 16.8 4.2 10 14 3.2Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
      <path
        d="M11.2 10.6c1.4-1.1 3.2-1.5 5.1-1.2"
        stroke="#fff"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlagUSA() {
  return (
    <svg viewBox="0 0 28 20" className="lang-switcher__svg" aria-hidden>
      <rect width="28" height="20" fill="#B22234" />
      <path
        fill="#fff"
        d="M0 1.54h28V3.08H0V4.62h28V6.16H0v1.54h28v1.54H0v1.54h28v1.54H0v1.54h28V15.4H0v1.54h28V18.46H0V20"
      />
      <rect width="12" height="10.8" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="2.2" cy="2" r="0.45" />
        <circle cx="4.6" cy="2" r="0.45" />
        <circle cx="7" cy="2" r="0.45" />
        <circle cx="9.4" cy="2" r="0.45" />
        <circle cx="3.4" cy="3.8" r="0.45" />
        <circle cx="5.8" cy="3.8" r="0.45" />
        <circle cx="8.2" cy="3.8" r="0.45" />
        <circle cx="2.2" cy="5.6" r="0.45" />
        <circle cx="4.6" cy="5.6" r="0.45" />
        <circle cx="7" cy="5.6" r="0.45" />
        <circle cx="9.4" cy="5.6" r="0.45" />
        <circle cx="3.4" cy="7.4" r="0.45" />
        <circle cx="5.8" cy="7.4" r="0.45" />
        <circle cx="8.2" cy="7.4" r="0.45" />
        <circle cx="2.2" cy="9.2" r="0.45" />
        <circle cx="4.6" cy="9.2" r="0.45" />
        <circle cx="7" cy="9.2" r="0.45" />
        <circle cx="9.4" cy="9.2" r="0.45" />
      </g>
    </svg>
  );
}

const options: { locale: Locale; label: string; Flag: () => React.JSX.Element }[] =
  [
    { locale: "pt", label: "PT", Flag: FlagBrazil },
    { locale: "en", label: "EN", Flag: FlagUSA },
  ];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [isSliding, setIsSliding] = useState(false);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    };
  }, []);

  const selectLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
      setIsSliding(true);
      setLocale(next);
      slideTimerRef.current = setTimeout(() => {
        setIsSliding(false);
        slideTimerRef.current = null;
      }, SLIDE_MS);
    },
    [locale, setLocale],
  );

  return (
    <div
      className={`lang-switcher${isSliding ? " is-sliding" : ""}`}
      data-active={locale}
      role="group"
      aria-label={t.common.languageLabel}
    >
      <span className="lang-switcher__thumb" data-active={locale} aria-hidden />

      {options.map(({ locale: optionLocale, label, Flag }) => {
        const isActive = locale === optionLocale;

        return (
          <button
            key={optionLocale}
            type="button"
            className={`lang-switcher__option${isActive ? " is-active" : ""}`}
            onClick={() => selectLocale(optionLocale)}
            aria-pressed={isActive}
            aria-label={
              optionLocale === "pt"
                ? t.common.switchToPortuguese
                : t.common.switchToEnglish
            }
          >
            <span className="lang-switcher__flag-ring">
              <Flag />
            </span>
            <span className="lang-switcher__label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
