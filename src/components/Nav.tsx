import Link from "next/link";
import React from "react";
import { BsBag } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="bg-white shadow-lg sticky top-0 py-4 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"} className="hover: text-current">
            <h1 className="text-[26px]">
              <span className="text-red-600 font-semibold">C</span>onsid
            </h1>
          </Link>
          <ul className="flex itemx-center gap-[26px]">
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
            <BsBag className="text-[26px] cursor-pointer" />
            <div className="bg-red-500 w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
              3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
