import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Box, Text, useScroll } from "@react-three/drei";
import { Group, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils";
import { gsap } from "gsap";

const ScrollAnimationObjects = () => {
  const SceneRef = useRef<Group>(null);
  const page2 = useRef<Mesh>(null);
  const page3 = useRef<Mesh>(null);

  const timeline = useRef<gsap.core.Timeline>();

  const scroll = useScroll();

  useFrame(() => {
    if (!timeline.current || scroll === null) return;
    timeline.current.seek(scroll.offset * timeline.current.duration());

    if (!page2.current || !page3.current) return;
    timeline.current.from(
      page2.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );

    timeline.current.from(
      page3.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );
  });

  useEffect(() => {
    console.log("scroll : ", scroll);
  }, [scroll]);

  useLayoutEffect(() => {
    if (!SceneRef.current) return;

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

  return (
    <group ref={SceneRef} position={[0, -2, 0]}>
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial color={"#ff0000"} />
        <Text position={[0, 0, 0.51]} scale={0.5}>
          1
        </Text>
      </Box>

      <group position={[0, -1, -1]}>
        <Box ref={page2}>
          <meshStandardMaterial color={"#dbbc64"} metalness={0.78} roughness={0.2} envMapIntensity={0.8} />
          <Text position={[-0.51, 0, 0]} scale={0.5} rotation-y={-degToRad(90)}>
            2
          </Text>
        </Box>
      </group>

      <group position={[1, -2, -1]}>
        <Box ref={page3}>
          <meshStandardMaterial color={"#00ff00"} roughness={1} metalness={0} />
          <Text position={[0, 0, -0.51]} scale={0.5} rotation-y={degToRad(180)}>
            3
          </Text>
        </Box>
      </group>
    </group>
  );
};

export default ScrollAnimationObjects;
