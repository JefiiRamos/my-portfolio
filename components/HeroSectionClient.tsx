"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

type HeroSectionClientProps = {
  repoCount: number;
  githubYears: number;
  githubLogin: string;
};

export function HeroSectionClient({
  repoCount,
  githubYears,
  githubLogin,
}: HeroSectionClientProps) {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__intro">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden />
            <span>{t.profile.availability}</span>
            <span className="hero__badge-sep" aria-hidden>
              ·
            </span>
            <span>{t.profile.location}</span>
          </div>

          <p className="hero__eyebrow font-serif">{t.profile.tagline}</p>

          <h1 className="hero__title">{t.profile.headline}</h1>

          <p className="hero__bio">{t.profile.bio}</p>

          <div className="hero__actions">
            <a
              className="button-primary"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.linkedin}
            </a>
            <a
              className="button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.exploreGithub}
            </a>
            <a className="button-ghost" href="#contato">
              {t.hero.contactCta}
            </a>
          </div>
        </div>

        <aside className="hero__panel panel">
          <div className="hero__panel-top">
            <Image
              src="/jefao-icon.webp"
              alt={t.hero.avatarAlt}
              width={112}
              height={112}
              className="hero__avatar hero__avatar--icon"
              priority
            />
            <div>
              <p className="hero__panel-name">{t.profile.fullName}</p>
              <p className="hero__panel-role">{t.profile.role}</p>
              <p className="hero__panel-handle">@{githubLogin}</p>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">{repoCount}</span>
              <span className="hero__stat-label">{t.hero.publicRepos}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">{githubYears}+</span>
              <span className="hero__stat-label">{t.hero.yearsPractice}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">2</span>
              <span className="hero__stat-label">{t.hero.realDelivery}</span>
            </div>
          </div>

          <div className="hero__panel-divider" />

          <ul className="hero__highlights">
            {t.hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
