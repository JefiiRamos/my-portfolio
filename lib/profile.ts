export const profile = {
  name: "Jeferson Ramos",
  fullName: "Jeferson de Ramos Filho",
  role: "Front-end Developer",
  location: "Curitiba, PR - Brasil",
  availability: "Disponivel para vaga front-end, estagio ou colaboracao",
  tagline: "Interface forte, codigo limpo e leitura visual com intencao.",
  headline:
    "Construo interfaces que elevam a percepcao do produto, com React e Next.js aplicados em experiencias claras, rapidas e visualmente marcantes.",
  bio: "Sou estudante de Engenharia de Software e desenvolvedor front-end com base tecnica em Desenvolvimento de Sistemas. Meu diferencial esta em unir direcao visual, semantica, responsividade e organizacao de codigo para entregar interfaces que parecem mais maduras do que o nivel esperado para um perfil em formacao.",
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
  { href: "#prints", label: "Prints" },
  { href: "#trajetoria", label: "Trajetoria" },
  { href: "#github", label: "GitHub" },
  { href: "#contato", label: "Contato" },
] as const;

export const facts = [
  {
    label: "Formacao",
    value: "Eng. de Software",
    detail: "Universidade Positivo - em andamento",
  },
  {
    label: "Base tecnica",
    value: "Tecnico em DS",
    detail: "Desenvolvimento de Sistemas com foco pratico",
  },
  {
    label: "Foco atual",
    value: "Front-end",
    detail: "React, Next.js, interface, UX e performance",
  },
  {
    label: "Entrega",
    value: "Full stack",
    detail: "Front-end forte com base em APIs, Prisma e MySQL",
  },
] as const;

export const pillars = [
  {
    title: "Interface com intencao",
    description:
      "Eu penso cada secao como direcao de leitura: hierarquia, contraste, respiro e ritmo visual para guiar o olhar sem depender de excesso.",
  },
  {
    title: "Codigo que sustenta produto",
    description:
      "TypeScript, componentizacao em React e estrutura em Next.js para manter o front-end mais previsivel, reutilizavel e pronto para crescer.",
  },
  {
    title: "Do design ao deploy",
    description:
      "Consigo atravessar o processo completo: referencia visual, construcao da interface, versionamento, publicacao e refinamento apos entrega.",
  },
] as const;

export const differentiators = [
  {
    title: "Estetica que comunica nivel",
    description:
      "Eu uso minimalismo para criar presenca, nao ausencia. O objetivo e fazer a interface parecer mais valiosa, mais clara e mais profissional.",
  },
  {
    title: "Front-end pensado como produto",
    description:
      "Nao separo visual de engenharia. Hierarquia, fluidez, semantica, responsividade e performance fazem parte da mesma decisao.",
  },
  {
    title: "Criterio visual e execucao no mesmo fluxo",
    description:
      "Consigo transformar direcao visual em interface funcional sem perder consistencia, refinamento e legibilidade no codigo.",
  },
] as const;

export const interfacePrinciples = [
  "Hierarquia clara antes de efeito visual.",
  "Animacao para conduzir percepcao, nao para distrair.",
  "Secoes com profundidade, contraste e respiro real.",
  "Interface memoravel sem sacrificar usabilidade.",
] as const;

export const frontEndQualitySignals = [
  "Responsividade considerada desde a composicao inicial.",
  "Semantica e estrutura para interfaces mais claras.",
  "Componentizacao para evolucao tecnica do projeto.",
  "Atencao a performance, peso visual e ritmo de navegacao.",
] as const;

export const stackGroups = [
  {
    category: "Front-end",
    items: [
      { name: "React", level: "Avancado" },
      { name: "Next.js", level: "Avancado" },
      { name: "TypeScript", level: "Avancado" },
      { name: "JavaScript", level: "Avancado" },
      { name: "Tailwind CSS", level: "Avancado" },
      { name: "HTML & CSS", level: "Avancado" },
    ],
  },
  {
    category: "Back-end & dados",
    items: [
      { name: "Node.js", level: "Intermediario" },
      { name: "Prisma ORM", level: "Intermediario" },
      { name: "MySQL", level: "Intermediario" },
      { name: "APIs REST", level: "Intermediario" },
    ],
  },
  {
    category: "Ferramentas & processo",
    items: [
      { name: "GitHub", level: "Avancado" },
      { name: "Figma", level: "Intermediario" },
      { name: "Vercel", level: "Intermediario" },
      { name: "Web design", level: "Intermediario" },
    ],
  },
] as const;

export const projects = [
  {
    title: "Triply",
    category: "Produto de viagens",
    description:
      "Projeto pensado para transformar uma busca de viagens em experiencia mais clara, organizada e visualmente mais forte que o padrao do segmento.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    live: "https://triplyfly.vercel.app/",
    repo: "https://github.com/JefiiRamos/Triply",
    featured: true,
    year: "2025",
  },
  {
    title: "jefentregas-cwb",
    category: "Produto web - logistica local",
    description:
      "Sistema publicado com foco em uso real, interface responsiva e estrutura tecnica consistente para operacao local.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    live: "https://jefentregas-cwb.vercel.app",
    repo: "https://github.com/JefiiRamos/jefentregas-cwb",
    featured: false,
    year: "2026",
  },
  {
    title: "byLove",
    category: "Experiencia visual",
    description:
      "Exploracao de ritmo visual, tipografia e composicao entre blocos para construir uma pagina com identidade mais autoral.",
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
      "Aplicacao com fluxo objetivo e estrutura organizada, pensada para uso recorrente e leitura rapida de interface.",
    tech: ["TypeScript", "React"],
    repo: "https://github.com/JefiiRamos/plann.er",
    featured: false,
    year: "2025",
  },
  {
    title: "pass-in-web",
    category: "Gestao web",
    description:
      "Projeto focado em cadastros, listagens e organizacao de fluxo em ambiente web, com base solida em TypeScript.",
    tech: ["TypeScript", "React"],
    repo: "https://github.com/JefiiRamos/pass-in-web",
    featured: false,
    year: "2024",
  },
  {
    title: "crm-loop",
    category: "Painel / CRM",
    description:
      "Painel com foco em rotinas de acompanhamento e dados, reforcando organizacao visual e legibilidade de informacao.",
    tech: ["TypeScript", "Painel", "Dados"],
    repo: "https://github.com/JefiiRamos/crm-loop",
    featured: false,
    year: "2025",
  },
] as const;

export const featuredCaseStudy = {
  project: "Triply",
  summary:
    "Uma aplicacao desenhada para mostrar como eu transformo uma interface comum em uma experiencia mais clara, desejavel e bem resolvida.",
  problemTitle: "Como sair do visual carregado comum em produtos de viagem?",
  problem:
    "Esse tipo de produto costuma concentrar muita informacao, o que cansa a navegacao e reduz a percepcao de valor antes mesmo do usuario interagir.",
  solutionTitle: "Reorganizar o fluxo com clareza, camadas e direcao visual.",
  solution:
    "Usei React, Next.js e Tailwind CSS para construir uma interface mais limpa, com hierarquia mais forte, recortes de conteudo melhor definidos e navegacao mais leve.",
  criteriaTitle: "O objetivo era aumentar percepcao de qualidade sem perder usabilidade.",
  criteria:
    "Esse projeto resume meu raciocinio de front-end: composicao, clareza, consistencia, ritmo e decisoes que fazem um produto parecer menos generico e mais confiavel.",
  live: "https://triplyfly.vercel.app/",
  repo: "https://github.com/JefiiRamos/Triply",
} as const;

export const experience = [
  {
    period: "Out 2025 - Fev 2026",
    title: "Desenvolvedor Web",
    company: "Solid Tech",
    type: "Profissional",
    description:
      "Atuacao em aplicacoes web com JavaScript e bibliotecas modernas, criando interfaces responsivas, integrando dados com Prisma e MySQL e apoiando projetos voltados a presenca digital.",
    highlights: [
      "Interfaces focadas no usuario",
      "APIs e persistencia com Prisma",
      "Entregas para marketing digital",
    ],
  },
  {
    period: "Jun 2024 - Jun 2025",
    title: "Assistente Administrativo",
    company: "Copaves",
    type: "Profissional",
    description:
      "Atendimento ao cliente, rotinas administrativas, organizacao documental e apoio financeiro. Essa etapa fortaleceu comunicacao, responsabilidade e clareza operacional.",
    highlights: [
      "Atendimento e suporte",
      "Organizacao documental",
      "Rotinas operacionais",
    ],
  },
  {
    period: "2025 - atual",
    title: "Engenharia de Software",
    company: "Universidade Positivo",
    type: "Formacao",
    description:
      "Graduacao em andamento com aprofundamento em desenvolvimento web, fundamentos de software, arquitetura e evolucao consistente da base tecnica.",
    highlights: [
      "Desenvolvimento web",
      "Fundamentos de software",
      "Projetos academicos",
    ],
  },
  {
    period: "2021 - 2024",
    title: "Tecnico em Desenvolvimento de Sistemas",
    company: "Colegio Civico Militar Guido Arzua",
    type: "Formacao",
    description:
      "Formacao tecnica com logica de programacao, back-end em JavaScript, computacao grafica, front-end, web design e banco de dados.",
    highlights: [
      "Logica e algoritmos",
      "Front-end e web design",
      "Banco de dados",
    ],
  },
] as const;

export const goals = [
  "Entrar em um time onde front-end seja tratado como parte do produto",
  "Aprofundar arquitetura, performance e qualidade de interface",
  "Contribuir em projetos reais com escala, criterio e impacto visual",
] as const;
