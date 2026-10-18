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
  // {
  //   id: 'exp-1',
  //   company: 'Cloudfolio',
  //   role: 'Software Engineer, Platform',
  //   period: '2024 — Present',
  //   location: 'Remote',
  //   badge: 'current',
  // },
  // {
  //   id: 'exp-2',
  //   company: 'Paystack',
  //   role: 'Backend Engineer',
  //   period: '2022 — 2024',
  //   location: 'Accra, GH',
  //   badge: null,
  // },
  {
    id: 'exp-3',
    company: 'Call 2 Care',
    role: 'Full-Stack Developer',
    period: '2024 — 2025',
    location: 'Remote',
    badge: 'contract',
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
// { id, year, category, title, description, stack, url, liveUrl?, image?, wip }
//   url     → source code (GitHub)
//   liveUrl → optional live demo / app store link
//   image   → optional Cloudinary URL for a cover screenshot

export const projects = [
  {
    id: 'calebanoff-dev',
    year: '2026',
    category: 'Web',
    title: 'calebanoff.dev',
    description:
      'This site: my portfolio and blog, built with Astro and React, pre-rendered for speed and SEO, deployed on Vercel with images served from Cloudinary.',
    stack: ['Astro', 'React', 'MDX', 'Vercel', 'Cloudinary'],
    url: 'https://github.com/Anofff/my-portfolio',
    liveUrl: 'https://my-portfolio-one-delta-83.vercel.app', // → https://calebanoff.dev once connected
    wip: true,
  },
]

// Each category carries its own color, so adding one needs no CSS changes.
export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'Web', label: 'Web', color: '#7aa3d4' },
  { id: 'Mobile', label: 'Mobile', color: '#8db87a' },
  { id: 'Tool', label: 'Tool', color: '#b48ac4' },
  { id: 'Open Source', label: 'Open Source', color: '#c4a46a' },
]

// ─── Blog post metadata now lives in each post's frontmatter ─────────────────
// See src/content/blog/*.mdx and src/lib/posts.js

// Set to null to hide the series banner until your series starts
// e.g. { name: '30 Days of AWS', currentDay: 1, totalDays: 30, githubUrl: '...' }
export const activeSeries = null

// Blog categories. A post's `topic` must be one of these ids (checked at build).
// To add a category, add one line here; the color is used for its pill.
export const blogCategories = [
  { id: 'all', label: 'All', color: '#ececec' },
  { id: 'series', label: 'Learning Series', color: '#b07cc6' },
  { id: 'projects', label: 'Projects', color: '#1abc9c' },
  { id: 'system-design', label: 'System Design', color: '#f39c12' },
  { id: 'concepts', label: 'Concepts & Explainers', color: '#3498db' },
  { id: 'competitive', label: 'Competitive Programming', color: '#e74c3c' },
]
