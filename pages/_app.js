import "../styles/globals.css";
import { Navbar } from "../components/navbar/navbar.js";
import Footer from "../components/footer";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ApolloProvider client={client}>
      <Component {...pageProps} />
      </ApolloProvider>
      <Footer/>
    </>
  );
}

export default MyApp;
