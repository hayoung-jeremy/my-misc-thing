import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import ScrollAnimationObjects from "./ScrollAnimationObjects";

const ScrollAnimationScene = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
        <ScrollAnimationObjects />
      </ScrollControls>

      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default ScrollAnimationScene;
