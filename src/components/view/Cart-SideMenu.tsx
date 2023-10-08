import Cart from "@/app/cart/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Scroller } from "../ui/Scroller";
import CheckOut from "./CheckOut";

export function CartSideMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PiShoppingCartSimpleBold size={25} />
      </DialogTrigger>
      <div className="  ">
        <DialogContent className="p-0 rounded-none  border-l-2 border-x-black">
          <DialogTitle className="pt-5 px-2 tracking-wide leading-relaxed">
            SHOPPING CART
          </DialogTitle>
          <div className="grid grid-rows-2 ">
            <div className="row-span-2">
              <Scroller />
            </div>

            <CheckOut />
            {/* <div className=" h-36 w-full row-span-1 bg-[#e7e7e7] mt-[-200px] z-50">
            </div> */}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
