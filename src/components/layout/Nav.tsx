"use client";
import Link from "next/link";
import ShoppingCart from "../ShoppingCart";

const Nav = () => {
  return (
    <header className="w-full ">
      <nav className=" border-gray-200 py-2.5 bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a className="flex items-center" href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              <span className="text-red-800 text-5xl font-bold">C</span>onsid
            </span>
          </a>
          <div className="flex items-center lg:order-2 ">
            <ShoppingCart />
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
        </div>
      </nav>
    </header>
  );
};

export default Nav;
