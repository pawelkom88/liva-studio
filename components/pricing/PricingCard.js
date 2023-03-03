import Image from "next/image";
import ListItem from "./list-item/ListItem";
import {
  btnStylesCommonStyles,
  btnStylesGoldVariant,
  btnStylesOtherVariant,
} from "constants/constants";



// REFACTOR!!!!

export default function PricingCard({ offerPackage }) {
  const isGoldPackage = offerPackage.name === "Gold Package";

  const btnStyles = `${
    isGoldPackage ? btnStylesGoldVariant : btnStylesOtherVariant
  } ${btnStylesCommonStyles}`;

  return (
    <article
      className={`mt-4 flex min-h-[45rem] flex-col shadow-lg ${
        isGoldPackage
          ? "transform bg-[var(--primary-clr)] text-white lg:-translate-y-8"
          : "text-[var(--primary-clr)]"
      }`}>
      <div className="flex flex-col space-y-6 p-6 sm:p-8">
        <div className="space-y-2">
          <h2 className="text-center text-2xl font-bold uppercase">
            {offerPackage.name}</h2>
          {isGoldPackage && (
            <Image
              className="mx-auto pt-4"
              width={75}
              height={75}
              src="/assets/icons/best-value.svg"
              alt="best value icon"
            />
          )}
        </div>
        <strong className="mt-3 text-center text-5xl leading-relaxed">£{offerPackage.price}</strong>
        <ul className="mb-6 flex-1">
          {offerPackage.content?.map((item, index) => {
            return <ListItem key={index} details={item} iconColor={offerPackage.name} />;
          })}
        </ul>
      </div>
      <a href="tel:" className={btnStyles}>
        {isGoldPackage && (
          <span className="whitespace-no-wrap absolute top-0 right-0 origin-bottom-left -translate-y-full translate-x-1/3 rotate-45 transform bg-[#ecc25d] px-4 py-1 text-center text-[.45rem] uppercase tracking-wider">
            Best value
          </span>
        )}
        Book now
      </a>
    </article>
  );
}
