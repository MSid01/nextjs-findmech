import Link from "next/link";
import {navMenu, secondarymenu} from "./nav-menu.js"
import { useSession } from 'next-auth/react'
export default function Desktopnav() {
  const { data: session, status } = useSession();
  const loading = status === "loading"
  return (
    <>
    <div className="flex justify-between">
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
        {
            navMenu.map((item, index)=>(
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
      {loading && <div>Loading...</div>}
      {
            session &&
              <div className="text-white font-medium">
               <p> Welcome, {session.user.name ?? session.user.email}</p>
              </div>
            }
      
    { secondarymenu.map((item, index)=>(
    <Link key={index} href={item.link}>
      <a
        className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-700 transition duration-300"
      >
        {item.title}
      </a>
    </Link>
    ))}
    </div>
  </>
  );
}
