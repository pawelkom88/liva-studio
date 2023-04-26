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
            className="w-48 rounded -mr-4 object-cover shadow-lg z-30"
            width={portfolioOfferImages.first.img.width}
            height={portfolioOfferImages.first.img.height}
            placeholder="blur"
            blurDataURL={portfolioOfferImages.first.img.blurDataURL}
            src={portfolioOfferImages.first.img.src}
            alt={portfolioOfferImages.first.alt}
          />
          <Image
            className="-mr-12 -mt-2 w-48 rounded object-cover shadow-lg"
            width={portfolioOfferImages.second.img.width}
            height={portfolioOfferImages.second.img.height}
            placeholder="blur"
            blurDataURL={portfolioOfferImages.second.img.blurDataURL}
            src={portfolioOfferImages.second.img.src}
            alt={portfolioOfferImages.second.alt}
          />
        </div>
        <Image
          className="w-40 sm:w-48 h-64 sm:h-80 rounded object-cover shadow-lg flex-shrink"
          width={portfolioOfferImages.third.img.width}
          height={portfolioOfferImages.third.img.height}
          placeholder="blur"
          blurDataURL={portfolioOfferImages.third.img.blurDataURL}
          src={portfolioOfferImages.third.img.src}
          alt={portfolioOfferImages.third.alt}
        />
      </div>
      <StyledLink href="portfolio">Check out our photos</StyledLink>
    </section>
  );
}
