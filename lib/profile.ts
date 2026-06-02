export const profile = {
  name: "Jeferson Ramos",
  fullName: "Jeferson de Ramos Filho",
  role: "Front-end Developer",
  location: "Curitiba, PR - Brasil",
  availability: "Disponível para vaga front-end, estágio ou colaboração",
  tagline: "Interface forte, código limpo e leitura visual com intenção.",
  headline:
    "Construo interfaces que elevam a percepção do produto, com React e Next.js aplicados em experiências claras, rápidas e visualmente marcantes.",
  bio: "Sou estudante de Engenharia de Software e desenvolvedor front-end com base técnica em Desenvolvimento de Sistemas. Meu diferencial está em unir direção visual, semântica, responsividade e organização de código para entregar interfaces que parecem mais maduras do que o nível esperado para um perfil em formação.",
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
    label: "Formação",
    value: "Eng. de Software",
    detail: "Universidade Positivo - em andamento",
  },
  {
    label: "Base técnica",
    value: "Técnico em Desenvolvimento de Sistemas",
    detail: "Desenvolvimento de Sistemas com foco prático",
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
    title: "Interface com intenção",
    description:
      "Eu penso cada seção como direção de leitura: hierarquia, contraste, respiro e ritmo visual para guiar o olhar sem depender de excesso.",
  },
  {
    title: "Código que sustenta produto",
    description:
      "TypeScript, componentização em React e estrutura em Next.js para manter o front-end mais previsível, reutilizável e pronto para crescer.",
  },
  {
    title: "Do design ao deploy",
    description:
      "Consigo atravessar o processo completo: referência visual, construção da interface, versionamento, publicação e refinamento após entrega.",
  },
] as const;

export const differentiators = [
  {
    title: "Estética que comunica nível",
    description:
      "Eu uso minimalismo para criar presença, não ausência. O objetivo é fazer a interface parecer mais valiosa, mais clara e mais profissional.",
  },
  {
    title: "Front-end pensado como produto",
    description:
      "Não separo visual de engenharia. Hierarquia, fluidez, semântica, responsividade e performance fazem parte da mesma decisão.",
  },
  {
    title: "Critério visual e execução no mesmo fluxo",
    description:
      "Consigo transformar direção visual em interface funcional sem perder consistência, refinamento e legibilidade no código.",
  },
] as const;

export const interfacePrinciples = [
  "Hierarquia clara antes de efeito visual.",
  "Animação para conduzir percepção, não para distrair.",
  "Seções com profundidade, contraste e respiro real.",
  "Interface memorável sem sacrificar usabilidade.",
] as const;

export const frontEndQualitySignals = [
  "Responsividade considerada desde a composição inicial.",
  "Semântica e estrutura para interfaces mais claras.",
  "Componentização para evolução técnica do projeto.",
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
      "Projeto pensado para transformar uma busca de viagens em experiência mais clara, organizada e visualmente mais forte que o padrão do segmento.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    live: "https://triplyfly.vercel.app/",
    repo: "https://github.com/JefiiRamos/Triply",
    featured: true,
    year: "2025",
  },
  {
    title: "jefentregas-cwb",
    category: "Produto web - logística local",
    description:
      "Sistema publicado com foco em uso real, interface responsiva e estrutura técnica consistente para operação local.",
    tech: ["TypeScript", "Next.js", "Vercel"],
    live: "https://jefentregas-cwb.vercel.app",
    repo: "https://github.com/JefiiRamos/jefentregas-cwb",
    featured: false,
    year: "2026",
  },
  {
    title: "byLove",
    category: "Experiência visual",
    description:
      "Exploração de ritmo visual, tipografia e composição entre blocos para construir uma página com identidade mais autoral.",
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
      "Aplicação com fluxo objetivo e estrutura organizada, pensada para uso recorrente e leitura rápida de interface.",
    tech: ["TypeScript", "React"],
    repo: "https://github.com/JefiiRamos/plann.er",
    featured: false,
    year: "2025",
  },
  {
    title: "pass-in-web",
    category: "Gestão web",
    description:
      "Projeto focado em cadastros, listagens e organização de fluxo em ambiente web, com base sólida em TypeScript.",
    tech: ["TypeScript", "React"],
    repo: "https://github.com/JefiiRamos/pass-in-web",
    featured: false,
    year: "2024",
  },
  {
    title: "crm-loop",
    category: "Painel / CRM",
    description:
      "Painel com foco em rotinas de acompanhamento e dados, reforçando organização visual e legibilidade de informação.",
    tech: ["TypeScript", "Painel", "Dados"],
    repo: "https://github.com/JefiiRamos/crm-loop",
    featured: false,
    year: "2025",
  },
] as const;

export const featuredCaseStudy = {
  project: "Triply",
  summary:
    "Uma aplicação desenhada para mostrar como eu transformo uma interface comum em uma experiência mais clara, desejável e bem resolvida.",
  problemTitle: "Como sair do visual carregado comum em produtos de viagem?",
  problem:
    "Esse tipo de produto costuma concentrar muita informação, o que cansa a navegação e reduz a percepção de valor antes mesmo do usuário interagir.",
  solutionTitle: "Reorganizar o fluxo com clareza, camadas e direção visual.",
  solution:
    "Usei React, Next.js e Tailwind CSS para construir uma interface mais limpa, com hierarquia mais forte, recortes de conteúdo melhor definidos e navegação mais leve.",
  criteriaTitle: "O objetivo era aumentar percepção de qualidade sem perder usabilidade.",
  criteria:
    "Esse projeto resume meu raciocínio de front-end: composição, clareza, consistência, ritmo e decisões que fazem um produto parecer menos genérico e mais confiável.",
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
      "Atuação em aplicações web com JavaScript e bibliotecas modernas, criando interfaces responsivas, integrando dados com Prisma e MySQL e apoiando projetos voltados a presença digital.",
    highlights: [
      "Interfaces focadas no usuário",
      "APIs e persistência com Prisma",
      "Entregas para marketing digital",
    ],
  },
  {
    period: "Jun 2024 - Jun 2025",
    title: "Assistente Administrativo",
    company: "Copaves",
    type: "Profissional",
    description:
      "Atendimento ao cliente, rotinas administrativas, organização documental e apoio financeiro. Essa etapa fortaleceu comunicação, responsabilidade e clareza operacional.",
    highlights: [
      "Atendimento e suporte",
      "Organização documental",
      "Rotinas operacionais",
    ],
  },
  {
    period: "2025 - atual",
    title: "Engenharia de Software",
    company: "Universidade Positivo",
    type: "Formação",
    description:
      "Graduação em andamento com aprofundamento em desenvolvimento web, fundamentos de software, arquitetura e evolução consistente da base técnica.",
    highlights: [
      "Desenvolvimento web",
      "Fundamentos de software",
      "Projetos acadêmicos",
    ],
  },
  {
    period: "2021 - 2024",
    title: "Técnico em Desenvolvimento de Sistemas",
    company: "Colégio Civico Militar Guido Arzua",
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
  "Entrar em um time onde front-end seja tratado como parte do produto.",
  "Aprofundar arquitetura, performance e qualidade de interface",
  "Contribuir em projetos reais com escala, critério e impacto visual",
] as const;
