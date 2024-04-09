import React from "react";

type ShoppingCartProps = {
  isOpen: boolean;
  closeCart: () => void;
};

const ShoppingCart = ({ isOpen, closeCart }: ShoppingCartProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-8">
        <h1 className="text-lg font-bold mb-4">Cart</h1>
        <hr />
      </div>
      <button
        className="absolute top-2 right-2 text-gray-600"
        onClick={closeCart}
      >
        Close
      </button>
    </div>
  );
};

export default ShoppingCart;
