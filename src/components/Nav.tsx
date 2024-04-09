"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import ShoppingCart from "./ShoppingCart";

const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="bg-white shadow-lg sticky top-0 py-4 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"} className="hover:text-current">
            <h1 className="text-[26px]">
              <span className="text-red-600 font-semibold">C</span>onsid
            </h1>
          </Link>
          <ul className="flex items-center gap-[26px]">
            <li>
              <Link href={"/products"}>
                <p>Products</p>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <p>About</p>
              </Link>
            </li>
          </ul>
          <div className="relative">
            <button onClick={toggleCart}>
              <BsBag className="text-[26px] cursor-pointer" />
            </button>
            <div className="bg-red-500 w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
              3
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 ${
          isCartOpen ? "visible" : "invisible"
        }`}
        onClick={closeCart}
      ></div>
      <ShoppingCart isOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
};

export default Nav;
