import Wrapper from "@components/UI/wrapper/Wrapper";
import Image from "next/legacy/image";
import { contactSectionImage } from "@helpers/data";
import { constactSeo } from "../seo/seo";
import PageSeo from "../seo/PageSeo";

export default function Contact() {
  return (
    <>
      <PageSeo seo={constactSeo} />
      <Wrapper>
        <section className="my-8 flex w-full lg:my-16 large:flex-wrap large:justify-center">
          <div className="max-h-screen w-full lg:w-1/2 large:mt-4">
            <div className="relative h-96 w-full sm:h-[650px] lg:h-[800px]">
              <Image
                width={contactSectionImage.original.width}
                height={contactSectionImage.original.height}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={contactSectionImage.original.blurDataURL}
                className="object-cover"
                src={contactSectionImage.original.src}
                alt={contactSectionImage.alt}
              />
            </div>
          </div>
          <div className="flex h-full w-full flex-grow flex-col justify-center p-2 md:w-4/6 lg:-my-16 lg:w-3/6 lg:p-10 xl:w-2/6">
            <div>
              <h1 className="heading-styles mt-10 mb-4 font-extrabold">Get in touch</h1>
            </div>
            <div className="mb-2">
              <p className="text-sm leading-6">
                IT&apos;S TIME TO CREATE SOMETHING BEAUTIFUL AND UNIQUE. LEAVE YOUR DOUBTS, FEARS
                AND INHIBITIONS. PHOTOGRAPHY IS LIKE THERAPY. EVEN BETTER{" "}
              </p>
            </div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
              className="mx-auto w-full space-y-6">
              <input
                required
                type="hidden"
                name="redirect"
                value="https://livastudio.co.uk/success"
              />
              <input type="hidden" name="subject" value="New message from your website" />
              <input type="hidden" name="apikey" value="d07d76f8-701d-4fee-8ca0-3b0384c8eb97" />

              <input id="checkbox" type="checkbox" name="botcheck" style={{ display: "none" }} />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="flex flex-col">
                <label
                  className="mb-1 text-sm font-bold uppercase text-[color:var(--primary-clr)]"
                  htmlFor="name">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 w-full border-2 border-x-0 border-t-0  border-gray-200 px-4 py-2 text-sm focus:border-[color:var(--secondary-clr)]"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-1 text-sm font-bold uppercase text-[color:var(--primary-clr)]"
                  htmlFor="email">
                  Email Address
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="mt-1 w-full border-2 border-x-0 border-t-0  border-gray-200 px-4 py-2 text-sm focus:border-[color:var(--secondary-clr)]"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="mb-1 text-sm font-bold uppercase text-[color:var(--primary-clr)]"
                  htmlFor="message">
                  Message
                </label>
                <textarea
                  rows="8"
                  type="text"
                  name="message"
                  id="message"
                  className="mt-1 w-full border-2 border-x-0 border-t-0  border-gray-200 px-4 py-2 text-sm focus:border-[color:var(--secondary-clr)]"
                  placeholder="What can we help you with ?"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="focus: mt-8 inline-block border border-[color:var(--primary-clr)]  bg-[color:var(--primary-clr)] px-12 py-3 text-sm font-bold uppercase text-white hover:border  hover:bg-transparent hover:text-[color:var(--primary-clr)] focus:ring active:text-indigo-500">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
