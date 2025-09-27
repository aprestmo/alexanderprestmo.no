import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      // Optional: Add image support
      image: image().optional(),
      // Optional: Add draft status
      draft: z.boolean().optional().default(false),
    }),
});

// Export collections
export const collections = {
  journal,
};
