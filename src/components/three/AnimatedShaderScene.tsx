import React from "react";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { CyberTruck } from "./models";

const AnimatedShaderScene = () => {
  return (
    <>
      <CyberTruck scale={0.5} />
      <OrbitControls />
      <Environment preset="warehouse" resolution={512}>
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />

        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
      </Environment>
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          // luminanceSmoothing={0.55}
          intensity={1.4}
          // @ts-ignore
          radius={0.4}
        />
      </EffectComposer>
    </>
  );
};

export default AnimatedShaderScene;
