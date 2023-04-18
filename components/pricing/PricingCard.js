import Image from "next/image";
import Link from "next/link";
import ListItem from "./list-item/ListItem";

const btnStylesGoldVariant =
  "bg-white text-[var(--primary-clr)] hover:border-white hover:text-white hover:bg-[var(--secondary-clr)]";

const btnStylesOtherVariant =
  "bg-[var(--secondary-clr)] text-white hover:bg-transparent hover:border-[var(--primary-clr)] hover:text-[var(--primary-clr)]";

const btnStylesCommonStyles =
  "w-1/2 mx-auto px-8 py-3 font-semibold relative overflow-hidden bg-[color:var(--primary-clr)] hover:bg-[color:var(--secondary-clr)] text-white border-2 border-transparent transition-all";

export default function PricingCard({ offerPackage }) {
  const isSunflowerPackage = offerPackage.name === "SUNFLOWER" || offerPackage.name === "HALF DAY";

  const btnStyles = `${
    isSunflowerPackage ? btnStylesGoldVariant : btnStylesOtherVariant
  } ${btnStylesCommonStyles}`;

  return (
    <article
      className={`mt-4 flex min-h-[40rem] flex-col shadow-lg ${
        isSunflowerPackage
          ? "transform bg-[var(--primary-clr)] text-white lg:-translate-y-8"
          : "text-[var(--primary-clr)]"
      }`}>
      <div className="flex flex-col space-y-6 p-6 sm:p-8">
        <div className="space-y-2">
          <h2 className="text-center text-2xl font-bold uppercase">{offerPackage.name}</h2>
          {isSunflowerPackage && (
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
      <Link href="/contact" className={isSunflowerPackage ? btnStyles : btnStylesCommonStyles}>
        {isSunflowerPackage && (
          <span className="whitespace-no-wrap absolute top-0 right-0 origin-bottom-left -translate-y-full translate-x-1/3 rotate-45 transform bg-[#ecc25d] px-4 py-1 text-center text-[.4rem] uppercase tracking-wider">
            Best value
          </span>
        )}
        Book now
      </Link>
    </article>
  );
}
