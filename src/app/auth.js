// src/auth.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Create and export the auth function
export const { auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
