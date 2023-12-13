import Subscription from "./form/Subscription";

const NewsLetter = () => {
  return (
    <section className="w-full bg-charcoal py-4">
      <div className="container flex flex-col items-center justify-center gap-y-4 text-center sm:flex-row sm:justify-between">
        <h2 className="text-xl font-bold text-white">
          Subscribe to our Newsletter
        </h2>
        <Subscription />
      </div>
    </section>
  );
};

export default NewsLetter;
