import Link from "next/link";
import SkeletonLoader from "@components/UI/skeleton/Skeleton";

const btnStyles = {
  background: "bg-[color:var(--primary-clr)]",
  border: "border-[color:var(--primary-clr)]",
  textHover: "hover:text-[color:var(--primary-clr)]",
};

export default function OfferImage({ offer }) {
  if (!offer) return <SkeletonLoader />;

  const { title, image, slug } = offer?.fields;
  const { url } = image?.fields?.file;

  return (
    <div className="relative h-96 overflow-hidden group">
      <div
        style={{ backgroundImage: `url(${"https:" + url})` }}
        className={`h-full flex-center hover:scale-110 transition-all duration-1000 ease-in-out bg-no-repeat bg-cover bg-center`}>
        <h2 className="heading-styles text-white bg-[var(--primary-clr)] p-2">{title}</h2>
        <Link href={`/offer/${slug}`} styles={btnStyles}>
          <div className="h-full opacity-0 group-hover:opacity-100 duration-1000 absolute inset-x-0 bottom-0 flex justify-end flex-col text-xl bg-[color:var(--teriary-clr)] text-gray-900 font-semibold z-20"></div>
        </Link>
      </div>
    </div>
  );
}
