import OfferImage from "@components/offer-image/OfferImage";
import Wrapper from "@components/UI/wrapper/Wrapper";
import Hero from "@components/hero/Hero";
import { offerGrid } from "@helpers/data";

export default function index() {
  return (
    <>
      <Hero imageSrc="bg-offer" heading="heading">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, error?
      </Hero>

      <Wrapper>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-4 cursor-pointer">
          {offerGrid?.map(offer => {
            return <OfferImage key={offer.id} details={offer} />;
          })}
        </section>
      </Wrapper>
    </>
  );
}
