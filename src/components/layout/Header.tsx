import { useEffect, useState } from "react";
import Link from "next/link";

import { cls } from "@/utils";
import Navigation from "./Navigation";
import { useScrollHeader } from "@/hooks";

const Header = () => {
  const showHeader = useScrollHeader();

  const [currentPageIdx, setCurrentPageIdx] = useState(-10);

  useEffect(() => {
    // Read currentPageIdx from sessionStorage and set setCurrentPageIdx
    const currentPageIdxFromStorage = sessionStorage.getItem("currentPageIdx");

    if (currentPageIdxFromStorage !== null) {
      setCurrentPageIdx(parseInt(currentPageIdxFromStorage));
    }
  }, [currentPageIdx]);

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
        "bg-gradient-to-r from-white/5 to-white/10",
        "backdrop-blur",
        "transition-all duration-300",
        showHeader ? "" : "translate-y-[calc(-100%-28px)]"
      )}
    >
      <h1>
        <Link
          href="/"
          onClick={() => {
            setCurrentPageIdx(-10);
            sessionStorage.setItem("currentPageIdx", "-10");
          }}
        >
          Ha young
        </Link>
      </h1>
      <Navigation currentPageIdx={currentPageIdx} setCurrentPageIdx={setCurrentPageIdx} />
    </header>
  );
};

export default Header;
