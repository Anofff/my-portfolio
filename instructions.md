# Caleb Anoff — Portfolio Site: Cursor Build Instructions

## Overview

Build a personal portfolio site for **Caleb Anoff, Software Engineer** using **React + Vite**. The design follows a dark terminal aesthetic (inspired by benadam.me) with a centered single-column layout (inspired by alexpate.com). All personal content lives in a single `data.js` file and is passed as props — nothing is hardcoded in components.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | Framework & bundler |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped component styles |
| Google Fonts | VT323, Share Tech Mono, Inter |

No UI libraries. No Tailwind. Pure CSS Modules for full design control.

---

## Design Tokens

```css
/* src/styles/tokens.css — import globally in main.jsx */
:root {
  --bg:        #2b2b2b;
  --surface:   #222222;
  --surface2:  #1e1e1e;
  --yellow:    #c8d400;
  --white:     #e8e8e8;
  --muted:     #777777;
  --border:    #3a3a3a;

  --font-display: 'VT323', monospace;
  --font-mono:    'Share Tech Mono', monospace;
  --font-body:    'Inter', system-ui, sans-serif;

  --max-width: 680px;
  --page-padding: 1.5rem;
}
```

---

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf                  # Drop resume PDF here
├── src/
│   ├── main.jsx                    # Entry — imports tokens.css, renders App
│   ├── App.jsx                     # Router setup
│   ├── data.js                     # ← Single source of truth for all content
│   ├── styles/
│   │   ├── tokens.css              # Design tokens (loaded globally)
│   │   └── global.css              # Reset + base styles
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx          # Wraps all pages: Nav + page slot + Footer
│   │   │   └── Layout.module.css
│   │   ├── Nav/
│   │   │   ├── Nav.jsx
│   │   │   └── Nav.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── SectionLabel/
│   │   │   ├── SectionLabel.jsx    # Reusable mono uppercase label + bottom border
│   │   │   └── SectionLabel.module.css
│   │   ├── WorkCard/
│   │   │   ├── WorkCard.jsx        # Single work experience row
│   │   │   └── WorkCard.module.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx     # Single project row with hover arrow
│   │   │   └── ProjectCard.module.css
│   │   ├── BlogCard/
│   │   │   ├── BlogCard.jsx        # Single blog row (date | title | arrow)
│   │   │   └── BlogCard.module.css
│   │   ├── FeaturedPost/
│   │   │   ├── FeaturedPost.jsx    # Latest blog post hero card
│   │   │   └── FeaturedPost.module.css
│   │   ├── FilterBar/
│   │   │   ├── FilterBar.jsx       # Pill filter buttons (All, Web, Mobile…)
│   │   │   └── FilterBar.module.css
│   │   └── SocialLinks/
│   │       ├── SocialLinks.jsx     # GitHub, LinkedIn, Twitter row
│   │       └── SocialLinks.module.css
│   └── pages/
│       ├── Home/
│       │   ├── Home.jsx
│       │   └── Home.module.css
│       ├── Blogs/
│       │   ├── Blogs.jsx
│       │   └── Blogs.module.css
│       └── Projects/
│           ├── Projects.jsx
│           └── Projects.module.css
```

---

## Main Task 1 — Project Setup

### Subtask 1.1 — Scaffold with Vite

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install react-router-dom
```

### Subtask 1.2 — Add Google Fonts

In `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### Subtask 1.3 — Global styles

Create `src/styles/tokens.css` with the design tokens above.

Create `src/styles/global.css`:

```css
@import './tokens.css';

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg);
  color: var(--white);
  font-family: var(--font-body);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
```

Import both in `src/main.jsx`:

```jsx
import './styles/global.css'
```

---

## Main Task 2 — Data File

### Subtask 2.1 — Create `src/data.js`

This is the **only file** that needs editing when content changes.

```js
// src/data.js

export const personal = {
  name: "Caleb Anoff",
  initials: "ca",
  role: "Software Engineer",
  bio: "I build thoughtful software that solves real problems. Currently working as a Software Engineer, focused on crafting clean, performant, and user-centered products. I bring experience across the full stack — from system architecture to pixel-perfect interfaces.",
  resumeUrl: "/resume.pdf",
  location: "Your City, Country",
}

export const socials = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",     // maps to icon component
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    id: "twitter",
    label: "Twitter / X",
    url: "https://x.com/yourusername",
    icon: "twitter",
  },
]

export const experience = [
  {
    id: "exp-1",
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    location: "San Francisco, CA",
    badge: "current",   // "current" | "contract" | null
  },
  {
    id: "exp-2",
    company: "Initech",
    role: "Software Engineer",
    period: "2022 — 2023",
    location: "Remote",
    badge: "contract",
  },
  {
    id: "exp-3",
    company: "Globex Systems",
    role: "Frontend Engineer",
    period: "2020 — 2022",
    location: "New York, NY",
    badge: null,
  },
  {
    id: "exp-4",
    company: "Umbrella Labs",
    role: "Junior Developer",
    period: "2019 — 2020",
    location: "Austin, TX",
    badge: null,
  },
]

export const projects = [
  {
    id: "proj-1",
    year: "2024",
    category: "Web",                  // used for filter matching
    title: "DevTrack",
    description: "A lightweight issue tracking tool built for solo developers and small teams. Designed around keyboard-first workflows and a minimal surface area.",
    stack: ["Next.js", "TypeScript", "Postgres", "Tailwind"],
    url: "https://github.com/yourusername/devtrack",
    wip: false,
  },
  {
    id: "proj-2",
    year: "2024",
    category: "Tool",
    title: "Logsmith",
    description: "A CLI tool for structuring and querying local development logs. Pipes stdout into searchable, tagged entries with a dead-simple query language.",
    stack: ["Rust", "SQLite", "CLI"],
    url: "https://github.com/yourusername/logsmith",
    wip: true,
  },
  {
    id: "proj-3",
    year: "2023",
    category: "Open Source",
    title: "react-snap-scroll",
    description: "A headless React library for declarative snap scrolling with full keyboard and accessibility support.",
    stack: ["React", "TypeScript", "Rollup"],
    url: "https://github.com/yourusername/react-snap-scroll",
    wip: false,
  },
  {
    id: "proj-4",
    year: "2023",
    category: "Mobile",
    title: "Pacecard",
    description: "A running companion app that generates adaptive training plans based on recent activity data. Syncs with Apple Health and Strava.",
    stack: ["React Native", "Expo", "Node.js"],
    url: "#",
    wip: false,
  },
]

export const blogs = [
  {
    id: "blog-1",
    date: "Apr 18, 2026",
    dateShort: { day: "Apr 18", year: "2026" },
    topic: "Engineering",
    readTime: "8 min",
    title: "Why I stopped using ORMs and went back to raw SQL",
    excerpt: "After three years of fighting with abstraction layers, I made the switch back to writing queries by hand. Here's what I learned about tradeoffs, performance, and developer ergonomics.",
    url: "#",
    featured: true,     // first featured:true is shown as hero card
  },
  {
    id: "blog-2",
    date: "Mar 02, 2026",
    dateShort: { day: "Mar 02", year: "2026" },
    topic: "Tools",
    readTime: "5 min",
    title: "My terminal setup in 2026",
    excerpt: "A tour of every tool, alias, and config file keeping me productive in the shell — from Zsh to Ghostty.",
    url: "#",
    featured: false,
  },
  {
    id: "blog-3",
    date: "Jan 14, 2026",
    dateShort: { day: "Jan 14", year: "2026" },
    topic: "Career",
    readTime: "6 min",
    title: "What I wish I knew before my first senior role",
    excerpt: "Technical skill gets you in the door. Everything else — communication, scoping, mentorship — keeps you there.",
    url: "#",
    featured: false,
  },
  {
    id: "blog-4",
    date: "Nov 29, 2025",
    dateShort: { day: "Nov 29", year: "2025" },
    topic: "Design",
    readTime: "4 min",
    title: "Engineers should care about typography",
    excerpt: "You don't need to be a designer to understand why a font choice at 14px matters more than you think.",
    url: "#",
    featured: false,
  },
]

export const projectCategories = ["All", "Web", "Mobile", "Tool", "Open Source"]
export const blogTopics = ["All", "Engineering", "Design", "Tools", "Career", "Life"]
```

---

## Main Task 3 — Shared Components

### Subtask 3.1 — Layout

`Layout.jsx` wraps every page. It receives `personal` as a prop and passes it down to Nav and Footer.

```jsx
// src/components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

export default function Layout({ personal }) {
  return (
    <div className={styles.page}>
      <Nav initials={personal.initials} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer name={personal.name} role={personal.role} />
    </div>
  )
}
```

```css
/* Layout.module.css */
.page {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding) 4rem;
}

.main { /* no extra styles needed */ }
```

### Subtask 3.2 — Nav

Props: `initials: string`

```jsx
// Nav.jsx
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav({ initials }) {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>{initials} ›</NavLink>
      <div className={styles.links}>
        <NavLink to="/blogs"    className={({ isActive }) => isActive ? styles.active : ''}>Blogs</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
      </div>
    </nav>
  )
}
```

```css
/* Nav.module.css */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 0 1.5rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 4rem;
}
.logo {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--muted);
  transition: color 0.15s;
}
.logo:hover { color: var(--yellow); }
.links { display: flex; gap: 2rem; }
.links a {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--white);
  transition: color 0.15s;
}
.links a:hover, .links a.active { color: var(--yellow); }
```

### Subtask 3.3 — Footer

Props: `name: string`, `role: string`

```jsx
// Footer.jsx
export default function Footer({ name, role }) {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      © {year} · {name} · {role}
    </footer>
  )
}
```

```css
/* Footer.module.css */
.footer {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #555;
  padding-top: 2rem;
  margin-top: 1rem;
  border-top: 1px solid var(--border);
  letter-spacing: 0.04em;
}
```

### Subtask 3.4 — SectionLabel

Props: `children: string`

```jsx
// SectionLabel.jsx
export default function SectionLabel({ children }) {
  return <p className={styles.label}>{children}</p>
}
```

```css
/* SectionLabel.module.css */
.label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}
```

### Subtask 3.5 — WorkCard

Props: `job: { company, role, period, location, badge }`

Badge values: `"current"` → yellow pill, `"contract"` → blue pill, `null` → no badge.

```jsx
// WorkCard.jsx
export default function WorkCard({ job }) {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <span className={styles.company}>{job.company}</span>
        <span className={styles.role}>{job.role}</span>
        {job.badge && (
          <span className={`${styles.badge} ${styles[job.badge]}`}>
            {job.badge}
          </span>
        )}
      </div>
      <div className={styles.right}>
        <span className={styles.period}>{job.period}</span>
        <span className={styles.location}>{job.location}</span>
      </div>
    </div>
  )
}
```

```css
/* WorkCard.module.css */
.row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);
  transition: opacity 0.15s;
}
.row:first-child { border-top: 1px solid var(--border); }
.row:hover .company { color: var(--yellow); }

.left { display: flex; flex-direction: column; gap: 0.2rem; }
.company { font-size: 0.95rem; font-weight: 500; color: var(--white); transition: color 0.15s; }
.role    { font-size: 0.83rem; font-weight: 300; color: #999; }

.badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  margin-top: 0.35rem;
  width: fit-content;
}
.current  { background: rgba(200,212,0,0.12); color: var(--yellow); border: 0.5px solid rgba(200,212,0,0.3); }
.contract { background: rgba(120,160,210,0.1); color: #7aa3d4; border: 0.5px solid rgba(120,160,210,0.25); }

.right { text-align: right; display: flex; flex-direction: column; gap: 0.2rem; }
.period   { font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted); white-space: nowrap; }
.location { font-family: var(--font-mono); font-size: 0.65rem; color: #555; }
```

### Subtask 3.6 — ProjectCard

Props: `project: { year, category, title, description, stack, url, wip }`

```jsx
// ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer" className={styles.card}>
      <div className={styles.left}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <span className={`${styles.tag} ${styles[project.category.toLowerCase().replace(' ', '_')]}`}>
            {project.category}
          </span>
          {project.wip && <span className={styles.wip}>WIP</span>}
        </div>
        <span className={styles.title}>{project.title}</span>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map(s => (
            <span key={s} className={styles.pill}>{s}</span>
          ))}
        </div>
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  )
}
```

```css
/* ProjectCard.module.css */
.card {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  text-decoration: none;
}
.card:first-child { border-top: 1px solid var(--border); }
.card:hover .title { color: var(--yellow); }
.card:hover .arrow { opacity: 1; transform: translateX(3px); }

.left  { display: flex; flex-direction: column; gap: 0.4rem; }
.meta  { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
.year  { font-family: var(--font-mono); font-size: 0.7rem; color: var(--muted); }

.tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  border: 0.5px solid var(--border);
  color: var(--muted);
}
.tag.web         { border-color: #4a6fa5; color: #7aa3d4; }
.tag.mobile      { border-color: #5a7a4a; color: #8db87a; }
.tag.tool        { border-color: #7a5a8a; color: #b48ac4; }
.tag.open_source { border-color: #8a6a3a; color: #c4a46a; }

.wip {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  background: rgba(200,212,0,0.12);
  color: var(--yellow);
  border: 0.5px solid rgba(200,212,0,0.3);
  border-radius: 4px;
  padding: 0.1rem 0.45rem;
}

.title { font-size: 1.05rem; font-weight: 500; color: var(--white); transition: color 0.15s; }
.desc  { font-size: 0.85rem; font-weight: 300; color: #999; line-height: 1.65; }

.stack { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.pill  {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: #666;
  background: var(--surface2);
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
}

.arrow {
  font-size: 1rem;
  color: var(--yellow);
  opacity: 0;
  transition: opacity 0.15s, transform 0.15s;
  padding-top: 0.25rem;
  flex-shrink: 0;
}
```

### Subtask 3.7 — BlogCard

Props: `post: { dateShort, topic, readTime, title, excerpt, url }`

```jsx
// BlogCard.jsx
export default function BlogCard({ post }) {
  return (
    <a href={post.url} className={styles.row}>
      <div className={styles.date}>
        <span>{post.dateShort.day}</span>
        <span>{post.dateShort.year}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={`${styles.topic} ${styles[post.topic.toLowerCase()]}`}>{post.topic}</span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
        <span className={styles.title}>{post.title}</span>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>
      <span className={styles.arrow}>→</span>
    </a>
  )
}
```

### Subtask 3.8 — FeaturedPost

Props: `post: { topic, readTime, title, excerpt, date, url }`

This is the highlighted hero card shown at the top of the Blogs page.

```jsx
// FeaturedPost.jsx
export default function FeaturedPost({ post }) {
  return (
    <a href={post.url} className={styles.card}>
      <p className={styles.featuredLabel}>● Latest post</p>
      <div className={styles.meta}>
        <span className={`${styles.topic} ${styles[post.topic.toLowerCase()]}`}>{post.topic}</span>
        <span className={styles.readTime}>{post.readTime} read</span>
      </div>
      <p className={styles.title}>{post.title}</p>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <p className={styles.date}>{post.date} · {post.readTime}</p>
    </a>
  )
}
```

```css
/* FeaturedPost.module.css */
.card {
  display: block;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 1.75rem;
  margin-bottom: 2rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s;
}
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: var(--yellow);
  border-radius: 10px 0 0 10px;
}
.card:hover { border-color: var(--yellow); }
.card:hover .title { color: var(--yellow); }
.featuredLabel {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--yellow);
  margin-bottom: 0.75rem;
}
.title {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.5rem;
  transition: color 0.15s;
  line-height: 1.3;
}
.excerpt { font-size: 0.88rem; font-weight: 300; color: #999; line-height: 1.65; }
.date { margin-top: 1rem; font-family: var(--font-mono); font-size: 0.68rem; color: var(--muted); }
.meta { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.6rem; }
.readTime { font-family: var(--font-mono); font-size: 0.65rem; color: #555; }
.topic {
  font-family: var(--font-mono); font-size: 0.65rem;
  padding: 0.12rem 0.5rem; border-radius: 999px;
  border: 0.5px solid var(--border); color: var(--muted);
}
.engineering { border-color: #4a6fa5; color: #7aa3d4; }
.tools       { border-color: #8a6a3a; color: #c4a46a; }
.career      { border-color: #5a7a4a; color: #8db87a; }
.design      { border-color: #7a5a8a; color: #b48ac4; }
.life        { border-color: #6a5a7a; color: #a48ab4; }
```

### Subtask 3.9 — FilterBar

Props: `options: string[]`, `active: string`, `onChange: (val: string) => void`

```jsx
// FilterBar.jsx
export default function FilterBar({ options, active, onChange }) {
  return (
    <div className={styles.bar}>
      {options.map(opt => (
        <button
          key={opt}
          className={`${styles.btn} ${active === opt ? styles.active : ''}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
```

```css
/* FilterBar.module.css */
.bar { display: flex; gap: 0.5rem; margin-bottom: 1.75rem; flex-wrap: wrap; }
.btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--muted);
  background: transparent;
  border: 0.5px solid var(--border);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
}
.btn:hover { border-color: var(--yellow); color: var(--yellow); }
.active { background: var(--yellow); color: #1a1a1a; border-color: var(--yellow); }
```

### Subtask 3.10 — SocialLinks

Props: `socials: { id, label, url, icon }[]`, `resumeUrl: string`

Inline the SVG icons in this component. Map the `icon` field from data.js to the correct SVG path.

```jsx
// SocialLinks.jsx — include GitHub, LinkedIn, Twitter SVGs inline
export default function SocialLinks({ socials, resumeUrl }) {
  return (
    <div>
      <div className={styles.row}>
        {socials.map(s => (
          <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className={styles.link}>
            <Icon name={s.icon} />
            {s.label}
          </a>
        ))}
      </div>
      <a href={resumeUrl} target="_blank" rel="noreferrer" className={styles.resumeBtn}>
        Resume →
      </a>
    </div>
  )
}
```

---

## Main Task 4 — Pages

### Subtask 4.1 — Home Page

File: `src/pages/Home/Home.jsx`

Props received from App: `personal`, `socials`, `experience`

Layout order:
1. Hero — `personal.name` in display font (yellow), `personal.role` muted below
2. SectionLabel: "About"
3. Bio paragraph from `personal.bio`
4. SectionLabel: "Work Experience"
5. Map `experience` → `<WorkCard job={job} />`
6. `<hr />`
7. SectionLabel: "Connect"
8. `<SocialLinks socials={socials} resumeUrl={personal.resumeUrl} />`

```jsx
// Home.jsx
import { personal, socials, experience } from '../../data'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import WorkCard from '../../components/WorkCard/WorkCard'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.name}>{personal.name}.</h1>
        <p className={styles.role}>{personal.role}</p>
      </div>

      <SectionLabel>About</SectionLabel>
      <p className={styles.bio}>{personal.bio}</p>

      <SectionLabel>Work Experience</SectionLabel>
      <div className={styles.workList}>
        {experience.map(job => <WorkCard key={job.id} job={job} />)}
      </div>

      <hr className={styles.divider} />

      <SectionLabel>Connect</SectionLabel>
      <SocialLinks socials={socials} resumeUrl={personal.resumeUrl} />
    </div>
  )
}
```

```css
/* Home.module.css */
.hero  { margin-bottom: 3.5rem; }
.name  { font-family: var(--font-display); font-size: 4.5rem; color: var(--yellow); letter-spacing: 0.04em; line-height: 1.0; margin-bottom: 0.5rem; }
.role  { font-size: 1.2rem; font-weight: 300; color: var(--muted); margin-bottom: 2rem; }
.bio   { font-size: 1rem; font-weight: 300; color: #bbb; line-height: 1.8; margin-bottom: 1.75rem; }
.bio strong { color: var(--white); font-weight: 500; }
.workList { margin-bottom: 1.5rem; }
.divider { border: none; border-top: 1px solid var(--border); margin: 0.25rem 0 2.75rem; }
```

### Subtask 4.2 — Projects Page

File: `src/pages/Projects/Projects.jsx`

Uses: `projects`, `projectCategories` from data.js

Logic:
- `useState` for `activeFilter` (default `"All"`)
- Filter `projects` where `project.category === activeFilter || activeFilter === "All"`
- Render filtered list as `<ProjectCard />`

```jsx
// Projects.jsx
import { useState } from 'react'
import { projects, projectCategories } from '../../data'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import styles from './Projects.module.css'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Projects.</h1>
        <p className={styles.sub}>A selection of things I've built — side projects, tools, and open source work.</p>
      </div>
      <FilterBar options={projectCategories} active={active} onChange={setActive} />
      <div className={styles.list}>
        {filtered.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  )
}
```

### Subtask 4.3 — Blogs Page

File: `src/pages/Blogs/Blogs.jsx`

Uses: `blogs`, `blogTopics` from data.js

Logic:
- `useState` for `activeTopic` (default `"All"`)
- Find `featuredPost` = first blog where `featured === true`
- Filter remaining posts by topic

```jsx
// Blogs.jsx
import { useState } from 'react'
import { blogs, blogTopics } from '../../data'
import FeaturedPost from '../../components/FeaturedPost/FeaturedPost'
import BlogCard from '../../components/BlogCard/BlogCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import styles from './Blogs.module.css'

export default function Blogs() {
  const [activeTopic, setActiveTopic] = useState('All')
  const featured = blogs.find(b => b.featured)
  const allPosts = activeTopic === 'All' ? blogs : blogs.filter(b => b.topic === activeTopic)

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs.</h1>
        <p className={styles.sub}>Thoughts on engineering, design, tools, and the occasional life observation.</p>
      </div>
      {featured && <FeaturedPost post={featured} />}
      <FilterBar options={blogTopics} active={activeTopic} onChange={setActiveTopic} />
      <SectionLabel>All Posts</SectionLabel>
      <div className={styles.list}>
        {allPosts.map(post => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  )
}
```

---

## Main Task 5 — Routing

### Subtask 5.1 — App.jsx

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { personal } from './data'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import Projects from './pages/Projects/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout personal={personal} />}>
          <Route path="/"         element={<Home />} />
          <Route path="/blogs"    element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

---

## Main Task 6 — BlogCard CSS (complete)

```css
/* BlogCard.module.css */
.row {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: start;
  gap: 1.25rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  cursor: pointer;
}
.row:hover .title { color: var(--yellow); }
.row:hover .arrow { opacity: 1; transform: translateX(3px); }

.date {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--muted);
  display: flex; flex-direction: column;
  gap: 0.15rem;
  padding-top: 0.2rem;
}

.content { display: flex; flex-direction: column; gap: 0.35rem; }
.meta    { display: flex; align-items: center; gap: 0.6rem; }

.topic {
  font-family: var(--font-mono); font-size: 0.65rem;
  padding: 0.12rem 0.5rem; border-radius: 999px;
  border: 0.5px solid var(--border); color: var(--muted);
}
.engineering { border-color: #4a6fa5; color: #7aa3d4; }
.tools       { border-color: #8a6a3a; color: #c4a46a; }
.career      { border-color: #5a7a4a; color: #8db87a; }
.design      { border-color: #7a5a8a; color: #b48ac4; }
.life        { border-color: #6a5a7a; color: #a48ab4; }

.readTime { font-family: var(--font-mono); font-size: 0.65rem; color: #555; }
.title    { font-size: 1rem; font-weight: 500; color: var(--white); transition: color 0.15s; line-height: 1.35; }
.excerpt  { font-size: 0.83rem; font-weight: 300; color: #888; line-height: 1.6; }

.arrow {
  font-size: 1rem; color: var(--yellow);
  opacity: 0; transition: opacity 0.15s, transform 0.15s;
  padding-top: 0.2rem; flex-shrink: 0;
}
```

---

## Main Task 7 — SocialLinks CSS

```css
/* SocialLinks.module.css */
.row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.link {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.85rem; color: var(--white);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--border);
  transition: color 0.15s, text-decoration-color 0.15s;
}
.link:hover { color: var(--yellow); text-decoration-color: var(--yellow); }

.resumeBtn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--yellow); color: #1a1a1a;
  font-family: var(--font-mono); font-size: 0.82rem;
  padding: 0.65rem 1.4rem; border-radius: 999px;
  border: none; cursor: pointer;
  transition: opacity 0.15s, transform 0.1s;
  text-decoration: none;
}
.resumeBtn:hover { opacity: 0.88; transform: translateY(-1px); }
```

---

## Main Task 8 — Run & Deploy

### Subtask 8.1 — Dev server

```bash
npm run dev
```

### Subtask 8.2 — Build

```bash
npm run build
```

### Subtask 8.3 — Deploy options

| Platform | Command |
|---|---|
| Vercel | `npx vercel` (auto-detects Vite) |
| Netlify | drag `dist/` folder into Netlify dashboard |
| GitHub Pages | use `vite-plugin-gh-pages` |

For SPA routing on Netlify, add `public/_redirects`:
```
/* /index.html 200
```

---

## Updating Content Later

**All content changes = edit `src/data.js` only.**

| What to change | Field in data.js |
|---|---|
| Your name / role / bio | `personal` object |
| Add a new job | Push to `experience` array |
| Add a new project | Push to `projects` array |
| Write a new blog post | Push to `blogs` array, set `featured: true` on latest |
| Add/remove social links | Edit `socials` array |
| New filter category | Add string to `projectCategories` or `blogTopics` |