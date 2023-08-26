import Image from "next/image";
import { feature } from "../assets";

const ProductDetail = () => {
  return (
    <div className="grid grid-cols-10">
      <div className=" w-full col-span-2 bg-red-500">
        <div>
          <Image alt="" src={feature} width={150} height={150} />
        </div>
      </div>
      <div className="col-span-4 w-full bg-yellow-500">
      <div>
          <Image alt="" src={feature} width={500} height={500} />
        </div>
      </div>
      <div className="col-span-4 w-full bg-blue-500">3</div>
    </div>
  );
};

export default ProductDetail;
