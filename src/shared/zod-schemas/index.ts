import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string()
    .refine((data) => data.length, { message: "username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .refine((data) => data.length, { message: "username is required" }),
    phoneNumber: z
      .string()
      .min(1, { message: "phoneNumber is required" })
      .regex(/^09(0[1-5]|[1 3]\d|2[0-2]|9[0-4]|98)\d{7}$/, {
        message: "invalid phoneNumber",
      }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirm: z
      .string()
      .refine((data) => data.length, { message: "confirm-password is required" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
