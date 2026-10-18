import { getCollection } from 'astro:content'

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function formatDateShort(date) {
  const month = date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' })
  const day = String(date.getUTCDate()).padStart(2, '0')
  return { day: `${month} ${day}`, year: String(date.getUTCFullYear()) }
}

// ~220 words per minute, code blocks included.
function readTimeFor(body = '') {
  const words = body.split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 220))} min`
}

// Normalizes a content-collection entry into the post shape
// the card components expect (slug, formatted dates, etc).
export function toPost(entry) {
  return {
    id: entry.id,
    slug: entry.id,
    ...entry.data,
    readTime: entry.data.readTime ?? readTimeFor(entry.body),
    isoDate: entry.data.date,
    date: formatDate(entry.data.date),
    dateShort: formatDateShort(entry.data.date),
  }
}

// All posts, newest first.
export async function getPosts() {
  const entries = await getCollection('blog')
  return entries.map(toPost).sort((a, b) => b.isoDate - a.isoDate)
}
