import React from "react";
import { Image, StructuredText } from "react-datocms";
import request from "../src/lib/datocms";

const Homepage = async () => {
  const query = `
    query Homepage {
      startpage {
        title
        id
        mainImage {
          responsiveImage(imgixParams: {fit: crop, auto: format}) {
            src
            srcSet
            height
            width
          }
        }
        content {
          value
        }
      }
    }`;

  const data: any = await request({
    query,
    preview: false,
  });
  const startpage = data?.startpage;

  return (
    <div className="container mx-auto p-4 ">
      {startpage && (
        <>
          <div className="w-full mx-auto">
            <Image
              data={startpage.mainImage.responsiveImage}
              className="mb-4"
            />
            <h1 className="text-6xl font-bold mb-6 text-center">
              {startpage.title}
            </h1>
            <StructuredText data={startpage.content.value} />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
