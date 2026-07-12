// ─── Personal info — edit these ─────────────────────────────────────────────

export const personal = {
  name: 'Caleb Anoff',
  initials: 'ca',
  role: 'Software Engineer',
  bio: "I'm a software engineer based in Accra, focused on backend systems, cloud infrastructure, and developer tooling. I like turning messy problems into clean, reliable systems — and writing about what I learn along the way. Currently going deep on AWS, Terraform, and distributed systems.",
  resumeUrl: 'https://drive.google.com/file/d/1hHZBr0KdQaL5qc6A9dseI6yxjulUF73D/view?usp=drive_link' ,// set to '/resume.pdf' after adding public/resume.pdf
  location: 'Accra, Ghana',
}

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Anofff',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/caleb-anoff-79846924b/',
    icon: 'linkedin',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    url: 'https://x.com/CalebAnoff',
    icon: 'twitter',
  },
]

// ─── Work experience — add entries as { id, company, role, period, location, badge } ─
// badge: 'current' | 'contract' | null

export const experience = [
  {
    id: 'exp-1',
    company: 'Nimbus Labs',
    role: 'Software Engineer, Platform',
    period: '2024 — Present',
    location: 'Remote',
    badge: 'current',
  },
  {
    id: 'exp-2',
    company: 'Paystack',
    role: 'Backend Engineer',
    period: '2022 — 2024',
    location: 'Accra, GH',
    badge: null,
  },
  {
    id: 'exp-3',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '2021 — 2022',
    location: 'Remote',
    badge: 'contract',
  },
]

// ─── Projects — add entries as { id, year, category, title, description, stack, url, wip } ─

export const projects = [
  {
    id: 'proj-1',
    year: '2026',
    category: 'Tool',
    title: 'infra-snap',
    description:
      'A CLI that snapshots live AWS resources and generates matching Terraform so you can bring existing infrastructure under version control.',
    stack: ['Go', 'Terraform', 'AWS'],
    url: 'https://github.com/Anofff',
    wip: true,
  },
  {
    id: 'proj-2',
    year: '2025',
    category: 'Web',
    title: 'ledgerlite',
    description:
      'A double-entry bookkeeping API and dashboard for small businesses, with role-based access and exportable reports.',
    stack: ['TypeScript', 'Node', 'PostgreSQL', 'React'],
    url: 'https://github.com/Anofff',
    wip: false,
  },
  {
    id: 'proj-3',
    year: '2025',
    category: 'Open Source',
    title: 'retry-rs',
    description:
      'A tiny, dependency-free retry/backoff library for Rust with jitter strategies and async support.',
    stack: ['Rust', 'Tokio'],
    url: 'https://github.com/Anofff',
    wip: false,
  },
  {
    id: 'proj-4',
    year: '2024',
    category: 'Mobile',
    title: 'trotro',
    description:
      'An offline-first transit app that maps informal minibus routes across Accra using crowd-sourced GPS traces.',
    stack: ['React Native', 'Expo', 'SQLite'],
    url: 'https://github.com/Anofff',
    wip: false,
  },
]

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'Web', label: 'Web' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'Tool', label: 'Tool' },
  { id: 'Open Source', label: 'Open Source' },
]

// ─── Blog posts — add after publishing on Hashnode ────────────────────────────

export const blogs = [
  {
    id: 'blog-1',
    slug: 'building-infra-snap',
    title: 'Building infra-snap: reverse-engineering Terraform from live AWS',
    topic: 'projects',
    excerpt:
      'What I learned writing a tool that reads your AWS account and spits out Terraform you can actually commit.',
    readTime: '9 min',
    date: 'Jul 8, 2026',
    dateShort: { day: 'Jul 08', year: '2026' },
    featured: true,
  },
  {
    id: 'blog-2',
    slug: 'day-12-vpc-subnets',
    title: 'Day 12: VPCs, subnets, and why my Lambda couldn’t reach the internet',
    topic: 'series',
    excerpt:
      'A debugging story about NAT gateways, route tables, and the difference between public and private subnets.',
    readTime: '6 min',
    date: 'Jul 2, 2026',
    dateShort: { day: 'Jul 02', year: '2026' },
    series: { day: 12, totalDays: 30 },
  },
  {
    id: 'blog-3',
    slug: 'idempotency-keys',
    title: 'Idempotency keys: making retries safe in payment systems',
    topic: 'system-design',
    excerpt:
      'How to design APIs that survive network hiccups and double-clicks without charging customers twice.',
    readTime: '11 min',
    date: 'Jun 20, 2026',
    dateShort: { day: 'Jun 20', year: '2026' },
  },
  {
    id: 'blog-4',
    slug: 'consistent-hashing-intro',
    title: 'A gentle intro to consistent hashing',
    topic: 'concepts',
    excerpt:
      'The data structure behind distributed caches and databases, explained with a pizza-delivery analogy.',
    readTime: '7 min',
    date: 'Jun 5, 2026',
    dateShort: { day: 'Jun 05', year: '2026' },
  },
  {
    id: 'blog-5',
    slug: 'codeforces-1850g',
    title: 'Codeforces 1850G: the sweep I almost missed',
    topic: 'competitive',
    excerpt:
      'A clean editorial-style walkthrough of a sorting + two-pointer problem that tripped me up in a recent round.',
    readTime: '5 min',
    date: 'May 28, 2026',
    dateShort: { day: 'May 28', year: '2026' },
  },
]

// Set to null to hide the series banner until your series starts
export const activeSeries = {
  name: '30 Days of AWS',
  currentDay: 12,
  totalDays: 30,
  githubUrl: 'https://github.com/Anofff',
}

export const blogCategories = [
  { id: 'all', label: 'All', color: 'var(--white)' },
  { id: 'series', label: 'Learning Series', color: 'var(--color-series)' },
  { id: 'projects', label: 'Projects', color: 'var(--color-projects)' },
  { id: 'system-design', label: 'System Design', color: 'var(--color-system)' },
  { id: 'concepts', label: 'Concepts & Explainers', color: 'var(--color-concepts)' },
  { id: 'competitive', label: 'Competitive Programming', color: 'var(--color-competitive)' },
]
