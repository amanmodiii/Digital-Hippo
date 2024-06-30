import { z } from "zod"

export const AuthCredentialsValidator = z.object({
      email: z.string().email({ message: "Invalid email address" }),
      password: z.string().min(8, {
        message: "Password must be at least 8 characters long."
      }).refine(password => /[A-Z]/.test(password), {
        message: "Password must contain at least one uppercase letter."
      }).refine(password => /[a-z]/.test(password), {
        message: "Password must contain at least one lowercase letter."
      }).refine(password => /[0-9]/.test(password), {
        message: "Password must contain at least one number."
      }).refine(password => /[^A-Za-z0-9]/.test(password), {
        message: "Password must contain at least one special character."
      })
    })

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>