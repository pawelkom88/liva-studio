import Link from "next/link";
import Image from "next/image";
import { pressImage } from "@helpers/data";

export default function Press() {
  return (
    <section className="-mt-8 lg:mt-0 mb-12">
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid large:gap-20 gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center md:pr-8 xl:pr-0 lg:max-w-lg order-1">
            <div className="max-w-xl mb-6 text-left large:flex-center large:flex-col">
              <h4 className="max-w-lg mb-6 large:text-center heading-styles tracking-tight text-[color:var(--primary-clr)] sm:leading-loose">
                OUR LATES ON INSTAGRAM
              </h4>
              <p className="text-base large:text-center md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
            <div className="large:text-left text-right">
              <Link
                className="underline font-semibold ml-8 hover:text-[color:var(--secondary-clr)]"
                href="/">
                Learn more
              </Link>
              <svg className="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
          <div className="flex-center order-2">
            <div className="flex flex-col items-end ">
              <Image
                width={160}
                height={192}
                className="relative -mr-8 object-cover mb-6 rounded shadow-lg h-48 xl:h-72 w-48 xl:w-72 z-10"
                src={pressImage[0].original}
                placeholder="blur"
                blurDataURL={pressImage[0].tiny}
                alt={pressImage[0].alt}
              />
              <Image
                width={228}
                height={228}
                className="-mr-6 object-cover  rounded shadow-lg h-32 xl:h-44 w-32 xl:w-44"
                src={pressImage[1].original}
                placeholder="blur"
                blurDataURL={pressImage[1].tiny}
                alt={pressImage[1].alt}
              />
            </div>
            <Image
              width={256}
              height={256}
              className="object-cover rounded shadow-lg h-64 xl:h-96 w-64 xl:w-96"
              src={pressImage[2].original}
              placeholder="blur"
              blurDataURL={pressImage[2].tiny}
              alt={pressImage[2].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
