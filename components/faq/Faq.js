import Image from "next/image";
import Link from "next/link";

export default function Faq() {
  return (
    <article>
      <h5 className="heading-styles text-center">HOW IT WORKS ?</h5>
      <div className="mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:max-w-xl sm:grid-cols-3 md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="flex-center flex-col">
          <strong className="my-2">Tell us what you need</strong>
          <Link href="/offer" aria-label="Our offer" title="Our offer">
            <Image
              width={70}
              height={70}
              src="/assets/images/speech-bubble-with-emoticon.png"
              alt="icon"
            />
          </Link>
        </div>
        <div className="flex-center flex-col">
          <strong className="my-2">Book a date</strong>
          <Link href="/contact">
            <Image width={70} height={70} src="/assets/images/add-picture.png" alt="icon" />
          </Link>
        </div>
        <div className="flex-center flex-col">
          <strong className="my-2">Choose your photos</strong>
          <Link href="/offer" aria-label="Client space" title="Client space">
            <Image
              width={60}
              height={60}
              src="/assets/images/calendar-page-with-upper-spring.png"
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
