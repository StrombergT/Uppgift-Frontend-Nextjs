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
    <header className=" w-full ">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a className="flex items-center" href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-red-800 text-5xl font-bold">C</span>onsid
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleCart}
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <BsBag className="text-[18px] text-white" />
            </button>
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
                  <p className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Products
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <p className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
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
