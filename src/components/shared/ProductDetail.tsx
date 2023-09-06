"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { imagesType, oneProductType } from "../utils/productDataAndTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";

import { useDispatch, useSelector } from "react-redux";
import add, { addToCart } from "@/Store/cartSlice";
import AddToCart from "./AddToCart";
import CartList from "../view/CartList";

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state: any) => state.cart);
  // console.log(cartArray,'carrt')
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
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div>
      <div className="grid grid-cols-10">
        <div className=" w-full col-span-2 flex justify-center">
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
        <div className="col-span-4">
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
        <div className="col-span-4">
          <div className="p-6 space-y-8">
            <div>
              <h1 className="text-3xl text-gray-700">{item.productName}</h1>
              <p className="text-pink-600 text-xl font-medium">
                {item.productTypes[1]}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-700">Select Size</p>
              <div className="flex gap-2 text-pink-600">
                {item.size.map((subItem: string, index: number) => (
                  <div
                    key={index}
                    className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-7">
              <p className="font-semibold text-xl text-gray-800">Quantity:</p>
              <div className="flex gap-2 items-center text-lg">
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
            <div className="flex gap-x-8 items-center">
              <button onClick={() => dispatch(addToCart({name:'rafi',qty:1,category:'male'}))}>
                
                add to cart
              </button>
              {/* <AddToCart subitem={item}/> */}
              {/* <button
                
                className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2"
              >
              <BsCart2 />
              &nbsp; &nbsp; Add to Cart
              </button> */}
              <p className="text-2xl font-semibold">
                ${item.price}
                {".00"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] p-1 sm:p-16">
        <div className="relative border-b-2 flex flex-col  justify-center flex-auto text-justify gap-2  z-2 border-[#c4c4c4]">
          <p className="z-1 text-[#f2f3f7] opacity-[.7] font-extrabold tracking-wider  hidden sm:block sm:text-8xl leading-relaxed">
            Overview
          </p>
          <h3 className="z-3 mt-1 sm:absolute  text-2xl  font-extrabold tracking-wider">
            Product Information
          </h3>
        </div>
        <div className="flex flex-col gap-2 md:flex-row mt-4 ">
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
        <div className="flex flex-col gap-y-2 md:flex-row mt-4 ">
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
      <CartList/>
    </div>
  );
};

export default ProductDetail;
