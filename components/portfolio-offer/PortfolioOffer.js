import Image from "next/legacy/image";
import Link from "next/link";

export default function PortfolioOffer() {
  return (
    <section className="mx-auto my-4 px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <h2 className="heading-styles mb-8 text-center">PORTFOLIO</h2>
      <div className="relative flex w-full">
        <div className="w-full text-center lg:w-1/3">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src="/assets/images/maternity.webp"
            alt="Liva studio - Portfolio"
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src="/assets/images/about-us-main.webp"
            alt="Liva studio - Portfolio"
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src="/assets/images/maternity.webp"
            alt="Liva studio - Portfolio"
          />
        </div>
      </div>
      <div className="text-right">
        <Link
          className="ml-8 font-semibold underline hover:text-[color:var(--secondary-clr)]"
          href="/portfolio">
          more photos
        </Link>
        <svg className="ml-2 inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </svg>
      </div>
    </section>
  );
}
