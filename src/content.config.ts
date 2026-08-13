import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modules = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/modules' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    slug: z.string(),
    level: z.enum(['foundation', 'core', 'advanced', 'specialist']),
    levelNumber: z.number().min(1).max(4),
    description: z.string(),
    prerequisites: z.array(z.string()).optional(),
    estimatedHours: z.number(),
    icon: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/lessons' }),
  schema: z.object({
    title: z.string(),
    module: z.string(),
    lessonNumber: z.number(),
    description: z.string(),
    objectives: z.array(z.string()),
    duration: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { modules, lessons };
