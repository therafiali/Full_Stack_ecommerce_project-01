  import React, { FC } from "react";
  import Image from "next/image";
  import { RiDeleteBin6Line } from "react-icons/ri";
  import { useSelector, useDispatch } from "react-redux";
  import { addCart, delItem, removeFromCart, subtractCart } from "@/Store/cartSlice";
  import { client } from "../../../sanity/lib/client";
  import imageUrlBuilder from "@sanity/image-url";

  const CartComp: FC = () => {
    const cartArray = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
    const builder: any = imageUrlBuilder(client);

    function urlFor(source: any) {
      return builder.image(source);
    }

    return (
      <div className="mx-auto">
        <div className="py-6">
          {cartArray.items.length > 0 && (
            <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
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
                  <div className="w-40 basis-1/4">
                    {item.image.map((img: any, i: number) => (
                      <Image
                        key={i}
                        alt={item.productName}
                        src={urlFor(img).width(1000).height(1000).url()}
                        width={1000}
                        height={1000}
                      />
                    ))}
                  </div>
                  <div className="basis-3/4">
                    <div className="space-y-1 md:space-y-3 w-full">
                      <div className="flex w-full">
                        <h2 className="md:text-2xl font-light text-gray-700 w-full">
                          {item.productName}
                        </h2>
                        <div
                          onClick={() => dispatch(delItem({ productId: item.productId }))}
                          className="cursor-pointer"
                        >
                          <RiDeleteBin6Line size={28} />
                        </div>
                      </div>
                      <p className="text-gray-400 font-medium">{item.category}</p>
                      <div className="flex justify-between">
                        <div className="font-semibold md:text-lg">${item.price}</div>
                        <div className="flex gap-2">
                          <button
                            className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200"
                            onClick={() => dispatch(subtractCart({ productId: item.productId }))}
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
                <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
                  Proceed To CheckOut
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center py-24">
            <p className="font-bold text-4xl tracking-widest leading-relaxed scroll-m-20">
              Your Cart is Empty
            </p>
          </div>
        )}
      </div>
    );
  };

  export default CartComp;
    