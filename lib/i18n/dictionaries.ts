import type { Dictionary, Locale } from "@/lib/i18n/types";

const pt: Dictionary = {
  meta: {
    title: "Jeferson Ramos | Front-end Developer",
    description:
      "Portfólio de Jeferson Ramos — desenvolvedor front-end em Curitiba. React, Next.js, TypeScript. Projetos reais no GitHub, experiência na Solid Tech e formação em Engenharia de Software.",
  },
  common: {
    viewDemo: "Ver demo",
    repository: "Repositório",
    code: "Código",
    demo: "Demo",
    github: "GitHub",
    advanced: "Avançado",
    intermediate: "Intermediário",
    switchToEnglish: "Mudar para inglês",
    switchToPortuguese: "Mudar para português",
    languageLabel: "Idioma do site",
  },
  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#stack", label: "Stack" },
    { href: "#projetos", label: "Projetos" },
    { href: "#prints", label: "Prints" },
    { href: "#trajetoria", label: "Trajetória" },
    { href: "#github", label: "GitHub" },
    { href: "#contato", label: "Contato" },
  ],
  profile: {
    name: "Jeferson Ramos",
    fullName: "Jeferson de Ramos Filho",
    role: "Front-end Developer",
    location: "Curitiba, PR — Brasil",
    availability: "Disponível para vaga front-end, estágio ou colaboração",
    tagline: "Interface forte, código limpo e leitura visual com intenção.",
    headline:
      "Construo interfaces que elevam a percepção do produto, com React e Next.js aplicados em experiências claras, rápidas e visualmente marcantes.",
    bio: "Sou estudante de Engenharia de Software e desenvolvedor front-end com base técnica em Desenvolvimento de Sistemas. Meu diferencial está em unir direção visual, semântica, responsividade e organização de código para entregar interfaces que parecem mais maduras do que o nível esperado para um perfil em formação.",
    locationShort: "Curitiba, PR",
  },
  hero: {
    linkedin: "Ver LinkedIn",
    exploreGithub: "Explorar GitHub",
    contactCta: "Conversar sobre vaga",
    avatarAlt: "Foto de perfil de Jeferson Ramos no GitHub",
    publicRepos: "Repositórios públicos",
    yearsPractice: "Anos de prática contínua",
    realDelivery: "Frentes com entrega real",
    highlights: [
      "Solid Tech — interface, integração e base full stack",
      "Universidade Positivo — Engenharia de Software",
      "Projetos publicados, ritmo constante e construção visível",
    ],
  },
  sections: {
    about: {
      tag: "Sobre mim",
      title: "Tecnologia com olhar de produto e cuidado visual.",
      description:
        "Do ensino técnico à engenharia, construí uma base que une front-end, back-end e organização — com foco em interfaces que comunicam bem e funcionam de verdade.",
      whoAmI: "Quem sou",
      intro1:
        "Sou Jeferson de Ramos Filho, desenvolvedor front-end em Curitiba. Estudo Engenharia de Software na Universidade Positivo e venho do técnico em Desenvolvimento de Sistemas, onde aprendi lógica, web design, banco de dados e a base do que aplico hoje em React e Next.js.",
      intro2:
        "No GitHub publico projetos reais — do protótipo ao deploy. Na Solid Tech trabalhei com interfaces responsivas, Prisma ORM, MySQL e APIs. Busco oportunidade como desenvolvedor front-end ou estágio em times que valorizem interface, performance e evolução contínua.",
    },
    differentials: {
      tag: "Diferenciais",
      title:
        "Não basta deixar bonito. Eu quero deixar convincente, utilizável e técnicamente sólido.",
      description:
        "Esta seção responde o que realmente pesa em recrutamento: como penso, como executo e por que meu front-end agrega além da estética.",
      principlesLabel: "Princípios de interface",
      qualityLabel: "O que meu front-end precisa sustentar",
      items: [
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
      ],
      principles: [
        "Hierarquia clara antes de efeito visual.",
        "Animação para conduzir percepção, não para distrair.",
        "Seções com profundidade, contraste e respiro real.",
        "Interface memorável sem sacrificar usabilidade.",
      ],
      qualitySignals: [
        "Responsividade considerada desde a composição inicial.",
        "Semântica e estrutura para interfaces mais claras.",
        "Componentização para evolução técnica do projeto.",
        "Atenção a performance, peso visual e ritmo de navegação.",
      ],
    },
    stack: {
      tag: "Stack & ferramentas",
      title: "O que uso para construir produtos web completos.",
      description:
        "Front-end como foco principal, com base sólida em back-end e dados para entregar features de ponta a ponta quando o projeto pede.",
      groups: [
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
      ],
    },
    projects: {
      tag: "Projetos",
      title: "Entregas reais publicadas no GitHub e em produção.",
      description:
        "Seleção dos principais repositórios — com demos ao vivo quando disponíveis. A lista completa está na seção GitHub, atualizada pela API.",
      items: [
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
          category: "Produto web — logística local",
          description:
            "Sistema publicado com foco em uso real, interface responsiva e estrutura técnica consistente para operação local.",
          tech: ["TypeScript", "Next.js", "Vercel"],
          live: "https://jefentregas-cwb.vercel.app",
          repo: "https://github.com/JefiiRamos/jefentregas-cwb",
          featured: false,
          year: "2026",
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
      ],
    },
    prints: {
      tag: "Prints de interface",
      title: "Não mostro só o código. Mostro a percepção visual que ele entrega.",
      description:
        "Esses recortes funcionam como evidência de front-end: composição, hierarquia, contraste e intenção aplicados em projetos publicados.",
      visualDecisions: "Decisões visuais",
      projects: [
        {
          name: "Triply",
          eyebrow: "Produto de viagens",
          thesis:
            "Interface com foco em desejo, clareza de leitura e sensação de produto premium.",
          shots: [
            {
              src: "/triply-1.png",
              alt: "Tela principal do projeto Triply",
              label: "Primeira impressão",
            },
            {
              src: "/triply-2.png",
              alt: "Tela interna do projeto Triply",
              label: "Fluxo visual",
            },
          ],
          notes: ["Hero com presença", "Hierarquia limpa", "Ritmo editorial"],
        },
        {
          name: "Jef Entregas",
          eyebrow: "Logística local",
          thesis:
            "Experiência objetiva para serviço real, com leitura rápida e chamada de ação direta.",
          shots: [
            {
              src: "/jef-entregas-1.png",
              alt: "Tela principal do projeto Jef Entregas",
              label: "Oferta clara",
            },
            {
              src: "/jef-entregas-2.png",
              alt: "Tela de detalhe do projeto Jef Entregas",
              label: "Conversão",
            },
          ],
          notes: ["Serviço evidente", "Layout responsivo", "Contato sem atrito"],
        },
      ],
    },
    caseStudy: {
      tag: "Case em foco",
      title:
        "Projeto, para mim, também é argumento. Ele precisa provar leitura de produto, decisão visual e execução.",
      description:
        "Em vez de só exibir stack, este bloco mostra como raciocino quando uma interface precisa parecer melhor e funcionar melhor.",
      projectLabel: "Projeto",
      problemLabel: "Problema",
      solutionLabel: "Solução",
      criteriaLabel: "Critérios",
      project: "Triply",
      summary:
        "Uma aplicação desenhada para mostrar como eu transformo uma interface comum em uma experiência mais clara, desejável e bem resolvida.",
      problemTitle: "Como sair do visual carregado comum em produtos de viagem?",
      problem:
        "Esse tipo de produto costuma concentrar muita informação, o que cansa a navegação e reduz a percepção de valor antes mesmo do usuário interagir.",
      solutionTitle: "Reorganizar o fluxo com clareza, camadas e direção visual.",
      solution:
        "Usei React, Next.js e Tailwind CSS para construir uma interface mais limpa, com hierarquia mais forte, recortes de conteúdo melhor definidos e navegação mais leve.",
      criteriaTitle:
        "O objetivo era aumentar percepção de qualidade sem perder usabilidade.",
      criteria:
        "Esse projeto resume meu raciocínio de front-end: composição, clareza, consistência, ritmo e decisões que fazem um produto parecer menos genérico e mais confiável.",
    },
    experience: {
      tag: "Trajetória",
      title: "Minha evolução combina base técnica, entrega real e disciplina de execução.",
      description:
        "Cada etapa adicionou uma camada útil ao meu trabalho: comunicação, organização, visão de produto e prática em desenvolvimento web.",
      items: [
        {
          period: "Out 2025 — Fev 2026",
          title: "Desenvolvedor Web",
          company: "Solid Tech",
          type: "Profissional",
          typeKey: "professional",
          description:
            "Atuação em aplicações web com JavaScript e bibliotecas modernas, criando interfaces responsivas, integrando dados com Prisma e MySQL e apoiando projetos voltados a presença digital.",
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
          typeKey: "professional",
          description:
            "Atendimento ao cliente, rotinas administrativas, organização documental e apoio financeiro. Essa etapa fortaleceu comunicação, responsabilidade e clareza operacional.",
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
          typeKey: "education",
          description:
            "Graduação em andamento com aprofundamento em desenvolvimento web, fundamentos de software, arquitetura e evolução consistente da base técnica.",
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
          typeKey: "education",
          description:
            "Formação técnica com lógica de programação, back-end em JavaScript, computação gráfica, front-end, web design e banco de dados.",
          highlights: [
            "Lógica e algoritmos",
            "Front-end e web design",
            "Banco de dados",
          ],
        },
      ],
    },
    github: {
      tag: "GitHub",
      title:
        "Meu GitHub funciona como histórico público de consistência, estudo e entrega.",
      description:
        "Perfil @JefiiRamos com repositórios atualizados automaticamente para mostrar evolução contínua, não só vitrine.",
      since: "No GitHub desde",
      years: "anos",
      repositories: "Repositórios",
      followers: "Seguidores",
      following: "Seguindo",
      openProfile: "Abrir perfil",
      allRepos: "Ver todos os repos",
      profileRead: "Leitura de perfil",
      profilePoints: [
        "Front-end com foco em React, Next.js e direção visual",
        "Formação em Engenharia de Software com base técnica prévia",
        "Projetos publicados que mostram prática além de teoria",
        "Vivência full stack suficiente para dialogar com dados e APIs",
        "Histórico público de construção contínua e experimentação",
      ],
      goalsTitle: "Metas",
      goals: [
        "Entrar em um time onde front-end seja tratado como parte do produto.",
        "Aprofundar arquitetura, performance e qualidade de interface",
        "Contribuir em projetos reais com escala, critério e impacto visual",
      ],
      featuredRepos: "Repositórios em destaque",
      avatarAlt: "Foto de perfil de Jeferson Ramos no GitHub",
    },
    contact: {
      tag: "Contato",
      title: "Se o objetivo for construir um front-end mais forte, eu quero participar.",
      lookingFor: "O que procuro agora",
      methods: [
        {
          label: "E-mail",
          description: "Canal ideal para proposta, entrevista ou convite",
        },
        {
          label: "Telefone / WhatsApp",
          description: "Resposta rápida para conversas objetivas",
        },
        {
          label: "LinkedIn",
          description: "Perfil profissional e contexto de carreira",
        },
        {
          label: "Instagram",
          description: "Contato mais informal, se fizer sentido",
        },
      ],
      sendEmail: "Falar por e-mail",
      reviewGithub: "Revisar meu GitHub",
    },
    footer: {
      builtWith: "Desenvolvido com Next.js.",
    },
  },
  facts: [
    {
      label: "Formação",
      value: "Eng. de Software",
      detail: "Universidade Positivo — em andamento",
    },
    {
      label: "Base técnica",
      value: "Técnico em DS",
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
  ],
  pillars: [
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
  ],
};

const en: Dictionary = {
  meta: {
    title: "Jeferson Ramos | Front-end Developer",
    description:
      "Portfolio of Jeferson Ramos — front-end developer based in Curitiba, Brazil. React, Next.js, TypeScript. Real projects on GitHub, experience at Solid Tech, and Software Engineering studies.",
  },
  common: {
    viewDemo: "View demo",
    repository: "Repository",
    code: "Code",
    demo: "Demo",
    github: "GitHub",
    advanced: "Advanced",
    intermediate: "Intermediate",
    switchToEnglish: "Switch to English",
    switchToPortuguese: "Switch to Portuguese",
    languageLabel: "Site language",
  },
  nav: [
    { href: "#sobre", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projetos", label: "Projects" },
    { href: "#prints", label: "Screens" },
    { href: "#trajetoria", label: "Journey" },
    { href: "#github", label: "GitHub" },
    { href: "#contato", label: "Contact" },
  ],
  profile: {
    name: "Jeferson Ramos",
    fullName: "Jeferson de Ramos Filho",
    role: "Front-end Developer",
    location: "Curitiba, PR — Brazil",
    availability: "Open to front-end roles, internships, or collaboration",
    tagline: "Strong interfaces, clean code, and intentional visual rhythm.",
    headline:
      "I build interfaces that elevate product perception, using React and Next.js for clear, fast, and visually memorable experiences.",
    bio: "I'm a Software Engineering student and front-end developer with a technical background in Systems Development. My edge is combining visual direction, semantics, responsiveness, and organized code to deliver interfaces that feel more mature than expected for an early-career profile.",
    locationShort: "Curitiba, PR",
  },
  hero: {
    linkedin: "View LinkedIn",
    exploreGithub: "Explore GitHub",
    contactCta: "Talk about a role",
    avatarAlt: "Jeferson Ramos GitHub profile photo",
    publicRepos: "Public repositories",
    yearsPractice: "Years of continuous practice",
    realDelivery: "Real delivery tracks",
    highlights: [
      "Solid Tech — UI, integration, and full-stack foundation",
      "Universidade Positivo — Software Engineering",
      "Published projects, steady pace, and visible growth",
    ],
  },
  sections: {
    about: {
      tag: "About me",
      title: "Technology with product thinking and visual care.",
      description:
        "From technical school to engineering, I built a foundation that connects front-end, back-end, and structure — focused on interfaces that communicate well and actually work.",
      whoAmI: "Who I am",
      intro1:
        "I'm Jeferson de Ramos Filho, a front-end developer in Curitiba. I study Software Engineering at Universidade Positivo and come from a Systems Development technical program, where I learned logic, web design, databases, and the base I apply today with React and Next.js.",
      intro2:
        "On GitHub I publish real projects — from prototype to deploy. At Solid Tech I worked with responsive interfaces, Prisma ORM, MySQL, and APIs. I'm looking for a front-end role or internship on teams that value UI, performance, and continuous growth.",
    },
    differentials: {
      tag: "Differentiators",
      title:
        "Looking good isn't enough. I want it convincing, usable, and technically solid.",
      description:
        "This section answers what really matters in hiring: how I think, how I execute, and why my front-end adds value beyond aesthetics.",
      principlesLabel: "Interface principles",
      qualityLabel: "What my front-end must support",
      items: [
        {
          title: "Aesthetics that signal level",
          description:
            "I use minimalism to create presence, not emptiness. The goal is to make the interface feel more valuable, clearer, and more professional.",
        },
        {
          title: "Front-end as product thinking",
          description:
            "I don't separate visual from engineering. Hierarchy, flow, semantics, responsiveness, and performance are part of the same decision.",
        },
        {
          title: "Visual judgment and execution in one flow",
          description:
            "I can turn visual direction into functional UI without losing consistency, polish, or code readability.",
        },
      ],
      principles: [
        "Clear hierarchy before visual effects.",
        "Motion to guide perception, not to distract.",
        "Sections with real depth, contrast, and breathing room.",
        "Memorable UI without sacrificing usability.",
      ],
      qualitySignals: [
        "Responsiveness considered from the initial composition.",
        "Semantics and structure for clearer interfaces.",
        "Componentization for sustainable technical growth.",
        "Attention to performance, visual weight, and navigation rhythm.",
      ],
    },
    stack: {
      tag: "Stack & tools",
      title: "What I use to build complete web products.",
      description:
        "Front-end as the main focus, with a solid back-end and data foundation to deliver end-to-end features when the project requires it.",
      groups: [
        {
          category: "Front-end",
          items: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "HTML & CSS", level: "Advanced" },
          ],
        },
        {
          category: "Back-end & data",
          items: [
            { name: "Node.js", level: "Intermediate" },
            { name: "Prisma ORM", level: "Intermediate" },
            { name: "MySQL", level: "Intermediate" },
            { name: "REST APIs", level: "Intermediate" },
          ],
        },
        {
          category: "Tools & workflow",
          items: [
            { name: "GitHub", level: "Advanced" },
            { name: "Figma", level: "Intermediate" },
            { name: "Vercel", level: "Intermediate" },
            { name: "Web design", level: "Intermediate" },
          ],
        },
      ],
    },
    projects: {
      tag: "Projects",
      title: "Real deliveries published on GitHub and in production.",
      description:
        "A selection of main repositories — with live demos when available. The full list is in the GitHub section, updated via API.",
      items: [
        {
          title: "Triply",
          category: "Travel product",
          description:
            "Built to turn travel search into a clearer, more organized experience that feels stronger than the category standard.",
          tech: ["React", "Next.js", "Tailwind CSS"],
          live: "https://triplyfly.vercel.app/",
          repo: "https://github.com/JefiiRamos/Triply",
          featured: true,
          year: "2025",
        },
        {
          title: "jefentregas-cwb",
          category: "Web product — local logistics",
          description:
            "Published system focused on real usage, responsive UI, and consistent technical structure for local operations.",
          tech: ["TypeScript", "Next.js", "Vercel"],
          live: "https://jefentregas-cwb.vercel.app",
          repo: "https://github.com/JefiiRamos/jefentregas-cwb",
          featured: false,
          year: "2026",
        },
        {
          title: "plann.er",
          category: "Planning",
          description:
            "Application with an objective flow and organized structure, designed for recurring use and fast UI reading.",
          tech: ["TypeScript", "React"],
          repo: "https://github.com/JefiiRamos/plann.er",
          featured: false,
          year: "2025",
        },
        {
          title: "pass-in-web",
          category: "Web management",
          description:
            "Project focused on registration, listings, and flow organization on the web, with a solid TypeScript base.",
          tech: ["TypeScript", "React"],
          repo: "https://github.com/JefiiRamos/pass-in-web",
          featured: false,
          year: "2024",
        },
        {
          title: "crm-loop",
          category: "Dashboard / CRM",
          description:
            "Dashboard focused on tracking routines and data, reinforcing visual organization and information clarity.",
          tech: ["TypeScript", "Dashboard", "Data"],
          repo: "https://github.com/JefiiRamos/crm-loop",
          featured: false,
          year: "2025",
        },
      ],
    },
    prints: {
      tag: "Interface screens",
      title: "I don't only show code. I show the visual perception it delivers.",
      description:
        "These captures work as front-end evidence: composition, hierarchy, contrast, and intent applied in published projects.",
      visualDecisions: "Visual decisions",
      projects: [
        {
          name: "Triply",
          eyebrow: "Travel product",
          thesis:
            "Interface focused on desire, reading clarity, and a premium product feel.",
          shots: [
            {
              src: "/triply-1.png",
              alt: "Triply project main screen",
              label: "First impression",
            },
            {
              src: "/triply-2.png",
              alt: "Triply project inner screen",
              label: "Visual flow",
            },
          ],
          notes: ["Strong hero", "Clean hierarchy", "Editorial rhythm"],
        },
        {
          name: "Jef Entregas",
          eyebrow: "Local logistics",
          thesis:
            "Objective experience for a real service, with fast reading and a direct call to action.",
          shots: [
            {
              src: "/jef-entregas-1.png",
              alt: "Jef Entregas project main screen",
              label: "Clear offer",
            },
            {
              src: "/jef-entregas-2.png",
              alt: "Jef Entregas project detail screen",
              label: "Conversion",
            },
          ],
          notes: ["Clear service", "Responsive layout", "Frictionless contact"],
        },
      ],
    },
    caseStudy: {
      tag: "Featured case",
      title:
        "A project is also an argument. It must prove product thinking, visual decisions, and execution.",
      description:
        "Instead of only listing stack, this block shows how I reason when an interface needs to look and work better.",
      projectLabel: "Project",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      criteriaLabel: "Criteria",
      project: "Triply",
      summary:
        "An application designed to show how I turn a common interface into a clearer, more desirable, and well-resolved experience.",
      problemTitle: "How to move beyond the typical cluttered travel UI?",
      problem:
        "This type of product often packs too much information, which tires navigation and reduces perceived value before the user even interacts.",
      solutionTitle: "Reorganize the flow with clarity, layers, and visual direction.",
      solution:
        "I used React, Next.js, and Tailwind CSS to build a cleaner interface with stronger hierarchy, better content framing, and lighter navigation.",
      criteriaTitle: "The goal was higher quality perception without losing usability.",
      criteria:
        "This project summarizes my front-end thinking: composition, clarity, consistency, rhythm, and decisions that make a product feel less generic and more trustworthy.",
    },
    experience: {
      tag: "Journey",
      title: "My path combines technical foundation, real delivery, and execution discipline.",
      description:
        "Each step added something useful to my work: communication, organization, product vision, and web development practice.",
      items: [
        {
          period: "Oct 2025 — Feb 2026",
          title: "Web Developer",
          company: "Solid Tech",
          type: "Professional",
          typeKey: "professional",
          description:
            "Worked on web applications with JavaScript and modern libraries, building responsive interfaces, integrating data with Prisma and MySQL, and supporting digital presence projects.",
          highlights: [
            "User-focused interfaces",
            "APIs and persistence with Prisma",
            "Deliveries for digital marketing",
          ],
        },
        {
          period: "Jun 2024 — Jun 2025",
          title: "Administrative Assistant",
          company: "Copaves",
          type: "Professional",
          typeKey: "professional",
          description:
            "Customer support, administrative routines, document organization, and financial support. This stage strengthened communication, responsibility, and operational clarity.",
          highlights: [
            "Support and service",
            "Document organization",
            "Operational routines",
          ],
        },
        {
          period: "2025 — present",
          title: "Software Engineering",
          company: "Universidade Positivo",
          type: "Education",
          typeKey: "education",
          description:
            "Ongoing degree with a focus on web development, software fundamentals, architecture, and consistent technical growth.",
          highlights: [
            "Web development",
            "Software fundamentals",
            "Academic projects",
          ],
        },
        {
          period: "2021 — 2024",
          title: "Systems Development Technician",
          company: "Colégio Cívico Militar Guido Arzua",
          type: "Education",
          typeKey: "education",
          description:
            "Technical training with programming logic, JavaScript back-end, computer graphics, front-end, web design, and databases.",
          highlights: [
            "Logic and algorithms",
            "Front-end and web design",
            "Databases",
          ],
        },
      ],
    },
    github: {
      tag: "GitHub",
      title: "My GitHub works as a public record of consistency, study, and delivery.",
      description:
        "@JefiiRamos profile with repositories updated automatically to show continuous growth, not just a showcase.",
      since: "On GitHub since",
      years: "years",
      repositories: "Repositories",
      followers: "Followers",
      following: "Following",
      openProfile: "Open profile",
      allRepos: "View all repos",
      profileRead: "Profile read",
      profilePoints: [
        "Front-end focused on React, Next.js, and visual direction",
        "Software Engineering studies with prior technical foundation",
        "Published projects that show practice beyond theory",
        "Enough full-stack experience to work with data and APIs",
        "Public history of continuous building and experimentation",
      ],
      goalsTitle: "Goals",
      goals: [
        "Join a team where front-end is treated as part of the product.",
        "Deepen architecture, performance, and interface quality",
        "Contribute to real projects with scale, judgment, and visual impact",
      ],
      featuredRepos: "Featured repositories",
      avatarAlt: "Jeferson Ramos GitHub profile photo",
    },
    contact: {
      tag: "Contact",
      title: "If the goal is to build stronger front-end work, I want in.",
      lookingFor: "What I'm looking for now",
      methods: [
        {
          label: "Email",
          description: "Best channel for proposals, interviews, or invites",
        },
        {
          label: "Phone / WhatsApp",
          description: "Quick replies for direct conversations",
        },
        {
          label: "LinkedIn",
          description: "Professional profile and career context",
        },
        {
          label: "Instagram",
          description: "More informal contact, when it makes sense",
        },
      ],
      sendEmail: "Email me",
      reviewGithub: "Review my GitHub",
    },
    footer: {
      builtWith: "Built with Next.js.",
    },
  },
  facts: [
    {
      label: "Education",
      value: "Software Eng.",
      detail: "Universidade Positivo — in progress",
    },
    {
      label: "Technical base",
      value: "Systems Dev.",
      detail: "Hands-on systems development training",
    },
    {
      label: "Current focus",
      value: "Front-end",
      detail: "React, Next.js, UI, UX, and performance",
    },
    {
      label: "Delivery",
      value: "Full stack",
      detail: "Strong front-end with APIs, Prisma, and MySQL",
    },
  ],
  pillars: [
    {
      title: "Intentional interface",
      description:
        "I treat each section as reading direction: hierarchy, contrast, breathing room, and visual rhythm to guide the eye without excess.",
    },
    {
      title: "Code that supports the product",
      description:
        "TypeScript, React componentization, and Next.js structure to keep the front-end predictable, reusable, and ready to scale.",
    },
    {
      title: "From design to deploy",
      description:
        "I can move through the full process: visual reference, interface build, versioning, publishing, and post-delivery refinement.",
    },
  ],
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
