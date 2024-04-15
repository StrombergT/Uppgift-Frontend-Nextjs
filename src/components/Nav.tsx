"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import ShoppingCart from "./ShoppingCart";
import { useRecoilValue } from "recoil";
import { cartState } from "../recoil/state/atoms";

const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useRecoilValue(cartState);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="w-full ">
      <nav className=" border-gray-200 py-2.5 bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a className="flex items-center" href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              <span className="text-red-800 text-5xl font-bold">C</span>onsid
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              onClick={openCart}
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium border rounded-lg sm:w-auto focus:outline-none  focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
            >
              <BsBag className="text-[18px] text-white" />
            </button>
            {totalQuantity > 0 && (
              <div className="bg-red-500 w-[18px] h-[18px] absolute rounded-full text-white flex items-center justify-center text-sm font-medium mb-8">
                {totalQuantity}
              </div>
            )}
          </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href={"/"}>
                  <div className="block py-2 pl-3 pr-4 text-white lg:p-0">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/products"}>
                  <p className="block py-2 pl-3 pr-4 border-b lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">
                    Products
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p className="block py-2 pl-3 pr-4 text-gray-400 border-b lg:border-0 lg:p-0 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">
                    About
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`fixed inset-0 bg-black opacity-50 z-40 ${
              isCartOpen ? "visible" : "invisible"
            }`}
            onClick={closeCart}
          ></div>
          <ShoppingCart isOpen={isCartOpen} closeCart={closeCart} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
