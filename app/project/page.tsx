"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { cls } from "@/utils";
import { Article } from "@/components/project";

const projectList = [
  {
    title: "Renault",
    desc: "Renault description",
    thumbnailImg: "",
  },
  {
    title: "Clarins",
    desc: "Clarins description",
    thumbnailImg: "",
  },
  {
    title: "AI research",
    desc: "AI research description",
    thumbnailImg: "",
  },
];

const Project = () => {
  const [currentOpenArticleIdx, setCurrentOpenArticleIdx] = useState(-1);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <div
      className={cls("w-full md:max-w-[90vw] xl:max-w-[1200px] min-h-screen", "px-4 pt-[80px] md:pt-[140px] md:px-0")}
    >
      <p className="font-AppleSDGothicNeoR text-[24px] mb-4">Project List</p>
      <motion.ul variants={variants} initial="hidden" animate="visible" className="flex flex-wrap content-start gap-5">
        {projectList.map((item: any, index: number) => {
          return (
            <Article
              key={index}
              listIdx={index}
              title={item.title}
              desc={item.desc}
              thumbnailImg={item.thumbnailImg}
              currentOpenArticleIdx={currentOpenArticleIdx}
              setCurrentOpenArticleIdx={setCurrentOpenArticleIdx}
            />
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Project;
