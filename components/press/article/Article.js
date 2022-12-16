import Image from "next/image";
import Link from "next/link";

export default function Article({}) {
  return (
    <article>
      <div className="overflow-hidden bg-white">
        <a href="" aria-label="Article">
          <Image
            width={200}
            height={200}
            src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            className="object-cover w-full h-64"
            alt=""
          />
        </a>
        <div className="p-5 border-t-0 border border-[var(--secondary-clr)]">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">day/month/year</p>
          <a
            href=""
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
            <p className="text-2xl font-bold leading-5">Article</p>
          </a>
          <p className="mb-4 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni
            voluptatem doloremque.
          </p>
          <Link
            className="inline-block bg-[color:var(--secondary-clr)] px-2 py-2 text-sm text-white hover:bg-transparent border border-[color:var(--secondary-clr)] hover:border hover:text-[color:var(--secondary-clr)] focus:outline-none focus:ring active:text-indigo-500"
            href="">
            <span>Read more</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
