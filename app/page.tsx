import React from "react";
import { Image, StructuredText } from "react-datocms";
import request from "./lib/datocms";

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
    <div className="w-full min-h-[200vh] ">
      {startpage && (
        <>
          <div className="">
            <Image
              data={startpage.mainImage.responsiveImage}
              style={{
                height: "100vh",
                backgroundSize: "100%",
              }}
            />
            <h2>{startpage.title}</h2>
            <StructuredText data={startpage.content.value} />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
