import { defineCollection, z } from "astro:content";
//z -> zod schema (valida esquemas, tipos de datos, formas de objetos)

const experience = defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.string()
        })
    })

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        link: z.string(),
        github: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
    })
})


    export const collections = { experience, projects }