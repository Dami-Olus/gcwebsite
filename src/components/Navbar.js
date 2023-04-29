import { heroImage, logoWhite } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { menu } from "../constants";

function Navbar() {
  const [active, setActive] = useState("");
  console.log(menu);
  return (
    <div className="flex justify-around items-center text-white mt-14 py-5 absolute top-0 w-screen">
      <div>
        <Image
          src={logoWhite}
          alt=""
          className="z-20"
          width={300}
          height={300}
        />
      </div>
      <div>
        <ul className="flex space-x-14 font-bold text-xl">
          {/* <li onClick={()=>setActive(true)} className="hover:text-red-400">
            <a href="">Home</a>
            {active && <div className="w-16 mt-3 h-1 bg-red-400"></div>}
          </li> */}
          {menu.map((menuItem) => (
            <li
              key={menuItem.id}
              onClick={() => setActive(menuItem.link)}
              className={`hover:text-red-400 text-white ${active===menuItem.link?'underline':'no-underline'}`}
            >
              <a href={menuItem.id}>{menuItem.link}</a>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
