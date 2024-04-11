"use client";
import { useRecoilValue } from "recoil";
import { cartState } from "../recoil/state/atoms";
import CartItem from "./CartItem";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { formatCurrency } from "../utilities/formatCurrency";
import { shoppingCartTotalState } from "../recoil/state/selectors/shopping-cart-total";

type ShoppingCartProps = {
  isOpen: boolean;
  closeCart: () => void;
};

const ShoppingCart = ({ isOpen, closeCart }: ShoppingCartProps) => {
  const cartItems = useRecoilValue(cartState);
  const totalPrice = useRecoilValue(shoppingCartTotalState);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 rounded-lg mt-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-8 justify-between items-center">
        <h1 className="text-lg font-bold mb-4 uppercase text-center">
          Shopping Cart
        </h1>
        <hr />
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Shopping cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              product={item}
              key={item.id}
              {...item}
              removeButton={true}
            />
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="absolute bottom-10 left-0 right-0">
            <div className="p-4 font-primary font-semibold text-xl justify-center text-center">
              Total Price: {formatCurrency(totalPrice)}
            </div>
            <Link href="/checkout">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 w-full ml-5 max-w-[280px] uppercase mt-5">
                Buy
              </button>
            </Link>
          </div>
        </>
      )}
      <button
        className="absolute top-4 right-3 text-gray-600 "
        onClick={closeCart}
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default ShoppingCart;
