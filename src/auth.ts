import NextAuth from "next-auth";
import authConfig from "./auth.config";

import prisma from "./shared/utils/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });

      if (!existingUser) return token;

      token.username = existingUser.username;
      token.role = existingUser.role;

      return token;
    },
    async session({ token, session }) {
      session.user.role = token.role as Role;
      session.user.username = token.username as string;

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
