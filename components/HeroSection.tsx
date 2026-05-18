import Image from "next/image";
import { getGitHubUser, yearsOnGitHub } from "@/lib/github";
import { profile } from "@/lib/profile";

export async function HeroSection() {
  const githubUser = await getGitHubUser();
  const repoCount = githubUser?.public_repos ?? 25;
  const githubYears = githubUser
    ? yearsOnGitHub(githubUser.created_at)
    : 3;

  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__intro">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden />
            <span>{profile.availability}</span>
            <span className="hero__badge-sep" aria-hidden>
              ·
            </span>
            <span>{profile.location}</span>
          </div>

          <p className="hero__eyebrow font-serif">{profile.tagline}</p>

          <h1 className="hero__title">{profile.headline}</h1>

          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__actions">
            <a
              className="button-primary"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub
            </a>
            <a className="button-ghost" href="#contato">
              Falar comigo
            </a>
          </div>
        </div>

        <aside className="hero__panel panel">
          <div className="hero__panel-top">
            {githubUser?.avatar_url ? (
              <Image
                src={githubUser.avatar_url}
                alt={`Foto de perfil de ${profile.name}`}
                width={72}
                height={72}
                className="hero__avatar"
                priority
              />
            ) : (
              <div className="hero__avatar hero__avatar--fallback">JR</div>
            )}
            <div>
              <p className="hero__panel-name">{profile.fullName}</p>
              <p className="hero__panel-role">{profile.role}</p>
              <p className="hero__panel-handle">
                @{githubUser?.login ?? "JefiiRamos"}
              </p>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">{repoCount}</span>
              <span className="hero__stat-label">repos no GitHub</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">{githubYears}+</span>
              <span className="hero__stat-label">anos codando</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">2</span>
              <span className="hero__stat-label">experiências dev</span>
            </div>
          </div>

          <div className="hero__panel-divider" />

          <ul className="hero__highlights">
            <li>Solid Tech — interfaces, APIs e Prisma</li>
            <li>Universidade Positivo — Eng. de Software</li>
            <li>Triply, entregas CWB e +20 projetos no GitHub</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
