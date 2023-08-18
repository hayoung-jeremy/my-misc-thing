import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Deer(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/Deer.gltf") as any;
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
          <group name="Deer">
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Main}
              skeleton={nodes.Cube.skeleton}
            />
            <skinnedMesh
              name="Cube_1"
              geometry={nodes.Cube_1.geometry}
              material={materials.Hooves}
              skeleton={nodes.Cube_1.skeleton}
            />
            <skinnedMesh
              name="Cube_2"
              geometry={nodes.Cube_2.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Cube_2.skeleton}
            />
            <skinnedMesh
              name="Cube_3"
              geometry={nodes.Cube_3.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Cube_3.skeleton}
            />
            <skinnedMesh
              name="Cube_4"
              geometry={nodes.Cube_4.geometry}
              material={materials.Eye_Lighter}
              skeleton={nodes.Cube_4.skeleton}
            />
            <skinnedMesh
              name="Cube_5"
              geometry={nodes.Cube_5.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube_5.skeleton}
            />
            <skinnedMesh
              name="Cube_6"
              geometry={nodes.Cube_6.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube_6.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Deer.gltf");
