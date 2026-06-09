"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <div className="site-header__inner">

        <div className="site-header__branding">
          <a href="#" className="site-logo">
            <div className="site-logo__indicator" />

            <div className="site-logo__content">
              <span className="site-logo__system">
                [ JR_SYSTEM ]
              </span>

              <span className="site-logo__name">
                {t.profile.name}
              </span>

              <span className="site-logo__role">
                {t.profile.role}
              </span>
            </div>
          </a>

          {/* <div className="site-header__status">
            <span className="site-header__status-dot" />
            AVAILABLE FOR WORK
          </div> */}
        </div>

        <nav className="site-nav" aria-label="Principal">
          {t.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav__link"
            >
              <span className="site-nav__index">
                0{index + 1}
              </span>

              <span className="site-nav__label">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="site-header__github"
          >
            GITHUB
          </a>
        </div>

      </div>
    </header>
  );
}

