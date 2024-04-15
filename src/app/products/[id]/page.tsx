import AddToCart from "@/src/components/AddToCart";
import request from "@/src/lib/datocms";
import { Product } from "@/src/types";
import { formatCurrency } from "@/src/utilities/formatCurrency";
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
    <div className="min-w-screen min-h-screen bg-gray-800 items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <Image
                data={product.mainImage.responsiveImage}
                className="rounded-xl w-full sm:w-auto"
              />
              <div className=" absolute top-10 bottom-10 left-10 right-10 "></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <Link
                href="/products"
                className="uppercase flex items-center gap-2 font-semibold"
              >
                <CgChevronLeft size={20} />
                Back to products
              </Link>
              <h1 className="text-4xl font-bold mx-auto mb-5 uppercase mt-5">
                {product.name}
              </h1>
              <div className="opacity-50 text-gray-900 inline-block text-sm leading-none ">
                <StructuredText data={product.description.value} />
              </div>
              <h3 className="text-gray-700 mt-2 text-2xl font-bold">
                {formatCurrency(product.price)}
              </h3>
            </div>
            <div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-start mt-8">
          {product.alternativeImages.map((image: any, index: number) => (
            <div key={index} className="w-1/4 px-2">
              <Image data={image.responsiveImage} className="w-full rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
