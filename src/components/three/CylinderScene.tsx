import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper, TextureLoader } from "three";

const CylinderScene = () => {
  const spriteTexture = new TextureLoader().load("https://threejs.org/examples/textures/sprites/disc.png");

  const lightRef = useRef<any>();

  useHelper(lightRef, SpotLightHelper, "cyan");

  return (
    <group>
      <points>
        {/* 
          args?: [
            radiusTop?: number | undefined, 
            radiusBottom?: number | undefined, 
            height?: number | undefined, 
            radialSegments?: number | undefined, 
            heightSegments?: number | undefined, 
            openEnded?: boolean | undefined, 
            thetaStart?: number | undefined, 
            thetaLength?: number | undefined
          ]
        */}
        <cylinderGeometry args={[24, 24, 48, 24, 120, true]} />
        <pointsMaterial size={2} sizeAttenuation={false} />
      </points>
      <points>
        {/* 
          args?: [
            radiusTop?: number | undefined, 
            radiusBottom?: number | undefined, 
            height?: number | undefined, 
            radialSegments?: number | undefined, 
            heightSegments?: number | undefined, 
            openEnded?: boolean | undefined, 
            thetaStart?: number | undefined, 
            thetaLength?: number | undefined
          ]
        */}
        <cylinderGeometry args={[24, 24, 48, 360, 12, true]} />
        <pointsMaterial size={2} sizeAttenuation={false} />
      </points>
      <spotLight position={[100, 100, 100]} />
      <OrbitControls makeDefault />
    </group>
  );
};

export default CylinderScene;
