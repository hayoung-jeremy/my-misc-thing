import { shaderMaterial, useGLTF } from "@react-three/drei";
import { GLTFResult } from "@/constants/3d-model";
import { extend } from "@react-three/fiber";

const TestShaderMaterial = shaderMaterial(
  {},
  // vertex shader
  /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /* glsl */ `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor.rgba = vec4(vUv, 1.0, 1.0);
    }
  `
);
extend({ TestShaderMaterial });

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/cybertruck.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.steer.geometry} material={materials.gray} />
      <mesh geometry={nodes.interior001.geometry} material={materials.lights} />
      <mesh geometry={nodes.interior001_1.geometry} material={materials.body} />
      <mesh geometry={nodes.interior001_2.geometry} material={materials.glass} />
      <mesh geometry={nodes.interior001_3.geometry} material={materials.glassframes} />
      <mesh geometry={nodes.interior001_4.geometry} material={materials.warninglights} />
      <mesh geometry={nodes.interior001_5.geometry} material={materials.black} />
      <mesh geometry={nodes.interior001_6.geometry} material={materials.shader} />
      {/* BODY MESH -> SHADER */}
      <mesh geometry={nodes.interior001_6.geometry} scale={1.0001}>
        {/* @ts-ignore */}
        <testShaderMaterial metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.tires001.geometry} material={materials.tires} />
      <mesh geometry={nodes.tires001_1.geometry} material={materials.rims} />
    </group>
  );
}

useGLTF.preload("/models/cybertruck.gltf");
