import React, { Suspense } from "react";
import * as THREE from "three";
import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  PerspectiveCamera,
  RoundedBox,
  useTexture,
} from "@react-three/drei";
import { Alpaca, Deer, Husky } from "./models";
import { GroupProps } from "@react-three/fiber";

const PortalScene = () => {
  const map = useTexture("textures/digital_painting_dark_city_with_many_stars_and_lig.jpg");

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <PortalCard
        texture="textures/digital_painting_dark_city_with_many_stars_and_lig.jpg"
        position-x={-2.5}
        rotation-y={Math.PI / 8}
      >
        <Husky scale={0.5} position-y={-1} />
      </PortalCard>
      <PortalCard texture="textures/digital_painting_deep_forest_with_flowers.jpg">
        <Alpaca scale={0.4} position-y={-1} />
      </PortalCard>
      <PortalCard texture="textures/digital_painting_water_with_flowers.jpg" position-x={2.5} rotation-y={-Math.PI / 8}>
        <Deer scale={0.5} position-y={-1} />
      </PortalCard>
    </Suspense>
  );
};

interface PortalCardProps {
  children: React.ReactNode;
  texture: string;
}

const PortalCard = ({ children, texture, ...props }: JSX.IntrinsicElements["group"] & PortalCardProps) => {
  const map = useTexture(texture);
  return (
    <group {...props}>
      <RoundedBox args={[2, 3, 0.1]}>
        <MeshPortalMaterial>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          {children}
          <mesh>
            <sphereGeometry args={[10, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

export default PortalScene;
