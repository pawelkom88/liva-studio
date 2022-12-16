import Offer from "../offer/Offer";
import { offerList } from "@helpers/data.js";

export default function OurOffer() {
  return (
    <section>
      <h4 className="heading-styles text-center">OUR OFFER</h4>
      {offerList.map((offer) => (
        <Offer key={offer.id} details={offer} />
      ))}
    </section>
  );
}
