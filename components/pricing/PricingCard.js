import Image from "next/image";
import ListItem from "./list-item/ListItem";

export default function PricingCard({ offerPackage }) {
  const goldPackage = offerPackage.name === "Gold Package";

  const btnStyles = `${
    goldPackage
      ? "bg-white text-[var(--primary-clr)] hover:bg-transparent hover:border-white hover:text-white"
      : "bg-[var(--secondary-clr)] text-white hover:bg-transparent hover:border-[var(--primary-clr)] hover:text-[var(--primary-clr)]"
  } w-1/2 mx-auto px-8 py-3 font-semibold relative overflow-hidden border-2 border-transparent`;

  return (
    <article
      className={`flex flex-col min-h-[45rem] shadow-lg mt-4 ${
        goldPackage
          ? "bg-[var(--primary-clr)] text-white transform lg:-translate-y-8"
          : "text-[var(--primary-clr)]"
      }`}>
      <div className="flex flex-col p-6 space-y-6 sm:p-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-center uppercase">{offerPackage.name}</h2>
          {goldPackage && (
            <Image
              className="mx-auto pt-4"
              width={75}
              height={75}
              src="/assets/icons/best-value.svg"
              alt="best value icon"
            />
          )}
        </div>
        <strong className="mt-3 leading-relaxed text-center text-5xl">£{offerPackage.price}</strong>
        <ul className="flex-1 mb-6">
          {offerPackage.content?.map((item, index) => {
            return <ListItem key={index} details={item} iconColor={offerPackage.name} />;
          })}
        </ul>
      </div>
      <a href="tel:" className={btnStyles}>
        {goldPackage && (
          <span className="absolute top-0 right-0 px-4 py-1 text-[.45rem] tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-[#ecc25d]">
            Best value
          </span>
        )}
        Book now
      </a>
    </article>
  );
}
