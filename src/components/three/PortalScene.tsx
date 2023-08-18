import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CameraControls, Environment, MeshPortalMaterial, RoundedBox, Text, useTexture } from "@react-three/drei";
import { Alpaca, Deer, Husky } from "./models";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

type ActiveCardName = "Alpaca" | "Deer" | "Husky";

const PortalScene = () => {
  const [isActive, setIsActive] = useState<ActiveCardName | null>(null);
  const cameraRef = useRef<CameraControls>(null);
  const scene = useThree(state => state.scene);

  useEffect(() => {
    if (isActive) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(isActive)?.getWorldPosition(targetPosition);
      cameraRef.current?.setLookAt(0, 0, 5, targetPosition.x, targetPosition.y, targetPosition.z, true);
    } else {
      cameraRef.current?.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [isActive, scene]);

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <CameraControls ref={cameraRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />
      <PortalCard
        name="Husky"
        color="#bbb1a5"
        texture="textures/digital_painting_dark_city_with_many_stars_and_lig.jpg"
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        isActive={isActive}
        setIsActive={setIsActive}
      >
        <Husky scale={0.5} position-y={-1} />
      </PortalCard>
      <PortalCard
        name="Alpaca"
        color="#ae855a"
        texture="textures/digital_painting_deep_forest_with_flowers.jpg"
        isActive={isActive}
        setIsActive={setIsActive}
      >
        <Alpaca scale={0.4} position-y={-1} />
      </PortalCard>
      <PortalCard
        name="Deer"
        color="#d49971"
        texture="textures/digital_painting_water_with_flowers.jpg"
        position-x={2.5}
        rotation-y={-Math.PI / 8}
        isActive={isActive}
        setIsActive={setIsActive}
      >
        <Deer scale={0.5} position-y={-1} />
      </PortalCard>
    </Suspense>
  );
};

interface PortalCardProps {
  children: React.ReactNode;
  texture: string;
  name: ActiveCardName;
  color: string;
  isActive: ActiveCardName | null;
  setIsActive: React.Dispatch<React.SetStateAction<ActiveCardName | null>>;
}

const PortalCard = ({
  children,
  texture,
  name,
  color,
  isActive,
  setIsActive,
  ...props
}: JSX.IntrinsicElements["group"] & PortalCardProps) => {
  const map = useTexture(texture);
  const portalRef = useRef(null);

  useFrame((_state, delta) => {
    if (portalRef.current) {
      const isCurrentPortalOpen = isActive === name;
      easing.damp(portalRef.current, "blend", isCurrentPortalOpen ? 1 : 0, 0.2, delta);
    }
  });

  return (
    <group {...props}>
      <Text font="fonts/AppleSDGothicNeoR.ttf" fontSize={0.3} position={[-0.42, -1.4, 0.051]} anchorY={"bottom"}>
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox name={name} args={[2, 3, 0.1]} onDoubleClick={() => setIsActive(isActive === name ? null : name)}>
        <MeshPortalMaterial ref={portalRef}>
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
