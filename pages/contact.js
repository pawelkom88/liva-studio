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
        <section className="mb-8 flex lg:my-16 large:flex-wrap large:justify-center gap-8">
          <div className="w-full p-2 lg:p-0 lg:w-1/2 large:mt-4">
            <Image
              width={400}
              height={600}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={contactSectionImage.original.blurDataURL}
              className="object-cover"
              src={contactSectionImage.original.src}
              alt={contactSectionImage.alt}
            />
          </div>
          <div className="flex flex-col flex-grow justify-center p-2 basis-[50%]">
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
                  className="border border-[color:var(--primary-clr)]  bg-[color:var(--primary-clr)] px-12 py-3 text-sm font-bold uppercase text-white hover:border hover:bg-transparent hover:text-[color:var(--primary-clr)] ">
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
