import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        tags: z.array(z.string()),
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        inDevelopment: z.boolean().optional(),
        anim: z.string(),
        priority: z.number(),
        language: z.string(),
    })
})

export const collections = { projects }
