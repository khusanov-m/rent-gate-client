import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    }),
});
export type loginSchemaType = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  name: z.string(),
});
export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    }),
  passwordConfirm: z.string().refine((data) => data === "password", {
    message: "Passwords do not match",
  }),
});
export type resetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

export const registerSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters long",
    })
    .max(50, {
      message: "First name must be at most 50 characters long",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters long",
    })
    .max(50, {
      message: "Last name must be at most 50 characters long",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    }),
});
export type registerSchemaType = z.infer<typeof registerSchema>;

export const changePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    }),
  passwordConfirm: z.string().refine((data) => data === "newPassword", {
    message: "Passwords do not match",
  }),
});
export type changePasswordSchemaType = z.infer<typeof changePasswordSchema>;
