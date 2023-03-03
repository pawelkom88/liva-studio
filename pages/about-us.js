import { useState } from "react";
import Hero from "@components/hero/Hero";
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

  function onKeyUp(e) {
    if (e.key === "Enter") setIsOpen(true);
  }

  return (
    <>
      <Hero heroImg="bg-aboutUs" heading="Portrait & Lifestyle Photography">
        Based in Bristol, England, Liva Studio is a photography brand specialising in newborn,
        maternity, and wedding photography. We’re obsessed with documenting and preserving life’s
        special moments by combining beautiful pictures and cutting-edge technology to create
        blissful memories for our clients.
      </Hero>
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

        <div className="relative flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:py-32 xl:py-12 md:max-w-full my-16">
          <div className="ml-4">
            <Image
              className="w-full relative"
              width={500}
              height={750}
              src={aboutUsPage?.original}
              placeholder="blur"
              blurDataURL="/assets/images/loading.webp"
              alt="Artur"
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

          <div className="relative basis-3/4 flex-grow flex order-1">
            <div className="mx-4 lg:mx-0 mb-6">
              <h1 className="text-center mb-6 text-3xl font-bold tracking-tight text-[color:var(--primary-clr)] sm:text-4xl sm:leading-none mt-8">
                THE PHOTOGRAPHERS
              </h1>

              <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                Our team of skilled photographer and editor is dedicated to creating beautiful and
                timeless images that you will cherish for a lifetime. We understand that every
                moment is unique, which is why we work closely with you to understand your vision
                and style. Whether you want a natural and authentic photoshoot or a more stylized
                session, we will work with you to create images that stand out.
              </p>
              <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                Our mission is to tell your story through the lens of our camera. We believe that
                each moment in life is precious and unique, and we strive to capture that essence
                through our photographs.
              </p>

              <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                One of the things that makes us unique is our use of wooden handmade photography
                props. We have a wide range of props available, and most of them are created by us.
                We believe that these props add a special touch to our images and make them stand
                out from the crowd.
              </p>

              <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                At Liva Studio, our philosophy is simple: Give our clients photos that are truly
                one-of-a-kind. One way we do this is by using handmade wooden props — some of which
                we create ourselves. When we said we were passionate about this, we weren’t
                exaggerating. Our passion for creating unique, bespoke pieces drives us to find new
                and inventive ways to produce the perfect photos. We’re always finding new ways to
                infuse that extra magic into your pictures.
              </p>

              <p className="indent-5 text-base text-[color:var(--primary-clr)] md:text-lg my-2">
                We also offer mobile studio services for those busy people who don’t have the time
                to visit a physical studio or if you feel comfortable working with us in your own
                home. This also means you don’t have to worry about finding the perfect spot for
                your shoot. Our mobile studio services come with a complete lighting set-up and
                backdrops, meaning you don’t have to worry about gathering any equipment. We’ll
                bring the studio to you so you can relax and focus on making memories with your
                loved ones.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-center text-3xl font-bold my-2">
          Experience the Liva Studio’s difference
        </h2>
        <p className="mx-4 my-8 text-center">
          Let us help you create lasting memories. Contact us today to book your photoshoot, and let
          us capture your unique story through the lens of our camera.
        </p>
      </Wrapper>
      <div className="text-center">
        <Button styles={btnStyles} href="/contact">
          Book now
        </Button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} onKeyUp={onKeyUp} />}
    </>
  );
}
