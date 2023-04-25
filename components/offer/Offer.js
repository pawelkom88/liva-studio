import Image from "next/legacy/image";
import Link from "next/link";

export default function Offer({ details }) {
  const { title, image, content, link, alt } = details;

  return (
    <article className="mx-auto my-2 py-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:order-1 lg:pr-10 large:order-2">
          <h3 className="mb-4 font-steelfish text-4xl font-extrabold leading-none tracking-wide text-gray-800">
            {title}
          </h3>
          <hr className="mb-5 border-[color:var(--secondary-clr)]" />
          <p className="text-md mb-6 text-gray-900 lg:text-lg">{content}</p>
          <div className="flex items-center space-x-4">
            <Link
              className="font-medium underline hover:text-[color:var(--secondary-clr)]"
              href={link}>
              offer details
            </Link>
            <svg className="inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </div>
        </div>

        <div className="lg:order-2">
          <Image
            className="object-cover"
            width={600}
            height={430}
            src={image.src}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            sizes="100vw"
            alt={alt}
          />
        </div>
      </div>
    </article>
  );
}
