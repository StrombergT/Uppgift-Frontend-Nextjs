import React from "react";

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItem: (id: number) => number;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
};

const ShoppingCartContext = () => {
  return <div>ShoppingCartContext</div>;
};

export default ShoppingCartContext;
