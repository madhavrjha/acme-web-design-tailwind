import NewsLetter from "../components/NewsLetter";
import Quote from "../components/form/Quote";

const Services = () => {
  return (
    <>
      <NewsLetter />
      <section className="w-full py-4">
        <div className="container grid grid-cols-none gap-4 sm:gap-8 md:grid-cols-[1fr_325px]">
          <main className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Services</h2>
            <article className="border border-chinese-silver bg-platinum px-4 py-6 sm:ml-8">
              <h3 className="text-md mb-4 font-semibold">Website Design</h3>
              <p className="mb-4 text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                blanditiis maxime laborum accusamus praesentium voluptates
                tenetur quibusdam illum.
              </p>
              <p className="bg-charcoal px-4 py-1 text-sm text-white">
                Pricing: ₹40,000 - ₹1,20,000
              </p>
            </article>
            <article className="border border-chinese-silver bg-platinum px-4 py-6 sm:ml-8">
              <h3 className="text-md mb-4 font-semibold">
                Website Maintainance
              </h3>
              <p className="mb-4 text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                blanditiis maxime laborum accusamus praesentium voluptates
                tenetur quibusdam illum.
              </p>
              <p className="bg-charcoal px-4 py-1 text-sm text-white">
                Pricing: ₹17,500 per month
              </p>
            </article>
            <article className="border border-chinese-silver bg-platinum px-4 py-6 sm:ml-8">
              <h3 className="text-md mb-4 font-semibold">Website Hosting</h3>
              <p className="mb-4 text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                blanditiis maxime laborum accusamus praesentium voluptates
                tenetur quibusdam illum.
              </p>
              <p className="bg-charcoal px-4 py-1 text-sm text-white">
                Pricing: ₹2,000 per month
              </p>
            </article>
          </main>
          <aside>
            <div className="bg-charcoal px-4 py-6 text-white">
              <h2 className="text-left font-bold">Get A Quote</h2>
              <Quote />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Services;
