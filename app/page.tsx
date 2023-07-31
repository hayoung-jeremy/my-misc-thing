"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components";
import { AnimatedPlus, ArrowRight, ArrowRightUp, Plus } from "@/components/icons";
import { MainBanner, ScrollableMaskedContainer, TestSlider } from "@/components/main";

import { cls } from "@/utils";
import { FAQlist } from "@/constants";

export default function Home() {
  const [clickedFAQIndex, setClickedFAQIndex] = useState(0);

  const FAQAnswerAnim = {
    open: {
      height: "auto",
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        mass: 0.8,
        type: "tween",
      },
      display: "flex",
    },
    close: {
      height: "0",
      rotateX: -15,
      y: -12,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  useEffect(() => {
    console.log("clickedFAQIndex : ", clickedFAQIndex);
  }, [clickedFAQIndex]);

  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      className="flex min-h-screen flex-col items-center justify-center bg-black gap-[20px] md:gap-[40px] px-4 pt-[80px] md:pt-[140px] md:px-0"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="font-NouvelR-Semibold text-[40px]">{"Testing Renault's FONT"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <p className="font-NouvelR-Extrabold text-[24px]">NouvelR-Extrabold</p>
            <p className="font-NouvelR-Bold text-[24px]">NouvelR-Bold</p>
            <p className="font-NouvelR-Semibold text-[24px]">NouvelR-Semibold</p>
            <p className="font-NouvelR-Regular text-[24px]">NouvelR-Regular</p>
            <p className="font-NouvelR-Book text-[24px]">NouvelR-Book</p>
            <p className="font-NouvelR-Light text-[24px]">NouvelR-Light</p>
          </div>
          <div className="">
            <p className="font-NouvelR-KR-Extrabold text-[24px]">엑스트라볼드</p>
            <p className="font-NouvelR-KR-Bold text-[24px]">볼드</p>
            <p className="font-NouvelR-KR-Semibold text-[24px]">세미볼드</p>
            <p className="font-NouvelR-KR-Regular text-[24px]">레귤러</p>
            <p className="font-NouvelR-KR-Book text-[24px]">북</p>
            <p className="font-NouvelR-KR-Light text-[24px]">라이트</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <Button>
          <span className="ml-1 leading-4">COLLECTION</span> <ArrowRightUp />
        </Button>
        <Button>
          <span className="ml-4 leading-4">BEGIN</span> <ArrowRight />
        </Button>
      </div>

      <ul className={cls("flex flex-col gap-6 items-center justify-center", "md:w-[460px]", "font-NouvelR-Book")}>
        {FAQlist.map(({ question, answer }, index) => {
          return (
            <motion.li
              key={question}
              style={{ transition: "height 1s" }}
              className={cls(
                "flex flex-col gap-4",
                "relative",
                "w-full",
                "p-4",
                "border border-transparent",
                // "overflow-hidden",
                "bg-[#11111170]",
                "rounded-lg"
              )}
            >
              <span
                style={{ background: "linear-gradient(#ffffff95, #ffffff95, #ffffff95) border-box" }}
                className={cls("frame-border", "rounded-[8px]", "absolute z-[1] inset-[-1px]")}
              ></span>
              <span
                className={cls(
                  "btn-bg",
                  "bg-[#D9D9D630]",
                  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px]"
                )}
              />
              <p
                onClick={() => {
                  if (clickedFAQIndex === index) setClickedFAQIndex(-10);
                  else setClickedFAQIndex(index);
                }}
                className={cls(
                  "relative z-[1]",
                  "flex items-start justify-between gap-2",
                  "font-NouvelR-KR-Semibold leading-5",
                  "pl-4"
                )}
              >
                <span className="absolute top-0 left-[-6px]">Q.</span>
                <span className="cursor-pointer">{question}</span>
                <span className="cursor-pointer">
                  <AnimatedPlus isToggled={clickedFAQIndex === index} />
                </span>
              </p>
              <motion.div
                initial="close"
                animate={clickedFAQIndex === index ? "open" : "close"}
                variants={FAQAnswerAnim}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="bg-[#222222] w-[100px] h-[120px] rounded-xl"></div>
                <p>{answer}</p>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
      <MainBanner />
      <ScrollableMaskedContainer />
      <TestSlider />
    </motion.main>
  );
}
