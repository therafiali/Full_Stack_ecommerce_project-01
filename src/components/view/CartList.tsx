"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { oneProductType } from "../utils/productDataAndTypes";
import { useSelector } from "react-redux";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";



const CartComp = () => {
const cartArray = useSelector((state:any) => state.cart)
console.log(cartArray.items,'cartlist')
const builder: any = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
return (

  // <div>
  //   gg
  // </div>
  
    <div>
      <div className="py-6">
        {/* heading */}
        <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
      </div>
      <div className="flex justify-between flex-wrap">
        {/* products data show */}
        <div className="flex flex-col gap-5">
          {cartArray &&
            cartArray.items.map((item: any, index: number) => (
              <div className="flex gap-5" key={index}>
                <div className="w-40">
                  {item.image.map((items: any, i: number) => (
              <Image
                key={i}
                alt={item.category}
                src={urlFor(items).width(1000).height(1000).url()}
                width={1000}
                height={1000}
              />
            ))}
                </div>
                <div>
                  {/* products detail */}
                  <div className="space-y-1 md:space-y-3 w-full">
                    <div className="flex justify-between">
                      <h2 className="md:text-2xl font-light text-gray-700">
                        {item.productName}
                      </h2>
                      <div className="cursor-pointer">
                        <RiDeleteBin6Line size={28} />
                      </div>
                    </div>
                    <p className="text-gray-400 font-medium">
                      {item.category}
                    </p>
                    <h3 className="text-sm md:text-base">
                      Delivery Estimation
                    </h3>
                    <h4 className="text-orange-400 font-semibold md:text-xl">
                      5 Working Days
                    </h4>
                    <div className="flex justify-between">
                      <div className="font-semibold md:text-lg">
                        ${item.price}
                      </div>
                      <div className="flex gap-2">
                        <button className="select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-gray-200">
                          -
                        </button>
                        <p>{item.qty}</p>
                        <button className="border select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full  border-gray-800">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* image and products */}
        </div>

        <div>
          {/* subtotal */}
          <div className="basis-1/4 space-y-6 px-6">
            <h6 className="font-semibold text-xl">Order Summary</h6>
            <div className="flex justify-between">
              <p className="text-lg font-light">Quantity:</p>
              <p className="text-lg font-light">{cartArray.totalQuantity} Product</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-light">Subtotal:</p>
              <p>{}$56</p>
            </div>
            <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
