"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const CartSideMenu = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      {/* navbar */}
      
      <div className="bg-blue-500 fixed flex h-14 inset-x-0 items-center justify-between px-4 shadow-lg text-white top-0">
        <div>
          {/* logo */}
          Rafi
        </div>
        {/* navbar open  buton */}
        <button
          className="p-2 rounded-full transition   duration-1000 hover:bg-blue-400"
          onClick={handleSidebar}
        >
          <FaBars />
        </button>
      </div>


      {/* sidebar container */}

      <div>
        {/* side bar overlay */}
        <div
          className={
            sideBar
              ? "bg-black cursor-pointer  fixed inset-0 opacity-70 visible"
              : "hidden opacity-0 "
          }
          onClick={handleSidebar}
        ></div>

        {/* {side bar} */}

        <div
          className={
            sideBar
              ? " bg-white fixed inset-y-0 py-4 right-0 w-64"
              : "bg-white fixed inset-y-0 py-4 -right-full w-64"
          }
        >
          {/* sidebar close button  */}
          <button
            onClick={handleSidebar}
            className="absolute -left-8 p-1 rounded-full text-gray-500 top-4 transition duration-1000 hover:text-red-300"
          >
            <FaTimes />
          </button>

          <ul className="font-normal text-gray-500">
            <li onClick={handleSidebar}>home </li>
            <li onClick={handleSidebar}>home </li>
            <li onClick={handleSidebar}>home </li>
            <li onClick={handleSidebar}>home </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartSideMenu;
