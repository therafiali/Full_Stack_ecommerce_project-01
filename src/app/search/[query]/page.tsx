import { oneProductType } from "@/components/utils/productDataAndTypes";
import { client } from "../../../../sanity/lib/client";
import CardAll from "@/components/shared/CardAll";

const fetchAllProductsData = async () => {
  let response = await client.fetch(`*[_type == "products"]`);
  return response;
};
const Search = async ({ params }: { params: { query: string } }) => {
  let getProductData = await fetchAllProductsData(); //all data
  let slug = params.query.toLowerCase(); //flex
  let dataToMap = await getProductData.filter((item: oneProductType) => {
    if (item.productName.toLowerCase().indexOf(slug) >= 0) {
      return true;
    } 
    return false;
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-6 mx-auto">
      {dataToMap.map((item: oneProductType, i: number) => (
        <CardAll key={i} singleProductData={item} />
      ))}
    </div>
  );
};

export default Search;
