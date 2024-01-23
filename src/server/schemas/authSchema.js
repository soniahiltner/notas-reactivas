import { z } from 'zod'

export const authSchema = z.object({
  username: z.string({
    required_error: 'Username is required'
  }).min(1),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be at least 6 characters long'
  })
})