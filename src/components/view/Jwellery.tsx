import React from "react";
import Image from "next/image";
import Link from "next/link";
import { feature } from "../assets";

const Jwellery = () => {
  const productDetail = [
    {
      title: "Using Good Quality Materials",
    },
    {
      title: "100% Handmade Products",
    },
    {
      title: "Modern Fashion Design",
    },
    {
      title: "Discount for Bulk Orders",
    },
  ];
  return (
    <section className="mt-12  mx-auto  bg-[#fbfcff] med:mt-24">
      <div className="flex justify-center lg:justify-end ">
        <h2 className="text-3xl text-center md:text-5xl leading-tight max-w-xl md:text-left font-bold tracking-wider ">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>

      {/* Start here */}

      <div className="mt-12 grid-cols-1 gap-x-6 grid llg:grid-cols-2">
        {/* left */}
        <div className="grid grid-cols-1 gap-x-6  zero:grid-cols-2 justify-center items-center relative">
          <div className="max-w-sm tracking-widest absolute opacity-[.07] z-10 font-extrabold mx-auto text-[2.75rem] leading-loose sm:text-8xl zero:p-10  text-[#212121]">
            Different from others
          </div>
          {productDetail.map((item) => (
            <div key={item.title}>
              <div className="z-20">
                <h4 className=" font-bold text-center tracking-widest  py-4">
                  {item.title}
                </h4>
                <p className="tracking-widest text-center  text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 llg:mt-0 mt-10 mx-auto items-center  sm:flex-row ">
          <div className=" flex-shrink-0 ">
            <Image
              alt="feature"
              width={300}
              height={350}
              className="flex-shrink-0 flex justify-center"
              src={feature}
            />
          </div>

          <div className="">
            <p className=" text-center  text-gray-600 tracking-widest">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className="text-center">
              <Link href={"/products"}>
                <button className="mt-8 p-2 tracking-wide text-base font-normal   zero:p-4 zero:px-5 zero:text-xl leading-relaxed scroll-m-20   zero:tracking-wider bg-[#212121] ring-2 ring-heading/70 text-white   llg:w-2/4  llg:py-2 border-black border-2 shadow-inner hover:bg-[#212121] llg:text-sm">
                  See All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jwellery;
