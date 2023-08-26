import ProductDetail from "@/components/shared/ProductDetail";
import { responseType } from "@/components/utils/productDataAndTypes";

const fetchAllProductsData = async (slug: string) => {
  let response = await fetch(
    `https://nhq4eufw.api.sanity.io/v2023-08-13/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current%3D%3D+%22${slug}%22%5D`
  );
  let data = response.json();
  return data;
};

const Catalog = async ({ params }: { params: { slug: string } }) => {
  let slug = params.slug;
  const getAllData: responseType = await fetchAllProductsData(slug);

  return (
    <div>
      <ProductDetail item={getAllData.result[0]} />
    </div>
  );
};

export default Catalog;
