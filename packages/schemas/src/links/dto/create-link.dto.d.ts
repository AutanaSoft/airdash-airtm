import { z } from "zod"
export declare const CreateLinkSchema: z.ZodObject<
  {
    title: z.ZodString
    url: z.ZodString
    description: z.ZodOptional<z.ZodString>
  },
  "strip",
  z.ZodTypeAny,
  {
    url: string
    title: string
    description?: string | undefined
  },
  {
    url: string
    title: string
    description?: string | undefined
  }
>
export type CreateLinkDto = z.infer<typeof CreateLinkSchema>
//# sourceMappingURL=create-link.dto.d.ts.map
