import Image from "next/legacy/image";
import Link from "next/link";

export default function Offer({ details }) {
  const { title, image, content, link, tiny } = details;

  return (
    <article className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-12 lg:py-16 my-2">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="lg:order-2 large:order-2 lg:pr-10 flex justify-center flex-col">
          <h3 className="mb-4 text-4xl font-extrabold font-steelfish leading-none tracking-wide">
            {title}
          </h3>
          <hr className="mb-5 border-[color:var(--secondary-clr)]" />
          <p className="mb-6 text-gray-900">{content}</p>
          <div className="flex items-center space-x-4">
            <Link
              className="underline font-medium hover:text-[color:var(--secondary-clr)]"
              href={link}>
              offer details
            </Link>
            <svg className="inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </div>
        </div>
        <div className="lg:order-1 large:order-1">
          <Image
            className="object-cover"
            width={600}
            height={450}
            src={image}
            placeholder="blur"
            blurDataURL={tiny}
            alt={title}
          />
        </div>
      </div>
    </article>
  );
}
