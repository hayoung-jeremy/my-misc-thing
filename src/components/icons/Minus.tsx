import { IconProps } from "@/constants";

const Minus = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg height={height} width={width} fill="currentColor" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M230-450q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h500q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H230Z" />
    </svg>
  );
};

export default Minus;
