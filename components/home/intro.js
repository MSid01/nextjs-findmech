
import mechanincImage from "../../public/phonebg.jpg";
import Image from "next/image";
import Link from "next/link";
function Intro() {
  return (
    <div className="flex h-96 py-64 md:h-fit sm:py-4 items-center justify-center">
    <div className="flex-1 ml-5 md:flex justify-center">
      <h2 className="text-5xl md:text-4xl font-extrabold text-black">
        <span className="block">
          Finding <span className="text-red-600">Mech</span>anic ?
        </span>
        <span className="block text-red-600 text-2xl md:ml-16 mt-2">
          ...We Mech It easy.
        </span>
      </h2>
      <div className="md:hidden mt-3">
        <Link href="/findMech" passHref className="">
        <button type="button" className="py-2 px-4 decoration-none bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-fit transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
          Find Garages
          </button>
        </Link>
      </div>
    </div>
    <div className="hidden flex-1 md:flex justify-flex-start">
      <Image
        src={mechanincImage}
        alt="home"
        width={450}
        height={450}
        quality={10}
      />
    </div>
  </div>
  );
}

export default Intro;
