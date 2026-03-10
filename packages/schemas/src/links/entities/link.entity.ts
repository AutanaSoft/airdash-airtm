import { z } from "zod"

export const LinkSchema = z.object({
  id: z.number(),
  url: z.string().url(),
  title: z.string(),
  description: z.string(),
})

export type Link = z.infer<typeof LinkSchema>
