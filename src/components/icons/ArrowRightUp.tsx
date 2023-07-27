import React from "react";
import { IconProps } from "@/constants";

const ArrowRightUp = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg height={height} width={width} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17.5L17 7.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M9 7H17.5V15.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};

export default ArrowRightUp;
