import { useState, useEffect } from "react";

const useScrollHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollingTimeout, setScrollingTimeout] = useState<any>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    let isScrolling = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < prevScrollPos && !isScrolling) {
        // Scrolling up, show the header
        setShowHeader(true);
        clearTimeout(scrollingTimeout);
      } else if (isScrolling && currentScrollPos > prevScrollPos) {
        // Still scrolling down, do nothing
        isScrolling = false;
      } else if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the header
        setShowHeader(false);
        isScrolling = true;
        clearTimeout(scrollingTimeout);
      }

      prevScrollPos = currentScrollPos;

      if (prevScrollPos <= 0) setShowHeader(true);

      clearTimeout(scrollingTimeout);
      setScrollingTimeout(
        setTimeout(() => {
          // Scroll event stopped, show the header
          setShowHeader(true);
        }, 1000)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollingTimeout);
    };
  }, [scrollingTimeout]);

  return showHeader;
};

export default useScrollHeader;
