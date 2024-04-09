"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../recoil";
import { Product } from "../types";
import CartItem from "./CartItem";
import { IoMdClose } from "react-icons/io";

type ShoppingCartProps = {
  isOpen: boolean;
  closeCart: () => void;
};

const ShoppingCart = ({ isOpen, closeCart }: ShoppingCartProps) => {
  const cartItems = useRecoilValue<Product[]>(cartState);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-8">
        <h1 className="text-lg font-bold mb-4">Cart</h1>
        <hr />
        {cartItems.map((item) => (
          <CartItem product={item} key={item.id} {...item} />
        ))}
      </div>
      <div className="p-4"> Total Price: ${totalPrice}</div>
      <button
        className="absolute top-2 right-2 text-gray-600"
        onClick={closeCart}
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default ShoppingCart;
