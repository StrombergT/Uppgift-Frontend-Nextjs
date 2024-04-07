import request from "../../src/lib/datocms";
import { Image, StructuredText } from "react-datocms";

interface AboutPage {
  title: string;
  id: string;
  mainImage: {
    responsiveImage: {
      src: string;
      srcSet: string;
      height: number;
      width: number;
    };
  };
  content: {
    value: any;
  };
}

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
      {page && (
        <>
          <div className="w-full mx-auto">
            <div className="mb-4">
              <Image data={page.mainImage.responsiveImage} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">{page.title}</h2>
              <StructuredText data={page.content.value} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Aboutpage;
