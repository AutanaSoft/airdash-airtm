import { z } from "zod"

export const CreateLinkSchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  url: z.string().url("El formato de la URL es inválido"),
  description: z.string().optional(),
})

export type CreateLinkDto = z.infer<typeof CreateLinkSchema>
