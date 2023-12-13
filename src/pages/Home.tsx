import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <section className='relative w-full bg-[url("showcase.jpg")] bg-cover  bg-center bg-no-repeat py-8 text-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-charcoal after:bg-opacity-40 sm:py-1 [&_*]:z-10'>
        <div className="container flex flex-col items-center justify-center text-center sm:min-h-[250px] lg:min-h-[350px]">
          <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-relaxed sm:text-4xl">
            Affordable and Professional Web Design
          </h1>
          <p className="mx-auto max-w-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            dolorum illum, repudiandae voluptates laboriosam aperiam.
          </p>
        </div>
      </section>
      <NewsLetter />
      <section className="w-full py-12">
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <img src="logo_html.png" className="mb-3 h-24" alt="logo-html" />
            <h3 className="mb-2 text-lg font-bold">HTML5 Markup</h3>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, ut. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perferendis, quo.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="logo_css.png" className="mb-3 h-24" alt="logo-css" />
            <h3 className="mb-2 text-lg font-bold">CSS3 Styling</h3>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, ut. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perferendis, quo.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="logo_brush.png" className="mb-3 h-24" alt="logo-brush" />
            <h3 className="mb-2 text-lg font-bold">Graphic Designing</h3>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, ut. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perferendis, quo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// column-width, column-count, columns, column-gap, column-rule, column-span
