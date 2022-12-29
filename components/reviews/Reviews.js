import { useState } from "react";
import Image from "next/image";
import { reviews } from "@helpers/reviews";
import SliderBtn from "@components/UI/slider-btn/SliderBtn";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(prevState => prevState + 1);

    if (currentSlide === reviews.length - 1) {
      setCurrentSlide(0);
    }
  }

  function previousSlide() {
    setCurrentSlide(prevState => prevState - 1);
    console.log(currentSlide);
    if (currentSlide === 0) {
      setCurrentSlide(reviews.length - 1);
    }
  }

  return (
    <section className="bg-[color:var(--teriary-clr)] px-16">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 sm:py-24 md:py-16 lg:mr-0 lg:pl-8 lg:pr-0">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <article className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="heading-styles text-center">Read reviews from our customers</h2>
            <div className="lg:flex-center hidden lg:mt-8 lg:gap-4">
              <SliderBtn onClick={previousSlide} aria="Previous slide" iconDirection="previous" />
              <SliderBtn onClick={nextSlide} aria="Next slide" iconDirection="next" />
            </div>
          </article>
          <div className="-mx-6 h-[275px] lg:col-span-2 lg:mx-0">
            <blockquote className="flex h-full flex-col justify-between bg-white p-12 shadow-lg">
              <div>
                <div className="flex items-center justify-start gap-0.5">
                  <div className="w-20">
                    <Image
                      width={50}
                      height={50}
                      className="rounded-full"
                      src={reviews[currentSlide].image}
                      alt={reviews[currentSlide].alt}
                    />
                  </div>
                  {reviews[currentSlide].stars?.map(star => {
                    return (
                      <svg
                        key={star}
                        className="h-5 w-5"
                        fill="gold"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    );
                  })}
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                    {reviews[currentSlide].title}
                  </p>
                  <p className="mt-4 italic leading-relaxed text-[color:var(--primary-clr)]">
                    {reviews[currentSlide].content}
                  </p>
                </div>
              </div>
              <footer className="mt-8 text-sm text-gray-500">
                &mdash; {reviews[currentSlide].name}
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <SliderBtn onClick={previousSlide} aria="Previous slide" iconDirection="previous" />
          <SliderBtn onClick={nextSlide} aria="Next slide" iconDirection="next" />
        </div>
      </div>
    </section>
  );
}
