import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      secret: process.env.JWT_SECRETE,
    }),
    
  ],
 
  // pages: {
  //   signIn: "/auth/signin"
  // }
  
})