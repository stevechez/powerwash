import type { NextPage } from "next";
import Image from "next/image";
const about: NextPage = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        About
      </h1>
      <div className="w-10/12 mx-auto">
        <div className="lg:pl-12 mb-8 md:float-right md:m-4">
          <Image
            src="/images/about-us.jpg"
            alt="About Us"
            width={350}
            height={300}
            className="w-[460px] h-96 object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-blue-950 text-center my-6">
          Welcome to Mighty Washers
        </h1>
        <p className="text-xl mb-4 w-full mr-12">
          Welcome to Mighty Washers, your state-of-the-art power washing
          company. We are a team of dedicated professionals who are passionate
          about providing exceptional power washing services to our valued
          customers. With years of experience in the industry, we have
          established ourselves as leaders in the power washing business,
          delivering superior results with our cutting-edge equipment and
          eco-friendly detergents.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          At Mighty Washers, we take pride in our commitment to excellence. Our
          team of skilled technicians is fully trained and equipped to handle
          any power washing job, no matter how challenging. We use
          state-of-the-art technology and techniques to ensure that your
          surfaces are thoroughly cleaned without causing any damage. Our goal
          is to enhance the beauty and cleanliness of your property, leaving it
          looking like new.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          We believe in delivering the highest quality of service to our
          customers. We prioritize customer satisfaction above all else, and we
          go above and beyond to exceed our customer&apos; expectations. Our
          friendly and professional team is always available to answer any
          questions you may have and provide expert advice on how to best
          maintain your property. We are committed to building long-lasting
          relationships with our customers based on trust, reliability, and
          exceptional service.
        </p>
        <p className="text-xl mb-4 w-full mr-12">
          Choose Mighty Washing for all your power washing needs and experience
          the difference of state-of-the-art technology, exceptional service,
          and outstanding results.
        </p>
        <h4 className="permanent-marker text-xl text-blue-950 text-center mt-12">
          Contact us today to schedule your power washing service and let us
          bring new life to your property!
        </h4>
      </div>
    </div>
  );
};

export default about;
