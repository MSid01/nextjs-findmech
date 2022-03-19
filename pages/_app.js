import "../styles/globals.css";
import { Navbar } from "../components/navbar/navbar.js";
import Footer from "../components/footer";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client/apollo-client";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <>
      <SessionProvider session={session} refetchInterval={5 * 60}>
      <Navbar />
      <ApolloProvider client={client}>
      <Component {...pageProps} />
      </ApolloProvider>
      </SessionProvider>
      <Footer/>
    </>
  );
}

export default MyApp;
