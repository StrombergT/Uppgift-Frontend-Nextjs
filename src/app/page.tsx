import { Image, StructuredText } from "react-datocms";
import { StartPage } from "@/src/types";
import request from "../lib/datocms/datocms";
import { Button } from "@/src/components/ui/button";
import { Blockquote, HeadTitle } from "../components/Text/TextComponent";

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

  const data = await request<{ startpage: StartPage }>({
    query,
    preview: false,
  });
  const startpage = data?.startpage;

  return (
    <>
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image data={startpage.mainImage.responsiveImage} />
        </div>

        <div className="ml-auto place-self-center lg:col-span-7">
          <HeadTitle>{startpage.title}</HeadTitle>
          <div className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            <StructuredText data={startpage.content.value} />
          </div>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
            <Button variant="destructive" className="font-semibold">
              Read More
            </Button>
            <Button variant="secondary" className="font-semibold">
              Follow Us
            </Button>
          </div>
        </div>
      </div>
      <section className="bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <Blockquote>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quidem, quibusdam, amet ut beatae consequuntur laudantium laboriosam
            eligendi magni nemo maiores corrupti dolor ipsa porro ex tempora
            harum ullam officiis!"
          </Blockquote>
        </div>
      </section>
    </>
  );
};

export default Homepage;
