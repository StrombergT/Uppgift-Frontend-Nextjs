import { useSetRecoilState } from "recoil";

import { Product } from "../types";
import { cartState } from "../lib/recoil/state/atoms";

export const useShoppingCartUpdateProducts = () => {
  const setShoppingCartProducts = useSetRecoilState(cartState);

  return (product: Product): void => {
    setShoppingCartProducts((updateProducts) => {
      const existingItem = updateProducts.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return updateProducts.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + (product.quantity || 1) }
            : p
        );
      } else {
        return [...updateProducts, { ...product, quantity: 1 }];
      }
    });
  };
};
