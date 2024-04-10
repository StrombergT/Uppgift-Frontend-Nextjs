import React from "react";
import { Product } from "../types";
import { Image } from "react-datocms";
import { FaTrash } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { cartState } from "../recoil";

type CartItemProps = {
  product: Product;
};

const CartItem = ({ product }: CartItemProps) => {
  const [cartItems, setCartItems] = useRecoilState<Product[]>(cartState);

  const removeFromCart = () => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  return (
    <div className="flex justify-between items-center my-2 border-b border-gray-200 pb-2">
      <div className="w-20 h-20 mr-4">
        <Image data={product.mainImage.responsiveImage} />
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-500">
          ${product.price} <span> x {product.quantity}</span>
        </p>
      </div>
      <div>
        <button onClick={removeFromCart}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
