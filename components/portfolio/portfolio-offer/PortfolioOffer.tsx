import Image from "next/legacy/image";
import { portfolioOfferImages } from "@helpers/data";
import StyledLink from "../../link/StyledLink";

export default function PortfolioOffer() {
  return (
    <section className="mx-auto my-4 hidden w-full px-8 lg:block lg:py-4">
      <h2 className="heading-styles mb-8 text-center">PORTFOLIO</h2>
      <div className="relative flex w-full gap-4">
        <div className="hidden w-1/3 lg:block special">
          <Image
            className="object-cover"
            width={portfolioOfferImages.first.img.width}
            height={portfolioOfferImages.first.img.height}
            placeholder="blur"
            blurDataURL={portfolioOfferImages.first.img.blurDataURL}
            sizes="100vw"
            src={portfolioOfferImages.first.img.src}
            alt={portfolioOfferImages.first.alt}
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={portfolioOfferImages.second.img.width}
            height={portfolioOfferImages.second.img.height}
            placeholder="blur"
            blurDataURL={portfolioOfferImages.second.img.blurDataURL}
            sizes="100vw"
            src={portfolioOfferImages.second.img.src}
            alt={portfolioOfferImages.second.alt}
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={portfolioOfferImages.third.img.width}
            height={portfolioOfferImages.third.img.height}
            placeholder="blur"
            blurDataURL={portfolioOfferImages.third.img.blurDataURL}
            sizes="100vw"
            src={portfolioOfferImages.third.img.src}
            alt={portfolioOfferImages.third.alt}
          />
        </div>
      </div>
      <StyledLink href="portfolio">Check out our photos</StyledLink>
    </section>
  );
}
