import React, { useState } from "react";
import { cls } from "@/utils";
import { useDisplay, useScrollHandler } from "@/hooks";
import Link from "next/link";

const navMenu = [
  { title: "CV", url: "" },
  { title: "Project", url: "" },
];

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isMobile } = useDisplay();
  useScrollHandler(isNavOpen);

  return (
    <nav className={cls("")}>
      <ul
        className={cls(
          "fixed top-0 right-0 xl:static",
          "w-full h-[100dvh] xl:w-fit xl:h-fit",
          "flex flex-col gap-2 items-center justify-center",
          "xl:flex-row xl:gap-4",
          "bg-slate-900 xl:bg-transparent",
          "xl:translate-x-0",
          "transition-all duration-200",
          isNavOpen ? "translate-x-0" : "translate-x-[100%]"
        )}
      >
        {navMenu.map((menu, index) => {
          return (
            <Link
              key={index}
              href={menu.url}
              onClick={() => {
                setIsNavOpen(false);
              }}
              className={cls("w-full", "px-4 py-2", "bg-white/5", "text-center")}
            >
              {menu.title}
            </Link>
          );
        })}
      </ul>
      {isMobile ? (
        <button onClick={() => setIsNavOpen(!isNavOpen)} className={cls("fixed top-1/2 right-4", "translate-y-[-50%]")}>
          click
        </button>
      ) : null}
    </nav>
  );
};

export default Navigation;
