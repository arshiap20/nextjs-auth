import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "./shared/zod-schemas";
import prisma from "./shared/utils/db";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateData = LoginSchema.safeParse(credentials);

        if (validateData.success) {
          const { username, password } = validateData.data;

          const user = await prisma.user.findUnique({ where: { username } });

          if (!user) return null;

          const passMatch = await bcrypt.compare(password, user.password);

          if (passMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
