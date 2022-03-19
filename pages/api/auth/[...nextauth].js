import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
// import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"
    
    const options = {
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
      session: {
        strategy: "jwt",
        },
      callbacks: {
        async jwt({ token,  user, account, profile, isNewUser }) {
          // Persist the OAuth access_token to the token right after signin
          // console.log("ye logged in", account);
          if (account) {
            token.accessToken = account.access_token;
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
            );
            const data = await response.json();
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        }
      }
    };
    
    const Auth = (req, res) =>
      NextAuth(req, res, options);
    
    export default Auth;