import Image from "next/image";
import React from "react";
import { fetured1, fetured2, fetured3, fetured4, hero } from "../assets";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Hero = () => {
  const btnText = "Start Shopping";
  return (
    <section className="relative overflow-hidden pt-8 md:pt-16 gap-x-10 flex items-center justify-between">
      <div className="flex flex-1 flex-col justify-center gap-10 lg:">
        {/* content */}
        <button className="bg-[#e1edff] text-[#0000ff] text-[15px] font-semibold flex items-center justify-center tracking-wide h-10 w-[7.5rem] rounded-md">
          Sale 70%
        </button>
        <h1 className="text-3xl zero:text-5xl font-bold text-heading med:text-6xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-greypara lg:max-w-xs">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex items-center justify-center gap-x-2 bg-heading ring-2 ring-heading/70 text-white zero:tracking-widest w-full lg:w-40 zero:w-full py-3 px-5 tracking-wide font-medium">
          <PiShoppingCartSimpleBold size={28} />
          {btnText} 
        </button>
        <div className="flex flex-wrap lg:flex-nowrap justify-around gap-x-8 gap-y-5 zero:flex-wrap zero:gap-x-8 zero:justify-around zero:gap-y-5 lg:gap-x-4  ">
          <Image src={fetured1} alt="featured image" />
          <Image src={fetured2} alt="featured image" />
          <Image src={fetured3} alt="featured image" />
          <Image src={fetured4} alt="featured image" />
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 ">
        <div className="bg-heropink  w-[38rem] h-[38rem] rounded-[50%]">
          <Image
            className="absolute top-[3%]  overflow-visible"
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
