import React from "react";
import { Product } from "../types";
import { Image } from "react-datocms";
import { FaTrash } from "react-icons/fa";
import { formatCurrency } from "../utilities/formatCurrency";
import { useRemoveFromCart } from "../hooks/useRemoveFromCart";

type CartItemProps = {
  product: Product;
  removeButton: boolean;
};

const CartItem = ({ product, removeButton = true }: CartItemProps) => {
  const removeFromCart = useRemoveFromCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };
  return (
    <div className="flex justify-between items-center my-2 border-b border-gray-200 ">
      <div className="w-16 h-16 mr-4">
        <Image data={product.mainImage.responsiveImage} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-500">
          {formatCurrency(product.price)} <span> x {product.quantity}</span>
        </p>
      </div>
      <div>
        {removeButton && (
          <button onClick={handleRemoveFromCart}>
            <FaTrash />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
