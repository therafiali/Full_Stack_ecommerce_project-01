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

export function CartSideMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PiShoppingCartSimpleBold size={25} />
      </DialogTrigger>
      <div className="relative ">
        <DialogContent className="p-0 rounded-none">
          <DialogTitle className="pt-3 px-4">SHOPPING CART</DialogTitle>
          <Scroller />
        </DialogContent>
      </div>
    </Dialog>
  );
}
