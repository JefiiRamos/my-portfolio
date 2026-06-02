"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-logo">
          <span className="site-logo__mark" aria-hidden />
          <span>
            <span className="site-logo__name">{t.profile.name}</span>
            <span className="site-logo__role">{t.profile.role}</span>
          </span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Principal">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="site-header__cta button-primary button-primary--compact"
          >
            {t.common.github}
          </a>
        </div>
      </div>

      <nav className="site-nav-mobile" aria-label="Mobile">
        {t.nav.map((item) => (
          <a key={item.href} href={item.href} className="site-nav-mobile__link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
