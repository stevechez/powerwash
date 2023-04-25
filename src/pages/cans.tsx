import type { NextPage } from "next";
import Image from "next/image";
const Cans: NextPage = () => {
  return (
    <div className="container w-full mx-auto">
      <h1 className="permanent-marker text-5xl font-bold text-blue-950 text-center my-8 bg-gradient-to-r from-white to-blue-200 rounded-lg py-4 mx-4">
        Deep-clean Garbage and Recycle Cans
      </h1>
      <div className="lg:w-10/12 mx-auto">
        <div className="lg:pl-12 mb-8 md:float-right md:m-4">
          <Image
            src="/images/about-us.jpg"
            alt="Cans Imagee"
            width={350}
            height={300}
            className="w-[460px] h-96 object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-blue-950 text-center my-6">
          Welcome to Mighty Washers
        </h1>
        <p className="text-xl mb-4 w-full mr-12">
          At our power washing company, we understand that garbage and recycling
          cans can quickly become a breeding ground for bacteria and odors.
          That&apos;s why we offer deep-cleaning services for your cans to
          eliminate these issues. Our state-of-the-art equipment and
          eco-friendly detergents are powerful enough to remove even the
          toughest grime and odor, leaving your cans sanitized and
          fresh-smelling. Our technicians take great care to protect your
          surroundings during the process and dispose of any wastewater in an
          environmentally responsible manner. Let us take care of this dirty job
          for you, so you can enjoy a cleaner and healthier environment. Contact
          us today to schedule your deep-cleaning garbage and recycling can
          service.
        </p>

        <h4 className="permanent-marker text-xl text-blue-950 text-center mt-12">
          Contact us today to schedule your power washing service and let us
          bring new life to your cans!
        </h4>
      </div>
    </div>
  );
};

export default Cans;
