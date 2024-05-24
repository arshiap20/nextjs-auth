import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  username: string;
  role: "USER" | "ADMIN";
};

module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}