import Link from "next/link";

export default function OfferImage({ offer }) {
  const { title, image, slug } = offer?.fields;
  const { url } = image?.fields?.file;

  return (
    <div className="group relative h-96 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${"https:" + url})` }}
        className={`flex-center h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-110`}>
        <h2 className="heading-styles p-2 text-white">{title}</h2>
        <Link href={`/offer/${slug}`} />
      </div>
    </div>
  );
}
