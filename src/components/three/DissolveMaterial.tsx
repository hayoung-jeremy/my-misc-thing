"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import CSM from "three-custom-shader-material";
import { patchShaders } from "gl-noise";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
  }`;

const fragmentShader = patchShaders(/* glsl */ `
  varying vec2 vUv;
  uniform float uThickness;
  uniform vec3 uColor;
  uniform float uProgress;

  // uniform float uOptFrequency;
  // uniform float uOptLacunarity;
  // uniform float uOptPersistence;
  // uniform float uOptOctaves;
  // uniform float uOptOffset;
  // uniform int uOptIterations;
  // uniform bool uOptRotate;
  // uniform bool uOptRandomize;
  
  void main() {
    // generate noise
    gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.01, 2.0, 1.0, 1.0, 5, false, false);
    // gln_tFBMOpts opts = gln_tFBMOpts(
    //   uOptFrequency,
    //   uOptLacunarity,
    //   uOptPersistence,
    //   uOptOctaves,
    //   uOptOffset,
    //   uOptIterations,
    //   uOptRotate,
    //   uOptRandomize
    // );
    float noise = gln_sfbm(vUv, opts);
    noise = gln_normalize(noise);

    float progress = uProgress;
    
    float alpha = step(1.0 - progress, noise);
    float border = step((1.0 - progress) - uThickness, noise) - alpha;
    
    // apply color
    // csm_DiffuseColor : original material color
    csm_DiffuseColor.a = alpha + border;
    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
  }`);

interface DissolveMaterialProps {
  baseMaterial: any;
  thickness?: number;
  dissolvingColor?: string;
  intensity?: number;
  duration?: number;
  visible?: boolean;
  onFadeOut?: () => void;
  // options?: {
  //   frequency: number;
  //   lacunarity: number;
  //   persistence: number;
  //   octaves: number;
  //   offset: number;
  //   iterations: number;
  //   rotate: boolean;
  //   randomize: boolean;
  // };
}

export function DissolveMaterial({
  baseMaterial,
  thickness = 0.1,
  dissolvingColor = "#eb5a13",
  intensity = 50,
  duration = 1.2,
  visible = true,
  onFadeOut,
}: // options = {
//   frequency: 1.0,
//   lacunarity: 0.3,
//   persistence: 2.0,
//   octaves: 5.0,
//   offset: 1.0,
//   iterations: 5,
//   rotate: false,
//   randomize: false,
// },
DissolveMaterialProps) {
  const uniforms = useRef<any>({
    uThickness: { value: 0.1 },
    uColor: { value: new THREE.Color("#eb5a13").multiplyScalar(20) },
    uProgress: { value: 0 },
    // uOptFrequency: { value: 1.0 },
    // uOptLacunarity: { value: 0.3 },
    // uOptPersistence: { value: 2.0 },
    // uOptOctaves: { value: 5.0 },
    // uOptOffset: { value: 1.0 },
    // uOptIterations: { value: 5 },
    // uOptRotate: { value: false },
    // uOptRandomize: { value: false },
  });

  useLayoutEffect(() => {
    uniforms.current.uThickness.value = thickness;
    uniforms.current.uColor.value.set(dissolvingColor).multiplyScalar(intensity);
    // if (options) {
    //   console.log("options 가 있다");
    //   uniforms.current.uOptFrequency.value = options.frequency;
    //   uniforms.current.uOptLacunarity.value = options.lacunarity;
    //   uniforms.current.uOptPersistence.value = options.persistence;
    //   uniforms.current.uOptOctaves.value = options.octaves;
    //   uniforms.current.uOptOffset.value = options.offset;
    //   uniforms.current.uOptIterations.value = options.iterations;
    //   uniforms.current.uOptRotate.value = options.rotate;
    //   uniforms.current.uOptRandomize.value = options.randomize;
    // }
  }, [
    thickness,
    dissolvingColor,
    intensity,
    // options
  ]);

  useFrame((_state, delta) => {
    easing.damp(uniforms.current.uProgress, "value", visible ? 1 : 0, duration, delta);
    if (uniforms.current.uProgress.value < 0.1 && onFadeOut) {
      onFadeOut();
    }
  });

  return (
    <>
      <CSM
        baseMaterial={baseMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader as string}
        uniforms={uniforms.current}
        // @ts-ignore
        toneMapped={false}
        transparent
      />
    </>
  );
}
