import { z } from "zod"
export declare const LinkSchema: z.ZodObject<
  {
    id: z.ZodNumber
    url: z.ZodString
    title: z.ZodString
    description: z.ZodString
  },
  "strip",
  z.ZodTypeAny,
  {
    id: number
    url: string
    title: string
    description: string
  },
  {
    id: number
    url: string
    title: string
    description: string
  }
>
export type Link = z.infer<typeof LinkSchema>
//# sourceMappingURL=link.entity.d.ts.map
