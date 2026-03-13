import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcryptjs";
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      authorization: {
        params: {
          scope: "email public_profile",
        },
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        const { password, ...safeUser } = user;

        return safeUser;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      try {
        // FIRST LOGIN (OAuth)
        if (account && profile) {
          if (account.provider === "google") {
            const token_id = profile.sub;

            const existingUser = await prisma.googleUser.findUnique({
              where: { token_id },
            });

            if (!existingUser) {
              await prisma.googleUser.create({
                data: {
                  token_id,
                  name: profile.name,
                  email: profile.email,
                  image: profile.picture,
                },
              });
            }

            token.id = token_id;
            token.email = profile.email;
            token.name = profile.name;
            token.image = profile.picture;
          }

          if (account.provider === "facebook") {
            const token_id = profile.id.toString();

            const existingUser = await prisma.facebookUser.findUnique({
              where: { token_id },
            });

            if (!existingUser) {
              await prisma.facebookUser.create({
                data: {
                  token_id,
                  name: profile.name,
                  email: profile.email,
                  image: profile.picture?.data?.url,
                },
              });
            }

            token.id = token_id;
            token.email = profile.email;
            token.name = profile.name;
            token.image = profile.picture?.data?.url;
          }
        }

        // Credentials login
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.image = user.image;
        }

        return token;
      } catch (error) {
        console.error("jwt error:", error);
        return token;
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          token_id: token.id,
          email: token.email,
          name: token.name,
          image: token.image,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
