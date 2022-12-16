import Image from "next/legacy/image";

export default function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                objectFit="cover"
                layout="fill"
                src="https://scontent.flhr6-1.fna.fbcdn.net/v/t39.30808-6/293219047_1729850147358577_148018764642219458_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=9-LZ9q2R5gAAX_qoBR-&_nc_ht=scontent.flhr6-1.fna&oh=00_AfARUs5vmBXps144s0AUQ0DZRBYU8odnWFfGW5tDms3zzw&oe=63A1C7BE"
                alt=""
              />
            </div>
          </div>

          <div className="relative flex items-center bg-[color:var(--teriary-clr)]">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-[color:var(--teriary-clr)]"></span>

            <div className="p-8 sm:p-16 lg:p-12 xl:p-24">
              <h2 className="heading-styles">Welcome to Liva studio</h2>

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
