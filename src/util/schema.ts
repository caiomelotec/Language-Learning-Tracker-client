import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z.string().min(1, { message: "User name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must to be at least 6 characters" })
      .max(12, { message: "Password has a maximum of 12 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must to be at least 6 characters" })
      .max(12, { message: "Password has a maximum of 12 characters" }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
