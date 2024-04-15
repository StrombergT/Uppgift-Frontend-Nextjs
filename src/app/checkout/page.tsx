"use client";
import Link from "next/link";
import CartItem from "@/src/components/CartItem";
import { useRecoilValue } from "recoil";
import { formatCurrency } from "@/src/utilities/formatCurrency";
import { useShoppingCartProducts } from "@/src/hooks/useShoppingCartProducts";
import { shoppingCartTotalState } from "@/src/lib/recoil/state/selectors/shopping-cart-total";

const CheckoutPage = () => {
  const cartItem = useShoppingCartProducts();
  const totalPrice = useRecoilValue(shoppingCartTotalState);

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4 font-primary text-white">
          Thank You For Your Purchase!
        </h1>
        <p className="font-light mb-5 text-white">
          Your buy has been successfully processed.
        </p>
        <div className="w-full max-w-xl text-white">
          {cartItem.map((item) => (
            <CartItem key={item.id} product={item} showButtons={false} />
          ))}
        </div>
        <div className="flex-grow">
          <div className="text-2xl font-bold mb-4 justify-center text-white">
            Total Price: {formatCurrency(totalPrice)}
          </div>
          <Link
            href="/"
            className="bg-gray-500 hover:bg-gray-900 text-white rounded-full w-full uppercase m-auto flex flex-col justify-center items-center p-2"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
