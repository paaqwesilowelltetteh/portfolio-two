export interface ProjectItem {
  id: string
  name: string
  tagline: string
  description: string
  myRole: string
  teamSize?: string
  technologies: string[]
  impact: string
  workPoints: string[]
  liveUrl?: string
  cmsUrl?: string
  githubUrl?: string
  image: string
  featured: boolean
  isOpenSource?: boolean
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  description: string
  responsibilities: string[]
  highlight?: string
  technologies: string[]
}

export interface SkillCategory {
  category: string
  description: string
  skills: string[]
}

export const personalInfo = {
  name: 'Enoch Tetteh',
  title: 'Full-Stack Software Developer | Backend & Laravel Specialist',
  headline: 'Building scalable backend systems, robust APIs, payment integrations, and modern web applications.',
  bio: 'I am a software developer with 6+ years of professional experience building production web applications, APIs, payment systems, content platforms, and business solutions. My strongest area is backend engineering with PHP and Laravel, but I work across the full stack and have experience building modern interfaces with Vue.js, Nuxt, TypeScript, and Tailwind CSS.',
  location: 'Ghana',
  yearsOfExperience: '6+',
  email: 'mrenochtetteh@outlook.com',
  phones: ['+233 241372895', '+233 204152063'],
  github: 'https://github.com/paaqwesilowelltetteh',
  linkedin: 'https://www.linkedin.com/in/enoch-tetteh-b1b6371bb/',
  portfolioUrl: 'https://enoch-portfolio.vercel.app/',
  cvPath: '/Enoch_Tetteh_CV.pdf',
  profileImage: '/images/enoch-tetteh-profile-2.jpg',
  profileImageAlt: 'Enoch Tetteh — Full-Stack Software Developer',
}

export const impactStats = [
  {
    value: '6+',
    label: 'Years Experience',
    subtext: 'Building production software & APIs',
  },
  {
    value: '10,000+',
    label: 'Pebble Subscribers',
    subtext: 'Digital content & streaming platform',
  },
  {
    value: '5',
    label: 'Developers Led',
    subtext: 'Technical lead on Traceable project',
  },
  {
    value: '5',
    label: 'SMEs Supported',
    subtext: 'USAID-sponsored agricultural traceability',
  },
]

export const engineeringPrinciples = [
  { step: '01', name: 'Requirement', desc: 'Understanding the core business problem, constraints, and stakeholder needs.' },
  { step: '02', name: 'Specification', desc: 'Authoring detailed technical specifications and data contracts.' },
  { step: '03', name: 'Architecture', desc: 'Designing decoupled, resilient, and scalable system boundaries.' },
  { step: '04', name: 'Database', desc: 'Relational data modeling, schema indexing, and ACID transaction safety.' },
  { step: '05', name: 'API', desc: 'Crafting clean, predictable, and secure RESTful endpoints.' },
  { step: '06', name: 'Implementation', desc: 'Writing clean, maintainable, and type-safe code across the stack.' },
  { step: '07', name: 'Deployment', desc: 'Automated releases, Linux server tuning, and process supervisor config.' },
  { step: '08', name: 'Monitoring', desc: 'Observing production logs, queue latency, and error tracing.' },
  { step: '09', name: 'Improvement', desc: 'Iterative performance optimization, caching, and technical refactoring.' },
]

export const servicesWhatIDo = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Specialized backend architecture using PHP and Laravel with robust design patterns, secure authentication, and scalable service layers.',
    technologies: ['PHP', 'Laravel', 'REST APIs', 'Application Architecture', 'Authentication', 'Authorization'],
  },
  {
    id: 'api-integrations',
    title: 'API & Integrations',
    description: 'Designing RESTful APIs and connecting mission-critical external services, webhooks, and payment infrastructure.',
    technologies: ['RESTful APIs', 'Webhooks', 'Payment Integrations', 'Third-Party Services', 'API Authentication'],
  },
  {
    id: 'database',
    title: 'Database & Data Architecture',
    description: 'Relational database schema modeling, query optimization, data integrity enforcement, and transaction safety in MySQL.',
    technologies: ['MySQL', 'Relational Database Design', 'Complex Business Models', 'Data Integrity', 'Transactions'],
  },
  {
    id: 'distributed',
    title: 'Distributed Processing',
    description: 'Asynchronous task offloading, Redis key-value caching, delayed jobs, event-driven broadcasting, and queue pipelines.',
    technologies: ['Redis', 'Queues', 'Jobs', 'Events', 'Background Processing'],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Building reactive, server-side rendered interfaces and dashboards with Vue 3, Nuxt 4, TypeScript, Tailwind CSS, and Blade.',
    technologies: ['Vue.js', 'Nuxt', 'Nuxt 4', 'TypeScript', 'Tailwind CSS', 'Blade'],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Operations',
    description: 'Configuring and maintaining production Linux environments, Nginx web servers, high-concurrency FrankenPHP/Octane, and process supervisors.',
    technologies: ['Linux (Ubuntu)', 'Nginx', 'DigitalOcean', 'AWS', 'FrankenPHP', 'Laravel Octane', 'PM2', 'Supervisor'],
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'agrocenta-pebbles',
    role: 'Software Developer',
    company: 'AgroCenta / Pebbles Inc.',
    period: 'April 2021 – Present',
    location: 'Ghana',
    description: 'Building and maintaining production web applications, high-throughput Laravel APIs, payment systems, streaming platforms, and enterprise solutions.',
    responsibilities: [
      'Contributed to the engineering and development of production web applications and backend systems in Laravel.',
      'Designed and implemented secure RESTful APIs consumed by mobile applications and Nuxt frontends.',
      'Architected relational database schemas and complex business models in MySQL with strict transaction integrity.',
      'Integrated African payment gateways (Paystack, Hubtel, MTN Mobile Money) for automated collections and disbursements.',
      'Implemented distributed caching, queue workers, and background processing with Redis and Laravel Queues.',
      'Engineered real-time features and WebSockets for dynamic user feedback and streaming metrics.',
      'Developed modern frontends and admin portals using Vue.js, Nuxt, and TypeScript with Tailwind CSS.',
      'Configured Linux (Ubuntu) servers, Nginx reverse proxies, Laravel Octane, and FrankenPHP for high concurrency.',
      'Authored technical specifications and architectural documentation for multi-service applications.',
      'Monitored production infrastructure, debugged complex system errors, and ensured high uptime.',
    ],
    highlight: 'Led a team of 5 developers to build Traceable for 5 SMEs sponsored by USAID.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'Nuxt', 'TypeScript', 'MySQL', 'Redis', 'Nginx', 'FrankenPHP', 'Paystack', 'Linux'],
  },
  {
    id: 'weija-gbawe',
    role: 'Programming Assistant',
    company: 'Weija-Gbawe Municipal Assembly',
    period: 'September 2019 – April 2021',
    location: 'Ghana',
    description: 'Developed and supported internal software solutions, database systems, and administrative automation workflows.',
    responsibilities: [
      'Built backend modules and internal utilities with PHP and Laravel.',
      'Assisted in designing relational databases and managing structured municipal data.',
      'Collaborated with administrative teams to translate operational requirements into functional software tools.',
      'Maintained existing internal applications and assisted staff with software troubleshooting.',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML/CSS'],
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'pebble',
    name: 'Pebble',
    tagline: 'Digital Content & Streaming Platform (10,000+ Subscribers)',
    description: 'A digital content and streaming platform supporting podcasts, audio content, movies, series, creators, subscriptions, and premium content experiences.',
    myRole: 'Software Developer (Backend & Full-Stack)',
    technologies: [
      'PHP',
      'Laravel',
      'Vue.js',
      'Nuxt',
      'TypeScript',
      'MySQL',
      'Redis',
      'Laravel Octane',
      'FrankenPHP',
      'Paystack',
      'WebSockets',
      'Nginx',
      'Linux',
    ],
    impact: '10,000+ active subscribers streaming content and creators managing monetized channels.',
    workPoints: [
      'Contributed to the engineering of Laravel backend APIs and high-concurrency streaming endpoints.',
      'Implemented subscription billing, creator earnings calculation, and automated payout disbursements.',
      'Built queue-based media processing workflows for large video and audio uploads.',
      'Optimized content delivery performance using Redis caching and Laravel Octane / FrankenPHP.',
      'Built responsive interfaces and content management dashboards in Nuxt and TypeScript.',
    ],
    liveUrl: 'http://trypebble.com',
    cmsUrl: 'http://cms.trypebble.com',
    image: '/images/pebble-thumbnail.jpg',
    featured: true,
  },
  {
    id: 'traceable',
    name: 'Traceable',
    tagline: 'Agricultural Traceability Solution for USAID-Sponsored SMEs',
    description: 'A comprehensive supply chain traceability platform developed for 5 agricultural SMEs sponsored by USAID, tracking commodities from farm-level collection to export.',
    myRole: 'Software Developer / Technical Lead',
    teamSize: 'Led a team of 5 developers',
    technologies: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'Vue.js', 'Redis', 'Linux'],
    impact: 'Enabled 5 USAID-backed agricultural SMEs to ensure verifiable supply chain compliance and commodity provenance.',
    workPoints: [
      'Led a team of 5 developers through full software development lifecycle from requirements to deployment.',
      'Authored technical specifications and designed relational database architecture.',
      'Designed and developed core RESTful APIs for commodity batch tracking and audit logs.',
      'Coordinated technical deliverables and collaborated closely with key project stakeholders.',
    ],
    image: '/images/traceable-thumbnail.jpg',
    featured: true,
  },
  {
    id: 'nuxt-bearer-auth',
    name: 'Nuxt Bearer Auth',
    tagline: 'Open-Source Authentication Package for Nuxt 4',
    description: 'An open-source Nuxt authentication package designed to simplify bearer-token authentication in Nuxt applications by keeping API tokens securely on the server with Redis-backed sessions and HTTP-only cookies.',
    myRole: 'Creator & Maintainer',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Redis', 'Nitro', 'Node.js', 'Open Source'],
    impact: 'Provides Nuxt developers with a turnkey, zero-token-leakage authentication layer for bearer-token backend APIs.',
    workPoints: [
      'Identified the common SPA vulnerability of storing bearer tokens in browser localStorage.',
      'Architected a 4-tier token isolation model (Browser Cookie ↔ Nuxt Server ↔ Redis ↔ Backend API).',
      'Authored complete TypeScript composables (useBearerAuth), Nitro route handlers, and SSR session hydrators.',
      'Published and maintained open-source developer documentation and interactive playground.',
    ],
    githubUrl: 'https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth',
    image: '/images/open-source-thumbnail.jpg',
    featured: true,
    isOpenSource: true,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend Engineering',
    description: 'Core backend specialization with deep expertise in the PHP and Laravel ecosystem.',
    skills: [
      'PHP',
      'Laravel',
      'REST APIs',
      'Laravel Queues',
      'Jobs & Workers',
      'Events & Listeners',
      'Webhooks',
      'Authentication',
      'Authorization',
    ],
  },
  {
    category: 'Frontend & UI',
    description: 'Modern component-driven frontend development with strong typing.',
    skills: [
      'Vue.js (Vue 3)',
      'Nuxt (Nuxt 4)',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Blade',
      'Vite',
    ],
  },
  {
    category: 'Database & Caching',
    description: 'Data modeling, transaction management, and low-latency storage.',
    skills: [
      'MySQL',
      'Relational Database Design',
      'Redis',
      'Query Optimization',
      'Data Integrity',
    ],
  },
  {
    category: 'Infrastructure & Runtime',
    description: 'Production server configuration, deployment, and high-performance execution.',
    skills: [
      'Linux (Ubuntu)',
      'Nginx',
      'DigitalOcean',
      'AWS',
      'FrankenPHP',
      'Laravel Octane',
      'Supervisor',
      'PM2',
    ],
  },
  {
    category: 'Payments & Integrations',
    description: 'African and global payment gateways and webhook processors.',
    skills: [
      'Paystack',
      'MTN Mobile Money',
      'Hubtel',
      'Payment Verification',
      'Collections & Disbursements',
      'Webhooks Processing',
    ],
  },
  {
    category: 'Architecture & Practices',
    description: 'Engineering methodologies for maintainable, long-lived codebases.',
    skills: [
      'Clean Architecture',
      'SOLID Principles',
      'API Design',
      'Database Modeling',
      'Technical Specifications',
      'Technical Documentation',
    ],
  },
  {
    category: 'Tools & Workflow',
    description: 'Daily developer tooling, version control, and package managers.',
    skills: [
      'Git',
      'GitHub',
      'Composer',
      'npm',
      'pnpm',
      'Postman',
      'VS Code',
    ],
  },
]

export const education = {
  institution: 'Pentecost University',
  degree: 'BSc. Information Technology',
  classification: 'Second Class Honours',
  graduationYear: '2019',
  location: 'Ghana',
}
