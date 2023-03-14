const btnStyles =
  "hover:text-[color:var(--primary-clr)] border-[color:var(--primary-clr)] bg-[color:var(--primary-clr)] mt-8 inline-block px-12 py-3 text-sm text-white font-bold hover:bg-transparent border hover:border  focus:ring active:text-indigo-500 uppercase";

export default function CallToAction() {
  return (
    <section className="flex-center mb-24 flex-col py-8">
      <p className="lg:text-md my-8 text-sm">LET&apos;S WORK TOGETHER</p>
      <h6 className="heading-styles text-center text-4xl tracking-widest lg:text-7xl">
        WE CAN&apos;T WAIT TO HEAR FROM YOU
      </h6>
      <p className="text-md my-8 lg:text-xl">I&apos;LL SHOW YOU HOW BEAUTIFUL THE WORLD IS</p>
      <button className={btnStyles} href="/contact">
        get in touch
      </button>
    </section>
  );
}
