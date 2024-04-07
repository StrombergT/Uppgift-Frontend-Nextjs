import React from "react";
import request from "../../src/lib/datocms";
import { Image } from "react-datocms";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  description: {
    value: string;
  };
  mainImage: {
    url: string;
    id: string;
    title: string;
    width: number;
    height: number;
    responsiveImage: {
      src: string;
      srcSet: string;
      width: number;
      height: number;
      title: string;
    };
  };
}
const Productspage = async () => {
  const query = `
    query Productpage {
        allProducts {
          id
          name
          price
          description {
            value
          }
          mainImage {
            url
            id
            title
            width
            height
            responsiveImage(imgixParams: {fit: crop, auto: format, w: 500, h:350}) {
              src
              srcSet
              width
              height
              title
            }
          }
        }
      }
    `;

  const data = await request<{ allProducts: Product[] }>({
    query,
    preview: false,
  });
  const products: Product[] = data.allProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 container mx-auto">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="border p-4 rounded-md shadow-md cursor-pointer">
            <Image
              data={product.mainImage.responsiveImage}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <h3 className="text-gray-300 mb-2">${product.price}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Productspage;
