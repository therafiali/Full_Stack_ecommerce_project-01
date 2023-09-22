import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

interface typeOfData {
  price: string;
  name: string;
  quantity: number;
}

let orignalData: Array<typeOfData> = [
  {
    price: "price_1NrWchIkK4WVGRgowLKAecbw",
    name: "Cameryn Sash Tie Dress",
    quantity: 1,
  },
  {
    price: "price_1NrWcKIkK4WVGRgo918MZ2fN",
    name: "Muscle Tank",
    quantity: 1,
  },
  {
    price: "price_1NrWbwIkK4WVGRgonP715Pce",
    name: "Brushed Bomber",
    quantity: 1,
  },
  {
    price: "price_1NrWbNIkK4WVGRgoIJTDcNzE",
    name: "Flex Sweatshirt",
    quantity: 1,
  },
  {
    price: "price_1NrWatIkK4WVGRgoPILA07wd",
    name: "Flex Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NrWaUIkK4WVGRgoNPIaG3V3",
    name: "Lite Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NrWa2IkK4WVGRgo82dLAM5g",
    name: "Imperial Alpaca Hoodie",
    quantity: 1,
  },
  {
    price: "price_1NrWZdIkK4WVGRgo9ImM5DoK",
    name: "Flex Push Button Bomber",
    quantity: 1,
  },
  {
    price: "price_1NrWZDIkK4WVGRgoJFrQE6WK",
    name: "Brushed Raglan Sweatshirt",
    quantity: 1,
  },
  {
    price: "price_1NrWYbIkK4WVGRgo9ADCrEd6",
    name: "Pink Fleece Sweatpants",
    quantity: 1,
  },
  {
    price: "price_1NrWWtIkK4WVGRgoC8qHVVBd",
    name: "Raglan Sweatshirt",
    quantity: 1,
  },
];

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  let data = await req.json();
  let cartItemsArray = data.items;
  // console.log(cartItemsArray)
  try {
    let line_item = orignalData.filter((item: typeOfData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element = cartItemsArray[index];
        // console.log(element.productName,item.name,'cccc',element.productName === item.name)
        if (element.productName === item.name) {
          return true;
        }
      }
    });
    let line_itemToSend:any = line_item.map((item: typeOfData) => {
for (let index = 0; index < cartItemsArray.length; index++) {
    const element = cartItemsArray[index];
    console.log(element,'ele')
    if (element.productName === item.name) {
        return{
            price:item.price,
            quantity:element.qty
        }
    }
    
}
      
    });
    //  console.log(line_itemToSend,'line____')
    // })
    let session = await stripe.checkout.sessions.create({
      line_items: line_itemToSend,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    });
    // console.log(session,'session')
    return NextResponse.json({ link: session.url });
  } catch (error) {
    // console.log((error as {message:string}).message)
    return NextResponse.json({ error });
  }
}
