import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <>
      <NewsLetter />
      <section className="w-full py-4">
        <div className="container grid grid-cols-none gap-4 sm:gap-8 md:grid-cols-[1fr_325px]">
          <main>
            <h2 className="mb-2 text-xl font-bold">About Us</h2>
            <article className="flex flex-col gap-4 text-justify text-sm">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                sapiente ipsum porro explicabo est! Recusandae blanditiis
                quaerat fuga rerum voluptates delectus facilis autem saepe?
                Repudiandae unde distinctio ullam ex ducimus? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ducimus excepturi est
                debitis, pariatur iusto, mollitia reprehenderit sit temporibus
                eligendi impedit accusamus ad voluptatum nihil esse ex amet
                architecto facilis non!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                tenetur qui dolorem pariatur cupiditate impedit repellat
                voluptates deserunt perferendis voluptatibus est minus earum
                inventore reprehenderit exercitationem ab, repudiandae quas
                temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Voluptas excepturi, itaque cumque laboriosam deserunt
                aperiam harum nesciunt blanditiis vitae magnam libero similique.
                Dicta voluptatum similique esse voluptas dolores. At, incidunt?
              </p>
              <p className="bg-charcoal p-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                perspiciatis praesentium nihil ducimus dolore fuga reprehenderit
                omnis corrupti expedita, impedit animi beatae ex eligendi
                soluta, alias facere nesciunt aliquid aperiam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Deserunt asperiores, esse
                obcaecati tempore voluptate porro beatae eos. Accusamus dicta,
                saepe sequi, ex voluptas corrupti iusto nihil laborum voluptatem
                explicabo hic.
              </p>
            </article>
          </main>
          <aside>
            <article className="bg-charcoal p-4 text-justify text-sm text-white">
              <h2 className="mb-3 text-xl font-bold">What We Do ?</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto accusamus sunt rem, necessitatibus nisi odit saepe
                labore optio dolor, reprehenderit omnis in deserunt quia?
                Laudantium dicta odio eligendi unde animi?
              </p>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;
