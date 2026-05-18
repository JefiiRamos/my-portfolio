import Image from "next/image";
import { Section } from "@/components/Section";
import {
  formatGitHubDate,
  getGitHubRepos,
  getGitHubUser,
  getRepoDescription,
  GITHUB_USERNAME,
  pickFeaturedRepos,
  yearsOnGitHub,
} from "@/lib/github";
import { goals, profile } from "@/lib/profile";

function GitHubIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="icon"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export async function GitHubSection() {
  const [user, repos] = await Promise.all([getGitHubUser(), getGitHubRepos()]);
  const featuredRepos = pickFeaturedRepos(repos, 8);
  const profileUrl = user?.html_url ?? profile.links.github;
  const bio =
    user?.bio?.replace(/\r\n/g, " ").replace(/\s+/g, " ").trim() ??
    profile.tagline;

  return (
    <Section
      id="github"
      number="05"
      tag="GitHub"
      title="Código aberto e evolução visível na comunidade."
      description={`Perfil @${GITHUB_USERNAME} com repositórios atualizados automaticamente a cada hora.`}
    >
      <div className="github-layout">
        <article className="panel panel--accent github-profile">
          <div className="github-profile__header">
            {user?.avatar_url ? (
              <Image
                src={user.avatar_url}
                alt={`Avatar de ${profile.name}`}
                width={80}
                height={80}
                className="github-profile__avatar"
              />
            ) : (
              <div className="github-profile__avatar github-profile__avatar--fallback">
                JR
              </div>
            )}
            <div>
              <p className="github-profile__handle">
                @{user?.login ?? GITHUB_USERNAME}
              </p>
              <h3 className="github-profile__name">
                {user?.name?.trim() || profile.name}
              </h3>
              <p className="github-profile__since">
                No GitHub desde{" "}
                {user
                  ? new Date(user.created_at).getFullYear()
                  : "2023"}{" "}
                · {user ? yearsOnGitHub(user.created_at) : "3"}+ anos
              </p>
            </div>
          </div>

          <p className="github-profile__bio">{bio}</p>

          <div className="github-profile__stats">
            <div className="github-mini-stat">
              <span className="github-mini-stat__value">
                {user?.public_repos ?? repos.length}
              </span>
              <span className="github-mini-stat__label">Repositórios</span>
            </div>
            <div className="github-mini-stat">
              <span className="github-mini-stat__value">
                {user?.followers ?? 0}
              </span>
              <span className="github-mini-stat__label">Seguidores</span>
            </div>
            <div className="github-mini-stat">
              <span className="github-mini-stat__value">
                {user?.following ?? 0}
              </span>
              <span className="github-mini-stat__label">Seguindo</span>
            </div>
          </div>

          <div className="github-profile__actions">
            <a
              className="button-primary inline-flex items-center gap-2"
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              Perfil completo
            </a>
            <a
              className="button-secondary"
              href={`${profileUrl}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              Todos os repos
            </a>
          </div>
        </article>

        <article className="panel github-readme">
          <p className="github-readme__tag">Destaques do README</p>
          <ul className="github-readme__list">
            <li>Frontend Developer — React & Next.js</li>
            <li>Universidade Positivo — Engenharia de Software</li>
            <li>Base técnica em Desenvolvimento de Sistemas</li>
            <li>Experiência full stack: front, back-end e banco</li>
            <li>Conquistas: Pull Shark e YOLO no GitHub</li>
          </ul>
          <div className="github-readme__goals">
            <p className="github-readme__goals-title">Metas</p>
            <ul>
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      {featuredRepos.length > 0 ? (
        <div className="github-repos">
          <p className="github-repos__label">Repositórios em destaque</p>
          <div className="github-repos__grid">
            {featuredRepos.map((repo) => (
              <article key={repo.id} className="panel repo-card-v2">
                <div className="repo-card-v2__top">
                  <h3 className="repo-card-v2__name">{repo.name}</h3>
                  {repo.language ? (
                    <span className="chip chip--small">{repo.language}</span>
                  ) : null}
                </div>
                <p className="repo-card-v2__desc">
                  {getRepoDescription(repo)}
                </p>
                <div className="repo-card-v2__meta">
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                  <span>{formatGitHubDate(repo.pushed_at)}</span>
                </div>
                <div className="repo-card-v2__links">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow"
                  >
                    Código
                  </a>
                  {repo.homepage ? (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="link-arrow"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
