import React, { Suspense } from "react";
import * as THREE from "three";
import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Text, useTexture } from "@react-three/drei";
import { Alpaca, Deer, Husky } from "./models";

const PortalScene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <PortalCard
        name="Husky"
        color="#bbb1a5"
        texture="textures/digital_painting_dark_city_with_many_stars_and_lig.jpg"
        position-x={-2.5}
        rotation-y={Math.PI / 8}
      >
        <Husky scale={0.5} position-y={-1} />
      </PortalCard>
      <PortalCard name="Alpaca" color="#ae855a" texture="textures/digital_painting_deep_forest_with_flowers.jpg">
        <Alpaca scale={0.4} position-y={-1} />
      </PortalCard>
      <PortalCard
        name="Deer"
        color="#d49971"
        texture="textures/digital_painting_water_with_flowers.jpg"
        position-x={2.5}
        rotation-y={-Math.PI / 8}
      >
        <Deer scale={0.5} position-y={-1} />
      </PortalCard>
    </Suspense>
  );
};

interface PortalCardProps {
  children: React.ReactNode;
  texture: string;
  name: string;
  color: string;
}

const PortalCard = ({ children, texture, name, color, ...props }: JSX.IntrinsicElements["group"] & PortalCardProps) => {
  const map = useTexture(texture);
  return (
    <group {...props}>
      <Text font="fonts/AppleSDGothicNeoR.ttf" fontSize={0.3} position={[-0.42, -1.4, 0.051]} anchorY={"bottom"}>
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
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
