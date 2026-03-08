export const siteContent = {
  pt: {
    meta: {
      title: "StudioBox | Softhouse de Solucoes e Aplicativos",
      skipToContentLabel: "Ir para conteudo principal",
    },
    header: {
      brand: "StudioBox",
      tagline: "Softhouse",
      menuToggleLabel: "Alternar navegacao",
      navigation: [
        { label: "Inicio", href: "#home" },
        { label: "Solucoes", href: "#solutions" },
        { label: "Processo", href: "#process" },
        { label: "Cases", href: "#cases" },
        { label: "Contato", href: "#contact" },
      ],
      primaryCta: {
        label: "Iniciar projeto",
        href: "#contact",
      },
      languages: {
        pt: "PT",
        en: "EN",
      },
    },
    hero: {
      pretitle: "Softhouse para produtos digitais",
      title: "Criamos solucoes e aplicativos de software com foco em resultado real",
      description:
        "Da estrategia ao codigo em producao, a StudioBox entrega plataformas web, apps mobile e sistemas customizados com arquitetura escalavel e experiencia premium.",
      primaryCta: {
        label: "Agendar diagnostico",
        href: "#contact",
      },
      secondaryCta: {
        label: "Ver casos",
        href: "#cases",
      },
      highlights: [
        { value: "45+", label: "projetos entregues" },
        { value: "99.9%", label: "uptime medio" },
        { value: "3x", label: "aceleracao media de entrega" },
      ],
      spotlight: {
        title: "Plataforma pronta para evoluir",
        points: [
          "Arquitetura modular para crescimento continuo",
          "Integrações com APIs, pagamentos e ERPs",
          "Pipeline CI/CD com observabilidade desde o inicio",
        ],
      },
    },
    solutions: {
      pretitle: "Solucoes StudioBox",
      title: "Do discovery a sustentacao: software completo em um unico time",
      description:
        "Atuamos como parceiro tecnico para desenhar, construir e evoluir produtos digitais com seguranca, performance e visao de negocio.",
      items: [
        {
          tag: "Produto digital",
          title: "Aplicativos web sob medida",
          description:
            "Construimos plataformas de operacao, vendas e atendimento com foco em usabilidade e alta disponibilidade.",
          deliverables: [
            "UX/UI de ponta a ponta",
            "Frontend e backend integrados",
            "Painel administrativo e analytics",
          ],
        },
        {
          tag: "Mobile",
          title: "Apps iOS e Android",
          description:
            "Desenvolvemos aplicativos nativos e cross-platform, com performance otimizada e experiencia consistente.",
          deliverables: [
            "Arquitetura escalavel",
            "Publicacao em lojas",
            "Monitoramento e evolucao continua",
          ],
        },
        {
          tag: "Integracao",
          title: "Sistemas e automacao",
          description:
            "Conectamos software com CRMs, ERPs, gateways de pagamento e ferramentas internas para eliminar retrabalho.",
          deliverables: [
            "Mapeamento de processos",
            "Orquestracao via APIs",
            "Governanca e seguranca de dados",
          ],
        },
      ],
    },
    process: {
      pretitle: "Metodo StudioBox",
      title: "Execucao previsivel com ciclos curtos e transparencia total",
      description:
        "Cada fase foi desenhada para reduzir risco, acelerar valor entregue e manter o produto alinhado ao negocio.",
      steps: [
        {
          title: "1. Discovery estrategico",
          description:
            "Mapeamos objetivos, requisitos e riscos para transformar ideia em backlog priorizado.",
        },
        {
          title: "2. Arquitetura e design",
          description:
            "Definimos stack, componentes, fluxos e prototipos para construir uma base robusta.",
        },
        {
          title: "3. Build incremental",
          description:
            "Entregamos sprints curtos com validacao continua, qualidade automatizada e deploy recorrente.",
        },
        {
          title: "4. Evolucao e sustentacao",
          description:
            "Acompanhamos metricas de produto, performance e confiabilidade para evoluir com seguranca.",
        },
      ],
    },
    cases: {
      pretitle: "Resultados em producao",
      title: "Cases que mostram impacto tecnico e de negocio",
      description:
        "Projetos com ganho de eficiencia operacional, aumento de receita e experiencia digital consistente.",
      labels: {
        challenge: "Desafio",
        solution: "Solucao",
        impact: "Impacto",
      },
      items: [
        {
          name: "FlowControl Suite",
          segment: "Logistica",
          challenge:
            "Equipe operava com planilhas desconectadas e baixa previsibilidade de entregas.",
          solution:
            "Plataforma web com roteirizacao, monitoramento em tempo real e automacao de alertas.",
          impact: "-38% em atrasos e +26% em produtividade no primeiro trimestre.",
          stack: ["React", "Node", "PostgreSQL", "AWS"],
        },
        {
          name: "CareNow App",
          segment: "Saude",
          challenge: "Clinicas precisavam reduzir no-show e melhorar comunicacao com pacientes.",
          solution:
            "Aplicativo mobile com agenda inteligente, lembretes e teleatendimento integrado.",
          impact: "+41% de comparecimento e NPS de 84 apos o lancamento.",
          stack: ["React Native", "NestJS", "Redis", "GCP"],
        },
        {
          name: "Retail Pulse",
          segment: "Varejo",
          challenge: "Diretoria nao tinha visibilidade consolidada de vendas em tempo real.",
          solution:
            "Painel unificado com integracao de PDV, e-commerce e relatorios acionaveis.",
          impact: "Decisoes comerciais 2.7x mais rapidas e ruptura reduzida em 19%.",
          stack: ["Next.js", "Python", "BigQuery", "Docker"],
        },
      ],
    },
    cta: {
      title: "Tem uma ideia ou sistema para evoluir?",
      description:
        "Vamos desenhar juntos o melhor caminho tecnico para transformar sua estrategia em software que escala.",
      primaryCta: {
        label: "Falar com a StudioBox",
        href: "#contact",
      },
      secondaryCta: {
        label: "Explorar solucoes",
        href: "#solutions",
      },
    },
    contact: {
      pretitle: "Contato",
      title: "Vamos construir seu proximo aplicativo",
      description:
        "Envie um resumo do desafio e retornamos com uma proposta de arquitetura e roadmap inicial.",
      panelTitle: "O que voce recebe no primeiro contato",
      panelSummary:
        "Software house para solucoes web, apps mobile e integracoes corporativas.",
      channels: [
        {
          title: "WhatsApp",
          description: "Conversa rapida para alinhar escopo, prazo e prioridades.",
          label: "Abrir WhatsApp",
          href: "https://wa.me/5500000000000?text=Ola%20StudioBox%2C%20quero%20falar%20sobre%20um%20novo%20projeto.",
        },
        {
          title: "Email",
          description: "Ideal para enviar contexto tecnico e materiais do produto.",
          label: "Enviar email",
          href: "mailto:contato@studiobox.dev?subject=Novo%20projeto%20com%20a%20StudioBox",
        },
      ],
      checklist: [
        "Resposta inicial em ate 1 dia util",
        "Diagnostico tecnico objetivo",
        "Roadmap com fases de entrega",
      ],
    },
    footer: {
      summary:
        "StudioBox e uma softhouse especializada em solucoes digitais, aplicativos e plataformas sob medida.",
      navigation: [
        { label: "Solucoes", href: "#solutions" },
        { label: "Processo", href: "#process" },
        { label: "Cases", href: "#cases" },
        { label: "Contato", href: "#contact" },
      ],
      legal: "(c) 2026 StudioBox. Todos os direitos reservados.",
    },
  },
  en: {
    meta: {
      title: "StudioBox | Software House for Solutions and Apps",
      skipToContentLabel: "Skip to main content",
    },
    header: {
      brand: "StudioBox",
      tagline: "Software House",
      menuToggleLabel: "Toggle navigation",
      navigation: [
        { label: "Home", href: "#home" },
        { label: "Solutions", href: "#solutions" },
        { label: "Process", href: "#process" },
        { label: "Cases", href: "#cases" },
        { label: "Contact", href: "#contact" },
      ],
      primaryCta: {
        label: "Start project",
        href: "#contact",
      },
      languages: {
        pt: "PT",
        en: "EN",
      },
    },
    hero: {
      pretitle: "Software house for digital products",
      title: "We craft software solutions and applications focused on measurable impact",
      description:
        "From strategy to production code, StudioBox delivers web platforms, mobile apps and custom systems with scalable architecture and premium user experience.",
      primaryCta: {
        label: "Book discovery call",
        href: "#contact",
      },
      secondaryCta: {
        label: "See case studies",
        href: "#cases",
      },
      highlights: [
        { value: "45+", label: "projects delivered" },
        { value: "99.9%", label: "average uptime" },
        { value: "3x", label: "faster delivery velocity" },
      ],
      spotlight: {
        title: "Product architecture ready to scale",
        points: [
          "Modular foundation for continuous growth",
          "Integrations with APIs, payments and ERP systems",
          "CI/CD pipeline with observability from day one",
        ],
      },
    },
    solutions: {
      pretitle: "StudioBox Solutions",
      title: "From discovery to support: complete software execution in one team",
      description:
        "We work as your technical partner to design, build and evolve digital products with security, performance and business clarity.",
      items: [
        {
          tag: "Digital product",
          title: "Custom web applications",
          description:
            "We build operation, sales and service platforms focused on usability and high availability.",
          deliverables: [
            "End-to-end UX/UI",
            "Integrated frontend and backend",
            "Admin panel and analytics",
          ],
        },
        {
          tag: "Mobile",
          title: "iOS and Android apps",
          description:
            "We deliver native and cross-platform apps with optimized performance and a consistent experience.",
          deliverables: [
            "Scalable architecture",
            "Store publication support",
            "Monitoring and continuous evolution",
          ],
        },
        {
          tag: "Integration",
          title: "Systems and automation",
          description:
            "We connect software with CRMs, ERPs, payment gateways and internal tools to eliminate manual work.",
          deliverables: [
            "Process mapping",
            "API orchestration",
            "Data governance and security",
          ],
        },
      ],
    },
    process: {
      pretitle: "StudioBox Framework",
      title: "Predictable execution with short cycles and full transparency",
      description:
        "Every stage is designed to reduce risk, speed up value delivery and keep product decisions aligned with business goals.",
      steps: [
        {
          title: "1. Strategic discovery",
          description:
            "We map goals, requirements and constraints to convert ideas into a prioritized product backlog.",
        },
        {
          title: "2. Architecture and design",
          description:
            "We define stack, components, user flows and prototypes to build a reliable technical foundation.",
        },
        {
          title: "3. Incremental build",
          description:
            "We ship short sprints with continuous validation, automated quality checks and frequent deployment.",
        },
        {
          title: "4. Evolution and support",
          description:
            "We track product metrics, performance and reliability to evolve your platform safely over time.",
        },
      ],
    },
    cases: {
      pretitle: "Production outcomes",
      title: "Case studies proving technical and business impact",
      description:
        "Projects focused on operational efficiency, revenue growth and a stronger digital experience.",
      labels: {
        challenge: "Challenge",
        solution: "Solution",
        impact: "Impact",
      },
      items: [
        {
          name: "FlowControl Suite",
          segment: "Logistics",
          challenge:
            "Teams relied on disconnected spreadsheets and had low shipment predictability.",
          solution:
            "A web platform with route planning, real-time monitoring and smart alert automation.",
          impact: "-38% in delays and +26% productivity in the first quarter.",
          stack: ["React", "Node", "PostgreSQL", "AWS"],
        },
        {
          name: "CareNow App",
          segment: "Healthcare",
          challenge: "Clinics needed to reduce no-shows and improve patient communication.",
          solution:
            "A mobile app with intelligent scheduling, reminders and integrated telehealth.",
          impact: "+41% attendance rate and NPS 84 after release.",
          stack: ["React Native", "NestJS", "Redis", "GCP"],
        },
        {
          name: "Retail Pulse",
          segment: "Retail",
          challenge:
            "Leadership had no unified real-time view of store and e-commerce sales.",
          solution:
            "A unified dashboard integrating POS, e-commerce and actionable business reporting.",
          impact: "Commercial decisions 2.7x faster and stockout reduction of 19%.",
          stack: ["Next.js", "Python", "BigQuery", "Docker"],
        },
      ],
    },
    cta: {
      title: "Do you have an idea or platform to evolve?",
      description:
        "Let us design the right technical path to turn your strategy into software that scales.",
      primaryCta: {
        label: "Talk to StudioBox",
        href: "#contact",
      },
      secondaryCta: {
        label: "Explore solutions",
        href: "#solutions",
      },
    },
    contact: {
      pretitle: "Contact",
      title: "Let us build your next application",
      description:
        "Share a quick overview of your challenge and we will reply with an architecture direction and first roadmap.",
      panelTitle: "What you get in the first conversation",
      panelSummary:
        "Software house for web solutions, mobile apps and enterprise integrations.",
      channels: [
        {
          title: "WhatsApp",
          description: "Quick conversation to align scope, timeline and priorities.",
          label: "Open WhatsApp",
          href: "https://wa.me/5500000000000?text=Hello%20StudioBox%2C%20I%20would%20like%20to%20discuss%20a%20new%20software%20project.",
        },
        {
          title: "Email",
          description: "Best channel to share technical context and product materials.",
          label: "Send email",
          href: "mailto:contact@studiobox.dev?subject=New%20project%20with%20StudioBox",
        },
      ],
      checklist: [
        "Initial reply within one business day",
        "Focused technical diagnosis",
        "Roadmap with clear delivery phases",
      ],
    },
    footer: {
      summary:
        "StudioBox is a software house specialized in digital solutions, custom apps and enterprise-grade platforms.",
      navigation: [
        { label: "Solutions", href: "#solutions" },
        { label: "Process", href: "#process" },
        { label: "Cases", href: "#cases" },
        { label: "Contact", href: "#contact" },
      ],
      legal: "(c) 2026 StudioBox. All rights reserved.",
    },
  },
};
