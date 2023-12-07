import { compare } from "bcrypt";
import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "@auth/core/jwt";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

declare module "@auth/core" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: User;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    userId: string;
  }
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
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
        const { email, password } = credentials as Pick<
          User,
          "email" | "password"
        >;

        if (!email || !password) {
          return null;
        }

        // const user = await db
        //   .select()
        //   .from(users)
        //   .where(eq(users.email, email));
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          return null;
        }

        const passwordsMatch = await compare(
          password as string,
          user.password as string,
        );

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
    Google,
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signin from callbacks ... ");

      //   const res = await db
      //     .selectFrom("User")
      //     .selectAll()
      //     .where("User.email", "=", user?.email!);

      const res = await prisma.user.findUnique({
        where: {
          email: user?.email!,
        },
      });

      console.log("user => ", user);
      console.log("account => ", account);
      console.log("profile => ", profile);
      console.log("email => ", email);
      console.log("credentials => ", credentials);
      if (!res) {
        return true;
      }
      return false;
    },
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          userId: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.userId,
        },
      };
    },
  },
  events: {
    async linkAccount({ account, profile, user }) {
      console.log("account => ", account);
      console.log("profile => ", profile);
      console.log("user => ", user);
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig);
