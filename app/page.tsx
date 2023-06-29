"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Header } from "@/components/layout";

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
      <div className="fixed top-[80px] right-5">{scrollYValue}</div>
      <Header />
      <div className="w-full max-w-[400px]">
        <ul className="h-[400px] mask-container overflow-x-hidden overflow-y-auto py-[40px] flex flex-col">
          {Array.from({ length: 40 }, (_, index) => (
            <li
              onMouseOver={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(-1)}
              key={index}
              className="py-3 px-4 relative"
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
      {Array.from({ length: 400 }, (_, index) => (
        <div key={index} className="py-3 px-4 relative">
          <p>test item {index + 1}</p>
        </div>
      ))}
    </main>
  );
}
