import { useSetRecoilState } from "recoil";

import { useCallback } from "react";
import { cartState } from "../lib/recoil/state/atoms";

export const useRemoveFromCart = () => {
  const setCartItems = useSetRecoilState(cartState);

  const removeFromCart = useCallback(
    (productId: string) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
    },
    [setCartItems]
  );

  return removeFromCart;
};
