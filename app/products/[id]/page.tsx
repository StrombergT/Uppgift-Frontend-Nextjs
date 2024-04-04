import request from "@/app/lib/datocms";
import React from "react";

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

  const product = data?.productpage;

  return <div>Product page</div>;
};

export default ProductPage;
