import prisma from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "user@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password, role } = credentials as Pick<
          User,
          "email" | "password"
        > & { role: "user" | "club" };

        if (!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        console.log("club is found . ", user);

        if (!user?.password) {
          throw new Error(
            "Already signedup Club is logged in with Google auth and should be logged",
          );
        }

        if (!user) {
          throw new Error("IDK but user is somehow not truthy");
          return null;
        }

        const passwordsMatch = await bcrypt.compare(
          password as string,
          user.password as string,
        );
        console.log("password matches? ", passwordsMatch);

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
    Google,
  ],
  callbacks: {
    jwt({ token, user, account, profile, session }) {
      if (user) {
        return {
          ...token,
          userId: user.id,
          role: token.role,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
