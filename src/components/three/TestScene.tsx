"use-client";
/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { Reflector } from "three/examples/jsm/objects/Reflector";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function TestScene({ ...props }) {
  const { nodes, materials } = useSpline("https://prod.spline.design/JIhVySyKhvZzzzn7/scene.splinecode");
  const torusKnotRef = useRef<any>(null);

  const { scene } = useThree();

  const loader = new THREE.TextureLoader();
  const texture0 = loader.load("/textures/lensflare0.png");
  const texture3 = loader.load("/textures/lensflare3.png");

  const lensflare = new Lensflare();
  lensflare.position.set(0, 5, -5);
  lensflare.addElement(new LensflareElement(texture0, 700, 0));
  lensflare.addElement(new LensflareElement(texture3, 60, 0.6));
  lensflare.addElement(new LensflareElement(texture3, 70, 0.7));
  lensflare.addElement(new LensflareElement(texture3, 120, 0.9));
  lensflare.addElement(new LensflareElement(texture3, 70, 1));
  scene.add(lensflare);

  useFrame(({ clock }) => {
    if (torusKnotRef.current) torusKnotRef.current.rotation.x = clock.elapsedTime * 0.4;
  });

  return (
    <>
      {/* <color attach="background" args={["#74757a"]} /> */}
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
        {/* <group name="Group">
          <group name="Rectangle">
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials[""]}
              position={[0, 0, 15]}
            />
            <mesh
              name="Rectangle2"
              geometry={nodes.Rectangle2.geometry}
              material={materials[""]}
              position={[0, 0, -5]}
              scale={0.8}
            />
            <mesh
              name="Rectangle3"
              geometry={nodes.Rectangle3.geometry}
              material={materials[""]}
              position={[0, 0, -10]}
              scale={0.6}
            />
            <mesh
              name="Rectangle4"
              geometry={nodes.Rectangle4.geometry}
              material={materials[""]}
              position={[0, 0, -15]}
              scale={0.9}
            />
            <mesh
              name="Rectangle5"
              geometry={nodes.Rectangle5.geometry}
              material={materials[""]}
              position={[0, 0, 5]}
              scale={0.8}
            />
            <mesh
              name="Rectangle6"
              geometry={nodes.Rectangle6.geometry}
              material={materials[""]}
              position={[0, 0, 10]}
            />
          </group>
        </group> */}
        {/* <OrthographicCamera
          name="1"
          // makeDefault={true}
          // zoom={0.49}
          far={100000}
          near={-100000}
          position={[99.62, 84.38, 1000]}
        /> */}
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        <gridHelper />
        <axesHelper />
        <PerspectiveCamera />
        <OrbitControls />
      </group>
    </>
  );
}
