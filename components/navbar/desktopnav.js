import Link from "next/link";
import { navMenu, secondarymenu } from "./nav-menu.js";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Desktopnav() {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex space-x-2">
        <Link href="/">
          <a className="flex items-center py-4 ">
            <span className="font-serif font-bold text-xl text-white">
              Find
            </span>
            <span className="font-serif font-bold text-xl text-red-400">
              Mech
            </span>
          </a>
        </Link>
        <div className="hidden md:flex items-center space-x-1">
          {navMenu.map((item, index) => (
            <Link key={index} href={item.link}>
              <a className="py-2 px-2 text-white font-bold decoration-red-500 hover:text-red-500 ">
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* secondary menu  */}
      <div className="hidden md:flex items-center space-x-1 ">
        {session ? (
          <div className="flex gap-2 text-white font-medium">
            <p> Welcome, {session.user.name ?? session.user.email}</p>
            <Link href="/api/auth/signout" passHref>
            <button
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#ef4444"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </button>
            </Link>
          </div>
        ) : (
          secondarymenu.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <button
                className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-700 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                {item.title}
              </button>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
