type AboutType = { title: string; description: string };
const about: AboutType[] = [
  {
    title: "bio",
    description:
      " Passionate dev crafting clean full-stack apps with modern tools.",
  },
  {
    title: "learning",
    description: " Focused on mastering core software engineering concepts.",
  },
  {
    title: "location",
    description: "Based in Kabul, Afghanistan.",
  },
];

export type GithubProfile = {
  handle: string;
  profileUrl: string;
  repoCount: string;
  yearsLabel: string;
  activePeriod: string;
  rankLabel: string;
  rankSuffix: string;
  status: string;
};

export const githubProfile: GithubProfile = {
  handle: "mostafa-meerzad",
  profileUrl: "https://github.com/mostafa-meerzad",
  repoCount: "160+",
  yearsLabel: "6 yrs",
  activePeriod: "2020–present",
  rankLabel: "Top 26",
  rankSuffix: "committer · Afghanistan",
  status: "ACTIVE",
};

// Pre-defined 17×3 contribution grid pattern (opacity values 0–1).
// Stored as a constant so the grid is deterministic on server + client (no hydration mismatch).
export const contributionPattern: number[] = [
  0.08, 0.22, 0.75, 0.08, 0.45, 0.22, 0.08, 0.75, 0.22, 0.45, 0.08, 0.22, 0.08, 0.45, 0.75, 0.22, 0.08,
  0.22, 0.45, 0.08, 0.75, 0.22, 0.45, 0.08, 0.22, 0.75, 0.08, 0.45, 0.22, 0.08, 0.45, 0.22, 0.75, 0.08,
  0.08, 0.75, 0.22, 0.08, 0.45, 0.22, 0.75, 0.08, 0.45, 0.22, 0.08, 0.75, 0.45, 0.22, 0.08, 0.45, 0.22,
];

export { about };
