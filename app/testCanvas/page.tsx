"use client";
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import {
  AnimatedShaderScene,
  CylinderScene,
  DissolveEffect,
  PortalScene,
  RapierTestScene,
  Scene,
  ScrollAnimationScene,
  ShaderTorusScene,
  TheatreScene,
} from "@/components/three";
import { Controls } from "@/constants";

const TestCanvas = () => {
  // const map = useMemo(
  //   () => [
  //     {
  //       name: Controls.forward,
  //       keys: ["ArrowUp", "KeyW"],
  //     },
  //     {
  //       name: Controls.back,
  //       keys: ["ArrowDown", "KeyS"],
  //     },
  //     {
  //       name: Controls.left,
  //       keys: ["ArrowLeft", "KeyA"],
  //     },
  //     {
  //       name: Controls.right,
  //       keys: ["ArrowRight", "KeyD"],
  //     },
  //     {
  //       name: Controls.jump,
  //       keys: ["Space"],
  //     },
  //   ],
  //   []
  // );

  return (
    <div className="w-screen h-screen">
      {/* <KeyboardControls map={map}> */}
      <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [0, 0, 5], fov: 40 }}>
        <ScrollAnimationScene />
        {/* <Physics
            debug
            // 중력 세기 조절
            // gravity={[0, -10, 0]}
          >
            <RapierTestScene />
          </Physics> */}
      </Canvas>
      {/* </KeyboardControls> */}
    </div>
  );
};

export default TestCanvas;
