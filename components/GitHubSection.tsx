import { GitHubSectionClient } from "@/components/GitHubSectionClient";
import {
  getGitHubRepos,
  getGitHubUser,
  pickFeaturedRepos,
  yearsOnGitHub,
} from "@/lib/github";

export async function GitHubSection() {
  const [user, repos] = await Promise.all([getGitHubUser(), getGitHubRepos()]);
  const featuredRepos = pickFeaturedRepos(repos, 8);
  const githubYears = user ? yearsOnGitHub(user.created_at) : 3;

  return (
    <GitHubSectionClient
      user={user}
      featuredRepos={featuredRepos}
      githubYears={githubYears}
    />
  );
}
