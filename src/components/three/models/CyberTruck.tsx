import { useEffect, useRef } from "react";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useGLTF } from "@react-three/drei";

import { GLTFResult } from "@/constants/3d-model";

import stripesVertex from "@/shaders/stripes.vertex.glsl";
import stripesFragment from "@/shaders/stripes.fragment.glsl";
import { useControls } from "leva";

const StripesShaderMaterial = shaderMaterial(
  {
    uAlpha: 0.5,
    uMultiplier: 40,
    uColorA: new THREE.Color("#0x000000"),
    uColorB: new THREE.Color("#0x000000"),
    uTime: 0,
  },
  stripesVertex,
  stripesFragment
);
extend({ StripesShaderMaterial });

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/cybertruck.gltf") as GLTFResult;
  const stripeMaterialRef = useRef<any>();

  const stripesControls = useControls("stripes", {
    alpha: {
      min: 0,
      max: 1,
      value: 0.5,
    },
    multiplier: {
      min: 1,
      max: 142,
      value: 42,
    },
    colorA: "#ff0000",
    colorB: "#00ff00",
  });

  useFrame(state => {
    if (!stripeMaterialRef.current) return;
    stripeMaterialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  useEffect(() => {
    materials.lights.toneMapped = false;
    materials.warninglights.toneMapped = false;
    materials.warninglights.color = new THREE.Color(82, 0, 0);
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.steer.geometry} material={materials.gray} />
      <mesh geometry={nodes.interior001.geometry} material={materials.lights} />
      <mesh geometry={nodes.interior001_1.geometry} material={materials.body} />
      <mesh geometry={nodes.interior001_2.geometry} material={materials.glass}>
        <meshStandardMaterial opacity={0.72} envMapIntensity={1} transparent roughness={0.2} color={"black"} />
      </mesh>
      <mesh geometry={nodes.interior001_3.geometry} material={materials.glassframes} />
      <mesh geometry={nodes.interior001_4.geometry} material={materials.warninglights} />
      <mesh geometry={nodes.interior001_5.geometry} material={materials.black} />
      {/* <mesh geometry={nodes.interior001_6.geometry} material={materials.shader} /> */}
      {/* BODY MESH -> SHADER */}
      <mesh geometry={nodes.interior001_6.geometry} scale={1.00006}>
        {/* @ts-ignore */}
        <stripesShaderMaterial
          ref={stripeMaterialRef}
          transparent
          uAlpha={stripesControls.alpha}
          uMultiplier={stripesControls.multiplier}
          uColorA={stripesControls.colorA}
          uColorB={stripesControls.colorB}
        />
      </mesh>
      <mesh geometry={nodes.tires001.geometry} material={materials.tires} />
      <mesh geometry={nodes.tires001_1.geometry} material={materials.rims} />
    </group>
  );
}

useGLTF.preload("/models/cybertruck.gltf");
