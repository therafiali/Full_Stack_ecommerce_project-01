"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { imagesType, oneProductType } from "../utils/productDataAndTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { BiCart } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/Store/cartSlice";

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state: any) => state.cart);
  // console.log(cartArray, "carrt");
  const [quantity, setQuantity] = useState(1);
  const [imageForPreviewOfSelected, setImageForPreviewOfSelected] =
    useState<string>(item.image[0]._key);
  const builder: any = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  function incrementTheQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementTheQuantity() {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div>
      <div className="mt-6 lg:mt-10 grid grid-cols-8 lg:grid-cols-10 gap-x-2 lg:gap-x-0">
        <div className=" w-full col-span-2 flex justify-center ">
          <div className="space-y-5">
            {item.image.map((items: imagesType, i: number) => (
              <Image
                key={i}
                alt={item.slug}
                onClick={() => setImageForPreviewOfSelected(items._key)}
                src={urlFor(items).width(1000).height(1000).url()}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4 ">
          <div>
            {item.image.map((subItem: imagesType, index: number) => {
              if (subItem._key === imageForPreviewOfSelected) {
                return (
                  <Image
                    key={index}
                    width={1000}
                    height={1000}
                    alt={subItem.alt}
                    src={urlFor(subItem).width(1000).height(1000).url()}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="col-span-8 lg:col-span-4">
          <div className="p-6 llg:space-y-8 ">
            <div className="">
              <h1 className="text-2xl text-[#212121]">{item.productName}</h1>
              <p className="text-gray-400 py-2 text-xl  font-medium tracking-wider">
                {item.productTypes[0]}
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <p className="text-lg font-semibold text-[#212121]">Select Size</p>
              <div className="flex gap-x-2 w-full zero:gap-x-8 text-gray-800 ">
                {item.size.map((subItem: string, index: number) => (
                  <div
                    key={index}
                    className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-200 h-8 w-8 text-base p-1 lg:w-12 lg:h-12 flex justify-center items-center"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row space-x-5 zero:space-x-8 py-6">
              <p className="font-semibold text-lg text-[#212121]">Quantity:</p>
              <div className="flex  items-center text-lg gap-x-2">
                <div
                  onClick={decrementTheQuantity}
                  className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200"
                >
                  -
                </div>
                <p>{quantity}</p>
                <div
                  onClick={incrementTheQuantity}
                  className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800"
                >
                  +
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2 zero:flex-row gap-x-4 items-center  space-y-4 zero:space-y-0">
              <button className="text-base px-2 flex items-center justify-center gap-2 w-full zero:w-5/12 py-2 zero:text-base   tracking-widest bg-[#212121] ring-2 ring-heading/70 text-white  llg:py-2 border-black border-2 shadow-inner hover:bg-[#212121] llg:text-sm"
                onClick={() =>
                  dispatch(
                    addToCart({
                      productId: item._id,
                      productName: item.productName,
                      category: item.productTypes[0],
                      image: item.image,
                      price: item.price,
                      qty: quantity,
                    })
                  )
                }
              >
              <BiCart  size={23}/>
                Add to Cart
              </button>


              <div>
                <p className="text-2xl font-semibold">
                  ${item.price}
                  {".00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] px-6 pt-8 space-y-4 lg:mt-20">
        <div className="relative border-b-2 flex flex-col  justify-center flex-auto text-justify gap-2  z-2 border-[#c4c4c4]">
          <p className="z-1 text-[#f2f3f7] opacity-[.7] font-extrabold tracking-wider  hidden sm:block sm:text-8xl leading-relaxed">
            Overview
          </p>
          <h3 className="z-3 mt-1 sm:absolute  text-2xl  font-extrabold tracking-wider">
            Product Information
          </h3>
        </div>
        <div className="flex flex-col gap-2 md:flex-row mt-4  lg:px-16">
          <h3 className="text-[#666] basis-1/4  text-base font-extrabold max-w-6xl">
            PRODUCT DETAILS
          </h3>
          <p className="basis-3/4 text-gray-500 text-justify tracking-wider leading-relaxed scroll-m-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row mt-4  lg:px-16">
          <h3 className="text-[#666] basis-1/4  text-base font-extrabold max-w-6xl">
            PRODUCT CARE
          </h3>
          <div className="">
            <li className="list-disc basis-3/4 text-gray-800 font-bold text-justify tracking-wider leading-relaxed scroll-m-20">
              Hand wash using cold water.
            </li>
            <li className="list-disc basis-3/4 text-gray-800 font-bold text-justify tracking-wider leading-relaxed scroll-m-20">
              Do not using bleach.
            </li>
            <li className="list-disc basis-3/4 text-gray-800 font-bold text-justify tracking-wider leading-relaxed scroll-m-20">
              Hang it to dry.
            </li>
          </div>
        </div>
      </div>
      {/* <CartList/> */}
    </div>
  );
};

export default ProductDetail;
