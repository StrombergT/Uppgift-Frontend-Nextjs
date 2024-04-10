import { atom } from "recoil";
import { Product } from "../../../types";

export const cartState = atom<Product[]>({
  key: "cartState",
  default: [],
});

export const getCartValue = (cart: Product[]): number => {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }

  return total;
};
