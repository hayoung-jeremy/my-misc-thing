import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import ScrollAnimationObjects from "./ScrollAnimationObjects";
import ScrollAnimationTextArticle from "./ScrollAnimationTextArticle";

const ScrollAnimationScene = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
        <ScrollAnimationObjects />
        <ScrollAnimationTextArticle />
      </ScrollControls>

      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
      <fog attach="fog" args={["#000", 4, 7]} />
    </>
  );
};

export default ScrollAnimationScene;
