"use client";

import { useState } from "react";

const AddToCart = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto flex items-center mt-4">
      <div className="bg-[#e5e5e5] rounded-xl py-2 px-2 flex items-center space-x-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          -
        </button>
        <span className="text-lg font-bold">{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
        >
          +
        </button>
      </div>
      <button className="ml-4 bg-[#0c2d48] rounded-md text-white py-4 px-8 uppercase ">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
