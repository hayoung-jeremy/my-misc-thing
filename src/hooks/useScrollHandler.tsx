import { useEffect } from "react";

const useScrollHandler = (outerState: boolean) => {
  useEffect(() => {
    const handleScroll = (event: any) => {
      if (outerState) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScroll, { passive: false });

    // Disable scroll on mobile devices (iOS Safari)
    if (outerState) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    // Clean up the event listener and reset scroll behavior on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [outerState]);
};

export default useScrollHandler;
