import React from "react";
import Image from "next/image";
import { cls } from "@/utils";

const projectList = [
  {
    title: "renault",
    desc: "renault description",
    thumbnailImg: "",
  },
];

const Project = () => {
  return (
    <div
      className={cls(
        "w-full md:max-w-[90vw] xl:max-w-[1200px] min-h-screen",
        "px-4 pt-[80px] md:pt-[140px] md:px-0",
        "bg-white/5"
      )}
    >
      <p className="">{"Hi, I'm Ha young"}</p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <article className={cls("border border-white/20", "flex flex-col items-center justify-center")}></article>
        <article>2</article>
        <article>3</article>
      </div>
    </div>
  );
};

export default Project;
