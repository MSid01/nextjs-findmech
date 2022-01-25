import Link from "next/link";
import {navMenu, secondarymenu} from "./nav-menu.js"
export default function Desktopnav() {
  return (
    <>
    <div className="flex space-x-5">
      <Link href="/">
        <a className="flex items-center py-4 ">
          <span className="font-mono font-bold text-xl text-gray-200 text-lg">
            FindMech
          </span>
        </a>
      </Link>
      <div className="hidden md:flex items-center space-x-1">
        {
            navMenu.map((item, index)=>(
                <Link key={index} href={item.link}>
          <a className="py-2 px-2 text-red-500 font-semibold decoration-red-500 hover:text-red-300">
            {item.title}
          </a>
        </Link>
        ))}
      </div>
    </div>

    {/* secondary menu  */}
    <div className="hidden md:flex items-center space-x-3 ">
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