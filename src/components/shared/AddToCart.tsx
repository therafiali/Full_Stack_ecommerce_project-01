"use client";

import { cartActions } from "@/Store/cartSlice";
import { useDispatch } from "react-redux";

const AddToCart = ({subitem}:{subitem:any}) => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ item:subitem }));
    // toast.success('Product Added')
  };
  return (
    <button
      onClick={addItem}
      className="mt-4 w-full mb-4 px-2 h-12 md:px-4 md:py-4 bg-black text-white hover:bg-black  text-base rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
