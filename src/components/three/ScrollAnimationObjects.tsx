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

  useEffect(() => {
    console.log("scroll : ", scroll);
  }, [scroll]);

  useLayoutEffect(() => {
    if (!SceneRef.current || !page2.current || !page3.current) return;

    timeline.current = gsap.timeline();

    // Scene movement
    timeline.current.to(SceneRef.current.position, { duration: 1, x: -1, y: 0, z: 0 }, 0);
    timeline.current.to(SceneRef.current.position, { duration: 1, x: 1, y: 2, z: 1 }, 1);
    timeline.current.to(SceneRef.current.position, { duration: 1, x: 0, y: 4, z: 1.5 }, 2);

    // Scene Rotation
    timeline.current.to(SceneRef.current.rotation, { duration: 1, x: 0, y: degToRad(30), z: 0 }, 0);
    timeline.current.to(SceneRef.current.rotation, { duration: 1, x: 0, y: -degToRad(40), z: 0 }, 1);
    timeline.current.to(SceneRef.current.rotation, { duration: 1, x: 0, y: degToRad(0), z: 0 }, 2);

    // page2
    timeline.current.from(page2.current.position, { duration: 4, x: -2, y: -2 }, 0);
    timeline.current.from(page2.current.rotation, { duration: 0.5, y: degToRad(0) }, 2);

    // page3
    timeline.current.from(page3.current.position, { duration: 1.5, y: -4 }, 2);
    timeline.current.from(page3.current.position, { duration: 0.5, z: -2 }, 2.5);
    timeline.current.from(page3.current.rotation, { duration: 0.5, y: degToRad(0) }, 2);
  }, []);

  useFrame(() => {
    if (!timeline.current || scroll === null) return;
    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  return (
    <group ref={SceneRef} position={[-2, 0, -3]}>
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial color={"#8ec6e6"} />
        <Text position={[0, 0, 0.51]} scale={0.5}>
          1
        </Text>
      </Box>

      <group position={[0, -1.5, 0]}>
        <Box ref={page2}>
          <meshStandardMaterial color={"#86b6d1"} metalness={0.78} roughness={0.2} envMapIntensity={0.8} />
          <Text position={[0, 0, 0.51]} scale={0.5}>
            2
          </Text>
        </Box>
      </group>

      <group position={[0, -3, 0]}>
        <Box ref={page3}>
          <meshStandardMaterial color={"#4898c7"} roughness={1} metalness={0} />
          <Text position={[0, 0, 0.51]} scale={0.5}>
            3
          </Text>
        </Box>
      </group>
    </group>
  );
};

export default ScrollAnimationObjects;
