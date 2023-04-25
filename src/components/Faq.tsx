const PianoFaq = () => {
  return (
    <div className="mt-6 mb-20 md:my-20">
      <h1 className="text-3xl font-bold text-blue-950 text-center mb-10">
        FAQs
      </h1>
      <div className="accordion flex flex-col items-center justify-center mb-6">
        {/* <!--  Panel 1  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-1" className="hidden" />
          <label
            htmlFor="panel-1"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What surfaces can you clean with your power washing service?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p
              className="text-gray-900 dark:text-gray-900 p-4 text-base"
              id="panel1"
            >
              At Mighty Washers, we can clean a wide variety of surfaces,
              including concrete, brick, siding, decks, fences, roofs, and more.
              Our powerful machines and eco-friendly detergents are designed to
              remove dirt, grime, and stains from all types of surfaces without
              causing any damage.
            </p>
          </div>
        </div>
        {/* <!--  Panel 2  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-2" className="hidden" />
          <label
            htmlFor="panel-2"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            Is your power washing service safe for my plants and pets?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Yes, our power washing service is completely safe for your plants
              and pets. We use only eco-friendly detergents that are non-toxic
              and biodegradable, and we take care to avoid spraying any solution
              directly onto your plants or lawn. We also recommend that you keep
              your pets inside while we are working to ensure their safety.
            </p>
          </div>
        </div>
        {/* <!--  Panel 3  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-3" className="hidden" />
          <label
            htmlFor="panel-3"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            How often should I have my property power washed?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              The frequency of power washing depends on several factors,
              including the type of surface, the amount of traffic or use, and
              the climate. We recommend having your property power washed at
              least once a year to maintain its appearance and prevent damage
              from buildup of dirt and grime. However, some surfaces may require
              more frequent cleaning, such as high-traffic areas or those prone
              to mildew or algae growth.
            </p>
          </div>
        </div>
        {/* <!--  Panel 4  --> */}
        <div className="w-full md:w-10/12">
          <input type="checkbox" name="panel" id="panel-4" className="hidden" />
          <label
            htmlFor="panel-4"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            How much does your power washing service cost?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              The cost of our power washing service varies depending on the size
              and type of surface to be cleaned, the level of buildup or
              staining, and the complexity of the job. We offer competitive
              pricing and provide a free estimate before beginning any work so
              that you know exactly what to expect. We also work with you to
              develop a customized power washing plan that fits your needs and
              budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PianoFaq;
