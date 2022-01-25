import Head from "next/head";
import Image from "next/image";
import mechanincImage from "../public/phonebg.jpg";
export default function Home() {
  return (
    <>
      <Head>
        <title>FindMech|Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* top section */}
      <div className="flex h-screen md:h-fit items-center justify-center">
        <div className="flex-1 m-auto ml-7">
          <h2 className="text-6xl md:text-4xl font-extrabold text-black">
            <span className="block">
              Finding <span className="text-red-500">Mech</span>anic ?
            </span>
            <span className="block text-red-500 text-2xl">
              ...We Mech It easy.
            </span>
          </h2>
          <div>
            asd
          </div>
        </div>
        <div className="hidden md:block flex-1 md:flex ">
          <Image
            src={mechanincImage}
            alt="home"
            width={450}
            height={450}
            quality={50}
          />
        </div>
      </div>
      {/* why choose us */}

      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 bg-gray-700 p-5">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-3">
            User Friendly
          </h3>
          <p className="text-md  text-gray-500 py-4">
            Easy to access platform for everyone.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-3">
            Instant Service
          </h3>
          <p className="text-md text-gray-500 py-4">
            Providing Reliable service 24✕7`.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-3">
          Efficient Locator
          </h3>
          <p className="text-md  text-gray-500 py-4">
          Finds any nearby mechanic available.
          </p>
        </div>
      </div>
    </>
  );
}
