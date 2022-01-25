import Image from "next/image";
import { useState } from "react";
import Hamberger from "../../public/hamberger.svg";
import Close from "../../public/close.svg";
import Link from "next/link";
import { navMenu, secondarymenu } from "./nav-menu";

function Mobilenav() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setToggle(true)}
          className="outline-none mobile-menu-button"
        >
          <Image
            className="selection:bg-yellow-300"
            src={Hamberger}
            alt="menu-icon"
            width={20}
            height={25}
          />
        </button>
      </div>
      <div
        className={
          toggle
            ? "flex-row fixed top-0 right-0 overflow-y-scroll shadow-xl bg-gray-600 h-screen w-3/5 p-5 md:hidden"
            : "hidden"
        }
      >
        <button className="fixed right-6" onClick={() => setToggle(false)}>
          <Image
            className="select-none"
            src={Close}
            alt="close-icon"
            width={16}
            height={16}
          />
        </button>
        <ul className="pt-8">
          {navMenu.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 text-red-500 font-semibold hover:bg-red-500 hover:text-white rounded"
            >
              <Link href={item.link}>
                <a className="flow-root" onClick={() => {
                setToggle(false);
              }}>{item.title}</a>
              </Link>
            </li>
          ))}
          {secondarymenu.map((item, index) => (
            <li
              key={index}
              className="py-2 w-full px-4 text-red-500 font-semibold hover:bg-red-500 hover:text-white rounded"
            >
              <Link href={item.link}>
                <a className="flow-root" onClick={() => {
                setToggle(false);
              }}>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Mobilenav;
