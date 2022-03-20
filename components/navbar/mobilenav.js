import Image from "next/image";
import { useState } from "react";
import Hamberger from "../../public/hamberger.svg";
import Close from "../../public/close.svg";
import Link from "next/link";
import { navMenu, secondarymenu } from "./nav-menu";
import { useSession, signIn, signOut } from "next-auth/react";
import { user } from "pg/lib/defaults";

function Mobilenav() {
  const {data:session} = useSession();
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
            ? "flex-row fixed top-0 right-0 overflow-y-auto shadow-xl bg-gray-500 h-screen w-3/5 p-5 md:hidden"
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
        <li className="py-2">
        {session && (
          <div className="flex flex-col items-center text-sm text-gray-900 font-medium">
        
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={session.user.image} alt="user" className="rounded-full overflow-hidden pb-2" />
          
            <p> {session.user.name ?? session.user.email}</p>
            <Link href="/api/auth/signout" passHref>
            <div>
            <button
            className="py-2 px-4 inline-block text-white bg-red-600 font-bold hover:bg-white hover:text-gray-900 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
             Logout
            </button>
            </div>
            </Link>
          </div>
        )}</li> 
          {navMenu.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 text-white font-semibold hover:bg-gray-800 rounded"
            >
              <Link href={item.link}>
                <a className="flow-root" onClick={() => {
                setToggle(false);
              }}>{item.title}</a>
              </Link>
            </li>
          ))}
          {
            !session && (secondarymenu.map((item, index) => (
            <li
              key={index}
              className="py-2 w-full px-4 text-white font-semibold hover:bg-gray-800 rounded"
            >
              <Link href={item.link}>
                <a className="flow-root" onClick={() => {
                setToggle(false);
              }}>{item.title}</a>
              </Link>
            </li>
          )))}
        </ul>
      </div>
    </>
  );
}

export default Mobilenav;
