import { defineCollection, z } from "astro:content";

// Une chaîne bilingue. Le composant qui lit ce champ retombe sur `fr`
// si `en` est absent — voir src/i18n/utils.ts (fonction `pick`).
const localized = z.object({
  fr: z.string(),
  en: z.string().optional(),
});

const PROJECT_TYPES = [
  "Identité visuelle",
  "Affiche & print",
  "Réseaux sociaux",
  "Web",
  "Événement & médiation",
  "Stratégie & campagne",
  "Expérimentation",
] as const;

const CLIENT_TYPES = ["École", "Artiste", "Association", "Entreprise", "Perso"] as const;

const MEDIA_FORMATS = ["paysage", "4:5", "9:16", "carré", "libre"] as const;

const mediaItem = z.object({
  type: z.enum(["image", "video", "youtube", "vimeo"]),
  src: z.string(), // chemin local (public/ ou content) ou id de la vidéo distante
  alt: z.string().optional(),
  caption: localized.optional(),
  format: z.enum(MEDIA_FORMATS).default("libre"),
});

const link = z.object({
  label: localized,
  url: z.string().url(),
});

const organisation = z.object({
  team: z.string().optional(),
  duration: z.string().optional(),
  deliverables: localized.optional(),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // Le slug/URL du projet est le nom de fichier (ex: mon-projet.md -> /design/mon-projet/).
      page: z.enum(["design", "digital"]),
      title: localized,
      year: z.number().int(),
      role: z.string(),
      client_name: z.string(),
      client_type: z.enum(CLIENT_TYPES),
      types: z.array(z.enum(PROJECT_TYPES)).default([]),
      techniques: z.array(z.string()).default([]),
      themes: z.array(z.string()).default([]),
      summary: localized,
      cover: image().or(z.string()),
      media: z.array(mediaItem).default([]),
      links: z.array(link).default([]),
      organisation: organisation.optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

const research = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: localized,
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      summary: localized,
      cover: image().or(z.string()).optional(),
      pdf: z.string().optional(),
      related: z.string().optional(), // slug d'un projet (collection `projects`)
    }),
});

const cv = defineCollection({
  type: "data",
  schema: z.object({
    pdf: z.object({
      fr: z.string(),
      en: z.string(),
    }),
    timeline: z.array(
      z.object({
        year: z.string(),
        title: localized,
        place: z.string().optional(),
        description: localized.optional(),
        kind: z.enum(["formation", "experience"]),
      })
    ),
  }),
});

export const collections = { projects, research, cv };

export const PROJECT_TYPE_OPTIONS = PROJECT_TYPES;
export const CLIENT_TYPE_OPTIONS = CLIENT_TYPES;
export const MEDIA_FORMAT_OPTIONS = MEDIA_FORMATS;
