import useMatchMedia from "@hooks/useMatchMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { sliderData as sliderImages } from "@helpers/data";
import Image from "next/legacy/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const { matches } = useMatchMedia("(max-width: 860px)");
  console.log(matches);

  return (
    <section className="relative">
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
              <h1 className="heading-styles z-10 mb-24 text-white lg:text-8xl">{photo.title}</h1>
              <p className="absolute top-[40%] z-50 mx-10 text-white lg:top-[55%] lg:mx-24 lg:text-xl xl:mx-40">
                {photo.description}
              </p>
              <Image
                className="w-full brightness-75"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={matches ? photo.tiny : photo.image}
                alt={photo.alt}
                placeholder="blur"
                blurDataURL={photo.tiny}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
