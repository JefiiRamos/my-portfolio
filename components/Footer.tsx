"use client";

import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {year} {t.profile.fullName}. {t.sections.footer.builtWith}
        </p>
        <div className="site-footer__links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            {t.common.github}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
