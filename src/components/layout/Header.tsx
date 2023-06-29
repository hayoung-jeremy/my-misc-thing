import React, { useEffect } from "react";
import { cls } from "@/utils";
import Navigation from "./Navigation";
import { useScrollHeader } from "@/hooks";

const Header = () => {
  const showHeader = useScrollHeader();

  useEffect(() => {
    console.log("🚀 ~ file: Header.tsx:8 ~ Header ~ showHeader:", showHeader);
  }, [showHeader]);

  return (
    <header
      className={cls(
        "fixed top-0 left-1/2 z-20",
        "md:top-[40px]",
        "w-full h-[60px]",
        "md:max-w-[90vw] xl:max-w-[1200px]",
        "md:rounded-[20px]",
        "translate-x-[-50%]",
        "flex items-center justify-between",
        "px-4 md:px-8",
        "bg-white/5",
        "transition-all duration-300",
        showHeader ? "" : "translate-y-[calc(-100%-28px)]"
      )}
    >
      Header
      <Navigation />
    </header>
  );
};

export default Header;
