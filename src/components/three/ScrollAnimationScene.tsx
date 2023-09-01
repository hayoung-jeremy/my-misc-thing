import { Box, Environment, OrbitControls, ScrollControls, Text } from "@react-three/drei";
import React from "react";
import { degToRad } from "three/src/math/MathUtils";

const ScrollAnimationScene = () => {
  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
        <Box position={[0, 0, 0]}>
          <meshStandardMaterial color={"#ff0000"} />
          <Text position={[0, 0, 0.51]} scale={0.5}>
            1
          </Text>
        </Box>
        <Box position={[0, -1, -1]}>
          <meshStandardMaterial color={"#dbbc64"} metalness={0.78} roughness={0.2} envMapIntensity={0.8} />
          <Text position={[-0.51, 0, 0]} scale={0.5} rotation-y={-degToRad(90)}>
            2
          </Text>
        </Box>
        <Box position={[1, -2, -1]}>
          <meshStandardMaterial color={"#00ff00"} roughness={1} metalness={0} />
          <Text position={[0, 0, -0.51]} scale={0.5} rotation-y={degToRad(180)}>
            3
          </Text>
        </Box>
      </ScrollControls>

      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default ScrollAnimationScene;
