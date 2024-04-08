import AddToCart from "@/src/components/AddToCart";
import request from "@/src/lib/datocms";
import { Product } from "@/src/types";
import Link from "next/link";
import { Image, StructuredText } from "react-datocms";
import { CgChevronLeft } from "react-icons/cg";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const query = `
    query Productpage {
        product (filter: {id: {eq: "${params.id}"}}) {
          name
          id
          price
          description {
            value
          }
          mainImage {
            responsiveImage(imgixParams: {fit: crop, auto: format, w: 600, h:450}) {
              src
              srcSet
              width
              height
            }
          }
          alternativeImages {
            responsiveImage {
              src
              srcSet
              width
              height
            }
          }
        }
      }
    `;

  const data = await request<{ product: Product }>({
    query,
    preview: false,
  });

  const product = data?.product;
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Image
            data={product.mainImage.responsiveImage}
            className="rounded-xl w-full sm:w-auto"
          />
        </div>

        <div className="sm:col-span-1">
          <Link
            href="/products"
            className="uppercase flex items-center gap-2 font-semibold"
          >
            <CgChevronLeft size={20} />
            Back to products
          </Link>
          <h2 className="text-4xl font-bold mx-auto my-8">{product.name}</h2>
          <StructuredText data={product.description.value} />
          <h3 className="text-gray-700 mt-2 text-2xl font-bold">
            ${product.price}
          </h3>
          <div>
            <AddToCart />
          </div>
        </div>
        <div className="sm:col-span-1 grid grid-cols-3 gap-4">
          {product.alternativeImages.map((image: any, index: number) => (
            <div key={index}>
              <Image data={image.responsiveImage} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
