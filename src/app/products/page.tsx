import Link from "next/link";
import { Image } from "react-datocms";
import { Product } from "@/src/types";
import { formatCurrency } from "@/src/utilities/formatCurrency";
import request from "@/src/lib/datocms/datocms";

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
  const products = data.allProducts;

  return (
    <section className="bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight  text-white">
            Products
          </h2>
          <p className="mb-5 font-light sm:text-xl text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            maxime fugit quas neque perspiciatis cupiditate unde voluptatibus
            sunt nesciunt, nihil magnam commodi beatae corrupti expedita
            deleniti cumque dolores illo qui?
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="border p-4 rounded-md shadow-md cursor-pointer mt-4">
                <Image
                  data={product.mainImage.responsiveImage}
                  className="w-full h-auto mb-4"
                />
                <h2 className="text-xl font-semibold mb-1 text-white">
                  {product.name}
                </h2>
                <h3 className="text-gray-300 mb-2">
                  {formatCurrency(product.price)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productspage;
