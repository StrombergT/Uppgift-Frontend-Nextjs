import request from "../src/lib/datocms";
import { Image, StructuredText } from "react-datocms";
import { StartPage } from "@/src/types";

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
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image data={startpage.mainImage.responsiveImage} />
          </div>

          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              {startpage.title}
            </h1>
            <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <StructuredText data={startpage.content.value} />
            </div>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Read More
              </a>
              <a className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <div className="h-30 mx-auto text-gray-400 dark:text-gray-600">
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, quidem, quibusdam, amet ut beatae consequuntur
                  laudantium laboriosam eligendi magni nemo maiores corrupti
                  dolor ipsa porro ex tempora harum ullam officiis!"
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Homepage;
