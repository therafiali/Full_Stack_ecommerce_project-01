"use client";
import { add } from "@/Store/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";

let dumobj = [
  {
    name: "rafi",
    age: "22",
    nick: "Rafay",
  },
];

const AddToCart = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state: any) => state.cart);

  console.log(cartArray, "cart");
  return (
    <div
      className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2"
      onClick={() => dispatch(add(product))}
    >
      {" "}
      <BsCart2 />
      &nbsp; &nbsp; Add to Cart
    </div>
  );
};

export default AddToCart;
