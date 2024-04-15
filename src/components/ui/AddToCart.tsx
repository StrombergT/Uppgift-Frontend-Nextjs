"use client";
import React from "react";
import { Product } from "../../types";
import { useShoppingCartUpdateProducts } from "../../hooks/useShoppingCartUpdateProducts";

type AddToCartProps = {
  product: Product;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const updateProducts = useShoppingCartUpdateProducts();

  return (
    <div className="container mx-auto flex items-center mt-4">
      <button
        onClick={() => updateProducts(product)}
        className="ml-4 bg-[#0c2d48] rounded-md text-white py-2 px-4 sm:px-8 uppercase"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
