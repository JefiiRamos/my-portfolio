import { HeroSectionClient } from "@/components/HeroSectionClient";
import { getGitHubUser, yearsOnGitHub } from "@/lib/github";

export async function HeroSection() {
  const githubUser = await getGitHubUser();
  const repoCount = githubUser?.public_repos ?? 25;
  const githubYears = githubUser ? yearsOnGitHub(githubUser.created_at) : 3;

  return (
    <HeroSectionClient
      repoCount={repoCount}
      githubYears={githubYears}
      githubLogin={githubUser?.login ?? "JefiiRamos"}
    />
  );
}
