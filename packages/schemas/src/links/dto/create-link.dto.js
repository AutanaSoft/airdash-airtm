"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.CreateLinkSchema = void 0
const zod_1 = require("zod")
exports.CreateLinkSchema = zod_1.z.object({
  title: zod_1.z.string().min(1, "El título es requerido"),
  url: zod_1.z.string().url("El formato de la URL es inválido"),
  description: zod_1.z.string().optional(),
})
//# sourceMappingURL=create-link.dto.js.map
