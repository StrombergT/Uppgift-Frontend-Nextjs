import React from "react";
import { Image } from "react-datocms";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { formatCurrency } from "../lib/formatCurrency";
import { useRemoveFromCart } from "../hooks/useRemoveFromCart";
import { Product } from "../types";
import { useShoppingCartActions } from "../hooks/useShoppingCartActions";
import { FaX } from "react-icons/fa6";

type CartItemProps = {
  product: Product;
  showButtons: boolean;
};

const CartItem = ({ product, showButtons = true }: CartItemProps) => {
  const removeFromCart = useRemoveFromCart();
  const { increaseItem, decreaseItem } = useShoppingCartActions();

  return (
    <div className="flex w-full justify-between mb-4 items-center h[120px] border-b">
      <div className="w-[110px] h-[110px] relative flex flex-col justify-center gap-4">
        <Image
          data={product.mainImage.responsiveImage}
          sizes="(max-width: 110px) 110px, 110px"
          className="object-contain"
        />
      </div>
      <div className="w-full max-w-[180]px ml-5">
        <div className="flex items-center justify-between">
          <h5 className="font-semibold">{product.name}</h5>
        </div>
        {showButtons && (
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button onClick={() => decreaseItem(product.id)}>
                <FaMinus className="text-[10px]" />
              </button>
              <div className="font-semibold">{product.quantity}</div>
              <button onClick={() => increaseItem(product.id)}>
                <FaPlus className="text-[10px]" />
              </button>
            </div>

            <div className="font-semibold text-black text-right">
              {formatCurrency(product.price * product.quantity)}
            </div>
            <button onClick={() => removeFromCart(product.id)}>
              <FaX className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
