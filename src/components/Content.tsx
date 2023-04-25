import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const Content: NextPage = () => {
  return (
    <>
      <section className="w-full py-4 bg-gray-50">
        <div className="px-10 mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-blue-950 text-center my-6">
            How We&apos;re different
          </h1>
          <div className="grid overflow-hidden lg:rounded-xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col justify-center ">
                <p className="text-lg text-gray-600 mb-8 md:pr-12">
                  There are several ways in which our power washing service at
                  PowerJet Wash stands out from the competition. Firstly, we
                  have a team of experienced technicians who are fully trained
                  and equipped to handle any power washing job, no matter how
                  challenging. We take pride in our attention to detail and our
                  commitment to delivering high-quality results every time.
                </p>
              </div>
              <div className="overflow-hidden bg-gray-100 h-96">
                <Image
                  src="/images/content-1.png"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                <Image
                  src="/images/content-2.png"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <div className="flex flex-col justify-center md:pl-12">
                <p className="text-lg text-gray-600 mb-8 md:pr-12 mt-8 md:mt-0">
                  Secondly, we use only the latest and most advanced power
                  washing equipment and eco-friendly detergents to ensure that
                  your surfaces are not only clean but also safe for you, your
                  family, and the environment. Our powerful machines are capable
                  of removing even the most stubborn stains and grime without
                  causing any damage to your property.
                </p>
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-gray-600 mb-8 md:pr-12 mt-8 md:mt-0">
                  Lastly, we offer competitive pricing and excellent customer
                  service that sets us apart from the competition. Our team is
                  always available to answer any questions you may have, and we
                  work with you to develop a customized power washing plan that
                  fits your needs and budget. With our commitment to customer
                  satisfaction and quality workmanship, you can trust PowerJet
                  Wash to deliver the best power washing services in the
                  business.
                </p>
              </div>
              <div className="bg-gray-100 h-96">
                <Image
                  src="/images/content-3.png"
                  className="object-cover w-full h-full"
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
