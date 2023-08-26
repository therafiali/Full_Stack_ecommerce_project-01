import { FC } from "react";
import { oneProductType } from "../utils/productDataAndTypes";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const CardAll: FC<{ singleProductData: oneProductType }> = ({
  singleProductData,
}) => {
  return (
    <div className="mx-auto  ">
      <Link href={`/catalog/${singleProductData.slug.current}`}>
        <div className="w-full flex flex-col space-y-3">
          <div>
            <Image
              className="w-full"
              width={1000}
              height={1000}
              src={urlFor(singleProductData.image[0])
                .width(1000)
                .height(1000)
                .url()}
              alt={singleProductData.image[0].alt}
            />
          </div>

          <div className="space-y-1 font-semibold leading-relaxed tracking-wider w-full">
            <h6 className="text-black text-lg">
              {singleProductData.productName}
            </h6>
            <p className="text-gray-400 text-sm">
              {singleProductData.productTypes[0]}
            </p>
            <p className=" text-lg">${singleProductData.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardAll;
