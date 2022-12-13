import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, A11y, EffectFade} from "swiper";
import Image from "next/legacy/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {projectList} from "../../data";

export default function HeroSlider() {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        effect="fade"
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, EffectFade, Navigation, A11y]}
        className="mySwiper">
        {projectList.map(item => {
          return (
            <SwiperSlide key={item.title}>
              <Image
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
      <div className="prev absolute bottom-2 left-[40%] z-50 w-10 h-10 bg-red-200">1</div>
      <div className="next absolute bottom-2 right-[40%] z-50 w-10 h-10 bg-red-200">2</div>
    </div>
  );
}
