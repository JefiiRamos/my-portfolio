import Image from "next/image";
import { getGitHubUser, yearsOnGitHub } from "@/lib/github";
import { profile } from "@/lib/profile";

export async function HeroSection() {
  const githubUser = await getGitHubUser();
  const repoCount = githubUser?.public_repos ?? 25;
  const githubYears = githubUser ? yearsOnGitHub(githubUser.created_at) : 3;

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
              Ver LinkedIn
            </a>
            <a
              className="button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Explorar GitHub
            </a>
            <a className="button-ghost" href="#contato">
              Conversar sobre vaga
            </a>
          </div>
        </div>

        <aside className="hero__panel panel">
          <div className="hero__panel-top">
            <Image
              src="/jefao-icon.webp"
              alt={`Figura em estilo Apple de ${profile.name}`}
              width={112}
              height={112}
              className="hero__avatar hero__avatar--icon"
              priority
            />
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
              <span className="hero__stat-label">Repositórios públicos</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">{githubYears}+</span>
              <span className="hero__stat-label">Anos de prática contínua</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">2</span>
              <span className="hero__stat-label">Frentes com entrega real</span>
            </div>
          </div>

          <div className="hero__panel-divider" />

          <ul className="hero__highlights">
            <li>Solid Tech - interface, integração e base full stack</li>
            <li>Universidade Positivo - Engenharia de Software</li>
            <li>Projetos publicados, ritmo constante e construção visível</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
