"use server";

import { LoginSchema } from "@/shared/zod-schemas";
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/shared/routes";
import { AuthError } from "next-auth";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateData = LoginSchema.safeParse(data);

  if (!validateData.success) return { error: "invalid fields" };

  const { username, password } = validateData.data;

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Login successfully" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "There is no such user" };
        default:
          return { error: "Error" };
      }
    }

    throw error;
  }
};
