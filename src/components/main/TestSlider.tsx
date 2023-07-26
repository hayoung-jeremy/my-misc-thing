import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const TestSlider = () => {
  const testSwiperList = [
    {
      item: "nature-1",
      imgUrl: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      item: "nature-2",
      imgUrl: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      item: "nature-3",
      imgUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      item: "nature-4",
      imgUrl: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
    {
      item: "nature-5",
      imgUrl: "https://swiperjs.com/demos/images/nature-5.jpg",
    },
    {
      item: "nature-6",
      imgUrl: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
    {
      item: "nature-7",
      imgUrl: "https://swiperjs.com/demos/images/nature-7.jpg",
    },
    {
      item: "nature-8",
      imgUrl: "https://swiperjs.com/demos/images/nature-8.jpg",
    },
    {
      item: "nature-9",
      imgUrl: "https://swiperjs.com/demos/images/nature-9.jpg",
    },
  ];

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      slideToClickedSlide={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      className="main-swiper max-w-[1200px] w-full h-[400px]"
    >
      {testSwiperList.map((item, idx) => {
        return (
          <SwiperSlide key={idx} className="">
            <Image src={item.imgUrl} alt={item.item} fill className="select-none" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestSlider;
