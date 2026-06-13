import { defineCollection, z } from "astro:content";

/**
 * Colección de proyectos del portfolio.
 * Cada proyecto se define como un .md dentro de `src/content/projects/{es,en}/`.
 * El idioma se indica en `language` y debe coincidir con la carpeta.
 * `priority` ordena los proyectos: las 3 menores se muestran como destacados.
 */
const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Nombre del fichero de imagen dentro de `public/projects/`.
        img: z.string(),
        tags: z.array(z.string()).default([]),
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        inDevelopment: z.boolean().default(false),
        // Animación de entrada (opcional, reservada).
        anim: z.string().default("fade-up"),
        priority: z.number().int().positive(),
        language: z.enum(["es", "en"]),
    }),
});

export const collections = { projects };
