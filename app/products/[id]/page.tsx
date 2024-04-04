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
            responsiveImage(imgixParams: {fit: crop, auto: format}) {
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
      <Image
        data={product.mainImage.responsiveImage}
        className="mb-4 rounded-xl"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {product.alternativeImages.map((image: any, index: number) => (
          <div key={index}>
            <Image data={image.responsiveImage} />
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <StructuredText data={product.description.value} />
    </div>
  );
};

export default ProductPage;
