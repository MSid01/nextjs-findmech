import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
// import lgog from "../../../public/fmlo"
// import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"
    
    const options = {
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
      theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "#ef4444",
        logo:"https://res.cloudinary.com/sidster/image/upload/v1647784210/Drawing_2_sketchpad_4_859e14cb36.png?updated_at=2022-03-20T13:50:28.704Z" 
      },
      session: {
        strategy: "jwt",
        },
        
      callbacks: {
        async jwt({ token,  user, account, profile, isNewUser }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token;
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
            );
            const data = await response.json();
            token.jwt = data.jwt;
            token.id = data.user.id;
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