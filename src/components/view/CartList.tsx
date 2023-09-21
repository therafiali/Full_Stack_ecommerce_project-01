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

const CartComp: FC = () => {
  const cartArray = useSelector((state: any) => state.cart);
  // console.log(cartArray, "dd");
  const dispatch = useDispatch();
  const builder: any = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  function handleProcessCheckout(){
    console.log('calling')
    fetch(`${BASE_PATH_FORAPI}/api/checkout_sessions`,{
      method:"POST",
      body:JSON.stringify(cartArray)
    })
  }

  return (
    <div className="mx-auto">
      <div className="py-6">
        {cartArray.items.length > 0 && (
          <h1 className="text-2xl font-semibold text-gray-900">
            Shopping Cart
          </h1>
        )}
      </div>

      {cartArray.items.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col basis-3/4 justify-center sm:justify-between gap-5 w-full">
            {cartArray.items.map((item: any, index: number) => (
              <div
                className="flex flex-col w-full justify-center sm:justify-start items-center sm:flex-row gap-5"
                key={index}
              >
                <div className="w-40 basis-1/4 ">
                  <Image
                  className="rounded-lg"
                    alt={item.productName}
                    src={urlFor(item.image[0]).width(1000).height(1000).url()}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="basis-3/4">
                  <div className="space-y-1 md:space-y-3 w-full">
                    <div className="flex w-full">
                      <h2 className="md:text-2xl font-light text-gray-700 w-full">
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
                    <p className="text-gray-400 font-medium">{item.category}</p>
                    <p className="font-bold">Delivery Estimation</p>
                    <p className="text-yellow-500 font-bold">5 Working Days</p>
                    <div className="flex justify-between">
                      <div className="font-semibold md:text-lg">
                        ${item.price * item.qty}
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200"
                          onClick={() =>
                            dispatch(
                              subtractCart({ productId: item.productId })
                            )
                          }
                        >
                          -
                        </button>
                        <p>{item.qty}</p>
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
                          className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="basis-1/4 space-y-6 p-2 zero:px-6 mt-12 lg:mt-0 rounded-md bg-slate-100">
              <h6 className="font-semibold text-xl">Order Summary</h6>
              <div className="flex justify-between">
                <p className="text-lg font-light">Quantity:</p>
                <p className="text-lg font-light">
                  {cartArray.totalQuantity} Product
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-light">Subtotal:</p>
                <p>${cartArray.totalAmount}</p>
              </div>
              <button onClick={handleProcessCheckout} className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
                Proceed To CheckOut
              </button>
            </div>
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
