import Offer from "../offer/Offer";
import { offerList } from "@helpers/data.js";

export default function OurOffer() {
  return (
    <section className='my-24'>
      <h4 className="heading-styles text-center">OUR OFFER</h4>
      {offerList.map((offer,idx) => (
        <Offer key={offer.id} details={offer} idx={idx + 2}/>
      ))}
    </section>
  );
}
