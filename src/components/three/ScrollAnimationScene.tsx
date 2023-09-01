import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Environment, OrbitControls, ScrollControls, Text, useScroll } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { gsap } from "gsap";

const ScrollAnimationScene = () => {
  const SceneRef = useRef<any>(null);
  const timeline = useRef<gsap.core.Timeline>();

  const scroll = useScroll();

  useFrame(() => {
    if (!timeline.current || scroll === null) return;

    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    timeline.current.to(
      SceneRef.current.position,
      {
        duration: 2,
        y: 0,
      },
      0
    );
  }, []);

  useEffect(() => {
    console.log("timeline : ", timeline.current);
    console.log("scroll : ", scroll);
  }, [scroll]);

  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
        <group ref={SceneRef} position={[0, -2, 0]}>
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
        </group>
      </ScrollControls>

      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default ScrollAnimationScene;
