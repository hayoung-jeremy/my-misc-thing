"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { CylinderScene, Scene, TheatreScene } from "@/components/three";

const TestCanvas = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <CylinderScene />
        <ambientLight />
      </Canvas>
    </div>
  );
};

export default TestCanvas;
