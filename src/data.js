export const personal = {
  name: 'Caleb Anoff',
  initials: 'ca',
  role: 'Software Engineer',
  bio: 'I build thoughtful software that solves real problems. Currently working as a Software Engineer, focused on crafting clean, performant, and user-centered products. I bring experience across the full stack — from system architecture to pixel-perfect interfaces.',
  resumeUrl: '/resume.pdf',
  location: 'Your City, Country',
}

export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    url: 'https://x.com/yourusername',
    icon: 'twitter',
  },
]

export const experience = [
  {
    id: 'exp-1',
    company: 'Acme Corp',
    role: 'Senior Software Engineer',
    period: '2023 — Present',
    location: 'San Francisco, CA',
    badge: 'current',
  },
  {
    id: 'exp-2',
    company: 'Initech',
    role: 'Software Engineer',
    period: '2022 — 2023',
    location: 'Remote',
    badge: 'contract',
  },
  {
    id: 'exp-3',
    company: 'Globex Systems',
    role: 'Frontend Engineer',
    period: '2020 — 2022',
    location: 'New York, NY',
    badge: null,
  },
  {
    id: 'exp-4',
    company: 'Umbrella Labs',
    role: 'Junior Developer',
    period: '2019 — 2020',
    location: 'Austin, TX',
    badge: null,
  },
]

export const projects = [
  {
    id: 'proj-1',
    year: '2024',
    category: 'Web',
    title: 'DevTrack',
    description:
      'A lightweight issue tracking tool built for solo developers and small teams. Designed around keyboard-first workflows and a minimal surface area.',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Tailwind'],
    url: 'https://github.com/yourusername/devtrack',
    wip: false,
  },
  {
    id: 'proj-2',
    year: '2024',
    category: 'Tool',
    title: 'Logsmith',
    description:
      'A CLI tool for structuring and querying local development logs. Pipes stdout into searchable, tagged entries with a dead-simple query language.',
    stack: ['Rust', 'SQLite', 'CLI'],
    url: 'https://github.com/yourusername/logsmith',
    wip: true,
  },
  {
    id: 'proj-3',
    year: '2023',
    category: 'Open Source',
    title: 'react-snap-scroll',
    description:
      'A headless React library for declarative snap scrolling with full keyboard and accessibility support.',
    stack: ['React', 'TypeScript', 'Rollup'],
    url: 'https://github.com/yourusername/react-snap-scroll',
    wip: false,
  },
  {
    id: 'proj-4',
    year: '2023',
    category: 'Mobile',
    title: 'Pacecard',
    description:
      'A running companion app that generates adaptive training plans based on recent activity data. Syncs with Apple Health and Strava.',
    stack: ['React Native', 'Expo', 'Node.js'],
    url: '#',
    wip: false,
  },
]

export const blogs = [
  {
    id: 'blog-1',
    date: 'Apr 18, 2026',
    dateShort: { day: 'Apr 18', year: '2026' },
    topic: 'Engineering',
    readTime: '8 min',
    title: 'Why I stopped using ORMs and went back to raw SQL',
    excerpt:
      "After three years of fighting with abstraction layers, I made the switch back to writing queries by hand. Here's what I learned about tradeoffs, performance, and developer ergonomics.",
    url: '#',
    featured: true,
  },
  {
    id: 'blog-2',
    date: 'Mar 02, 2026',
    dateShort: { day: 'Mar 02', year: '2026' },
    topic: 'Tools',
    readTime: '5 min',
    title: 'My terminal setup in 2026',
    excerpt:
      'A tour of every tool, alias, and config file keeping me productive in the shell — from Zsh to Ghostty.',
    url: '#',
    featured: false,
  },
  {
    id: 'blog-3',
    date: 'Jan 14, 2026',
    dateShort: { day: 'Jan 14', year: '2026' },
    topic: 'Career',
    readTime: '6 min',
    title: 'What I wish I knew before my first senior role',
    excerpt:
      'Technical skill gets you in the door. Everything else — communication, scoping, mentorship — keeps you there.',
    url: '#',
    featured: false,
  },
  {
    id: 'blog-4',
    date: 'Nov 29, 2025',
    dateShort: { day: 'Nov 29', year: '2025' },
    topic: 'Design',
    readTime: '4 min',
    title: 'Engineers should care about typography',
    excerpt:
      "You don't need to be a designer to understand why a font choice at 14px matters more than you think.",
    url: '#',
    featured: false,
  },
]

export const projectCategories = ['All', 'Web', 'Mobile', 'Tool', 'Open Source']
export const blogTopics = ['All', 'Engineering', 'Design', 'Tools', 'Career', 'Life']
