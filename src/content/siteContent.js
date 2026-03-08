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
        { label: "Inicio", to: "/#home" },
        { label: "Solucoes", to: "/#solutions" },
        { label: "Processo", to: "/#process" },
        { label: "Cases", to: "/#cases" },
        { label: "Contato", to: "/#contact" },
      ],
      productsMenu: {
        label: "Produtos",
        items: [{ label: "Dagger Dice", to: "/products/dagger-dice" }],
      },
      primaryCta: {
        label: "Iniciar projeto",
        to: "/#contact",
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
    privacyPolicy: {
      pretitle: "Dagger Dice",
      title: "Politica de Privacidade",
      description:
        "Politica de privacidade do aplicativo Dagger Dice com operacao local e sem coleta de dados em servidores externos.",
      sections: [
        {
          title: "1. Visao Geral",
          paragraphs: [
            "Dagger Dice e um aplicativo auxiliar para o jogo de RPG de mesa Daggerheart. E uma ferramenta local para rastrear rolagens de dados, fichas de Esperanca e Medo, e o historico de sessao do seu grupo.",
            "Nao coletamos, transmitimos nem armazenamos nenhuma informacao pessoal em servidores externos.",
          ],
        },
        {
          title: "2. Dados Armazenados no Seu Dispositivo",
          paragraphs: [
            "Todos os dados sao armazenados exclusivamente no seu dispositivo usando o sistema de armazenamento local do Android (SharedPreferences). Isso inclui:",
            "Esses dados nunca saem do seu dispositivo. Eles nao sao enviados para nenhum servidor, servico de nuvem ou terceiro. Desinstalar o aplicativo remove todos os dados armazenados.",
          ],
          bullets: [
            "Nomes de jogadores que voce inserir",
            "Nomes de grupo/sessao que voce criar",
            "Contagem de fichas de Esperanca e Medo",
            "Historico de rolagens da sessao atual",
            "Sua preferencia de idioma",
          ],
        },
        {
          title: "3. Sem Acesso a Internet",
          paragraphs: [
            "Dagger Dice nao requer nem utiliza conexao com a internet. Nenhuma requisicao de rede e feita durante o uso normal do aplicativo.",
          ],
        },
        {
          title: "4. Sem Analise ou Rastreamento",
          paragraphs: [
            "Nao utilizamos SDKs de analise, ferramentas de relatorio de falhas, redes de publicidade ou bibliotecas de rastreamento. Nenhum dado de uso e coletado ou monitorado.",
          ],
        },
        {
          title: "5. Sem Conta Necessaria",
          paragraphs: [
            "Dagger Dice nao exige que voce crie conta, faca login ou forneca informacoes pessoais como nome, e-mail ou numero de telefone.",
          ],
        },
        {
          title: "6. Privacidade de Criancas",
          paragraphs: [
            "Dagger Dice nao coleta intencionalmente nenhuma informacao de criancas menores de 13 anos. Como nenhum dado pessoal e coletado, o aplicativo e seguro para usuarios de todas as idades.",
          ],
        },
        {
          title: "7. Servicos de Terceiros",
          paragraphs: [
            "Dagger Dice nao se integra com servicos de terceiros, redes sociais, processadores de pagamento ou plataformas de publicidade.",
          ],
        },
        {
          title: "8. Alteracoes nesta Politica",
          paragraphs: [
            "Se atualizarmos esta politica de privacidade, a nova versao sera disponibilizada nesta pagina. O uso continuado do aplicativo apos qualquer alteracao constitui aceitacao da politica atualizada.",
          ],
        },
        {
          title: "9. Contato",
          paragraphs: [
            "Se voce tiver duvidas ou preocupacoes sobre esta politica de privacidade, entre em contato:",
          ],
          email: "contact@studiobox101.com",
        },
      ],
      lastUpdatedLabel: "Ultima atualizacao",
      lastUpdatedValue: "March 8, 2026",
    },
    footer: {
      summary:
        "StudioBox e uma softhouse especializada em solucoes digitais, aplicativos e plataformas sob medida.",
      navigation: [
        { label: "Solucoes", to: "/#solutions" },
        { label: "Processo", to: "/#process" },
        { label: "Cases", to: "/#cases" },
        { label: "Contato", to: "/#contact" },
        { label: "Dagger Dice", to: "/products/dagger-dice" },
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
        { label: "Home", to: "/#home" },
        { label: "Solutions", to: "/#solutions" },
        { label: "Process", to: "/#process" },
        { label: "Cases", to: "/#cases" },
        { label: "Contact", to: "/#contact" },
      ],
      productsMenu: {
        label: "Products",
        items: [{ label: "Dagger Dice", to: "/products/dagger-dice" }],
      },
      primaryCta: {
        label: "Start project",
        to: "/#contact",
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
    privacyPolicy: {
      pretitle: "Dagger Dice",
      title: "Privacy Policy",
      description:
        "Privacy policy for the Dagger Dice app, built as a local-first experience with no personal data collection on external servers.",
      sections: [
        {
          title: "1. Overview",
          paragraphs: [
            "Dagger Dice is a companion app for the Daggerheart tabletop roleplaying game. It is a local-only tool designed to track dice rolls, Hope and Fear tokens, and session history for your group.",
            "We do not collect, transmit, or store any personal information on external servers.",
          ],
        },
        {
          title: "2. Data Stored on Your Device",
          paragraphs: [
            "All data is stored exclusively on your device using the Android local storage system (SharedPreferences). This includes:",
            "This data never leaves your device. It is not sent to any server, cloud service, or third party. Uninstalling the app removes all stored data.",
          ],
          bullets: [
            "Player names you enter",
            "Party/session names you create",
            "Hope and Fear token counts",
            "Dice roll history for the current session",
            "Your chosen language preference",
          ],
        },
        {
          title: "3. No Internet Access Required",
          paragraphs: [
            "Dagger Dice does not require or use an internet connection. No network requests are made during normal use of the app.",
          ],
        },
        {
          title: "4. No Analytics or Tracking",
          paragraphs: [
            "We do not use analytics SDKs, crash reporting tools, advertising networks, or tracking libraries. No data about your usage is collected or monitored.",
          ],
        },
        {
          title: "5. No Account Required",
          paragraphs: [
            "Dagger Dice does not require you to create an account, sign in, or provide personal information such as name, email, or phone number.",
          ],
        },
        {
          title: "6. Children's Privacy",
          paragraphs: [
            "Dagger Dice does not knowingly collect information from children under the age of 13. Since no personal data is collected, the app is safe for users of all ages.",
          ],
        },
        {
          title: "7. Third-Party Services",
          paragraphs: [
            "Dagger Dice does not integrate with third-party services, social networks, payment processors, or advertising platforms.",
          ],
        },
        {
          title: "8. Changes to This Policy",
          paragraphs: [
            "If we update this privacy policy, the new version will be made available on this page. Continued use of the app after any changes constitutes acceptance of the updated policy.",
          ],
        },
        {
          title: "9. Contact",
          paragraphs: [
            "If you have any questions or concerns about this privacy policy, please contact us at:",
          ],
          email: "contact@studiobox101.com",
        },
      ],
      lastUpdatedLabel: "Last updated",
      lastUpdatedValue: "March 8, 2026",
    },
    footer: {
      summary:
        "StudioBox is a software house specialized in digital solutions, custom apps and enterprise-grade platforms.",
      navigation: [
        { label: "Solutions", to: "/#solutions" },
        { label: "Process", to: "/#process" },
        { label: "Cases", to: "/#cases" },
        { label: "Contact", to: "/#contact" },
        { label: "Dagger Dice", to: "/products/dagger-dice" },
      ],
      legal: "(c) 2026 StudioBox. All rights reserved.",
    },
  },
};
