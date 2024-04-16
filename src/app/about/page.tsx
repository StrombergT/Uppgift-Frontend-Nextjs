import { HeadTitle } from "@/src/components/Text/TextComponent";
import request from "@/src/lib/datocms/datocms";
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
    <section className=" bg-gray-800">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image data={page.mainImage.responsiveImage} />
        </div>
        <div className="ml-auto place-self-center lg:col-span-7">
          <HeadTitle>{page.title}</HeadTitle>
          <div className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            <StructuredText data={page.content.value} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
