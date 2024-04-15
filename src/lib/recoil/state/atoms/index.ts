import { Product } from "@/src/types";
import { atom } from "recoil";

export const cartState = atom<Product[]>({
  key: "cartState",
  default: [],
});
