import Wrapper from "@components/UI/wrapper/Wrapper";
import Image from "next/image";
import { contactSectionImage } from "@helpers/data";

export default function contact() {
  return (
    <Wrapper>
      <section className="flex large:flex-wrap large:justify-center w-full lg:my-16">
        <div className="max-h-screen large:mt-4 lg:basis-3/6">
          <Image
            width={853}
            height={927}
            className="object-cover h-full w-full"
            src={contactSectionImage.original}
            placeholder="blur"
            blurDataURL="/public/assets/images/loading.webp"
            alt="Liva studio"
          />
        </div>
        <div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 p-10 min-h-screen flex flex-col justify-center flex-grow large:-my-16">
          <div className="mb-10">
            <h1 className="mt-10 heading-styles font-extrabold">Get in touch</h1>
          </div>
          <div className="mb-10">
            <p className="text-sm leading-6">
              IT&apos;S TIME TO CREATE SOMETHING BEAUTIFUL AND UNIQUE. LEAVE YOUR DOUBTS, FEARS AND
              INHIBITIONS. PHOTOGRAPHY IS LIKE THERAPY. EVEN BETTER{" "}
            </p>
          </div>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            className="w-full mx-auto space-y-6">
            <input
              required
              type="hidden"
              name="redirect"
              value="https://liva-studio.netlify.app/success"
            />
            <input type="hidden" name="subject" value="New message from your website" />
            <input type="hidden" name="apikey" value="9eb3dd0c-d7da-4ca6-8c63-306b126118f9" />

            <input id="checkbox" type="checkbox" name="botcheck" style={{ display: "none" }} />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="flex flex-col">
              <label
                className="text-sm font-bold text-[color:var(--primary-clr)] mb-1 uppercase"
                htmlFor="name">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 mt-1 text-sm outline-none border-2 border-x-0 border-t-0 border-gray-200 focus:border-[color:var(--secondary-clr)]"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm font-bold text-[color:var(--primary-clr)] mb-1 uppercase"
                htmlFor="email">
                Email Address
              </label>
              <input
                required
                type="text"
                name="email"
                id="email"
                className="w-full px-4 py-2 mt-1 text-sm outline-none border-2 border-x-0 border-t-0 border-gray-200 focus:border-[color:var(--secondary-clr)]"
                placeholder="jonn@doe.com"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm font-bold text-[color:var(--primary-clr)] mb-1 uppercase"
                htmlFor="message">
                Message
              </label>
              <textarea
                rows="8"
                type="text"
                name="message"
                id="message"
                className="w-full px-4 py-2 mt-1 text-sm outline-none border-2 border-x-0 border-t-0 border-gray-200 focus:border-[color:var(--secondary-clr)]"
                placeholder="What can we help you with ?"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="hover:text-[color:var(--primary-clr)] border-[color:var(--primary-clr)] bg-[color:var(--primary-clr)] mt-8 inline-block  px-12 py-3 text-sm text-white font-bold hover:bg-transparent border hover:border  focus:outline-none focus:ring active:text-indigo-500 uppercase">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}
