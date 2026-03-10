"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.LinkSchema = void 0
const zod_1 = require("zod")
exports.LinkSchema = zod_1.z.object({
  id: zod_1.z.number(),
  url: zod_1.z.string().url(),
  title: zod_1.z.string(),
  description: zod_1.z.string(),
})
//# sourceMappingURL=link.entity.js.map
