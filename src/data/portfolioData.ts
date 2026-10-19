import { Project, TechCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Yohannes Tesfa',
  role: 'CS & FULL-STACK',
  titleKicker: 'FULL-STACK ENGINEER & INTERFACE ARCHITECT',
  heroName: 'Yohannes Tesfa',
  subRole: 'Senior Full-Stack Developer & UI Architect',
  location: 'Addis Ababa, Ethiopia',
  availability: 'Open for full-time & high-impact contracts',
  transmissionStatus: '[Q2 / Q3 2026 TRANSMISSION OPEN]',
  email: 'YohannesTesfa161616@gmail.com',
  github: 'https://github.com/YohannesTesfa-16',
  linkedin: 'https://linkedin.com/in/yohannestesfa',
  footerName: 'Yohannes Tesfa Ejigu',
  copyright: '© 2026 Yohannes Tesfa Yohannes. ALL RIGHTS RESERVED.'
};

export const PROJECTS: Project[] = [
  {
    id: 'evangadi-forum',
    number: '01',
    category: 'DISTRIBUTED STORAGE // INTERACTIVE PLATFORM',
    title: 'EVANGADI FORUM',
    headlineSubtitle: 'PLATFORM THAT MAKES INTERACTION EASIER',
    description:
      'A high-availability in-memory key-value database and interactive collaborative discussion platform designed for partition-tolerant environments requiring provable transactional consensus and rapid student-to-mentor knowledge exchange.',
    challengeOutcome:
      'Implemented zero-downtime Raft leader election with persistent WAL snapshots, achieving sub-millisecond p99 latency (<1.2ms) across multi-node clusters under 100k+ concurrent ops/sec.',
    tags: ['javascript', 'react.js', 'MySql', 'DataBase', 'Api'],
    image: '/src/assets/images/evangadi_forum_laptop_1792413477629.jpg',
    liveUrl: 'http://evangadiforum.tsedetech.com/',
    githubUrl: 'https://github.com/YohannesTesfa-16/evangadi-forum',
    architectureUrl: '#arch-evangadi',
    metrics: [
      { label: 'p99 Latency', value: '< 1.2ms' },
      { label: 'Throughput', value: '100k+ ops/sec' },
      { label: 'Uptime SLA', value: '99.999%' }
    ],
    highlights: [
      'Engineered state machine replication with Raft protocol in Node.js & Go routines.',
      'Designed a relational MySQL schema with indexing optimized for nested question-and-answer trees.',
      'Built reactive frontend UI with optimistic updates and client-side caching.'
    ]
  },
  {
    id: 'netflix-clone',
    number: '02',
    category: 'MEDIA STREAMING ARCHITECTURE',
    title: 'NETFLIX CLONE',
    description:
      'A Netflix-inspired cinematic streaming platform that brings modern media experiences to life through a sleek responsive interface, interactive movie cards, trailer preview player, and high-performance TMDB caching.',
    challengeOutcome:
      'Constructed modular media players with dynamic trailer embeds, lazy-loaded poster carousels with zero layout shifts, and sub-100ms API response time with a distributed Redis caching layer.',
    tags: ['React', 'Node.js', 'JavaScript', 'MySQL', 'TMDB API', 'Tailwind'],
    image: '/src/assets/images/netflix_clone_showcase_1792415338437.jpg',
    liveUrl: 'http://netclone.tsedetech.com/',
    githubUrl: 'https://github.com/YohannesTesfa-16/netflix-clone',
    architectureUrl: '#arch-netflix',
    metrics: [
      { label: 'Media Carousels', value: '12 Categories' },
      { label: 'Lighthouse Score', value: '98 / 100' },
      { label: 'CLS', value: '0.00' }
    ],
    highlights: [
      'Sleek Netflix navigation bar with scroll-reactive opacity transition.',
      'Custom trailer player modal with keyboard shortcut support.',
      'Row carousel swipe gestures and keyboard navigation.'
    ]
  },
  {
    id: 'chatgpt-clone',
    number: '03',
    category: 'INTELLIGENT CONVERSATIONAL SYSTEMS',
    title: 'CHATGPT CLONE',
    description:
      'An end-to-end intelligent conversational AI platform built with React, Node.js, and streaming API backends, featuring real-time Server-Sent Events (SSE) token generation, persistent session memory, and syntax-highlighted code rendering.',
    challengeOutcome:
      'Engineered a chunked stream-response pipeline using Node.js and OpenAI/Gemini REST APIs, maintaining sub-30ms time-to-first-token (TTFT) and seamless auto-scrolling markdown syntax rendering with persistent conversational state.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind', 'OpenAI API', 'SSE'],
    image: '/src/assets/images/chatgpt_clone_mockup_1792415590444.jpg',
    liveUrl: 'http://clonegpt.tsedetech.com/',
    githubUrl: 'https://github.com/YohannesTesfa-16/chatgpt-clone',
    architectureUrl: '#arch-chatgpt',
    metrics: [
      { label: 'Time To First Token', value: '< 28ms' },
      { label: 'Stream Protocol', value: 'SSE / HTTP/2' },
      { label: 'Syntax Rendering', value: '60 FPS' }
    ],
    highlights: [
      'Implemented Server-Sent Events (SSE) for low-latency token streaming with client backpressure handling.',
      'Built responsive chat layout with collapsible conversation histories, system prompts, and multi-turn context.',
      'Rendered code blocks with syntax highlighting, copy-to-clipboard, and formatting parsers.'
    ]
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    code: '[01 // FRONTEND]',
    title: 'FRONTEND',
    tier: 'CLIENT TIER',
    items: [
      { name: 'React', detail: 'v18+', level: 'Expert', category: 'frontend' },
      { name: 'Next.js', detail: 'SSR / App', level: 'Expert', category: 'frontend' },
      { name: 'JavaScript (ES6+)', detail: 'Modern', level: 'Advanced', category: 'frontend' },
      { name: 'TypeScript', detail: 'Strict', level: 'Expert', category: 'frontend' },
      { name: 'Tailwind CSS', detail: 'Design Sys', level: 'Expert', category: 'frontend' },
      { name: 'WebGL / Canvas APIs', detail: 'Shaders', level: 'Proficient', category: 'frontend' }
    ]
  },
  {
    id: 'backend',
    code: '[02 // BACKEND]',
    title: 'BACKEND',
    tier: 'SERVER TIER',
    items: [
      { name: 'Node.js', detail: 'Event Loop', level: 'Expert', category: 'backend' },
      { name: 'Express', detail: 'REST Core', level: 'Expert', category: 'backend' },
      { name: 'Go (Golang)', detail: 'Routines', level: 'Proficient', category: 'backend' },
      { name: 'Python', detail: 'AsyncIO', level: 'Advanced', category: 'backend' },
      { name: 'REST & gRPC APIs', detail: 'Protobuf', level: 'Advanced', category: 'backend' }
    ]
  },
  {
    id: 'databases',
    code: '[03 // DATABASES]',
    title: 'DATABASES',
    tier: 'DATA STORE',
    items: [
      { name: 'PostgreSQL', detail: 'ACID / Indexes', level: 'Advanced', category: 'databases' },
      { name: 'Redis', detail: 'Pub/Sub Cache', level: 'Advanced', category: 'databases' },
      { name: 'ClickHouse', detail: 'Columnar', level: 'Proficient', category: 'databases' },
      { name: 'SQLite', detail: 'Embedded', level: 'Advanced', category: 'databases' }
    ]
  },
  {
    id: 'deployment',
    code: '[04 // DEPLOYMENT]',
    title: 'DEPLOYMENT',
    tier: 'DEV-OPS',
    items: [
      { name: 'Docker', detail: 'Containers', level: 'Advanced', category: 'deployment' },
      { name: 'Kubernetes', detail: 'Cluster Orch', level: 'Proficient', category: 'deployment' },
      { name: 'Git & Actions', detail: 'CI / CD', level: 'Expert', category: 'deployment' },
      { name: 'Linux', detail: 'Kernel / CLI', level: 'Advanced', category: 'deployment' },
      { name: 'AWS', detail: 'ECS / S3', level: 'Proficient', category: 'deployment' },
      { name: 'Vite', detail: 'ES Modules', level: 'Expert', category: 'deployment' }
    ]
  }
];
