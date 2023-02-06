import NextAuth, { type NextAuthOptions } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

// // Prisma adapter for NextAuth, optional and can be removed
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { prisma } from "@server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/login",
    signOut: "/auth/logout",
    verifyRequest: "/auth/verify",
  },
  callbacks: {
    session({ session, user }) {
      // Add user.id to session
      if (session.user && user) {
        session = {
          ...session,
          user: {
            ...user,
            id: user.id,
          },
        };
      }
      return session as any;
    },
  },
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_SECRET as string,
    // }),
  ],
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  if (req.query?.nextauth?.includes("callback") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      req.body
    );
  }

  // Get a custom cookie value from the request
  const someCookie = req.cookies["some-custom-cookie"];

  return await NextAuth(req, res, authOptions);
}
