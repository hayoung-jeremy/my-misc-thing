import React, { useState } from "react";
import { motion } from "framer-motion";

import { cls } from "@/utils";
import { btnBgMotion, btnBorderMotion, btnMotion } from "@/motions/button";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <motion.button
      initial="rest"
      whileTap="clicked"
      whileHover="hovered"
      variants={btnMotion}
      className={cls(
        "btn noSelect",
        "relative",
        "w-[160px] h-[60px] border-2 border-transparent",
        "select-none",
        "rounded-[8px]",
        "flex items-center justify-center gap-1",
        "font-NouvelR-Regular"
      )}
    >
      <motion.span
        variants={btnBorderMotion}
        className={cls("btn-border", "rounded-[8px]", "absolute z-[1] inset-[-1px] ")}
      />
      <motion.span
        variants={btnBgMotion}
        className={cls("btn-bg", "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px]")}
      />
      {children}
    </motion.button>
  );
};

export default Button;
