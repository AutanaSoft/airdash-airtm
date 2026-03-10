import { z } from "zod"
export declare const UpdateLinkSchema: z.ZodObject<
  {
    title: z.ZodOptional<z.ZodString>
    url: z.ZodOptional<z.ZodString>
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>
  },
  "strip",
  z.ZodTypeAny,
  {
    url?: string | undefined
    title?: string | undefined
    description?: string | undefined
  },
  {
    url?: string | undefined
    title?: string | undefined
    description?: string | undefined
  }
>
export type UpdateLinkDto = z.infer<typeof UpdateLinkSchema>
//# sourceMappingURL=update-link.dto.d.ts.map
