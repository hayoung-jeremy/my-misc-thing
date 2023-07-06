"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  return (
    <motion.main
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.3 },
      }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-900"
    >
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
    </motion.main>
  );
}
