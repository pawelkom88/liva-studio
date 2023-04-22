import Image from "next/image";
import { portfolioOfferImages } from "@helpers/data";
import StyledLink from "@components/link/StyledLink";

export default function PortfolioOfferMobile() {
  return (
    <section className="mx-auto mt-12 mb-24 block px-8 sm:max-w-xl md:max-w-full lg:hidden lg:max-w-screen-xl lg:py-4">
      <h2 className="heading-styles mb-8 text-center">PORTFOLIO</h2>

      <div className="flex-center order-1 mb-4">
        <div className="flex flex-col items-center ">
          <Image
            width={160}
            height={192}
            className="relative z-10 -mr-4 mb-6 h-48 w-48 rounded object-cover shadow-lg"
            src={portfolioOfferImages.first.src}
            alt={portfolioOfferImages.first.alt}
          />
          <Image
            width={228}
            height={228}
            className="-mr-4 h-32  w-32 rounded object-cover shadow-lg"
            src={portfolioOfferImages.second.src}
            alt={portfolioOfferImages.second.alt}
          />
        </div>
        <Image
          width={256}
          height={256}
          className="h-64 w-64 rounded object-cover shadow-lg"
          src={portfolioOfferImages.third.src}
          alt={portfolioOfferImages.third.alt}
        />
      </div>
      <StyledLink href="portfolio">Check out our photos</StyledLink>
    </section>
  );
}
