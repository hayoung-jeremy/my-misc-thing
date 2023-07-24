import React, { Suspense, useRef } from "react";
import { MathUtils, PointLightHelper, SpotLightHelper, TextureLoader } from "three";
import {
  Bounds,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  useBounds,
  useGLTF,
  useHelper,
} from "@react-three/drei";

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
        <cylinderGeometry args={[24, 24, 48, 14, 60, true]} />
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
        <cylinderGeometry args={[24, 24, 48, 140, 12, true]} />
        <pointsMaterial size={2} sizeAttenuation={false} />
      </points>

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1}>
          <SelectToZoom>
            <Model name="Curly" position={[1, -1, -2]} rotation={[2, 0, -0]} scale={0.1} />
            <Model name="DNA" position={[2, 0, -1.7]} rotation={[1, 1, -2]} scale={0.2} />
            <Model name="Headphones" position={[2.5, 1, 1]} rotation={[1, 0, -1]} scale={0.2} />
            <Model name="Notebook" position={[-3.1, -2.5, -1.3]} rotation={[2, 0, 1]} scale={0.2} />
            <Model name="Rocket003" position={[1.8, 1.5, -2.5]} rotation={[1, 1, 0]} scale={0.25} />
            <Model name="Roundcube001" position={[-2.5, -1, 4]} rotation={[1, 0, 0]} scale={0.12} />
            <Model name="Table" position={[1, -4, -3.8]} rotation={[1, 0, -1]} scale={0.15} />
            <Model name="VR_Headset" position={[4, -2.5, 2.8]} rotation={[1, 0, -1]} scale={1} />
            <Model name="Zeppelin" position={[-2, 1, 1]} rotation={[3, -1, 3]} scale={0.0015} />
          </SelectToZoom>
        </Bounds>
        {/* <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -3.5, 0]}
          opacity={1}
          width={200}
          height={200}
          blur={1}
          far={50}
        /> */}
      </Suspense>

      <spotLight position={[-10, -10, -10]} intensity={0.5} penumbra={1} castShadow />
      <hemisphereLight color="white" groundColor="#9595a8" position={[-7, 2.5, 1.3]} intensity={1} />
      <OrbitControls makeDefault />
      {/* <gridHelper /> */}
    </group>
  );
};

function Model({ name, ...props }: any) {
  const { nodes }: any = useGLTF("/models/compressed.glb");
  return (
    <mesh
      receiveShadow
      castShadow
      geometry={nodes[name].geometry}
      material={nodes[name].material}
      // material-emissive="red"
      material-roughness={1}
      {...props}
      dispose={null}
    />
  );
}

function SelectToZoom({ children }: any) {
  const api = useBounds();
  return (
    <group
      onClick={e => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())}
      onPointerMissed={e => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}

export default CylinderScene;
