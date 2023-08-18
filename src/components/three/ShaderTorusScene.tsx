import React, { Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import { torusVertexShader, torusFragmentShader } from "@/shaders";

const ShaderTorusScene = () => {
  const uniforms = {
    uTime: { value: 0 },
  };

  return (
    <Suspense fallback={null}>
      <OrbitControls />
      <mesh>
        <torusGeometry args={[1, 0.3, 1000, 1000]} />
        <shaderMaterial
          vertexShader={torusVertexShader}
          fragmentShader={torusFragmentShader}
          side={THREE.DoubleSide}
          //   wireframe
          uniforms={uniforms}
        />
      </mesh>
    </Suspense>
  );
};

export default ShaderTorusScene;
