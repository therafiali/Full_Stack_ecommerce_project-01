"use client";
import { RootState } from "@/Store/store";
import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartValue = useSelector((state: RootState) => state.cart);
  console.log(cartValue, ":::::::::::");
  return (
    <div>
      CartList
      {cartValue.map((val, i) => {
        return (
          <div key={i} className="grid grid-cols-4 gap-4">
            <div>{val.name} hello</div>
            <div>{val.category}1</div>
            <div>{val.qty}gr</div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
