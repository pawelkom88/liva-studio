import Offer from "../Offer";
import OfferReversed from "../OfferReversed";
import { offerDetails } from "@helpers/data";

export default function OurOffer() {
  return (
    <section>
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
