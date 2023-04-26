import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { sliderData as sliderImages } from "@helpers/data";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

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
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={photo.image.src}
                width={photo.image.width}
                height={photo.image.height}
                placeholder="blur"
                blurDataURL={photo.image.blurDataURL}
                alt={photo.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
