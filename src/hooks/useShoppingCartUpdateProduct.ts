import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil/state/atoms";
import { Product } from "../types";

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
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      } else {
        return [...updateProducts, product];
      }
    });
  };
};
