import Link from "next/link";
import React from "react";
import { BsBag } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="w-full h-20 bg-[#f1f1f1] uppercase">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href={"/"}>LOGO</Link>
            <ul className="hidden md:flex gap-x-6">
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
            <BsBag className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
