import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6 ">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h3>

              <ul className="text-gray-400">
                <li className="mb-4 ">
                  <a className="hover:underline" href="#">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Career
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h3>
              <ul className="text-gray-400">
                <li className="mb-4 ">
                  <a className="hover:underline" href="#">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Career
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h3>
              <ul className="text-gray-400">
                <li className="mb-4 ">
                  <a className="hover:underline" href="#">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Career
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h3>
              <ul className="text-gray-400">
                <li className="mb-4 ">
                  <a className="hover:underline" href="#">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Career
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h3>
              <ul className="text-gray-400">
                <li className="mb-4 ">
                  <a className="hover:underline" href="#">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Career
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto " />
          <div className="text-center">
            <a href="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                <span className="text-red-800 text-5xl font-bold">C</span>onsid
              </span>
            </a>
            <ul className="flex justify-center mt-5 space-x-5">
              <li>
                <a className="text-gray-500 hover:text-gray-700" href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-700" href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-700" href="#">
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a className="text-gray-500 hover:text-gray-700" href="#">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
