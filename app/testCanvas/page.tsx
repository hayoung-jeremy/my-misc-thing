"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { TestScene } from "@/components/three";

const TestCanvas = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <TestScene />
      </Canvas>
    </div>
  );
};

export default TestCanvas;
