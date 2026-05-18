export const GITHUB_USERNAME = "JefiiRamos";

export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
};

const GITHUB_HEADERS = {
  Accept: "application/vnd.github+json",
  "User-Agent": "my-portfolio",
};

const PRIORITY_REPOS = [
  "Triply",
  "jefentregas-cwb",
  "plann.er",
  "pass-in-web",
  "byLove",
  "laluhub",
  "crm-loop",
  "Momento-unico-web",
];

const REPO_DESCRIPTIONS: Record<string, string> = {
  Triply:
    "Plataforma web para busca de voos e hotéis, com foco em UI/UX e performance.",
  "jefentregas-cwb":
    "Aplicação de entregas com interface responsiva e deploy em produção.",
  "plann.er": "Planejador web com fluxo organizado e experiência objetiva.",
  "pass-in-web":
    "Projeto web com TypeScript voltado a fluxos de cadastro e gestão.",
  byLove: "Experiência web publicada com atenção a layout e presença visual.",
  laluhub: "Hub web com estrutura modular e base em TypeScript.",
  "crm-loop": "Painel CRM com rotinas de dados e interface funcional.",
  "Momento-unico-web":
    "Aplicação web para gestão de momentos e fluxos do produto.",
};

export function getRepoDescription(repo: GitHubRepo): string {
  if (repo.description?.trim()) return repo.description.trim();
  return (
    REPO_DESCRIPTIONS[repo.name] ??
    `Repositório público em ${repo.language ?? "desenvolvimento web"}.`
  );
}

export function pickFeaturedRepos(repos: GitHubRepo[], limit = 8): GitHubRepo[] {
  const filtered = repos.filter(
    (repo) => !repo.fork && repo.name !== GITHUB_USERNAME,
  );

  const prioritized = PRIORITY_REPOS.map((name) =>
    filtered.find((repo) => repo.name === name),
  ).filter((repo): repo is GitHubRepo => Boolean(repo));

  const remaining = filtered
    .filter((repo) => !PRIORITY_REPOS.includes(repo.name))
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return (
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      );
    });

  return [...prioritized, ...remaining]
    .filter(
      (repo, index, list) =>
        list.findIndex((item) => item.name === repo.name) === index,
    )
    .slice(0, limit);
}

export function formatGitHubDate(value: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function yearsOnGitHub(createdAt: string): number {
  const created = new Date(createdAt);
  const now = new Date();
  return Math.max(
    1,
    now.getFullYear() -
      created.getFullYear() -
      (now <
      new Date(now.getFullYear(), created.getMonth(), created.getDate())
        ? 1
        : 0),
  );
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        next: { revalidate: 3600 },
        headers: GITHUB_HEADERS,
      },
    );

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`,
      {
        next: { revalidate: 3600 },
        headers: GITHUB_HEADERS,
      },
    );

    if (!response.ok) return [];
    return response.json();
  } catch {
    return [];
  }
}
