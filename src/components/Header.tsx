import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from './NavbarResp';

const Header3: NextPage = () => {
	return (
		<>
			<header className="w-screen">
				<NavBar />
			</header>
		</>
	);
};

export default Header3;

{
	/* <nav className="flex flex-wrap items-center justify-center text-lg font-bold tracking-tight md:ml-auto relative">
            <div className="absolute -right-20 -top-20 flex bg-gradient-to-r from-gray-200 to-blue-300 p-4 w-[500px]">
              <div className="flex-1">
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
              <div className="flex-1">
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
            <div className="pr-[400px]">
              <Link
                href="/about"
                className="mr-5 hover:text-blue-500 hover:underline tracking-wider"
              >
                About
              </Link>
              <Link
                href="/services"
                className="mr-5 hover:text-blue-500 hover:underline tracking-wider"
              >
                Services
              </Link>
              <Link
                href="/service-area"
                className="mr-5 hover:text-blue-500 hover:underline tracking-wider"
              >
                Services Area
              </Link>

              <Link
                href="/testimonials"
                className="mr-5 hover:text-blue-500 hover:underline tracking-wider"
              >
                Testimonials
              </Link>
              <Link
                href="/request-quote"
                className="mr-5 hover:text-blue-500 hover:underline tracking-wider"
              >
                Request Quote
              </Link>
            </div>
          </nav> */
}
