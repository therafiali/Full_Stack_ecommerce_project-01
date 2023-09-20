import { NextResponse } from "next/server";
import { cache } from "react";

export async function GET() {
  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-13/data/query/production?query=*[_type == "products"]`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}
