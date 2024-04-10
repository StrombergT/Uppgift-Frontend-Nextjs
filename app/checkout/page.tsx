"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "@/src/components/CartItem";
import { useRecoilValue } from "recoil";
import { Product } from "@/src/types";
import { cartState, getCartValue } from "@/src/recoil/state/atoms";
import { formatCurrency } from "@/src/utilities/formatCurrency";

const CheckoutPage = () => {
  const cartItems = useRecoilValue<Product[]>(cartState);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let tempTotal = getCartValue(cartItems);
    setTotalPrice(tempTotal);
  }, [cartItems]);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4 font-primary ">
        Thank You For Your Purchase!
      </h1>
      <p className="font-light mb-5">
        Your buy has been successfully processed.
      </p>
      <div className="w-full max-w-xl">
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} removeButton={false} />
        ))}
      </div>
      <div className="flex-grow">
        <div className="text-2xl font-bold mb-4 justify-center">
          Total Price: {formatCurrency(totalPrice)}
        </div>
        <Link href="/">
          <button className="text-blue-500 hover:underline">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
