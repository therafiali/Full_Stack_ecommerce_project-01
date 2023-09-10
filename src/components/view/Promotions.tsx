import Image from "next/image";
import React from "react";
import { event1, event2, event3 } from "../assets";

const Promotions = () => {
  return (
    <div className="mt-12 med:mt-24">
      <h3 className="text-xs font-bold tracking-widest text-center text-[#0062f5] ">
        PROMOTIONS
      </h3>
      <h3 className="my-8  text-center text-3xl font-bold tracking-wider">
        Our Promotions Events
      </h3>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col one:flex-row justify-evenly bg-[#d6d6d8] col-span-1 sm:col-span-2 w-full ">
          {/* first box */}

          <div className="mt-2 items-center sm:mt-0 flex flex-col one:px-5 sm:justify-center">
            <h3 className="text-2xl font-extrabold">GET UP TO</h3>
            <span className="text-3xl font-extrabold">60%</span>
            <p className="text-lg text-gray-700  tracking-wider mx-auto px-2 text-center sm:px-0">
              For the summer season
            </p>
          </div>
          <div className="flex flex-col items-center sm:justify-end ">
            <Image src={event1} alt="GET UP TO 60%" />
          
          </div>
        </div>
        <div className="bg-[#efe1c7] row-span-1 md:row-span-2 flex flex-col  justify-between w-full h-full sm:row-span-1">
          {/* Second box */}
          <div className="mt-4 pl-5 pb-5">
            <h3 className="font-light">Flex Sweatshirt</h3>
            <p>
              {" "}
              <del>$100.00</del> &nbsp; &nbsp;{" "}
              <b className="text-lg font-semibold">$75.00</b>
            </p>
          </div>

          <div className="mx-auto">
            <div className="">
              <Image alt="sweaters" src={event2} />
            </div>
          </div>
        </div>
        <div className="bg-[#d7d7d9] row-span-1 md:row-span-2 flex flex-col justify-between w-full h-full">
          {/* third box */}
          <div className="mt-4 pl-5 pb-5">
            <h3 className="font-light">Flex Push Button Bomber</h3>
            <p>
              {" "}
              <del>$225.00</del> &nbsp; &nbsp;{" "}
              <b className="text-lg font-semibold">$190.00</b>
            </p>
          </div>
          <div className="flex flex-col justify-end mx-auto">
            <Image src={event3} alt="Flex Sweatshirt" />
          </div>
        </div>
        <div className="py-9 col-span-1 sm:col-span-2 bg-[#212121] text-white w-full">
          {/* forth box */}
          <h3 className="text-4xl font-bold text-center mt-10">GET 30% Off</h3>
          <p className="text-center mt-4">USE PROMO CODE</p>
          <div className="flex justify-center">
            <button className="bg-[#474747] px-3 tracking-widest px-auto zero:px-6 sm:px-16 py-2 rounded-md">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
