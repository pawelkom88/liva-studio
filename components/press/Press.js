import Article from "../press/article/Article";

export default function Press() {
  return (
    <section>
      <h4 className="heading-styles text-center">OUR LATES ON INSTAGRAM</h4>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
}
