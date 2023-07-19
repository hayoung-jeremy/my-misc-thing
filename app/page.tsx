"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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

const mainBannerVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [startMainBannerAnim, setStartMainBannerAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartMainBannerAnim(true);
    }, 1500);
  }, []);

  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-900 gap-[20px] md:gap-[40px] px-4 pt-[80px] md:pt-[140px] md:px-0"
    >
      <motion.div
        initial={false}
        animate={startMainBannerAnim ? { width: 1200 } : { width: 800 }}
        transition={{ duration: 1 }}
        className="h-[720px] bg-black overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image src="/images/whole_car.png" alt="whole_car.png" className="object-contain" fill />
          <motion.div
            animate={startMainBannerAnim ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 4.8, delay: 0.35 }}
            className="relative w-full h-full"
          >
            <Image src="/images/headlight_only.png" alt="headlight_only.png" className="object-contain" fill />
          </motion.div>
        </div>
      </motion.div>
      <div className="w-full max-w-[400px]">
        <ul className="h-[400px] mask-container overflow-x-hidden overflow-y-auto py-[40px] flex flex-col">
          {Array.from({ length: 40 }, (_, index) => (
            <li
              onMouseOver={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(-1)}
              key={index}
              className="py-2.5 px-4 relative"
            >
              <p>test item {index + 1}</p>
              {hoveredIdx === index ? (
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-white/10 rounded"
                  layoutId="hoverBG"
                  transition={{ duration: 0.1 }}
                ></motion.div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
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
    </motion.main>
  );
}
