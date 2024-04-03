import React from "react";
import { Image, StructuredText } from "react-datocms";
import request from "./lib/datocms";

/*
interface ResponsiveImage {
  src: string;
  srcSet: string;
  height: number;
  width: number;
}

interface Content {
  value: string;
}

interface Startpage {
  title: string;
  id: string;
  mainImage: {
    responsiveImage: ResponsiveImage;
  };
  content: Content[];
}

interface QueryResult {
  startpage: Startpage;
}
*/
const Homepage: React.FC = async () => {
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

  const data = await request({
    query,
    preview: false,
  });
  const startpage = data?.startpage;

  return (
    <div className="w-full min-h-screen">
      {startpage && (
        <>
          <div>
            <Image data={startpage.mainImage.responsiveImage} />
            <h2>{startpage.title}</h2>
            <StructuredText data={startpage.content.value} />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
