import { IconProps } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

interface Props extends IconProps {
  isToggled?: boolean;
}

const AnimatedPlus = ({ width = 24, height = 24, isToggled }: Props) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <svg
          // minus icon
          height={height}
          width={width}
          fill="currentColor"
          viewBox="0 -960 960 960"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
            d="M230-450q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h500q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H230Z"
          />
        </svg>
      )}
      {!isToggled && (
        <svg
          // plus icon
          height={height}
          width={width}
          fill="currentColor"
          viewBox="0 -960 960 960"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
            d="M450-450H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T450-230v-220Z"
          />
        </svg>
      )}
    </AnimatePresence>
  );
};

export default AnimatedPlus;
