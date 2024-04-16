"use client";
import React from "react";
import { Product } from "../../types";
import { useShoppingCartUpdateProducts } from "../../hooks/useShoppingCartUpdateProducts";
import { Button } from "@/src/components/ui/button";

type AddToCartProps = {
  product: Product;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const updateProducts = useShoppingCartUpdateProducts();

  return (
    <div className="container mx-auto flex items-center mt-4">
      <Button
        className="uppercase font-semibold"
        onClick={() => updateProducts(product)}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
