"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import {
  addCart,
  delItem,
  removeFromCart,
  subtractCart,
} from "@/Store/cartSlice";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import BASE_PATH_FORAPI from "../shared/BaseUrl";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlignHorizontalDistributeCenterIcon } from "lucide-react";

const AllCartItems: FC = () => {
  const cartArray = useSelector((state: any) => state.cart);
  // console.log(cartArray.items[0].price, "dd");
  const dispatch = useDispatch();
  const builder: any = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  const [confirm, setconfirm] = useState(false);

  async function handleProcessCheckout() {
    let linkOrg: any = await fetch(
      `${BASE_PATH_FORAPI}/api/checkout_sessions`,
      {
        method: "POST",
        body: JSON.stringify(cartArray),
      }
    );
    let { link } = await linkOrg.json();

    window.location.href = link;
  }
  return (
    <div className="mx-auto">
      {/* heading of cart page */}
      {cartArray.items.length > 0 && (
        <div className="py-6 zero:py-14  bg-black space-y-6">
          <h1 className="text-lg zero:text-5xl font-medium text-white text-center leading-relaxed scroll-m-20 tracking-wider ">
            Shopping Cart
          </h1>
          <p className="text-sm text-white text-center zero:text-lg leading-relaxed scroll-m-20 zero:tracking-wide">
            Home &nbsp; &#62; &nbsp;{" "}
            <span className="text-greennn">Shopping Cart</span>{" "}
          </p>
        </div>
      )}
      {/* cart data table */}
      {cartArray.items.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:justify-between mt-8 gap-x-4 ">
          <div className="flex flex-col basis-3/4 justify-center sm:justify-between gap-5 w-full ">
            <Table className="md:border border-black ">
              <TableHeader className="border border-black bg-[#efefef]  ">
                <TableRow className="  hidden md:block ">
                  <div className="grid grid-cols-11">
                    <TableHead className="w-full border border-black col-span- "></TableHead>
                    <TableHead className="border border-black text-heading  flex items-center justify-center  col-span-5">
                      PRODUCT
                    </TableHead>
                    <div className="col-span-5  w-full">
                      <div className="grid grid-cols-7 ">
                        <TableHead className="border flex items-center justify-center border-black text-heading col-span-2 ">
                          PRICE
                        </TableHead>
                        <TableHead className="border  flex items-center justify-center border-black text-heading  col-span-3">
                          QUANTITY
                        </TableHead>
                        <TableHead className="text-right border border-black text-heading  flex items-center justify-center  col-span-2">
                          TOTAL
                        </TableHead>
                      </div>
                    </div>
                  </div>
                </TableRow>
              </TableHeader>
              <TableBody className=" ">
                {cartArray.items.map((item: any, index: number) => (
                  <TableRow className=" " key={index}>
                    <div className="grid grid-cols-3 md:grid-cols-11 space-y-6 pb-2 border-b-2 border-greennn/90 md:border-none md:space-y-0 md:pb-0">
                      <TableCell className="font-medium border border-black  hidden md:block p-0 md:col-span-1 md:m-auto md:w-full md:h-full md:border md:border-black">
                        {" "}
                        <div
                          onClick={() =>
                            dispatch(delItem({ productId: item.productId }))
                          }
                          className="cursor-pointer flex justify-center items-center h-full"
                        >
                          <RiDeleteBin6Line size={28} />
                        </div>
                      </TableCell>
                      <TableCell className=" p-0 col-span-1 md:border border-black md:col-span-5 ">
                        <div className="flex justify-center items-center space-x-1 ">
                          <div className="w-40 md:basis-1/4 flex items-end justify-center ">
                            <Image
                              className="h-44 w-full md:h-full"
                              alt={item.productName}
                              src={urlFor(item.image[0])
                                .width(1000)
                                .height(1000)
                                .url()}
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <div className="hidden md:block space-y-1 md:space-y-1 w-full ">
                            <div className="flex w-full">
                              <h2 className="md:text-lg font-semibold text-gray-700 w-full ">
                                {item.productName}

                      
                              </h2>
                            </div>
                            <p className="text-gray-500 font-medium">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <div className="md:col-span-5  flex flex-col items-start   space-x-1 zero:px-2 med:px-0 md:flex-row col-span-2 md:items-center">
                        <div className="flex flex-col md:grid grid-cols-7 w-full  space-y-3 md:space-y-0  md:h-full ">
                          <TableCell className="md:hidden p-0 md:border border-black  flex justify-between w-full md:border-none ">
                            <div className="space-y-1 md:space-y-3 w-full flex flex-col justify-between">
                              <div className="flex w-full items-center border-dashed border-greypara border-b ">
                                <h2 className="text-base font-semibold text-gray-700 w-full ">
                                  {item.productName}
                                </h2>
                                <div
                                  onClick={() =>
                                    dispatch(
                                      delItem({ productId: item.productId })
                                    )
                                  }
                                  className="cursor-pointer"
                                >
                                  <RiDeleteBin6Line size={28} />
                                </div>
                              </div>
                              <p className="text-gray-500 font-medium   border-dashed border-greypara border-b ">
                                {item.category}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className=" p-0 border-black col-span-1 w-full md:col-span-2  h-full  md:flex md:items-center md:justify-center  md:text-center  md:border md:border-black md:">
                            <div className="flex justify-between w-full border-dashed border-greypara border-b md:border-none   md:w-auto">
                              <span className="md:hidden">Price</span>
                              <span className="font-medium ">
                                ${item.price}.00
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="  p-0 border-black col-span-1 w-full  md:col-span-3  md:flex md:justify-center md:items-center md:mt-3 md:border md:border-black">
                            <div className="md:border-none flex flex-wrap pb-2 gap-x-2 justify-between items-center border-dashed border-greypara border-b md:pb-0">
                              <span className="md:hidden pb-2 zero:pb-0">Quantity:</span>
                              <div className="flex items-center gap-2 border border-black ">
                                <button
                                  className="select-none cursor-pointer font-bold flex justify-center items-center w-9 h-9 "
                                  onClick={() =>
                                    dispatch(
                                      subtractCart({
                                        productId: item.productId,
                                      })
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
                          </TableCell>
                          <TableCell className=" text-right p-0  border-black col-span-1 w-full  md:col-span-2  md:flex md:justify-center md:items-center md:border md:border-black">
                            <div className=" flex justify-between items-center  border-dashed border-greypara border-b md:border-none">
                              <span className="md:hidden">Total</span>
                              <span className="font-semibold">
                                ${item.price * item.qty}.00
                              </span>
                            </div>
                          </TableCell>
                        </div>
                      </div>
                    </div>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <div className="basis-1/4 space-y-6 p-2 zero:px-6 mt-12 lg:mt-0 rounded-md bg-slate-100 border-dashed border-greennn border">
              <div className="flex justify-between">
                <p className="text-lg font-light">SUBTOTAL:</p>
                <p className="text-lg font-light">
                  $ {cartArray.totalAmount}.00 USD
                </p>
              </div>
              <div className="max-w-sm space-y-2">
                <p className="">Taxes and shipping calculated at checkout</p>
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" onClick={() => setconfirm(true)} />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
              </div>

              <button
                disabled={!confirm}
                onClick={handleProcessCheckout}
                className={`text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full flex gap-x-2 justify-center items-center ${
                  confirm ? "" : "opacity-70"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-24 ">
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

export default AllCartItems;
