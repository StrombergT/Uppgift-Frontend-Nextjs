import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil/state/atoms";
import { useCallback } from "react";

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
