import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import { authConfig } from "./auth/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma/prisma"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
  providers: [GitHub , Google],
  adapter:PrismaAdapter(prisma)
  
}
)