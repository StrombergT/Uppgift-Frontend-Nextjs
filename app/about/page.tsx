import request from "../../src/lib/datocms";
import { AboutPage } from "@/src/types";
import { Image, StructuredText } from "react-datocms";

const Aboutpage = async () => {
  const query = `
  query Aboutpage {
    page(filter: {slug: {eq: "about"}}) {
      id
      title
      content {
        value
      }
      mainImage {
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

  const data = await request<{ page: AboutPage }>({
    query,
    preview: false,
  });

  const page = data?.page;

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Image
          data={page.mainImage.responsiveImage}
          className="mb-4 rounded-lg"
        />
        <h2 className="text-3xl font-bold mb-4">{page.title}</h2>
        <div className="text-lg mb-6">
          <StructuredText data={page.content.value} />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
