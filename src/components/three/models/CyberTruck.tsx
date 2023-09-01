import { useEffect } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial, useGLTF } from "@react-three/drei";

import { GLTFResult } from "@/constants/3d-model";

import stripesVertex from "@/shaders/stripes.vertex.glsl";
import stripesFragment from "@/shaders/stripes.fragment.glsl";

const TestShaderMaterial = shaderMaterial({}, stripesVertex, stripesFragment);
extend({ TestShaderMaterial });

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/cybertruck.gltf") as GLTFResult;
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
      <mesh
        geometry={nodes.interior001_2.geometry}
        material={materials.glass}
        material-roughness={0}
        material-transparent
        material-opacity={0.5}
      />
      <mesh geometry={nodes.interior001_3.geometry} material={materials.glassframes} />
      <mesh geometry={nodes.interior001_4.geometry} material={materials.warninglights} />
      <mesh geometry={nodes.interior001_5.geometry} material={materials.black} />
      <mesh geometry={nodes.interior001_6.geometry} material={materials.shader} />
      {/* BODY MESH -> SHADER */}
      <mesh geometry={nodes.interior001_6.geometry} scale={1.0002}>
        {/* @ts-ignore */}
        <testShaderMaterial />
      </mesh>
      <mesh geometry={nodes.tires001.geometry} material={materials.tires} />
      <mesh geometry={nodes.tires001_1.geometry} material={materials.rims} />
    </group>
  );
}

useGLTF.preload("/models/cybertruck.gltf");
