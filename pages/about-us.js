import { useState } from "react";
import Hero from "@components/hero/Hero";
import Image from "next/image";
import Wrapper from "@components/UI/wrapper/Wrapper";
import Button from "@components/UI/button/Button";
import Modal from "@components/UI/modal/Modal";
import Paragraph from "../components/paragraph/Paragraph";
import PageSeo from "../seo/PageSeo";
import { aboutUsPageImg, aboutUsParagraph } from "@helpers/data";
import { aboutUsSeo } from "../seo/seo";

const btnStyles = {
  background: "bg-[color:var(--primary-clr)]",
  border: "border-[color:var(--primary-clr)]",
  textHover: "hover:text-[color:var(--primary-clr)]",
};

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  function onKeyUp(e) {
    if (e.key === "Enter") setIsOpen(true);
  }
  return (
    <>
      <PageSeo seo={aboutUsSeo} />
      <Hero heroImg="bg-aboutUs" heading="Portrait & Lifestyle Photography"></Hero>
      <Wrapper>
        <div className="relative mx-auto flex flex-col justify-center space-y-6 px-6 lg:h-[30rem] lg:flex-row lg:items-center xl:justify-start ">
          <div className="hidden w-full lg:w-1/2 xl:ml-12 xl:block">
            <div className="absolute top-28 text-[color:var(--primary-clr)] opacity-75 lg:max-w-lg">
              We can help you save the most beautiful and
              <span className="block py-2">elegant moments of your life.</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-center pt-16 lg:h-96 xl:justify-start xl:pl-56">
            <h2 className="heading-styles text-left text-7xl tracking-wider lg:text-9xl">
              <span>Hello!</span>
              <span className="ml-8 block py-2">We are Liva</span>
              <span className="ml-16 block py-2">Studio</span>
            </h2>
          </div>
        </div>
        <div className="relative my-16 flex flex-wrap items-center justify-center gap-8 md:max-w-full lg:flex-nowrap lg:py-32 xl:py-12">
          <div className="lg:ml-4 w-full lg:w-auto">
            <Image
              className="relative w-full"
              width={aboutUsPageImg.original.width}
              height={aboutUsPageImg.original.height}
              src={aboutUsPageImg.original.src}
              placeholder="blur"
              blurDataURL={aboutUsPageImg.original.blurDataURL}
              alt="Artur and Magda looking into each others eyes"
            />
            {/* <Image
              className="relative w-full lg:opacity-75 brightness-75 hover:opacity-100 transition-opacity ease-linear duration-300"
              width={500}
              height={750}
              src={aboutUsPage?.original}
              placeholder="blur"
              blurDataURL="/assets/images/loading.webp"
              alt="Artur"
            /> */}
            {/* <div
              onClick={() => setIsOpen(true)}
              onKeyDown={onKeyUp}
              tabIndex="0"
              aria-label="play video"
              className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 transition-transform duration-300 bg-white rounded-full shadow-2xl hover:scale-110 cursor-pointer z-30">
              <svg
                role="img"
                aria-labelledby="play video"
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div> */}
          </div>

          <div className="relative order-1 flex flex-grow basis-1/2">
            <div className="mx-4 mb-6 lg:mx-0">
              <h1 className="mb-6 mt-8 text-center text-3xl font-bold tracking-tight text-[color:var(--primary-clr)] sm:text-4xl sm:leading-none">
                THE PHOTOGRAPHERS
              </h1>
              {aboutUsParagraph.map(({ id, content }) => {
                return <Paragraph key={id}>{content}</Paragraph>;
              })}
            </div>
          </div>
        </div>
        <h2 className="my-2 text-center text-3xl font-bold">
          Experience the Liva Studio’s difference
        </h2>
        <p className="mx-4 my-8 text-center">
          Let us help you create lasting memories. Contact us today to book your photoshoot, and let
          us capture your unique story through the lens of our camera.
        </p>
      </Wrapper>
      <div className="mb-24 text-center">
        <Button styles={btnStyles} href="/contact">
          Book now
        </Button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} onKeyUp={onKeyUp} />}
    </>
  );
}
