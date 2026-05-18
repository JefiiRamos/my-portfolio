export const profile = {
  name: "Jeferson Ramos",
  fullName: "Jeferson de Ramos Filho",
  role: "Front-end Developer",
  location: "Curitiba, PR — Brasil",
  availability: "Aberto a front-end, estágio ou colaboração",
  tagline: "Interfaces modernas, funcionais e bem estruturadas.",
  headline:
    "Desenvolvo experiências web com React e Next.js, unindo clareza visual, performance e código organizado.",
  bio: "Estudante de Engenharia de Software na Universidade Positivo, com base sólida em Desenvolvimento de Sistemas no ensino técnico. Atuo com foco em front-end, mas tenho vivência full stack — do layout à API e ao banco de dados.",
  email: "jefiiramoos@gmail.com",
  phone: "+5541996169164",
  phoneDisplay: "+55 41 99616-9164",
  links: {
    github: "https://github.com/JefiiRamos",
    linkedin: "https://www.linkedin.com/in/jeferson-ramos-19a3b6300/",
    instagram: "https://www.instagram.com/_jefiibss",
  },
} as const;

export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#github", label: "GitHub" },
  { href: "#contato", label: "Contato" },
] as const;

export const facts = [
  {
    label: "Formação",
    value: "Eng. de Software",
    detail: "Universidade Positivo — em andamento",
  },
  {
    label: "Base técnica",
    value: "Técnico em DS",
    detail: "Colégio Cívico Militar Guido Arzua",
  },
  {
    label: "Foco atual",
    value: "Front-end",
    detail: "React, Next.js, UI/UX e performance",
  },
  {
    label: "Experiência",
    value: "Full stack",
    detail: "Front-end, APIs com Node.js, Prisma e MySQL",
  },
] as const;

export const pillars = [
  {
    title: "Interface com intenção",
    description:
      "Hierarquia clara, contraste sutil e composição entre seções para guiar a leitura sem poluir a tela.",
  },
  {
    title: "Código que escala",
    description:
      "TypeScript, componentização em React e estrutura em Next.js para manter projetos organizados conforme crescem.",
  },
  {
    title: "Do design ao deploy",
    description:
      "Figma para direção visual, GitHub para versionamento e entregas publicadas em produção com Vercel.",
  },
] as const;

export const differentiators = [
  {
    title: "Estética com intenção",
    description:
      "Minimalismo para mim não é vazio. Eu uso contraste, ritmo, espaço e objetos visuais para criar presença sem perder clareza.",
  },
  {
    title: "Código orientado à experiência",
    description:
      "Penso no front-end como produto: hierarquia, fluidez, semântica, responsividade e performance precisam funcionar juntos.",
  },
  {
    title: "Design e implementação no mesmo fluxo",
    description:
      "Consigo sair da direção visual para o código mantendo consistência, refinamento de interface e estrutura mais limpa.",
  },
] as const;

export const interfacePrinciples = [
  "Hierarquia clara antes de efeito visual.",
  "Animação para conduzir percepção, não para distrair.",
  "Seções com profundidade, contraste e respiro.",
  "Interface marcante sem perder usabilidade.",
] as const;

export const frontEndQualitySignals = [
  "Responsividade pensada desde a composição inicial.",
  "Semântica e estrutura para leitura mais clara do layout.",
  "Componentização para evolução do projeto.",
  "Atenção a performance, peso visual e ritmo de navegação.",
] as const;

export const stackGroups = [
  {
    category: "Front-end",
    items: [
      { name: "React", level: "Avançado" },
      { name: "Next.js", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "JavaScript", level: "Avançado" },
      { name: "Tailwind CSS", level: "Avançado" },
      { name: "HTML & CSS", level: "Avançado" },
    ],
  },
  {
    category: "Back-end & dados",
    items: [
      { name: "Node.js", level: "Intermediário" },
      { name: "Prisma ORM", level: "Intermediário" },
      { name: "MySQL", level: "Intermediário" },
      { name: "APIs REST", level: "Intermediário" },
    ],
  },
  {
    category: "Ferramentas & processo",
    items: [
      { name: "GitHub", level: "Avançado" },
      { name: "Figma", level: "Intermediário" },
      { name: "Vercel", level: "Intermediário" },
      { name: "Web design", level: "Intermediário" },
    ],
  },
] as const;

export const projects = [
  {
    title: "Triply",
    category: "Plataforma de viagens",
    description:
      "Aplicação web para busca de voos e hotéis. Foco em UI/UX, performance e navegação fluida — um dos principais projetos do meu GitHub.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    live: "https://triplyfly.vercel.app/",
    repo: "https://github.com/JefiiRamos/Triply",
    featured: true,
    year: "2025",
  },
  {
    title: "jefentregas-cwb",
    category: "Produto web — entregas",
    description:
      "Sistema publicado em produção para Curitiba, com TypeScript, interface responsiva e deploy ativo na Vercel.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    live: "https://jefentregas-cwb.vercel.app",
    repo: "https://github.com/JefiiRamos/jefentregas-cwb",
    featured: false,
    year: "2026",
  },
  {
    title: "byLove",
    category: "Experiência web",
    description:
      "Projeto com deploy publicado, atenção a ritmo visual, tipografia e composição entre blocos de conteúdo.",
    tech: ["CSS", "Layout", "Front-end"],
    live: "https://by-love.vercel.app",
    repo: "https://github.com/JefiiRamos/byLove",
    featured: false,
    year: "2025",
  },
  {
    title: "plann.er",
    category: "Planejamento",
    description:
      "Aplicação em TypeScript com fluxos organizados e interface objetiva para uso recorrente.",
    tech: ["TypeScript", "React"],
    repo: "https://github.com/JefiiRamos/plann.er",
    featured: false,
    year: "2025",
  },
  {
    title: "pass-in-web",
    category: "Gestão web",
    description:
      "Projeto TypeScript com estrutura para cadastros, listagens e rotinas de uso em ambiente web.",
    tech: ["TypeScript", "React"],
    repo: "https://github.com/JefiiRamos/pass-in-web",
    featured: false,
    year: "2024",
  },
  {
    title: "crm-loop",
    category: "Painel / CRM",
    description:
      "Interface funcional para rotinas de dados e acompanhamento, com base em TypeScript.",
    tech: ["TypeScript", "Painel", "Dados"],
    repo: "https://github.com/JefiiRamos/crm-loop",
    featured: false,
    year: "2025",
  },
] as const;

export const featuredCaseStudy = {
  project: "Triply",
  summary:
    "Aplicação web para busca de voos e hotéis com foco em interface moderna, escaneabilidade e sensação visual mais premium.",
  problemTitle: "Como evitar a interface carregada comum em produtos de viagem?",
  problem:
    "Plataformas desse tipo costumam concentrar muita informação, o que torna a navegação cansativa e reduz a percepção de qualidade do produto.",
  solutionTitle: "Organizar fluxo e leitura com estrutura visual forte.",
  solution:
    "Usei React, Next.js e Tailwind CSS para construir uma interface mais limpa, com melhor hierarquia, recortes claros de conteúdo e navegação mais fluida.",
  criteriaTitle: "O objetivo era unir presença visual com usabilidade.",
  criteria:
    "O projeto resume como penso front-end: composição, clareza, consistência e decisões que fazem a página parecer menos genérica e mais profissional.",
  live: "https://triplyfly.vercel.app/",
  repo: "https://github.com/JefiiRamos/Triply",
} as const;

export const experience = [
  {
    period: "Out 2025 — Fev 2026",
    title: "Desenvolvedor Web",
    company: "Solid Tech",
    type: "Profissional",
    description:
      "Desenvolvimento de aplicações web com JavaScript e bibliotecas modernas. Interfaces responsivas, integração com MySQL via Prisma ORM, estruturação de APIs e projetos de presença digital e marketing.",
    highlights: [
      "Interfaces focadas no usuário",
      "APIs e persistência com Prisma",
      "Entregas para marketing digital",
    ],
  },
  {
    period: "Jun 2024 — Jun 2025",
    title: "Assistente Administrativo",
    company: "Copaves",
    type: "Profissional",
    description:
      "Atendimento ao cliente, rotinas administrativas, organização documental e apoio a processos financeiros — experiência que reforçou comunicação e organização.",
    highlights: [
      "Atendimento e suporte",
      "Organização documental",
      "Rotinas operacionais",
    ],
  },
  {
    period: "2025 — atual",
    title: "Engenharia de Software",
    company: "Universidade Positivo",
    type: "Formação",
    description:
      "Graduação em andamento com aprofundamento em desenvolvimento web, fundamentos de software, arquitetura e evolução contínua da base técnica.",
    highlights: [
      "Desenvolvimento web",
      "Fundamentos de software",
      "Projetos acadêmicos",
    ],
  },
  {
    period: "2021 — 2024",
    title: "Técnico em Desenvolvimento de Sistemas",
    company: "Colégio Cívico Militar Guido Arzua",
    type: "Formação",
    description:
      "Formação técnica com lógica de programação, back-end em JavaScript, computação gráfica, front-end, web design e banco de dados.",
    highlights: [
      "Lógica e algoritmos",
      "Front-end e web design",
      "Banco de dados",
    ],
  },
] as const;

export const goals = [
  "Aprofundar arquitetura front-end e performance",
  "Evoluir no ecossistema React e Next.js",
  "Contribuir em projetos reais com escala e impacto",
] as const;
