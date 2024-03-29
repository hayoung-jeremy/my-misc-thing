import React from "react";
import { ContactShadows, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { CyberTruck } from "./models";

const AnimatedShaderScene = () => {
  return (
    <>
      <color attach="background" args={["#15151a"]} />
      <CyberTruck scale={0.5} position-y={-1.2} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <ContactShadows
        resolution={1024}
        frames={300}
        position={[0, -1.16, 0]}
        scale={15}
        blur={0.5}
        opacity={1}
        far={20}
      />
      <Environment resolution={512}>
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
          intensity={0.8}
          // @ts-ignore
          radius={0.21}
        />
      </EffectComposer>
    </>
  );
};

export default AnimatedShaderScene;
