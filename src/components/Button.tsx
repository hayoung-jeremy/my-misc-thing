import React, { useState } from "react";
import { motion } from "framer-motion";
import { cls } from "@/utils";

const Button = () => {
  const [touchStart, setTouchStart] = useState(false);

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
      backgroundColor: "#FFEE0020",
      transition: {
        duration: 0.16,
      },
    },
  };

  const btnBorderMotion = {
    rest: {
      borderColor: "#fff",
      borderRadius: "8px",
      transition: {
        duration: 0.24,
      },
    },
    hovered: {
      borderColor: "#ffee00",
      borderRadius: "12px",
      transition: {
        duration: 0.24,
      },
    },
    clicked: {
      borderColor: "#ffee00",
      borderRadius: "12px",
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
        className={cls("btn-border", "rounded-[8px]", "absolute z-[1] inset-[-2px] border-[2px]")}
      />
      <motion.span
        variants={btnBgMotion}
        className={cls(
          "btn-bg",
          "absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px]"
        )}
      />
      Button
    </motion.button>
  );
};

export default Button;
