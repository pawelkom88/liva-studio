import Offer from "../Offer";
import OfferReversed from "../OfferReversed";
import { offerDetails } from "@helpers/data";

export default function OurOffer() {
  return (
    <section className="mx-auto my-4 px-4 lg:py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
      <h3 className="heading-styles text-center">OUR OFFER</h3>
      {offerDetails.map((offer, idx) => (
        <div key={offer.id}>
          {idx % 2 === 0 ? (
            <Offer key={offer.id} details={offer} />
          ) : (
            <OfferReversed key={offer.id} details={offer} />
          )}
        </div>
      ))}
    </section>
  );
}
