import CardAll from "@/components/shared/CardAll";

const fetchAllMaleData = async () => {
  const res = await fetch(
    `https://nhq4eufw.api.sanity.io/v2023-08-13/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productTypes%5B1%5D+%3D%3D+%27Male%27%5D`
  );

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("fetch failed in Male Page");
  }
};

const Male = async ({ params }: { params: { mtype: string } }) => {
  let productData = await fetchAllMaleData();
  if (params.mtype !== "Male") {
    let sortCategories = productData.result.filter(
      (item: any, i: number) => params.mtype === item.productTypes[0]
    );
    productData = { result: sortCategories };
  }
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
      {productData.result.map((item: any, i: number) => (
        <CardAll key={i} singleProductData={item} />
      ))}
    </div>
  );
};

export default Male;
