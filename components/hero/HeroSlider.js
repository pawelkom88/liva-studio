import useMatchMedia from "../../hooks/useMatchMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { projectList } from "../../helpers/data";
import Image from "next/legacy/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const { matches } = useMatchMedia("(max-width: 860px)");
  return (
    <section className="relative">
      <Swiper
        slidesPerView={matches ? "1" : "auto"}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {projectList.map(item => {
          return (
            <SwiperSlide key={item.title}>
              <h1 className="absolute m-auto left-0 right-0 top-[50%] z-50 font-steelfish text-white text-5xl">
                {item.title}
              </h1>

              <Image
                className="brightness-75"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={item.image}
                alt={item.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
