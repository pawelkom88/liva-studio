import Image from "next/legacy/image";
import Link from "next/link";

export default function PortfolioOffer() {
  return (
    <section className="mx-auto my-4 px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      {/* COMPONENT */}
      <div className="my-24">
        <h2 className="heading-styles my-8 text-center">ABOUT US</h2>

        <div className="grid gap-4 lg:grid-cols-2 ">
          <Image
            width={760}
            height={507}
            src="/assets/images/MAINPAGE/ABOUT_US_HIGH.webp"
            alt="liva studio team"
          />

          <div>
            <h3 className="my-4 text-2xl font-bold lg:my-8">LIVA STUDIO</h3>
            <p className="text-md lg:text-lg">
              in Bristol specializes in newborn, maternity, and wedding photography. We use wooden
              handmade photography props to create one-of-a-kind images. Our skilled team works
              closely with clients to understand their vision and style, whether it&apos;s natural
              and authentic or more stylized. We offer mobile studio services and strive to capture
              life&apos;s precious and unique moments through our photographs. Contact us today to
              experience the Liva Studio difference.
            </p>
            <div className="text-right">
              <Link
                className="font-semibold underline hover:text-[color:var(--secondary-clr)]"
                href="/about-us">
                our story
              </Link>
              {/* COMPONENT */}

              <svg className="ml-2 inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
              {/* COMPONENT */}
            </div>
          </div>
        </div>
      </div>
      {/* COMPONENT */}

      <h2 className="heading-styles mb-8 text-center">PORTFOLIO</h2>
      <div className="relative flex w-full">
        <div className="w-full text-center lg:w-1/3">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src="/assets/images/MAINPAGE/PORTFOLIO/PORTFOLIO_1_H.webp"
            alt="Liva studio - Portfolio"
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src="/assets/images/MAINPAGE/PORTFOLIO/PORTFOLIO_2_H.webp"
            alt="Liva studio - Portfolio"
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src="/assets/images/MAINPAGE/PORTFOLIO/PORTFOLIO_3_H.webp"
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
        {/* COMPONENT */}

        <svg className="ml-2 inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </svg>
        {/* COMPONENT */}
      </div>
    </section>
  );
}
