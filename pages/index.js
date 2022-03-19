import Head from "next/head";
import Intro from "../components/home/intro.js";
import Features from "../components/home/features.js";
import Testimonials from "../components/home/testimonials.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>FindMech|Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* top section */}
      <Intro/>
      {/* why choose us */}
      <Features/>
      {/* testimonial */}
      <Testimonials/>

    </>
  );
}
