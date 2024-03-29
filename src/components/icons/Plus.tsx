import { IconProps } from "@/constants";

const Plus = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg height={height} width={width} fill="currentColor" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M450-450H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T450-230v-220Z" />
    </svg>
  );
};

export default Plus;
