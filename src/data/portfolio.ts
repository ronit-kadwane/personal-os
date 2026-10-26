// ============================================================
// PORTFOLIO DATA — Verified Actual Information
// Source: Ronit Kadwane Resume (Updated & Verified)
// ============================================================

export const personalInfo = {
  name: 'Ronit Kadwane',
  title: 'Associate Staff Engineer & Principal Full-Stack Architect',
  email: 'kadwane.ronit@gmail.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 9824337236',
  location: 'Surat, India • Open to Global Remote',
  website: 'https://github.com/ronit-kadwane',
  availability: true,
  availabilityText: 'Available for Architecture & Engineering',
  bio: 'Seasoned software professional with over 10 years of consolidated expertise designing and architecting high-scale applications and orchestrating resilient end-to-end production systems. Active practitioner of autonomous AI agent orchestration and prompt-engineered vibe development to deliver production-grade applications. Specialized in mobile and web platforms across React, React-Native, Node.js, and distributed cloud services for US, European, and global tech leaders.',
  roles: [
    'Associate Staff Engineer',
    'Principal Full-Stack Architect',
    'Autonomous AI Agent Engineer',
    'React & React-Native Specialist',
    'Node.js & Cloud Systems Lead',
    'Production Systems Architect',
  ],
  socials: {
    github: 'https://github.com/ronit-kadwane',
    linkedin: 'https://linkedin.com/in/ronit-kadwane-981017b8',
    stackoverflow: 'https://stackoverflow.com/users/5057428/ronit-kadwane',
    email: 'mailto:kadwane.ronit@gmail.com',
    phone: 'tel:+919824337236',
  },
  resumeUrl: '/resume.pdf',
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'mobile' | 'fullstack' | 'enterprise';
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubStars?: number;
  featured: boolean;
  size: 'large' | 'medium' | 'small';
  gradient: string;
};

export const projects: Project[] = [
  {
    id: 'karm-bungalows',
    title: 'Karm Bungalows — Society Platform & Interactive Map',
    description:
      'Autonomous AI agent-built society portal with interactive 147-plot map, resident directory, and 4-language i18n',
    longDescription:
      'Engineered 100% autonomously via AI agent orchestration and structured skill prompting as an independent personal project. Features a live residential society platform with an interactive SVG plot coordinate map (147 clickable hotspots), multi-parameter search directory (plot, vehicle, profession), digital notice board, and 4 regional languages (English, Hindi, Gujarati, Marathi).',
    techStack: [
      'Next.js 16',
      'React 19',
      'AI Agent Orchestration',
      'Interactive SVG Map',
      'Multilingual i18n',
      'Tailwind CSS',
    ],
    category: 'fullstack',
    metrics: [
      '100% AI Agent Built',
      'Live in Production',
      '147 Interactive Plots',
      '4 Regional Languages',
    ],
    liveUrl: 'https://karm-bungalows.vercel.app/',
    featured: true,
    size: 'large',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
  },
  {
    id: 'digiqc',
    title: 'DigiQC — Mobile App, CMS & Server',
    description:
      'Digital Quality Check management system with location radius verification and offline mode',
    longDescription:
      'Engineered a comprehensive Digital Quality Check management platform providing stage-by-stage project history and inspection workflows for Architects, Civil Engineers, and Interior Designers. Features geo-location verification restricting inspection submission to project radius, alongside seamless offline synchronization.',
    techStack: ['React-Native', 'ReactJS', 'NodeJS', 'feathersJS', 'MobX', 'CoreUI', 'MongoDB'],
    category: 'fullstack',
    metrics: ['Geo-fencing radius lock', 'Full offline sync', 'Multi-stage QA'],
    featured: true,
    size: 'large',
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
  },
  {
    id: 'chromecast-games',
    title: 'Chromecast Arcade Controllers',
    description:
      'Multi-game Chromecast sender controller application with real-time event streaming',
    longDescription:
      'Built Chromecast-supported arcade game controllers (sender app) communicating directly with receiver applications running on Chromecast devices across multiple games (Cast Games, Math Games, Hangman, Bingo). Dynamically renders game-specific controllers and streams bidirectional actions.',
    techStack: ['React-Native', 'Chromecast-SDK', 'JavaScript', 'Real-Time Events'],
    category: 'mobile',
    metrics: ['Multi-game support', 'Real-time sync', 'Dynamic controller UI'],
    featured: true,
    size: 'medium',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'video-streaming-apps',
    title: 'Video Streaming Apps (Joyce Meyer & PragerU)',
    description: 'High-performance video streaming mobile applications with Brightcove & JWPlayer',
    longDescription:
      'Developed high-traffic video streaming mobile applications featuring offline save-for-later capabilities and synchronized notes taking. Integrated Brightcove SDK, JWPlayer, NativeBase, and robust state management via MobX and Redux.',
    techStack: ['React-Native', 'Brightcove SDK', 'JWPlayer', 'MobX', 'Redux', 'NativeBase'],
    category: 'mobile',
    metrics: ['Offline video cache', 'Timestamped notes', 'Multi-SDK player'],
    featured: true,
    size: 'medium',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'financial-insights',
    title: 'Financial Profile Evaluation Module',
    description:
      'Core module evaluating client financial profiles to empower users with accurate financial insights',
    longDescription:
      'Designed and architected the financial evaluation module at Nagarro. Crafted high-throughput system evaluating complex client profiles, leveraging React-Native, React, NodeJS, and MongoDB to deliver reliable, accurate financial analytics.',
    techStack: ['React-Native', 'React', 'NodeJS', 'MongoDB', 'Architecture'],
    category: 'enterprise',
    metrics: ['High precision analytics', 'Scalable architecture', 'Enterprise resilience'],
    featured: true,
    size: 'medium',
    gradient: 'from-orange-500 to-rose-600',
  },
  {
    id: 'contactbook',
    title: 'Contactbook — G Suite Collaborative Platform',
    description:
      'Collaborative Gmail & Google Workspace contact sharing and co-editing web application',
    longDescription:
      'Automates the process of sharing and co-editing Gmail contacts across G Suite team members, featuring fine-grained permission controls, real-time collaboration, and centralized directory management.',
    techStack: ['ReactJS', 'MobX', 'feathersJS', 'MongoDB', 'Google APIs'],
    category: 'fullstack',
    metrics: ['G Suite integration', 'Collaborative co-editing', 'Secure syncing'],
    featured: false,
    size: 'small',
    gradient: 'from-pink-500 to-violet-600',
  },
  {
    id: 'los-alisos',
    title: 'Los Alisos — Resident & Unit Management',
    description: 'Resident portal for unit bookings, bill payments, and maintenance work orders',
    longDescription:
      'Comprehensive resident and unit management portal across web and mobile. Empowers residents to book units, settle utility bills, and generate maintenance work orders with full administrator back-office tracking.',
    techStack: ['ReactJS', 'React-Native', 'NodeJS', 'LoopBack', 'Node-RED', 'MongoDB'],
    category: 'fullstack',
    metrics: ['Unit booking engine', 'Automated billing', 'Work order tracking'],
    featured: false,
    size: 'small',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'refrens-workflow',
    title: 'Refrens — B2B Workflow & Invoicing Engine',
    description: 'Business network workflow tool handling invoices, expenditures, and quotations',
    longDescription:
      'Handled the workflow tool of the Refrens platform, powering quotation generation, invoice lifecycle management, and expenditure tracking for a rapidly growing network of businesses and freelancers.',
    techStack: ['JavaScript', 'React', 'NodeJS', 'MongoDB', 'B2B Workflows'],
    category: 'fullstack',
    metrics: ['Invoicing lifecycle', 'Quotation workflow', 'Expenditure tracker'],
    featured: false,
    size: 'small',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'android-libraries',
    title: 'Android Native Bridges & Libraries',
    description:
      'Native Android plugins to expose device features in hybrid React-Native, Ionic & Cordova',
    longDescription:
      'Developed custom native Android libraries and bridging plugins enabling hybrid technologies (React-Native, Ionic, Cordova) to seamlessly utilize low-level Android device capabilities with peak performance and reliability.',
    techStack: ['Android', 'Java', 'React-Native', 'Ionic', 'Cordova'],
    category: 'mobile',
    metrics: ['Native performance', 'Multi-framework bridge', 'Custom hardware access'],
    featured: false,
    size: 'small',
    gradient: 'from-violet-500 to-indigo-600',
  },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  startDate: string;
  endDate?: string;
  location: string;
  type: 'fulltime' | 'freelance' | 'contract' | 'education';
  description: string;
  highlights: string[];
  techStack: string[];
};

export const experience: Experience[] = [
  {
    id: 'nagarro',
    role: 'Associate Staff Engineer',
    company: 'Nagarro Software Pvt. Ltd',
    period: 'September 2021 – Present',
    startDate: '2021-09',
    location: 'Surat, India',
    type: 'fulltime',
    description:
      'Promoted from Senior Engineer to Associate Staff Engineer in February 2023. Taking charge of designing and architecting the core financial module.',
    highlights: [
      'Transitioned to Associate Staff Engineer in February 2023, driving system architecture and technical strategy',
      'Crafted and scaled the system that evaluates client profiles to empower users with accurate financial insights',
      'Leveraged React-Native, React, NodeJS, and MongoDB to engineer highly available and resilient production systems',
      'Mentored junior and senior engineers, driving best practices in code quality and system scalability',
    ],
    techStack: ['React-Native', 'React', 'NodeJS', 'MongoDB', 'System Architecture', 'JavaScript'],
  },
  {
    id: 'maven-agency',
    role: 'FullStack Developer',
    company: 'Maven Agency Pvt. Ltd.',
    period: 'December 2020 – September 2021',
    startDate: '2020-12',
    endDate: '2021-09',
    location: 'Surat, India',
    type: 'fulltime',
    description:
      'Handled South Africa-based enterprise client providing intelligent chatbots and user insights.',
    highlights: [
      'Assisted enterprise client in migrating legacy systems into modern JavaScript frameworks',
      'Built and optimized full-stack chatbot interfaces and backend telemetry pipelines',
      'Improved deployment efficiency and system maintainability through modernized codebase structure',
    ],
    techStack: ['JavaScript', 'React', 'NodeJS', 'ExpressJS', 'Legacy Migration', 'Git'],
  },
  {
    id: 'refrens',
    role: 'Product Engineer',
    company: 'Refrens Internet Pvt. Ltd.',
    period: 'March 2020 – November 2020',
    startDate: '2020-03',
    endDate: '2020-11',
    location: 'Surat, India',
    type: 'fulltime',
    description:
      'Owned the core workflow tool of the platform enabling businesses and freelancers to manage their financial operations.',
    highlights: [
      'Managed and scaled end-to-end workflow tools encompassing invoices, expenditures, and quotations',
      'Enhanced user experience and reduced latency across financial document generation',
      'Collaborated closely with product managers to deliver fast-turnaround customer-centric features',
    ],
    techStack: ['JavaScript', 'React', 'NodeJS', 'MongoDB', 'Financial Workflows'],
  },
  {
    id: 'logicwind',
    role: 'FullStack Developer',
    company: 'Logicwind',
    period: 'January 2016 – February 2020',
    startDate: '2016-01',
    endDate: '2020-02',
    location: 'Surat, India',
    type: 'fulltime',
    description:
      'Engineered diverse production systems spanning video streaming, Chromecast IoT gaming, QA management, resident portals, and cloud microservices.',
    highlights: [
      'DigiQC: Built digital quality check mobile application, CMS, and server with geolocation verification and offline capability',
      'Chromecast Gaming: Developed Chromecast arcade game controllers (sender/receiver model) for multiple games',
      'Streaming Video: Built media applications for Joyce Meyer Ministries & PragerU with offline saves and note taking',
      'Los Alisos & Contactbook: Delivered resident unit management portal and automated G Suite contact sharing tool',
      'Native & Cloud: Authored Android native libraries for React-Native/Ionic/Cordova, LoopBack nodes on Node-RED, and NodeJS AWS Lambda compute functions',
    ],
    techStack: [
      'ReactJS',
      'React-Native',
      'NodeJS',
      'feathersJS',
      'LoopBack',
      'Node-RED',
      'MongoDB',
      'AWS Lambda',
      'Android',
    ],
  },
  {
    id: 'narola',
    role: 'Software Engineer',
    company: 'Narola Infotech (P) LTD',
    period: 'June 2015 – September 2015',
    startDate: '2015-06',
    endDate: '2015-09',
    location: 'Surat, India',
    type: 'fulltime',
    description:
      'Developed native Android mobile applications for industrial cost calculation and e-commerce.',
    highlights: [
      'Developed cost calculation calculator mobile application of embroidery machines for Android',
      'Engineered modules for a native Android e-commerce mobile application',
    ],
    techStack: ['Android', 'Java', 'Mobile Development', 'Git'],
  },
  {
    id: 'education-scet',
    role: 'B.E. Computer Engineering',
    company: 'Sarvajanik College of Engineering & Technology',
    period: 'July 2011 – May 2015',
    startDate: '2011-07',
    endDate: '2015-05',
    location: 'Surat, India',
    type: 'education',
    description:
      'Graduated with Bachelor of Engineering in Computer Engineering with 7.16 / 10 CGPA.',
    highlights: [
      'Grade: 7.16 / 10',
      'Core focus on Data Structures, Algorithms, Software Architecture, and Database Systems',
    ],
    techStack: ['Computer Science', 'Algorithms', 'Data Structures', 'Java', 'DBMS'],
  },
];

export type Skill = {
  category: string;
  icon: string;
  items: Array<{ name: string; level: 'expert' | 'advanced' | 'proficient' }>;
};

export const skills: Skill[] = [
  {
    category: 'AI & Autonomous Development',
    icon: '🤖',
    items: [
      { name: 'AI Agent Orchestration', level: 'expert' },
      { name: 'Agent Skills & Prompt Design', level: 'expert' },
      { name: 'Autonomous Vibe Engineering', level: 'expert' },
      { name: 'Multi-Agent Architectures', level: 'advanced' },
      { name: 'LLM Tool Calling & Automation', level: 'expert' },
    ],
  },
  {
    category: 'Languages & Frameworks',
    icon: '⚡',
    items: [
      { name: 'JavaScript (ES6+)', level: 'expert' },
      { name: 'ReactJS', level: 'expert' },
      { name: 'NextJS', level: 'expert' },
      { name: 'React-Native', level: 'expert' },
      { name: 'NodeJS', level: 'expert' },
      { name: 'Android (Native)', level: 'advanced' },
      { name: 'HTML5 & CSS3', level: 'expert' },
    ],
  },
  {
    category: 'Backend & Cloud',
    icon: '☁️',
    items: [
      { name: 'ExpressJS', level: 'expert' },
      { name: 'feathersJS', level: 'expert' },
      { name: 'Loopback', level: 'advanced' },
      { name: 'AWS Lambda', level: 'advanced' },
      { name: 'Google Cloud Function', level: 'advanced' },
      { name: 'Firebase', level: 'advanced' },
      { name: 'MongoDB', level: 'expert' },
    ],
  },
  {
    category: 'Architecture & Design',
    icon: '🏗️',
    items: [
      { name: 'System Architecture', level: 'expert' },
      { name: 'Database Schema Design', level: 'expert' },
      { name: 'Production Engineering', level: 'expert' },
      { name: 'Scalability & Robustness', level: 'expert' },
      { name: 'Offline Sync Architectures', level: 'expert' },
      { name: 'REST API Design', level: 'expert' },
    ],
  },
  {
    category: 'Leadership & Tooling',
    icon: '🛠️',
    items: [
      { name: 'Technical Leadership', level: 'expert' },
      { name: 'Developer Mentorship', level: 'expert' },
      { name: 'Git & Version Control', level: 'expert' },
      { name: 'Jira & Agile Workflows', level: 'expert' },
      { name: 'Chromecast SDK', level: 'advanced' },
      { name: 'Node-RED', level: 'advanced' },
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

// Existing assumed testimonials removed per user instruction.
// Awaiting verified quotes from user.
export const testimonials: Testimonial[] = [];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  coverGradient: string;
};

// Existing assumed blog posts removed per user instruction.
// Awaiting verified blog publications from user.
export const blogPosts: BlogPost[] = [];
