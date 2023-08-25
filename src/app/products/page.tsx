import BASE_PATH_FORAPI from "@/components/shared/BaseUrl";
import CardAll from "@/components/shared/CardAll";

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
  // console.log("raff", productData.result);
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
      {productData.result.map((item: any, i: number) => (
        <CardAll key={i} singleProductData={item} />
      ))}
    </div>
  );
};

export default All_Products;
