import useMatchMedia from "@hooks/useMatchMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { projectList as sliderImages } from "@helpers/data";
import Image from "next/legacy/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const { matches } = useMatchMedia("(max-width: 860px)");
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
        {sliderImages.map(item => {
          return (
            <SwiperSlide key={item.title}>
              <h1 className="absolute left-0 right-0 top-[40%] z-50 text-white heading-styles">
                {item.title}
              </h1>
              <p className="lg:text-xl mx-10 lg:mx-40 absolute top-[50%]  z-50 text-white">
                {item.description}
              </p>
              <Image
                className="w-full brightness-75"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={item.image}
                alt={item.alt}
                placeholder="blur"
                blurDataURL={item.tiny}
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
