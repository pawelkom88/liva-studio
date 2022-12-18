import Offer from "../offer/Offer";
import OfferReversed from "../offer/OfferReversed";
import { offerList } from "@helpers/data.js";

export default function OurOffer() {
  return (
    <section className="my-24">
      <h4 className="heading-styles text-center">OUR OFFER</h4>
      {offerList.map((offer, idx) => (
        <div key={offer.id}>
          {idx % 2 === 0 ? (
            <Offer details={offer} />
          ) : (
            <OfferReversed key={offer.id} details={offer} />
          )}
        </div>
      ))}
    </section>
  );
}
