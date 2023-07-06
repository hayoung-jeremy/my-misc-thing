import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cls } from "@/utils";
import { useDisplay, usePreventScrollHandler } from "@/hooks";

const navMenu = [
  { title: "CV", url: "/cv" },
  { title: "Project", url: "/project" },
];

interface Props {
  currentPageIdx: number;
  setCurrentPageIdx: Dispatch<SetStateAction<number>>;
}

const Navigation = ({ currentPageIdx, setCurrentPageIdx }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isMobile, isDesktop } = useDisplay();

  usePreventScrollHandler(isNavOpen);

  return (
    <nav className={cls("")}>
      <motion.ul
        className={cls(
          "fixed top-0 right-0 md:static",
          "w-full h-[100dvh] md:w-fit md:h-fit",
          "flex flex-col gap-2 items-center justify-center",
          "md:flex-row md:gap-0",
          "bg-slate-900 md:bg-transparent",
          "md:translate-x-0",
          "transition-all duration-200",
          isNavOpen ? "translate-x-0" : "translate-x-[100%]"
        )}
      >
        {isMobile ? (
          <motion.li whileTap={{ scale: 0.9 }} className="w-full select-none">
            <Link
              onClick={() => {
                setIsNavOpen(false);
                setCurrentPageIdx(-10);
                sessionStorage.setItem("currentPageIdx", (-10).toString());
              }}
              href="/"
              className={cls(
                "flex items-center justify-center",
                "w-full h-full",
                "px-4 py-2",
                "select-none",
                currentPageIdx === -10 ? "text-blue-300" : "text-slate-400"
              )}
            >
              Home
            </Link>
          </motion.li>
        ) : null}
        {navMenu.map((menu, index) => {
          return (
            <motion.li
              whileTap={{ scale: isDesktop ? 0.95 : 0.9 }}
              key={index}
              className="w-full select-none active:bg-transparent focus:outline-none relative"
            >
              <Link
                key={index}
                href={menu.url}
                onClick={() => {
                  setCurrentPageIdx(index);
                  sessionStorage.setItem("currentPageIdx", index.toString());
                  setIsNavOpen(false);
                }}
                className={cls(
                  "flex items-center justify-center",
                  "w-full h-full",
                  "px-4 py-2",
                  "select-none",
                  currentPageIdx === index
                    ? "text-blue-300"
                    : "text-slate-400 hover:text-slate-200 transition-all duration-200"
                )}
              >
                {menu.title}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
      {isMobile ? (
        <button onClick={() => setIsNavOpen(!isNavOpen)} className={cls("fixed top-1/2 right-4", "translate-y-[-50%]")}>
          click
        </button>
      ) : null}
    </nav>
  );
};

export default Navigation;
