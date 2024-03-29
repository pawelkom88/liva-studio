import { useState } from "react";
import ReviewCotent from "@components/reviews/review-content/ReviewCotent";
import SliderBtn from "@components/UI/slider-btn/SliderBtn";
import { useSwipeable } from "react-swipeable";

export default function Reviews({ reviews }) {
  const reviewsData = reviews || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(prevState => prevState + 1);

    if (currentSlide === reviewsData?.length - 1) {
      setCurrentSlide(0);
    }
  }

  function previousSlide() {
    setCurrentSlide(prevState => prevState - 1);
    if (currentSlide === 0) {
      setCurrentSlide(reviewsData?.length - 1);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
    swipeDuration: 200,
  });



  return (
    <section className="mx-auto bg-[color:var(--teriary-clr)] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 sm:py-24 md:py-16  lg:pl-8 ">
        <div
          className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <article className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="heading-styles text-center">Read reviews from our customers</h2>
            <div className="lg:flex-center hidden lg:mt-8 lg:gap-4">
              <SliderBtn onClick={previousSlide} aria="Previous slide" iconDirection="previous" />
              <SliderBtn onClick={nextSlide} aria="Next slide" iconDirection="next" />
            </div>
          </article>
          <ReviewCotent
            currentSlide={currentSlide}
            review={reviewsData[currentSlide]}
            handlers={handlers}
          />
        </div>
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <SliderBtn onClick={previousSlide} aria="Previous slide" iconDirection="previous" />
          <SliderBtn onClick={nextSlide} aria="Next slide" iconDirection="next" />
        </div>
      </div>
    </section>
  );
}
