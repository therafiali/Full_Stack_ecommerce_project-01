"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import BASE_PATH_FORAPI from "../shared/BaseUrl";

const CheckOut = () => {
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
  const cartArray = useSelector((state: any) => state.cart);
  console.log(cartArray, "cart");
  const [isProduct, setIsProduct] = useState<number>(cartArray.totalQuantity);
  console.log(isProduct, "nhvgh");
  return (
    isProduct > 0 && (
      <div className=" h-36 w-full row-span-1 bg-[#e7e7e7] mt-[-200px] z-50">
        <div className=" px-12 py-4 space-y-3 border border-t-2 border-black">
          <div className="flex justify-between items-center">
            <DialogTitle>Subtotal:</DialogTitle>

            <DialogTitle>${cartArray.totalAmount}.00 USD</DialogTitle>
          </div>
          <div>
            <DialogTitle className="text-sm text-gray-700 font-light scroll-m-20 leading-relaxed tracking-wide">
              Taxes and shipping calculated at checkout
            </DialogTitle>
          </div>
          <div className="flex justify-between">
            <Link href={"/cart"}>
              <Button className="rounded-none w-48 bg-white text-black border border-black hover:text-white hover:bg-[#009e85]">
                VIEW CART
              </Button>
            </Link>
            <Button
              className="rounded-none w-48 hover:bg-[#009e85]"
              onClick={handleProcessCheckout}
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default CheckOut;
