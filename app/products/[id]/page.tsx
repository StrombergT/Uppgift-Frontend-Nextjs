import request from "@/app/lib/datocms";
import React from "react";
import { Image, StructuredText } from "react-datocms";

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

  const data: any = await request({
    query,
    preview: false,
  });

  const product = data?.product;
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <Image
            data={product.mainImage.responsiveImage}
            className="rounded-xl w-full sm:w-auto"
          />
        </div>
        <div className="sm:col-span-1">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <StructuredText data={product.description.value} />
          <div>
            <button className="bg-[#0c2d48] text-white py-4 px-8 uppercase mt-4">
              Add to cart
            </button>
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
