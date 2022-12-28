import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviews } from "@helpers/reviews";

export default function Reviews() {
  return (
    <section className="relative my-8">
      <h2 className="heading-styles my-8 text-center">Reviews</h2>
      <Swiper className="mySwiper">
        {reviews.map(review => {
          return (
            <SwiperSlide key={review.id}>
              <article className="border-2">
                <div className="h-10 w-10">
                  <Image
                    width={10}
                    height={10}
                    className="h-10 w-10 rounded-full"
                    src={review.image}
                    alt={review.alt}
                  />
                </div>
                <div className="mb-1 flex items-center">
                  {review.stars?.map(star => {
                    return (
                      <svg
                        key={star}
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    );
                  })}

                  <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                    {review.title}
                  </h3>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Reviewed in the United Kingdom on{" "}
                    <time dateTime={review.joined}>{review.joined}</time> by {review.name}
                  </p>
                </footer>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">{review.content}</p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
