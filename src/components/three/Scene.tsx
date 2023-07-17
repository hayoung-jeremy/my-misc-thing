"use-client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function TestScene({ ...props }) {
  const torusKnotRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = clock.elapsedTime * 0.4;
    }
  });

  return (
    <>
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[200, 300, 300]}
        />
        <mesh ref={torusKnotRef}>
          <torusKnotGeometry args={[1.6, 0.5, 200, 20]} />
          <meshPhysicalMaterial
            transmission={1.0}
            roughness={0}
            metalness={0.25}
            thickness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        <gridHelper />
        <axesHelper />
        <PerspectiveCamera />
        <OrbitControls />
      </group>
    </>
  );
}
