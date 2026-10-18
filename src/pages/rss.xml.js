import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { personal } from '../data'

export async function GET(context) {
  const entries = await getCollection('blog')
  entries.sort((a, b) => b.data.date - a.data.date)

  return rss({
    title: `${personal.name} — Blog`,
    description:
      'Documenting the journey — Terraform, AWS, system design, and everything in between.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: `/blogs/${entry.id}`,
    })),
  })
}
