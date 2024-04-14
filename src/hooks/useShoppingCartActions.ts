import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil/state/atoms";
import { useCallback } from "react";
import { Product } from "../types";

export const useShoppingCartActions = () => {
  const setCartItems = useSetRecoilState<Product[]>(cartState);

  const increaseItem = useCallback(
    (productId: string) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    },
    [setCartItems]
  );
  const decreaseItem = useCallback(
    (productId: string) => {
      setCartItems((prevItems: Product[]) =>
        prevItems.reduce((acc: Product[], item) => {
          if (item.id === productId && item.quantity > 0) {
            const updatedItem = { ...item, quantity: item.quantity - 1 };
            if (updatedItem.quantity > 0) {
              acc.push(updatedItem);
            }
          } else {
            acc.push(item);
          }
          return acc;
        }, [])
      );
    },
    [setCartItems]
  );

  return { increaseItem, decreaseItem };
};
