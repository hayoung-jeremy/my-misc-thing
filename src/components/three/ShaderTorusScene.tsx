import React, { Suspense } from "react";
import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";
import { extend } from "@react-three/fiber";
import { Effects, OrbitControls } from "@react-three/drei";

import { torusVertexShader, torusFragmentShader } from "@/shaders";

extend({ UnrealBloomPass });

const ShaderTorusScene = () => {
  const uniforms = {
    uTime: { value: 0 },
  };

  return (
    <Suspense fallback={null}>
      <Effects disableGamma>
        {/* @ts-ignore */}
        <unrealBloomPass threshold={0.01} strength={1.4} radius={0.001} />
      </Effects>
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
