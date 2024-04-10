"use client";
import { useRecoilValue } from "recoil";
import { cartState } from "../recoil";
import { Product } from "../types";
import CartItem from "./CartItem";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

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
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Shopping cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem product={item} key={item.id} {...item} />
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="p-4"> Total Price: ${totalPrice}</div>
          <div className="absolute bottom-10 left-0 right-0">
            <Link href="/checkout">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 w-full ml-5 max-w-[280px]">
                {" "}
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
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
