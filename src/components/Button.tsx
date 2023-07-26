import React, { useState } from "react";
import { motion } from "framer-motion";
import { cls } from "@/utils";

const Button = () => {
  const btnMotion = {
    rest: {
      color: "#fff",
      transition: {
        duration: 0.24,
      },
    },
    hovered: {
      color: "yellow",
      transition: {
        duration: 0.24,
      },
    },
    clicked: {
      color: "yellow",
      transition: {
        duration: 0.16,
      },
    },
  };

  const btnBorderMotion = {
    rest: {
      background: "linear-gradient(#ffffff90, #ffffff90, #ffffff90) border-box",
      borderRadius: "8px",
      transition: {
        duration: 0.24,
      },
    },
    hovered: {
      background: "linear-gradient(#ffff00, #ffff00, #ffff00) border-box",
      borderRadius: "12px",
      transition: {
        duration: 0.24,
      },
    },
    clicked: {
      background: "linear-gradient(#ffff0080, #ffff00, #ffff0080) border-box",
      borderRadius: "12px",
      transition: {
        duration: 0.16,
      },
    },
  };

  const btnBgMotion = {
    rest: {
      width: "calc(100% - 0px)",
      height: "calc(100% - 0px)",
      color: "",
      backgroundColor: "#D9D9D630",
      transition: {
        duration: 0.24,
      },
    },
    hovered: {
      width: "calc(100% - 8px)",
      height: "calc(100% - 8px)",
      backgroundColor: "#FFEE0020",
      transition: {
        duration: 0.24,
      },
    },
    clicked: {
      width: "calc(100% - 12px)",
      height: "calc(100% - 12px)",
      backgroundColor: "#FFEE0016",
      transition: {
        duration: 0.16,
      },
    },
  };

  return (
    <motion.button
      initial="rest"
      whileTap="clicked"
      whileHover="hovered"
      variants={btnMotion}
      className={cls(
        "btn",
        "relative",
        "w-[160px] h-[60px] border-2 border-transparent",
        "select-none",
        "rounded-[8px]",
        "flex items-center justify-center"
      )}
    >
      <motion.span
        variants={btnBorderMotion}
        // initial="rest"
        // animate="clicked"
        className={cls("btn-border", "rounded-[8px]", "absolute z-[1] inset-[-2px] ")}
      />
      <motion.span
        variants={btnBgMotion}
        className={cls("btn-bg", "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px]")}
      />
      Button
    </motion.button>
  );
};

export default Button;
