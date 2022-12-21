import FaqSuccessElement from "./faqSuccessElement";
import FaqElement from "./FaqElement";
import Image from "next/image";
import { faqElements, faqImage } from "@helpers/data";

export default function Faq() {
  return (
    <article>
      <h5 className="heading-styles text-center">HOW IT WORKS ?</h5>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="relative flex items-center bg-[color:var(--teriary-clr)] p-4">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-right-16 lg:block lg:w-16 lg:bg-[color:var(--teriary-clr)]"></span>
            <div className="lg:py-6 lg:pr-16">
              {faqElements.map(({ id, content }) => (
                <FaqElement key={id} stepNumber={id} content={content} />
              ))}
              <FaqSuccessElement />
            </div>
          </div>
          <div className="relative sm:h-96 my-auto">
            <Image
              width={596}
              height={384}
              className="inset-0 object-cover w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src={faqImage.original}
              placeholder="blur"
              blurDataURL={faqImage.tiny}
              alt="faq image"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
