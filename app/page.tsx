import { Portfolio } from "@/components/Portfolio";
import { getGitHubRepos, getGitHubUser, pickFeaturedRepos } from "@/lib/github";

export default async function Home() {
  const [user, repos] = await Promise.all([getGitHubUser(), getGitHubRepos()]);
  return <Portfolio user={user} repos={pickFeaturedRepos(repos, 4)} />;
}
