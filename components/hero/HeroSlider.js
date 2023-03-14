import useMatchMedia from "@hooks/useMatchMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { sliderData as sliderImages } from "@helpers/data";
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
              <h1 className="heading-styles absolute left-0 right-0 top-[25%] z-50 text-white lg:top-[35%] xl:top-[42%]">
                {item.title}
              </h1>
              <p className="absolute top-[40%] z-50 mx-10 text-white lg:top-[55%] lg:mx-24 lg:text-xl xl:mx-40">
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
