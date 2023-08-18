import { responseType } from "@/components/utils/productDataAndTypes";
import ProductCarousel from "@/components/view/ProductCarousel";

async function fetchProductData() {
  try {
    const response = await fetch(`http://localhost:3000/api/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Or handle the error case according to your needs
  }
}

export default async function Home() {
  let { result }: responseType = await fetchProductData();
  return (
    <main>
      {/* <Hero />
      <Promotions /> */}
      <ProductCarousel ProductData={result} />
    </main>
  );
}
