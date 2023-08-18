"use client";
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { CylinderScene, DissolveEffect, PortalScene, RapierTestScene, Scene, TheatreScene } from "@/components/three";
import { KeyboardControls } from "@react-three/drei";
import { Controls } from "@/constants";
import { Physics } from "@react-three/rapier";

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
      <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ position: [0, 0, 10], fov: 30 }}>
        <PortalScene />
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
