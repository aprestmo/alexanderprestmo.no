import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/post'}),
  schema: z.object({
    title: z.string(),
    date: z.string().datetime({ offset: true }),
  }),
})

export const collections = { blog }
