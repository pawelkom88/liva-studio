import Image from "next/legacy/image";
import Link from "next/link";

export default function Offer({ details }) {
  const { title, image, content, link } = details;

  return (
    <article className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="order-1 lg:pr-10 flex justify-center flex-col">
          <h5 className="mb-4 text-4xl font-extrabold font-steelfish leading-none tracking-wide">
            {title}
          </h5>
          <hr className="mb-5 border-gray-300" />
          <p className="mb-6 text-gray-900">{content}</p>
          <div className="flex items-center space-x-4">
            <Link href={link}>more</Link>
          </div>
        </div>
        <div className="order-2">
          <Image width={600} height={400} src={image} alt={title} />
        </div>
      </div>
    </article>
  );
}
