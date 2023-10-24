import BASE_PATH_FORAPI from "@/components/shared/BaseUrl";
import GoToTop, { Wrapper } from "@/components/shared/GoToTop";
import { responseType } from "@/components/utils/productDataAndTypes";
import Hero from "@/components/view/Hero";
import Jwellery from "@/components/view/Jwellery";
import Newsletter from "@/components/view/Newsletter";
import ProductsCarousel from "@/components/view/ProductsCarousel";
import Promotions from "@/components/view/Promotions";

async function fetchProductData() {
  try {
    const response = await fetch(`${BASE_PATH_FORAPI}/api/products`);

    if (!response.ok) {
      throw new Error("Error fetching data at main page ");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // console.error("Error fetching data at main page :", error);
    return null; // Or handle the error case according to your needs
  }
}

export default async function Home() {
  let { result }: responseType = await fetchProductData();

  return (
    <main className="">
      <Hero />
      <Promotions />
      <ProductsCarousel ProductData={result} />
      <Jwellery />
      <Newsletter />
    </main>
  );
}
