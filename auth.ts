import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import { authConfig } from "./auth/auth.config"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
  providers: [GitHub],
  
}
)