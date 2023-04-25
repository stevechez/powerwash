import type { NextPage } from "next";
import Image from "next/image";

const LearnMore: NextPage = () => {
  return (
    <>
      <section className="container w-full mx-auto">
        <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
          Learn More
        </h1>

        <div className="w-10/12 mx-auto">
          <div className="pl-12 mb-8 md:float-right md:m-4">
            <Image
              src="/images/learn-more-img.jpg"
              alt="Learn More Image"
              width={300}
              height={300}
              className="w-96 h-96 object-cover"
            />
          </div>

          <p className="text-xl mb-4 w-full mr-12">
            Welcome to the Mighty Washers &quot;Learn More&quot; page, where you
            can discover all you need to know about our top-notch power washing
            services. Our team of experienced professionals is dedicated to
            delivering exceptional results that exceed your expectations, and we
            are committed to providing the highest quality service with
            state-of-the-art technology and eco-friendly detergents.
          </p>

          <p className="text-xl mb-4 w-full mr-12">
            Our power washing services are designed to enhance the beauty and
            cleanliness of your residential or commercial property. We use
            specialized equipment and techniques to remove dirt, grime, and
            stains from a variety of surfaces, including siding, roofs,
            driveways, decks, patios, and more. Our powerful and efficient
            equipment is gentle enough to protect delicate surfaces while still
            providing the deep cleaning power you need.
          </p>

          <p className="text-xl mb-4 w-full mr-12">
            At Mighty Washers, we pride ourselves on our commitment to customer
            satisfaction. We understand that each property is unique, and we
            work with you to create a customized power washing plan that meets
            your specific needs. Our friendly and knowledgeable team is always
            available to answer any questions you may have and provide expert
            advice on how to maintain your property in between washes.
          </p>
          <p className="text-xl mb-4 w-full mr-12">
            When you choose Mighty Washers for your power washing needs, you can
            trust that you are getting the best service in the industry. We use
            only eco-friendly detergents that are safe for you and the
            environment, and our technicians are fully trained and insured for
            your peace of mind. Contact us today to learn more about our power
            washing services and to schedule your next appointment. Let us help
            you transform your property and leave it looking like new!
          </p>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
