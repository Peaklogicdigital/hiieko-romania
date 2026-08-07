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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['rooftop', 'ground-mount', 'bess']),
      // Only meaningful for rooftop/bess projects — ground-mount stays a
      // single flat category with no subdivision, so its entries omit this
      // field entirely rather than picking an arbitrary value.
      subcategory: z
        .enum([
          'industrial',
          'retail',
          'warehouse',
          'agriculture',
          'institutional',
          'residential',
          'commercial',
        ])
        .optional(),
      location: z.string(),
      specLabel: z.string(),
      specValue: z.string(),
      specPending: z.boolean().default(false),
      // image() imports the file at build time so Astro can resize/reformat
      // it (see ProjectCard.astro's <Picture>) — the referenced path must be
      // a relative path to a file colocated in this same directory, not a
      // public/ URL.
      image: image().optional(),
      imageAlt: z.string().optional(),
      order: z.number().default(0),
      isPlaceholder: z.boolean().default(false),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      email: z.string().optional(),
      phone: z.string().optional(),
      photo: image().optional(),
      order: z.number().default(0),
      isPlaceholder: z.boolean().default(true),
    }),
});

export const collections = { services, servicesRo, projects, team };
