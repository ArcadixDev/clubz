import prisma from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [
    Credentials({
      name: "Clubz",
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

        const passwordsMatch = await compare(
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
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("signin from callbacks ... ");

    //   //   const res = await db
    //   //     .selectFrom("User")
    //   //     .selectAll()
    //   //     .where("User.email", "=", user?.email!);

    //   const res = await prisma.user.findUnique({
    //     where: {
    //       email: user?.email!,
    //     },
    //   });

    //   console.log("user => ", user);
    //   console.log("account => ", account);
    //   console.log("profile => ", profile);
    //   console.log("email => ", email);
    //   console.log("credentials => ", credentials);
    //   console.log("res => ", res);
    //   if (res) {
    //     redirect(`/login?error=OAuthAccountNotLinked&email=${user.email}`);
    //   }

    //   console.log("The user is not present...");
    //   return true;
    // },

    jwt({ token, user, account, profile, session }) {
      // console.log("jwt => ", token, user, account, profile, session);
      if (user) {
        return {
          ...token,
          userId: user.id,
        };
      }
      return token;
    },
    session({ session, token, user }) {
      // console.log("inside session, ", session, token);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.userId,
          role: token.role,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
