import React from "react";
import { Image } from "react-datocms";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { formatCurrency } from "../utilities/formatCurrency";
import { useRemoveFromCart } from "../hooks/useRemoveFromCart";
import { Product } from "../types";
import { useShoppingCartActions } from "../hooks/useShoppingCartActions";

type CartItemProps = {
  product: Product;
  showButtons: boolean;
};

const CartItem = ({ product, showButtons = true }: CartItemProps) => {
  const removeFromCart = useRemoveFromCart();
  const { increaseItem, decreaseItem } = useShoppingCartActions();

  return (
    <div className="flex justify-start items-center my-2 border-b border-gray-200">
      <div className="w-16 h-16 mr-4">
        <Image data={product.mainImage.responsiveImage} />
      </div>
      <div className="flex flex-col flex-grow justify-center items-start">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-500">
          {formatCurrency(product.price)} <span>x {product.quantity}</span>
        </p>
      </div>
      {showButtons && (
        <div className="flex items-center ml-auto space-x-2">
          <button onClick={() => decreaseItem(product.id)}>
            <FaMinus />
          </button>
          <button onClick={() => increaseItem(product.id)} className="ml-2">
            <FaPlus />
          </button>
          <button onClick={() => removeFromCart(product.id)}>
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
