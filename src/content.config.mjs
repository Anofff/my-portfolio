import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import { blogCategories } from './data/index.js'

const topicIds = blogCategories.map((c) => c.id).filter((id) => id !== 'all')

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    topic: z.string().refine((t) => topicIds.includes(t), {
      message: `topic must be one of: ${topicIds.join(', ')} (see blogCategories in src/data/index.js)`,
    }),
    excerpt: z.string(),
    date: z.coerce.date(),
    // Optional: calculated from the post length when left out.
    readTime: z.string().optional(),
    coverImage: z.string().url().optional(),
    featured: z.boolean().default(false),
    series: z
      .object({
        day: z.number(),
        totalDays: z.number(),
      })
      .optional(),
  }),
})

export const collections = { blog }
