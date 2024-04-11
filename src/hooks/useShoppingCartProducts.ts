import { useRecoilValue } from "recoil";
import { cartState } from "../recoil/state/atoms";
import { Product } from "../types";

export const useShoppingCartProducts = (): Product[] => {
  const cartItems = useRecoilValue<Product[]>(cartState);
  return cartItems;
};
