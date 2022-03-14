/*  ./components/Navbar.jsx     */
import { useState } from "react";
import Desktopnav from "./desktopnav";
import Mobilenav from "./mobilenav";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="z-10 sticky top-0 shadow-lg bg-gray-900">
      <div className="flex justify-between max-w-7xl px-5">
       <Desktopnav/>
      <Mobilenav />
      </div>
    </nav>
  );
};
