"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState(-1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff6f] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <ul className="w-[400px] h-[400px] mask-container overflow-x-hidden overflow-y-auto py-[40px] flex flex-col">
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
                className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-white/10 rounded"
                layoutId="hoverBG"
                transition={{ duration: 0.2 }}
              ></motion.div>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
