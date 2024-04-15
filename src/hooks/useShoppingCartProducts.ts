import { useRecoilValue } from "recoil";

import { Product } from "../types";
import { cartState } from "../lib/recoil/state/atoms";

export const useShoppingCartProducts = (): Product[] => {
  const cartItem = useRecoilValue<Product[]>(cartState);
  return cartItem;
};
