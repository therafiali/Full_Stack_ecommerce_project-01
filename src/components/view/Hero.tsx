import Image from "next/image";
import React from "react";
import { fetured1, fetured2, fetured3, fetured4, hero } from "../assets";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Hero = () => {
  const btnText = "Start Shopping";
  return (
    <section className="relative overflow-hidden pt-8 md:pt-16 gap-x-10 flex items-center justify-between">
      <div className="flex flex-col justify-center gap-10 lg:max-w-md ">
        {/* content */}
        <button className="bg-[#e1edff] text-[#0000ff] text-[15px] font-semibold flex items-center justify-center tracking-wide h-10 w-[7.5rem] rounded-md">
          Sale 70%
        </button>
        <h1 className="text-6xl font-bold text-heading">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-greypara lg:max-w-xs">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex items-center justify-center gap-x-2 bg-heading ring-2 ring-heading/70 text-white py-3 px-5 tracking-wide font-medium  w-[35%]">
          <PiShoppingCartSimpleBold size={25} />
          {btnText}
        </button>
        <div className="flex justify-between gap-x-4 ">
          <Image src={fetured1} alt="featured image" />
          <Image src={fetured2} alt="featured image" />
          <Image src={fetured3} alt="featured image" />
          <Image src={fetured4} alt="featured image" />
        </div>
      </div>
      <div className="hidden lg:flex flex-grow-0 flex-shrink basis-[0%]">
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
