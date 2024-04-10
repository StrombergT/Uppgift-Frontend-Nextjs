"use client";
import React, { useState } from "react";
import { Product } from "../types";
import { useShoppingCartUpdateProducts } from "../hooks/useShoppingCartUpdateProduct";

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [count, setCount] = useState(0);
  const updateProducts = useShoppingCartUpdateProducts();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddToCart = () => {
    if (count === 0) {
      setErrorMessage("You must choose how many products.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    const newItem = { ...product, quantity: count };
    updateProducts(newItem);
    setCount(0);
  };

  return (
    <div className="container mx-auto flex items-center mt-4">
      <div className="bg-[#e5e5e5] rounded-xl py-2 px-2 flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
          className="px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          -
        </button>
        <span className="text-lg font-bold">{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="ml-4 bg-[#0c2d48] rounded-md text-white py-2 px-4 sm:px-8 uppercase"
      >
        Add to cart
      </button>
      <div
        className={`${
          errorMessage ? "block" : "hidden"
        } text-red-500 transition duration-500 ease-in-out`}
      >
        {errorMessage}
      </div>
    </div>
  );
};

export default AddToCart;
