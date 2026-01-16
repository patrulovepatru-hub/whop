import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    {
      id: "whop",
      name: "Whop",
      type: "oauth",
      clientId: process.env.WHOP_CLIENT_ID!,
      clientSecret: process.env.WHOP_CLIENT_SECRET!,
      authorization: {
        url: "https://whop.com/oauth/authorize",
        params: {
          scope: "user:read memberships:read",
        },
      },
      token: "https://api.whop.com/api/v2/oauth/token",
      userinfo: "https://api.whop.com/api/v2/me",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.username || profile.email,
          email: profile.email,
          image: profile.profile_pic_url,
          whopUserId: profile.id,
        };
      },
    },
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // @ts-ignore
        session.user.whopUserId = user.whopUserId;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // @ts-ignore
        token.whopUserId = user.whopUserId;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "database",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
