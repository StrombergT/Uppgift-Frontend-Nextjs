import request from "../lib/datocms";
import { Image } from "react-datocms";

const Aboutpage = async () => {
  const query = `
  query Aboutpage {
    page {
      title
      mainImage {
        width
        height
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

  return <div>about page</div>;
};

export default Aboutpage;
