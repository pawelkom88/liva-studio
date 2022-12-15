import Image from "next/legacy/image";

export default function About() {
  return (
    <section className="relative my-24">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                objectFit="cover"
                layout="fill"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>

          <div className="relative flex items-center bg-[color:var(--teriary-clr)]">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-[color:var(--teriary-clr)]"></span>

            <div className="p-8 sm:p-16 lg:p-12 xl:p-24">
              <h2 className="text-xl font-bold font-steelfish sm:text-5xl uppercase text-gray-800 tracking-wider">
                Welcome to Liva studio
              </h2>

              <p className="mt-4 text-gray-800">
                A portrait and lifestyle photographer, based in New Zealand. My style is very candid
                and non-obtrusive. I love to observe my subjects and capture them in a very natural,
                honest and uncontrived way. I prefer shooting in natural light as it always
                challenges creativity and requires finding new perspectives, angles and compositions
                to present a message, emotion or moment. While my photography style is very simple,
                minimalistic and soft, I’m a fairly bold, spontaneous and curious person.
              </p>

              <a
                href="#"
                className="mt-8 inline-block bg-[color:var(--secondary-clr)] px-12 py-3 text-sm text-white font-bold hover:bg-transparent border border-[color:var(--secondary-clr)] hover:border hover:text-[color:var(--secondary-clr)] focus:outline-none focus:ring active:text-indigo-500 uppercase">
                contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
