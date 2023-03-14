import Link from "next/link";
import Image from "next/image";
import { pressImage } from "@helpers/data";

export default function Press() {
  return (
    <section className="mt-16 mb-12 lg:m-8 lg:mt-0">
      <div className="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 large:gap-20">
          <div className="order-2 flex flex-col items-center justify-center md:pr-8 lg:max-w-lg xl:pr-0">
            <div className="large:flex-center mb-6 max-w-xl text-left large:flex-col">
              <h4 className="heading-styles mb-6 max-w-lg tracking-tight text-[color:var(--primary-clr)] sm:leading-loose large:text-center">
                OUR LATES ON INSTAGRAM
              </h4>
              <p className="text-base md:text-lg large:text-center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
            <div className="text-right large:text-left">
              <a
                className="ml-8 font-semibold underline hover:text-[color:var(--secondary-clr)]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/livastudio_/">
                go to our Instagram page
              </a>
              <svg className="ml-2 inline-block w-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
          {/* COMPONENT */}
          {pressImage && (
            <div className="flex-center order-1">
              <div className="flex flex-col items-end ">
                <Image
                  width={160}
                  height={192}
                  className="relative z-10 -mr-8 mb-6 h-48 w-48 rounded object-cover shadow-lg xl:h-72 xl:w-72"
                  src={pressImage[0].original}
                  placeholder="blur"
                  blurDataURL={pressImage[0].tiny}
                  alt={pressImage[0].alt}
                />
                <Image
                  width={228}
                  height={228}
                  className="-mr-6 h-32  w-32 rounded object-cover shadow-lg xl:h-44 xl:w-44"
                  src={pressImage[1].original}
                  placeholder="blur"
                  blurDataURL={pressImage[1].tiny}
                  alt={pressImage[1].alt}
                />
              </div>
              <Image
                width={256}
                height={256}
                className="h-64 w-64 rounded object-cover shadow-lg xl:h-96 xl:w-96"
                src={pressImage[2].original}
                placeholder="blur"
                blurDataURL={pressImage[2].tiny}
                alt={pressImage[2].alt}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
