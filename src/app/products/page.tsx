import BASE_PATH_FORAPI from "@/components/shared/BaseUrl";
import Card from "@/components/shared/Card";
import {
  oneProductType,
  responseType,
} from "@/components/utils/productDataAndTypes";

const fetchAllProducts = async () => {
  const res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if (!res.ok) {
    throw new Error("Fetch To failed in All Product");
  }
  const data = await res.json();
  return data;
};

const All_Products = async () => {
  const productData = await fetchAllProducts();
  console.log("raff", productData.result);
  return (
    <div className="grid grid-cols-3">
      {productData.result.map((item: any, i: number) => (
        <Card key={i} singleProductData={item} />
      ))}
    </div>
  );
};

export default All_Products;
