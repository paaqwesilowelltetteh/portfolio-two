export interface ProjectItem {
  id: string
  name: string
  category: 'Production' | 'Open Source' | 'Technical Lead' | 'Government' | 'Freelance' | 'Internal System'
  categoryType: 'streaming' | 'developer-tool' | 'enterprise' | 'civic' | 'communication' | 'inventory'
  tagline: string
  shortDescription: string
  overview: string
  myRole: string
  teamSize?: string
  technologies: string[]
  impact?: string
  majorFeatures?: string[]
  workPoints: string[]
  liveUrl?: string
  cmsUrl?: string
  githubUrl?: string
  image?: string
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
  profileImage: '/images/pi1.png',
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
    category: 'Production',
    categoryType: 'streaming',
    tagline: 'Digital Content & Streaming Platform (10,000+ Subscribers)',
    shortDescription: 'Digital content and streaming platform supporting podcasts, movies, audio, series, subscriptions, and creator monetization for 10,000+ subscribers.',
    overview: 'Pebble is a full-featured digital media and streaming platform tailored for creators and audiences, supporting audio content, podcasts, movies, serial video, subscriptions, and pay-per-view experiences with automated creator earnings distribution.',
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
    impact: '10,000+ active subscribers streaming digital media and creators managing monetized channels.',
    majorFeatures: [
      'Podcast & audio streaming player with playlist management',
      'Video and movie on-demand delivery infrastructure',
      'Subscription billing, creator earnings calculation & automated payouts',
      'Large media upload workflows with queue-based transcoding pipelines',
      'Content discovery feeds and personalized recommendation engines',
      'Real-time streaming metrics and live listener interactions via WebSockets',
    ],
    workPoints: [
      'Contributed to the engineering of high-concurrency Laravel backend REST APIs and streaming endpoints.',
      'Implemented subscription billing, creator revenue calculations, and automated Paystack payout disbursements.',
      'Built queue-based media processing workflows for large video and audio file uploads.',
      'Optimized endpoint throughput using Redis caching, Laravel Octane, and FrankenPHP on Linux servers.',
      'Developed responsive Nuxt interfaces and content management administrative portals in TypeScript.',
    ],
    liveUrl: 'http://trypebble.com',
    cmsUrl: 'http://cms.trypebble.com',
    image: '/images/pebble-thumbnail.png',
    featured: true,
  },
  {
    id: 'nuxt-bearer-auth',
    name: 'Nuxt Bearer Auth',
    category: 'Open Source',
    categoryType: 'developer-tool',
    tagline: 'Server-Side Authentication Infrastructure for Nuxt 4',
    shortDescription: 'An open-source Nuxt authentication package that simplifies bearer-token authentication by keeping tokens in server Redis sessions and providing secure HTTP-only cookies.',
    overview: 'Nuxt Bearer Auth eliminates the common SPA security vulnerability of storing sensitive API bearer tokens in browser localStorage. It provides a turnkey 4-tier token isolation architecture (Browser Cookie ↔ Nuxt Server ↔ Redis ↔ Backend API) with synchronous SSR state hydration and silent token refresh.',
    myRole: 'Creator & Maintainer',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Redis', 'Nitro', 'Node.js', 'Tailwind CSS', 'Open Source'],
    impact: 'Empowers Nuxt developers to build zero-trust, SSR-aware authentication layers for any bearer-token API (Laravel Sanctum, FastAPI, Django, Express).',
    majorFeatures: [
      'Zero token exposure to browser JavaScript / localStorage',
      'Server-side Redis session storage with configurable TTL',
      'Synchronous SSR authentication state hydration without layout flicker',
      'Silent token refresh executed entirely server-side',
      'Multi-device session tracking and remote revocation endpoints',
      'Integrated CSRF protection via nuxt-csurf across mutating requests',
    ],
    workPoints: [
      'Identified the common SPA vulnerability of storing bearer tokens in browser memory/storage.',
      'Architected 4-tier token isolation model and authored full TypeScript composables (useBearerAuth).',
      'Engineered Nitro server handlers, session helpers, and Redis schema indexing.',
      'Authored complete developer documentation, architecture sequence diagrams, and live playground.',
    ],
    liveUrl: 'https://nuxt-bearer-auth.vercel.app/',
    githubUrl: 'https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth',
    image: '/images/nuxt-bearer-auth.png',
    featured: true,
    isOpenSource: true,
  },
  {
    id: 'traceable',
    name: 'Traceable',
    category: 'Technical Lead',
    categoryType: 'enterprise',
    tagline: 'Agricultural Traceability Solution for USAID-Sponsored SMEs',
    shortDescription: 'Comprehensive supply chain traceability platform developed for 5 agricultural SMEs sponsored by USAID, enabling verifiable commodity tracking from farm collection to export.',
    overview: 'Traceable was developed under USAID sponsorship to provide end-to-end supply chain provenance tracking for 5 agricultural small and medium enterprises (SMEs), capturing origin farm data, quality grading, commodity processing milestones, and export audit trails.',
    myRole: 'Software Developer / Technical Lead',
    teamSize: 'Led a team of 5 developers',
    technologies: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'Vue.js', 'Redis', 'Linux'],
    impact: 'Enabled 5 USAID-backed agricultural SMEs to ensure verifiable supply chain compliance, international export certification, and provenance records.',
    majorFeatures: [
      'Farm-to-export commodity batch tracking and milestone recording',
      'Quality inspection, moisture level, and grade recording modules',
      'Unique batch identification and traceability chain audits',
      'Stakeholder reporting and export certification compliance exports',
      'Multi-tenant SME data segregation with secure access control',
    ],
    workPoints: [
      'Led a team of 5 developers across the complete software development lifecycle from requirements to deployment.',
      'Authored technical specifications and designed relational database architecture in MySQL.',
      'Architected and built core RESTful APIs for commodity lifecycle events and audit logging.',
      'Coordinated technical deliverables and collaborated closely with key project stakeholders and SME leaders.',
    ],
    // image: '/images/traceable.png',
    featured: true,
  },
  {
    id: 'wgma-website',
    name: 'Weija-Gbawe Municipal Assembly Website',
    category: 'Government',
    categoryType: 'civic',
    tagline: 'Official Municipal Web Portal & Citizen Digital Services',
    shortDescription: 'Official government web platform and digital services portal for the Weija-Gbawe Municipal Assembly, providing citizens with civic information, departments, and public services.',
    overview: 'The official web portal for the Weija-Gbawe Municipal Assembly (WGMA) serves as the primary digital gateway for the municipality, communicating government announcements, public projects, departmental directories, revenue services, and civic resources.',
    myRole: 'Programming Assistant / Web Developer',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML/CSS', 'Nginx'],
    impact: 'Modernized public-sector digital service delivery and public information accessibility for municipal citizens, assembly members, and business stakeholders.',
    majorFeatures: [
      'Municipal news & public notice broadcasting system',
      'Departmental directories, service guides, and fee structures',
      'Administrative content management workflows for municipal officers',
      'Citizen feedback and civic inquiry routing channels',
    ],
    workPoints: [
      'Contributed to backend development and website maintenance using PHP and Laravel.',
      'Structured and maintained relational database content for departmental records and notices.',
      'Implemented administrative publishing workflows and public citizen information interfaces.',
      'Maintained server uptime and assisted municipal departments with digital services support.',
    ],
    liveUrl: 'https://wgma.gov.gh',
    image: '/images/wgma-website.png',
    featured: true,
  },
  {
    id: 'abnma-website',
    name: 'Ablekuma North Municipal Assembly',
    category: 'Freelance',
    categoryType: 'civic',
    tagline: 'Government Municipal Web Platform & Civic Portal',
    shortDescription: 'Freelance public-sector web project developed for the Ablekuma North Municipal Assembly to deliver official civic communications, departments, and digital services.',
    overview: 'A public-sector web platform created for the Ablekuma North Municipal Assembly (ABNMA), establishing an authoritative online presence for municipal administration, citizen information, public notifications, and community development updates.',
    myRole: 'Freelance Software Developer',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML/CSS', 'Web Development'],
    impact: 'Established a reliable, accessible municipal web portal for community residents, local businesses, and government stakeholders.',
    majorFeatures: [
      'Civic announcements, press releases, and executive municipal updates',
      'Municipal permit and service information procedures',
      'Departmental directory and official contact channels',
      'Responsive, accessible civic layout for mobile and desktop access',
    ],
    workPoints: [
      'Developed and deployed the public municipal web portal.',
      'Designed structured navigation for civic services, community initiatives, and public notices.',
      'Structured content layout for municipal departments, leadership, and public reports.',
      'Ensured responsive performance across mobile and desktop devices.',
    ],
    liveUrl: 'https://abnma.gov.gh/',
    image: '/images/abnma-website.png',
    featured: true,
  },
  {
    id: 'wgma-bulk-sms',
    name: 'WGMA Bulk SMS System',
    category: 'Internal System',
    categoryType: 'communication',
    tagline: 'Municipal Stakeholder & Citizen Broadcast Platform',
    shortDescription: 'A targeted broadcast communication system developed for the Weija-Gbawe Municipal Assembly to send bulk SMS notifications to citizens, assembly members, and stakeholders.',
    overview: 'The WGMA Bulk SMS System was engineered to streamline urgent municipal communications, assembly convocation notices, community advisories, and revenue notifications to segmented contact groups across the municipality.',
    myRole: 'Programming Assistant / Backend Developer',
    technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Queue Processing'],
    impact: 'Enabled rapid, segmented SMS notifications for assembly convocations, community advisories, and civic notices across the municipality.',
    majorFeatures: [
      'Contact group management (Assembly members, zonal staff, citizens, traders)',
      'Scheduled & instant bulk SMS broadcasting with recipient segmentation',
      'Delivery status logging and transmission audit records',
      'Message template management for recurring civic advisories and revenue notices',
    ],
    workPoints: [
      'Developed backend messaging controllers and recipient segmentation logic in Laravel.',
      'Designed MySQL relational schemas for contact groups, message templates, and dispatch logs.',
      'Built queue-backed batch processing to handle bulk message dispatches efficiently.',
      'Collaborated with administrative staff to refine operational messaging workflows.',
    ],
    featured: true,
  },
  {
    id: 'wgma-inventory',
    name: 'WGMA Inventory Management System',
    category: 'Internal System',
    categoryType: 'inventory',
    tagline: 'Municipal Asset & Equipment Management Solution',
    shortDescription: 'An internal inventory and asset management application engineered for the Weija-Gbawe Municipal Assembly to track municipal equipment, stock levels, and departmental allocations.',
    overview: 'An internal enterprise system built to manage and audit physical municipal assets, office inventory, and equipment allocations across administrative departments within the Weija-Gbawe Municipal Assembly.',
    myRole: 'Programming Assistant / Backend Developer',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Relational Database Design', 'Blade'],
    impact: 'Streamlined municipal asset tracking, reduced equipment misplacement, and provided transparent departmental inventory auditing.',
    majorFeatures: [
      'Asset categorization, tagging, serial number indexing, and status tracking',
      'Departmental requisition, approval, and equipment issuance workflows',
      'Low-stock alerts, consumable monitoring, and reorder tracking',
      'Comprehensive audit trails and inventory reconciliation reports',
    ],
    workPoints: [
      'Designed normalized database tables to model assets, departments, requisitions, and audit logs.',
      'Implemented backend business logic for stock adjustments, issuance approvals, and returns.',
      'Built administrative interfaces for asset managers to generate departmental inventory reports.',
      'Participated in user acceptance testing and staff orientation.',
    ],
    featured: true,
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
