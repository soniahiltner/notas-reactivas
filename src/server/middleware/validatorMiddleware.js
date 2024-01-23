import { z } from 'zod'

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof z.ZodError) {
      //console.log(error.issues)
      return res.status(400).json({ message: error.issues[0].message })
    }
    
  }
}