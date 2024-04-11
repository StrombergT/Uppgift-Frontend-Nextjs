import { atom } from "recoil";
import { Product } from "../../../types";

export const cartState = atom<Product[]>({
  key: "cartState",
  default: [],
});
