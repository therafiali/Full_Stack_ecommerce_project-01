import Image from "next/image";
import React from "react";
import { hero } from "../assets";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Hero = () => {
  const btnText = "Start \nShopping";
  return (
    <section className="relative overflow-hidden pt-16 flex items-center justify-between">
      <div className="flex-1 max-w-md space-y-5">
        {/* content */}
        <button className="bg-[#e1edff] text-blue-700 font-semibold text-base py-2 px-6 rounded-md">
          Sale 70%
        </button>
        <h1 className="text-6xl font-bold text-heading">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-greypara max-w-xs">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex items-center justify-center gap-x-2 bg-heading ring-2 ring-heading/70 text-white py-3 px-5 tracking-wide font-medium whitespace-pre">
          <PiShoppingCartSimpleBold size={18} />
          {btnText}
        </button>
      </div>
      <div className="flex flex-grow-0 flex-shrink basis-[0%]">
        <div className="bg-heropink z-50 w-[38rem] h-[38rem] rounded-[50%]">
          <Image
            className="absolute top-[3%] z-50 overflow-visible"
            src={hero}
            alt="Hero Image"
            width={680}
            height={680}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
