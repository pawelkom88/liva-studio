import Image from "next/legacy/image";
import { portfolioOfferImages } from "@helpers/data";
import StyledLink from "../../link/StyledLink";

export default function PortfolioOffer() {
  return (
    <section className="mx-auto my-4 hidden w-full px-8 lg:block lg:py-4">
      <h2 className="heading-styles mb-8 text-center">PORTFOLIO</h2>
      <div className="relative flex w-full gap-4">
        <div className="w-full text-center lg:w-1/3">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src={portfolioOfferImages.first.src}
            alt={portfolioOfferImages.first.alt}
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src={portfolioOfferImages.second.src}
            alt={portfolioOfferImages.second.alt}
          />
        </div>
        <div className="hidden w-1/3 lg:block">
          <Image
            className="object-cover"
            width={400}
            height={480}
            src={portfolioOfferImages.third.src}
            alt={portfolioOfferImages.third.alt}
          />
        </div>
      </div>
      <StyledLink href='portfolio'>Check out our photos</StyledLink>
    </section>
  );
}
