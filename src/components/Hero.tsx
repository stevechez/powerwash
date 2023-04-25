import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Hero: NextPage = () => {
  return (
    <>
      <section className="relative flex flex-col-reverse w-full px-6 py-16 bg-gray-900 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-gray-900 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H80L50 120H0L50 0Z"></path>
          </svg>
          <Image
            className="w-full h-48 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-48 lg:h-full "
            src="/images/hero-image.jpg"
            width={500}
            height={700}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h1 className="mb-5 font-sans text-4xl font-bold tracking-wide text-white">
              Welcome to Mighty Washers Power Washing!
            </h1>
            <p className="mb-5 text-xl text-gray-300 pr-4 md:text-2xl">
              At Mighty Washers, we provide top-notch power washing services
              that make your property shine like new. Our expert team uses
              high-pressure water and eco-friendly detergents to remove dirt,
              grime, mold, and other stubborn stains from your surfaces,
              including driveways, decks, sidewalks, fences, and more. With our
              cutting-edge equipment and skilled technicians, we deliver
              superior results that enhance the curb appeal of your home or
              business. Trust us to restore the beauty and cleanliness of your
              property with our professional power washing services.
            </p>
            <p className="mb-5 text-xl text-gray-300 sm:pr-10 md:text-xl">
              Serving Santa Cruz to Aptos.
            </p>
            <div className="flex flex-col items-center pt-2 sm:flex-row sm:pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded shadow-md sm:w-auto sm:mr-4 sm:mb-0 focus:shadow-outline focus:outline-none hover:bg-blue-700"
              >
                Contact Us
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-700 rounded shadow-md sm:w-auto focus:shadow-outline focus:outline-none hover:bg-gray-900 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
