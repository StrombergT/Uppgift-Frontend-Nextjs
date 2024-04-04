import request from "@/app/lib/datocms";
import React from "react";
import { Image, StructuredText } from "react-datocms";

const ProductPage = async () => {
  const query = `
    query Productpage {
        product {
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

  console.log(data);

  const product = data?.product;
  return (
    <div className="container mx-auto p-4 py-8">
      <Image
        data={product.mainImage.responsiveImage}
        className="mb-4 rounded-xl"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <StructuredText data={product.description.value} />
    </div>
  );
};

export default ProductPage;
