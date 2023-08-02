import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import React from "react";

const DissolveEffect = () => {
  return (
    <>
      <color attach="background" args={["#ececec"]} />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} />
    </>
  );
};

export default DissolveEffect;
