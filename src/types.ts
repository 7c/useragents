//#region imports
import { z } from 'zod'
//#endregion

//#region zod schema (derived from useragents.json)

/** Family + version quadruple shared by the browser, device and OS entries. */
export const UserAgentEntitySchema = z.object({
  family: z.string(),
  major: z.string(),
  minor: z.string(),
  patch: z.string()
})

/** Parsed user-agent: the browser entity plus its device and OS. */
export const UserAgentInfoSchema = UserAgentEntitySchema.extend({
  device: UserAgentEntitySchema,
  os: UserAgentEntitySchema
})

/** A single catalogued user-agent and its popularity metadata. */
export const UserAgentSchema = z.object({
  popularity: z.number(),
  agent: UserAgentInfoSchema,
  popularityRate: z.number().optional(),
  // Set at lookup time to the user-agent string (the map key).
  ua: z.string().optional()
})

/** Shape of useragents.json. */
export const UseragentsDataSchema = z.object({
  t: z.number(),
  useragents: z.record(z.string(), UserAgentSchema),
  totalPopularity: z.number()
})

//#endregion

//#region inferred types

export type UserAgentEntity = z.infer<typeof UserAgentEntitySchema>
export type UserAgentInfo = z.infer<typeof UserAgentInfoSchema>
export type UserAgent = z.infer<typeof UserAgentSchema>
export type UseragentsData = z.infer<typeof UseragentsDataSchema>

//#endregion
