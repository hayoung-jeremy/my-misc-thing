/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/models/Husky.gltf -t -o src/components/three/models/Husky.tsx -r public 
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Husky(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/Husky.gltf") as any;
  const { actions } = useAnimations<any>(animations, group);
  console.log(actions);

  useEffect(() => {
    actions["Idle"]?.reset().fadeIn(0.5).play();

    return () => {
      actions["Idle"]?.fadeOut(0.5);
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="AnimalArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.IKBackLegL} />
          <primitive object={nodes.IKFrontLegL} />
          <primitive object={nodes.IKBackLegR} />
          <primitive object={nodes.IKFrontLegR} />
          <group name="Cube">
            <skinnedMesh
              name="Cube_1"
              geometry={nodes.Cube_1.geometry}
              material={materials.Material}
              skeleton={nodes.Cube_1.skeleton}
            />
            <skinnedMesh
              name="Cube_2"
              geometry={nodes.Cube_2.geometry}
              material={materials["Material.006"]}
              skeleton={nodes.Cube_2.skeleton}
            />
            <skinnedMesh
              name="Cube_3"
              geometry={nodes.Cube_3.geometry}
              material={materials["Material.001"]}
              skeleton={nodes.Cube_3.skeleton}
            />
            <skinnedMesh
              name="Cube_4"
              geometry={nodes.Cube_4.geometry}
              material={materials["Material.002"]}
              skeleton={nodes.Cube_4.skeleton}
            />
            <skinnedMesh
              name="Cube_5"
              geometry={nodes.Cube_5.geometry}
              material={materials["Material.003"]}
              skeleton={nodes.Cube_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Husky.gltf");
