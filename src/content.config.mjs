import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    topic: z.enum(['series', 'projects', 'system-design', 'concepts', 'competitive']),
    excerpt: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
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
