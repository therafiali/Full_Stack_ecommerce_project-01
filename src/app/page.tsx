import { responseType } from "@/components/utils/productDataAndTypes";
import Hero from "@/components/view/Hero";
import Jwellery from "@/components/view/Jwellery";
import Newsletter from "@/components/view/Newsletter";
import ProductCarousel from "@/components/view/ProductCarousel";
import Promotions from "@/components/view/Promotions";

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
      <Hero />
      <Promotions />
      <ProductCarousel ProductData={result} />
      <Jwellery/>
      <Newsletter/>
     
    </main>
  );
}
