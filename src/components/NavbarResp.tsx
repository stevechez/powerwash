import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-fullshadow relative">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" className="mt-12 md:mt-0">
            <Image
              src="/images/logo.png"
              width={300}
              height={72}
              alt="Mighty Washers Power Washing Service"
            />
          </Link>

          {/* start */}
          <div className="flex justify-center absolute top-0 md:w-1/2 right-0 w-full lg:w-3/12 bg-gradient-to-r from-white to-blue-300 p-2 text-right">
            <div className="flex-1 md:mr-12 md:whitespace-nowrap font-semibold text-gray-950 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              650-793-8244
            </div>
            <div className="flex-1 lg:ml-0 md:whitespace-nowrap font-semibold text-gray-950 lg:pr-6 whitespace-nowrap">
              <Link href="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />{" "}
                </svg>
                Send us a message
              </Link>
            </div>
          </div>

          {/* end */}

          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center text-lg font-bold tracking-tight md:ml-auto relative w-full lg:pl-24">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 md:pr-0 md:pt-12 lg:block lg:pb-0 lg:mt-0 lg:pr-0 lg:pt-20 lg:my-6 md:ml-24 lg:ml-12 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="space-y-2 md:flex md:space-x-4 md:space-y-0 mt-0 md:mt-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  href="/about"
                  className="hover:text-blue-500 hover:underline tracking-wider"
                >
                  About
                </Link>
              </li>
              <li>
                <Dropdown />
              </li>

              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  href="/testimonials"
                  className="hover:text-blue-500 hover:underline tracking-wider"
                >
                  Testimonials
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link
                  href="/contact"
                  className="hover:text-blue-500 hover:underline tracking-wider whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
}
