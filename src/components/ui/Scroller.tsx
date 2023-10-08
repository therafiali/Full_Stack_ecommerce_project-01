import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import Cart from "@/app/cart/page";
import { Separator } from "@radix-ui/react-separator";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./button";
import CartList from "../view/CartList";

export function Scroller() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  return (
    <ScrollArea className="h-screen  pb-44">
      <DialogHeader className="">
        <div className="my-2 px-4 pb-">
          <CartList/>
        </div>
      </DialogHeader>
     
    </ScrollArea>
  );
}
