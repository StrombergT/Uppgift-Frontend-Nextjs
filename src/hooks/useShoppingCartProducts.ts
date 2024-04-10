import { useRecoilValue } from "recoil";
import { cartState } from "../recoil/state/atoms";

export const useShoppingCartProducts = () => {
  const cartItems = useRecoilValue(cartState);
  return { cartItems };
};
