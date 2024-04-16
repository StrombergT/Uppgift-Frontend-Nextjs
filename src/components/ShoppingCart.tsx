"use client";
import { useRecoilValue } from "recoil";
import CartItem from "./CartItem";
import Link from "next/link";
import { formatCurrency } from "../lib/formatCurrency";
import { useShoppingCartProducts } from "../hooks/useShoppingCartProducts";
import { shoppingCartTotalState } from "../lib/recoil/state/selectors/shopping-cart-total";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { BsBag } from "react-icons/bs";
import { cartState } from "../lib/recoil/state/atoms";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Button, buttonVariants } from "@/src/components/ui/button";

const ShoppingCart = () => {
  const cartItems = useShoppingCartProducts();
  const totalPrice = useRecoilValue(shoppingCartTotalState);
  const quantity = useRecoilValue(cartState);

  const totalQuantity = quantity.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" text-white bg-gray-900 border-gray-700 hover:bg-gray-800 focus:ring-gray-800">
          <BsBag className="text-[18px] text-white" />
          {totalQuantity > 0 && (
            <div className="bg-red-500 w-[18px] h-[18px] absolute rounded-full text-white flex items-center justify-center text-sm font-medium mb-6 ml-8">
              {totalQuantity}
            </div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <hr />
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <h5 className="text-black/50">Shopping cart is empty</h5>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id} product={item} showButtons={true} />
            ))
          )}
        </ScrollArea>
        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5">Total Price:</div>
              <div>{formatCurrency(totalPrice)}</div>
            </div>
            <Link
              href="/checkout"
              className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg w-full uppercase m-auto flex flex-col justify-center items-center p-2"
            >
              Buy
            </Link>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
