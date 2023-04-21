import Link from "next/link";

export default function OfferImage({ offer }) {
  const { title, image, slug } = offer?.fields;
  const { url } = image?.fields?.file;

  return (
    <Link className="heading-styles p-2 text-white" href={`/offer/${slug}`}>
      <div className="group relative h-96 overflow-hidden">
        <div
          style={{ backgroundImage: `url(${"https:" + url})` }}
          className={`h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out hover:scale-110`}>
          <span className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
