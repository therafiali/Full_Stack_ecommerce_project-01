"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navbarArr, NavArrayTypes } from "@/components/utils/navbar-array";
import Image from "next/image";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "./DropDown";
import Expand from "./Expand";

const Navbar = () => {
  const [isNavOpen, setNav] = useState(false);
  const [cartcount, setcartcount] = useState(0)
  return (
    <div>
      <nav className="flex items-center z-30  px-1 sm:px-2 justify-between py-2 sm:py-4 pb-10">
        <div className="flex-shrink-0 ">
          {/* our Logo */}
          <Image
            className="mb-1 py-2"
            src={"/Logo.webp"}
            alt="Dine Market"
            width={150}
            height={150}
          />
        </div>
        <div className="hidden lg:flex justify-between space-x-2 md:space-x-6">
          {/* label  */}
          {navbarArr.map((item: NavArrayTypes, i: number) => (
            <li
              key={i}
              className="relative list-none text-base tracking-wide scroll-m-20 leading-relaxed group "
            >
              <div className="flex items-center gap-x-1">
                <h3>{item.label}</h3>
                <div className="group-hover:rotate-180 duration-300">
                  {item.isDropdown && <IoIosArrowDown />}
                </div>
              </div>
              {item.isDropdown && (
                <button className="absolute border   rounded-md shadow-xl w-auto  bg-gray-200 p-2 px-4 text-base tracking-wide text-center leading-relaxed scroll-m-20 text-gray-800 invisible group-hover:visible">
                  <DropDown item={item} />
                </button>
              )}
            </li>
          ))}
        </div>
        <div className="border rounded-md px-2 hidden lg:flex items-center ">
          {/* search bar */}
          <GrSearch size={15} />
          <input
            className="text-sm w-80 pr-5 pl-1 py-1 focus:outline-none"
            type="text"
            placeholder="   What you looking for"
          />
        </div>
        <div className="relative bg-gray-100 rounded-full w-12 h-12 hidden lg:flex  items-center justify-center">
          {/* cart icon */}
          <PiShoppingCartSimpleBold size={25} />
          <div className="absolute top-0 right-0 flex items-center justify-center  bg-red-500 rounded-full w-5 h-5 text-white">
            {cartcount}
          </div>
        </div>
        <div className="flex lg:hidden">
          {/* menu for mobile */}

          <div onClick={() => setNav(!isNavOpen)}>
            {isNavOpen ? <GrClose /> : <GiHamburgerMenu size={25} />}
          </div>
        </div>
      </nav>
      {isNavOpen && <NavForMobile />}
    </div>
  );
};

export default Navbar;

const NavForMobile = () => {
  return (
    <section className="block lg:hidden">
      <ul>
        {navbarArr.map((item: NavArrayTypes, i: number) => (
          <Expand key={i} item={item} />
        ))}
      </ul>
    </section>
  );
};
