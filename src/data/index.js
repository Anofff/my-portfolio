// ─── Personal info — edit these ─────────────────────────────────────────────

export const personal = {
  name: 'Caleb Anoff',
  initials: 'ca',
  role: 'Software Engineer',
  bio: 'Add your bio here.',
  resumeUrl: null, // set to '/resume.pdf' after adding public/resume.pdf
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

export const experience = []

// ─── Projects — add entries as { id, year, category, title, description, stack, url, wip } ─

export const projects = []

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'Web', label: 'Web' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'Tool', label: 'Tool' },
  { id: 'Open Source', label: 'Open Source' },
]

// ─── Blog posts — add after publishing on Hashnode ────────────────────────────

export const blogs = []

// Set to null to hide the series banner until your series starts
export const activeSeries = null

export const blogCategories = [
  { id: 'all', label: 'All', color: 'var(--white)' },
  { id: 'series', label: 'Learning Series', color: 'var(--color-series)' },
  { id: 'projects', label: 'Projects', color: 'var(--color-projects)' },
  { id: 'system-design', label: 'System Design', color: 'var(--color-system)' },
  { id: 'concepts', label: 'Concepts & Explainers', color: 'var(--color-concepts)' },
  { id: 'competitive', label: 'Competitive Programming', color: 'var(--color-competitive)' },
]
