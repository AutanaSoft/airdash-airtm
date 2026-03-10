import { z } from "zod"
import { CreateLinkSchema } from "./create-link.dto"

export const UpdateLinkSchema = CreateLinkSchema.partial()
export type UpdateLinkDto = z.infer<typeof UpdateLinkSchema>
