"use client";
import React, { FC } from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  addCart,
  delItem,
  removeFromCart,
  subtractCart,
} from "@/Store/cartSlice";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import BASE_PATH_FORAPI from "../shared/BaseUrl";
import { Separator } from "../ui/separator";

const CartComp: FC = () => {
  const cartArray = useSelector((state: any) => state.cart);
  // console.log(cartArray, "dd");
  const dispatch = useDispatch();
  const builder: any = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div className="mx-auto ">
      {cartArray.items.length > 0 ? (
        <div className="flex flex-col lg:justify-between">
          <div className="flex flex-col sm:justify-between gap- w-full">
            {cartArray.items.map((item: any, index: number) => (
              <div key={index}>
                <div
                  className="flex flex-col w-full py-2 mt-0  border-gray-800 items-center sm:flex-row gap-5"
                  
                >
                  <div className="w-4/12">
                    <Image
                      className=""
                      alt={item.productName}
                      src={urlFor(item.image[0]).width(1000).height(1000).url()}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="w-8/12">
                    <div className="space-y-1 md:space-y-1 w-full">
                      <div className="flex w-full justify-between">
                        <h2 className="md:text-lg font-light text-gray-700 w-full">
                          {item.productName}
                        </h2>
                        <div
                          onClick={() =>
                            dispatch(delItem({ productId: item.productId }))
                          }
                          className="cursor-pointer"
                        >
                          <RiDeleteBin6Line size={28} />
                        </div>
                      </div>
                      <p className="text-gray-400 font-bold text-sm">
                        {item.category}
                      </p>
                      <p className="font-bold text-base">Delivery Estimation</p>
                      <p className="text-yellow-500 font-bold text-base">
                        5 Working Days
                      </p>
                      <div className="flex justify-between">
                        <div className="font-semibold md:text-lg">
                          ${item.price * item.qty}.00
                        </div>
                        <div className="flex items-center gap-2 border border-black ">
                          <button
                            className="select-none cursor-pointer font-bold flex justify-center items-center w-9 h-9 "
                            onClick={() =>
                              dispatch(
                                subtractCart({ productId: item.productId })
                              )
                            }
                          >
                            -
                          </button>
                          <p className="font-bold">{item.qty}</p>
                          <button
                            onClick={() =>
                              dispatch(
                                addCart({
                                  productId: item.productId,
                                  productName: item.productName,
                                  category: item.category,
                                  image: item.image, // Make sure this is an appropriate image object
                                  price: item.price,
                                  qty: item.qty + 1, // Increment quantity by 1
                                })
                              )
                            }
                            className="select-none cursor-pointer font-bold flex justify-center items-center w-9 h-9"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Separator className="my-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-24">
          <p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height={150}
              width={150}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z" />
            </svg>
          </p>
          <p className="font-bold text-4xl tracking-widest leading-relaxed scroll-m-20">
            Your shopping bag is empty
          </p>
        </div>
      )}
    </div>
  );
};

export default CartComp;
