import { useState } from "react";
import Image from "next/image";
import Wrapper from "@components/UI/wrapper/Wrapper";
import Button from "@components/UI/button/Button";
import Modal from "@components/UI/modal/Modal";
import { aboutUsPage } from "@helpers/data";

const btnStyles = {
  background: "bg-[color:var(--primary-clr)]",
  border: "border-[color:var(--primary-clr)]",
  textHover: "hover:text-[color:var(--primary-clr)]",
};

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-top bg-cover h-[38rem] lg:h-[calc(100vh-139px)] bg-hero">
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="heading-styles text-white tracking-wider lg:text-6xl">
              Portrait &<span className="block py-4">Lifestyle Photography</span>
            </h1>
            <p className="max-w-sm lg:max-w-2xl mt-4 text-white text-md lg:text-xl px-4">
              Our style is very candid and non-obtrusive. I love to observe my subjects and capture
              them in a very natural, honest and uncontrived way.
            </p>
          </div>
        </div>
      </div>
      <Wrapper>
        <div className="relative flex flex-col px-6 mx-auto space-y-6 lg:h-[30rem] lg:flex-row lg:items-center justify-center xl:justify-start">
          <div className="hidden xl:block w-full lg:w-1/2 xl:ml-12">
            <div className="absolute top-28 lg:max-w-lg text-[color:var(--primary-clr)] opacity-75 uppercase">
              I Can Help You Save The Most Bel And
              <span className="block py-2">Elegant Moments Of Your Big Day</span>
            </div>
          </div>
          <div className="flex items-center justify-center xl:justify-start w-full lg:h-96 xl:pl-56 pt-16">
            <h2 className="heading-styles tracking-wider text-7xl lg:text-9xl text-left">
              <span>Hello!</span>
              <span className="block py-2 ml-8">We are Liva</span>
              <span className="block py-2 ml-16">Studio</span>
            </h2>
          </div>
        </div>
        <div className="relative flex flex-col-reverse px-4 xl:pt-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-12 md:px-8 sm:max-w-xl md:max-w-full my-16">
          <div className="relative z-10 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-12 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center order-1">
            <Image
              className="lg:opacity-75 brightness-75 hover:opacity-100 transition-opacity ease-linear duration-300"
              width={500}
              height={750}
              src={aboutUsPage?.original}
              placeholder="blur"
              blurDataURL="/assets/images/loading.webp"
              alt="Artur"
            />
            <div
              onClick={() => setIsOpen(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 transition-transform duration-300 bg-white rounded-full shadow-2xl hover:scale-110 cursor-pointer z-30">
              <svg className="w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </div>
          <div className="relative flex justify-end max-w-xl mx-auto xl:pr-16 lg:max-w-screen-xl">
            <div className="lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-[color:var(--primary-clr)] sm:text-4xl sm:leading-none mt-8">
                  I seek connection, the relationships, the laughs,
                  <br className="hidden md:block" />
                  the real you & real me.
                </h2>
                <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                  I discovered wedding photography about 7 years ago, after having worked in the
                  portrait and commercial industry for 2 years. The emotions, the tension and
                  charming beauty of two people celebrating their love, enjoying time with their
                  family and close friends - nothing can beat that. I shot my first wedding for fun.
                </p>
                <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                  My friend’s photographer got really sick last minute, and they were in panic,
                  begging me to grab my camera and fly over to Perth, to help them preserve at least
                  a bit of their Big Day. So I did.
                </p>

                <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                  7 years later, I still get goosebumps and chills when ever the bride walks down
                  the aisle and the groom sees her for the first time. Like with anything I do, I’ve
                  put much heart, work and energy into photography. Traveled the world, won awards
                  and contests for best wedding photographer, rising star of wedding photography,
                  etc.
                </p>

                <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                  Yet, the most rewarding part are still the emotions, and happy messages I get from
                  my clients. Nothing charges and empowers me more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="text-center -mt-12">
        <Button styles={btnStyles} href="/offer">
          Book now
        </Button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
