import { selector } from "recoil";
import { cartState } from "../atoms";

export const shoppingCartTotalState = selector({
  key: "cartState/total",
  get: ({ get }) => {
    const cartItems = get(cartState);
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  },
});
