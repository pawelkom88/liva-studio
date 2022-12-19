import FaqSuccessElement from "./faqSuccessElement";
import FaqElement from "./FaqElement";
import Image from "next/image";
import { faqElements } from "@helpers/data";

export default function Faq() {
  return (
    <article>
      <h4 className="heading-styles text-center">HOW IT WORKS ?</h4>
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
              src="https://scontent.flhr6-1.fna.fbcdn.net/v/t39.30808-6/307855548_1781718195505105_1978558523649562732_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=MuVOoLk9yKYAX_dcWE5&_nc_ht=scontent.flhr6-1.fna&oh=00_AfAYLO1aG1-HioSq-AixQZS_x71oSd8Tmcqdm9gRdYy4pw&oe=63A1E220"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
  );
}
