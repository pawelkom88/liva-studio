import Link from "next/link";

const btnStyles = {
  background: "bg-[color:var(--primary-clr)]",
  border: "border-[color:var(--primary-clr)]",
  textHover: "hover:text-[color:var(--primary-clr)]",
};

export default function OfferImage({ offer }) {
  const { title, image, slug } = offer?.fields;
  const { url } = image?.fields?.file;

  return (
    <div className="group relative h-96 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${"https:" + url})` }}
        className={`flex-center h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-110`}>
        <h2 className="heading-styles bg-[var(--primary-clr)] p-2 text-white">{title}</h2>
        <Link href={`/offer/${slug}`} styles={btnStyles}>
          <div className="absolute inset-x-0 bottom-0 z-20 flex h-full flex-col justify-end bg-[color:var(--teriary-clr)] text-xl font-semibold text-gray-900 opacity-0 duration-1000 group-hover:opacity-100"></div>
        </Link>
      </div>
    </div>
  );
}
