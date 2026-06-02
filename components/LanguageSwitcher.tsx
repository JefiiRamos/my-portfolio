"use client";

import { useI18n } from "@/lib/i18n/context";

function FlagBrazil() {
  return (
    <svg viewBox="0 0 28 20" className="lang-switcher__svg" aria-hidden>
      <rect width="28" height="20" rx="3" fill="#009B3A" />
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
      <rect width="28" height="20" rx="3" fill="#B22234" />
      <path
        fill="#fff"
        d="M0 1.54h28V3.08H0V4.62h28V6.16H0v1.54h28v1.54H0v1.54h28v1.54H0v1.54h28V15.4H0v1.54h28V18.46H0V20"
      />
      <rect width="12" height="10.8" rx="2" fill="#3C3B6E" />
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

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const isPortuguese = locale === "pt";

  return (
    <button
      type="button"
      className="lang-switcher"
      onClick={() => setLocale(isPortuguese ? "en" : "pt")}
      aria-label={
        isPortuguese ? t.common.switchToEnglish : t.common.switchToPortuguese
      }
      title={isPortuguese ? t.common.switchToEnglish : t.common.switchToPortuguese}
    >
      <span className="lang-switcher__flag lang-switcher__flag--active">
        {isPortuguese ? <FlagBrazil /> : <FlagUSA />}
      </span>
      <span className="lang-switcher__flag lang-switcher__flag--hover">
        {isPortuguese ? <FlagUSA /> : <FlagBrazil />}
      </span>
    </button>
  );
}
