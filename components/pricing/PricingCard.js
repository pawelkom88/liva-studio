import Image from "next/image";
import ListItem from "./list-item/ListItem";

export default function PricingCard({ offerPackage }) {
  return (
    <article
      className={`flex flex-col min-h-[35rem] shadow-lg mt-4 ${
        offerPackage.name === "Gold Package"
          ? "bg-[var(--primary-clr)] text-white transform lg:-translate-y-8"
          : "text-[var(--primary-clr)]"
      }`}>
      <div className="flex flex-col p-6 space-y-6 sm:p-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-center uppercase">{offerPackage.name}</h2>
          {offerPackage.name === "Gold Package" && (
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
            return <ListItem key={index} details={item} iconColor={offerPackage.name}/>;
          })}
        </ul>
      </div>
    </article>
  );
}
