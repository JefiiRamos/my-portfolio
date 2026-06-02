export type Locale = "pt" | "en";

export type NavItem = {
  href: string;
  label: string;
};

export type Fact = {
  label: string;
  value: string;
  detail: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type StackItem = {
  name: string;
  level: string;
};

export type StackGroup = {
  category: string;
  items: StackItem[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  live?: string;
  repo: string;
  featured: boolean;
  year: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  type: string;
  typeKey: "professional" | "education";
  description: string;
  highlights: string[];
};

export type VisualProject = {
  name: string;
  eyebrow: string;
  thesis: string;
  shots: { src: string; alt: string; label: string }[];
  notes: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    viewDemo: string;
    repository: string;
    code: string;
    demo: string;
    github: string;
    advanced: string;
    intermediate: string;
    switchToEnglish: string;
    switchToPortuguese: string;
    languageLabel: string;
  };
  nav: NavItem[];
  profile: {
    name: string;
    fullName: string;
    role: string;
    location: string;
    availability: string;
    tagline: string;
    headline: string;
    bio: string;
    locationShort: string;
  };
  hero: {
    linkedin: string;
    exploreGithub: string;
    contactCta: string;
    avatarAlt: string;
    publicRepos: string;
    yearsPractice: string;
    realDelivery: string;
    highlights: string[];
  };
  sections: {
    about: {
      tag: string;
      title: string;
      description: string;
      whoAmI: string;
      intro1: string;
      intro2: string;
    };
    differentials: {
      tag: string;
      title: string;
      description: string;
      principlesLabel: string;
      qualityLabel: string;
      items: { title: string; description: string }[];
      principles: string[];
      qualitySignals: string[];
    };
    stack: {
      tag: string;
      title: string;
      description: string;
      groups: StackGroup[];
    };
    projects: {
      tag: string;
      title: string;
      description: string;
      items: Project[];
    };
    prints: {
      tag: string;
      title: string;
      description: string;
      visualDecisions: string;
      projects: VisualProject[];
    };
    caseStudy: {
      tag: string;
      title: string;
      description: string;
      projectLabel: string;
      problemLabel: string;
      solutionLabel: string;
      criteriaLabel: string;
      project: string;
      summary: string;
      problemTitle: string;
      problem: string;
      solutionTitle: string;
      solution: string;
      criteriaTitle: string;
      criteria: string;
    };
    experience: {
      tag: string;
      title: string;
      description: string;
      items: ExperienceItem[];
    };
    github: {
      tag: string;
      title: string;
      description: string;
      since: string;
      years: string;
      repositories: string;
      followers: string;
      following: string;
      openProfile: string;
      allRepos: string;
      profileRead: string;
      profilePoints: string[];
      goalsTitle: string;
      goals: string[];
      featuredRepos: string;
      avatarAlt: string;
    };
    contact: {
      tag: string;
      title: string;
      lookingFor: string;
      methods: { label: string; description: string }[];
      sendEmail: string;
      reviewGithub: string;
    };
    footer: {
      builtWith: string;
    };
  };
  facts: Fact[];
  pillars: Pillar[];
};
