import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
})

const author = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
  }),
})

export const collections = {
  author: author,
  blog: blogCollection,
}
