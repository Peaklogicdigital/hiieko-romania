import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    tagNumber: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    isPlaceholder: z.boolean().default(false),
  }),
});

// Romanian translation of the services collection above, keyed by the same
// filename/slug as its English counterpart so getStaticPaths and card links
// resolve to matching routes. Draft AI-assisted translation, pending
// native-speaker review before launch.
const servicesRo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services-ro' }),
  schema: z.object({
    title: z.string(),
    tagNumber: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    isPlaceholder: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['rooftop', 'ground-mount', 'bess']),
    location: z.string(),
    specLabel: z.string(),
    specValue: z.string(),
    specPending: z.boolean().default(false),
    image: z.string().optional(),
    order: z.number().default(0),
    isPlaceholder: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    photo: z.string().optional(),
    order: z.number().default(0),
    isPlaceholder: z.boolean().default(true),
  }),
});

export const collections = { services, servicesRo, projects, team };
