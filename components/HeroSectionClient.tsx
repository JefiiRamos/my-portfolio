"use client";

import { ProfileAvatar } from "@/components/ProfileAvatar";
import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

type HeroSectionClientProps = {
  repoCount: number;
  githubYears: number;
  githubLogin: string;
  avatarUrl: string | null;
};

export function HeroSectionClient({
  repoCount,
  githubYears,
  githubLogin,
  avatarUrl,
}: HeroSectionClientProps) {
  const { t } = useI18n();

  return (
    <section className="hero">

      <div className="hero__grid-bg" />

      <div className="hero__content">

        <div className="hero__left">

          <div className="hero__system">
            <span className="hero__system-line" />
            FRONTEND ENGINEER / CREATIVE DEVELOPER
          </div>

          <div className="hero__availability">
            <span className="hero__availability-dot" />
            AVAILABLE FOR WORK
          </div>

          <h1 className="hero__title">
            Building
            <br />
            digital
            <br />
            systems.
          </h1>

          <p className="hero__description">
            {t.profile.bio}
          </p>

          <div className="hero__actions">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--primary"
            >
              GITHUB
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--secondary"
            >
              LINKEDIN
            </a>
          </div>

        </div>

        <div className="hero__right">

          <div className="hero-terminal">

            <div className="hero-terminal__topbar">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-terminal__content">

              <div className="hero-terminal__line">
                <span className="hero-terminal__prompt">
                  $
                </span>

                <span>
                  whoami
                </span>
              </div>

              <div className="hero-terminal__result">
                {t.profile.fullName}
              </div>

              <div className="hero-terminal__line">
                <span className="hero-terminal__prompt">
                  $
                </span>

                <span>
                  current_stack
                </span>
              </div>

              <div className="hero-terminal__result">
                Next.js / React / TypeScript
              </div>

              <div className="hero-terminal__line">
                <span className="hero-terminal__prompt">
                  $
                </span>

                <span>
                  github_stats
                </span>
              </div>

              <div className="hero-terminal__result">
                {repoCount}+ repositories
              </div>

              <div className="hero-terminal__result">
                {githubYears}+ years coding
              </div>

            </div>

          </div>

          <div className="hero-card">

            <ProfileAvatar
              avatarUrl={avatarUrl}
              alt={t.hero.avatarAlt}
              size={92}
              className="hero-card__avatar"
              priority
            />

            <div className="hero-card__content">

              <span className="hero-card__label">
                SYSTEM USER
              </span>

              <h3 className="hero-card__name">
                @{githubLogin}
              </h3>

              <p className="hero-card__role">
                {t.profile.role}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
