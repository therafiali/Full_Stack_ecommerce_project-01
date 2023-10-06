"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navbarArr, NavArrayTypes } from "@/components/utils/navbar-array";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "./DropDown";
import Expand from "./Expand";
import Link from "next/link";
import BASE_PATH_FORAPI from "@/components/shared/BaseUrl";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { CartSideMenu } from "../Cart-SideMenu";

const Navbar = () => {
  const cartArray = useSelector((state: RootState) => state.cart);
  // console.log(cartValue,'nav')
  const router = useRouter();
  const [searchquery, setSearchquery] = useState("");
  const [isNavOpen, setNav] = useState(false);

  const handleSearchData = (e: any) => {
    if (e.key === "Enter" && e.keyCode === 13) {
      router.push(`/search/${searchquery}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-opacityDownColor backdrop-blur-lg mx-auto max-w-screen-xl px-3 sm:px-10 zero:px-0 med:px-4">
      <nav className="flex  items-center zero:px-3  px-1  sm:px-2 justify-between py-2 sm:py-4 sm:pb-8  ">
        <div className="flex-shrink-0 ">
          {/* our Logo */}
          <Link href={"/"}>
            <Image
              className="mb-1 py-2"
              src={"/Logo.webp"}
              alt="Dine Market"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between space-x-2 md:space-x-6">
          {/* label  */}
          {navbarArr.map((item: NavArrayTypes, i: number) => (
            <li
              key={i}
              className="relative list-none text-base tracking-wide scroll-m-20 leading-relaxed group cursor-pointer "
            >
              <div className="flex items-center gap-x-1">
                <Link href={item.href}>
                  <h3>{item.label}</h3>
                </Link>

                <div>
                  {item.isDropdown && (
                    <IoIosArrowDown className=" group-hover:rotate-180 duration-300" />
                  )}
                </div>
              </div>
              {item.isDropdown && (
                <button className="absolute border   rounded-md shadow-xl w-auto  bg-gray-200 p-2 px-4 text-base tracking-wide text-center leading-relaxed scroll-m-20 text-gray-800 invisible group-hover:visible">
                  <div className="">
                    <DropDown item={item} />
                  </div>
                </button>
              )}
            </li>
          ))}
        </div>
        <div className="border rounded-md px-2 bg-white hidden lg:flex items-center ">
          {/* search bar */}
          <Link href={`/search/${searchquery}`}>
            <GrSearch className="" size={15} />
          </Link>
          <input
            className="text-sm w-80 pr-5 pl-1 py-1 focus:outline-none"
            type="text"
            onKeyDown={handleSearchData}
            onChange={(e) => setSearchquery(e.target.value)}
            placeholder="   What you looking for"
          />
        </div>
        <div className="relative bg-gray-300 hover:scale-105 rounded-full w-12 h-12 hidden lg:flex  items-center justify-center">
          <CartSideMenu />
          {/* cart icon */}
          {/* <Link href={'/cart'}> */}
          
          <div className="absolute top-0 right-0 flex items-center justify-center  bg-red-500 rounded-full w-5 h-5 text-white">
            {cartArray.totalQuantity}
          </div>
          {/* </Link> */}
        </div>
        <div className="flex lg:hidden">
          {/* menu for mobile */}

          <div onClick={() => setNav(!isNavOpen)}>
            {isNavOpen ? (
              <GrClose size={27} />
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                color="black"
                fontSize={27}
                style={{ color: "black" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
                </g>
              </svg>
            )}
          </div>
        </div>
      </nav>
      {isNavOpen && <NavForMobile />}
    </div>
  );
};

export default Navbar;

const NavForMobile = () => {
  const cartArray = useSelector((state: RootState) => state.cart);
  return (
    <section className="block lg:hidden">
      <ul className="h-screen bg-white pt-10">
        {navbarArr.map((item: NavArrayTypes, i: number) => (
          <Expand key={i} item={item} />
        ))}
        <div className="flex mx-auto justify-center">
          <div className="relative bg-gray-300 hover:scale-105 rounded-full w-12 h-12  items-center justify-center">
            {/* cart icon */}
            {/* <Link href={'/cart'}> */}
            <div className="flex mt-3 justify-center">
              <PiShoppingCartSimpleBold size={25} />
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center  bg-red-500 rounded-full w-5 h-5 text-white">
              {cartArray.totalQuantity}
            </div>
            {/* </Link> */}
          </div>
        </div>
      </ul>
    </section>
  );
};
