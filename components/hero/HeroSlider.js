import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { sliderData as sliderImages } from "@helpers/data";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {sliderImages.map(photo => {
          return (
            <SwiperSlide key={photo.title}>
              <p className="heading-styles z-10 mb-24 text-white lg:text-8xl">{photo.title}</p>
              <p className="absolute top-[40%] z-50 mx-10 text-white lg:top-[55%] lg:mx-24 lg:text-xl xl:mx-40">
                {photo.description}
              </p>
              <picture>
                <source srcSet={photo.image} media="(min-width: 600px)" />
                <img
                  className="absolute inset-0 h-full w-full object-cover brightness-75"
                  src={photo.image}
                  alt={photo.alt}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
