"use-client";
import { Suspense, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Bounds, OrbitControls, PerspectiveCamera, useBounds } from "@react-three/drei";

export default function TestScene({ ...props }) {
  const torusKnotRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = clock.elapsedTime * 0.4;
      torusKnotRef.current.rotation.y = clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[200, 300, 300]}
        />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
              <mesh>
                {/* <torusKnotGeometry args={[1.6, 0.5, 200, 20]} /> */}
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial />
                {/* <meshPhysicalMaterial
                  transmission={1.0}
                  roughness={0}
                  metalness={0.25}
                  thickness={0.5}
                  side={THREE.DoubleSide}
                /> */}
              </mesh>
              <mesh ref={torusKnotRef} position={[3, 2, 0]}>
                <torusKnotGeometry args={[1, 0.2, 200, 20]} />
                <meshStandardMaterial />
                {/* <meshPhysicalMaterial
                  transmission={1.0}
                  roughness={0}
                  metalness={0.25}
                  thickness={0.5}
                  side={THREE.DoubleSide}
                /> */}
              </mesh>
            </SelectToZoom>
          </Bounds>
        </Suspense>

        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        {/* <gridHelper /> */}
        {/* <axesHelper /> */}
        <PerspectiveCamera />
        <OrbitControls makeDefault />
      </group>
    </>
  );
}

function SelectToZoom({ children }: any) {
  const api = useBounds();
  useEffect(() => {
    console.log("api : ", api);
  }, [api]);
  return (
    <group
      onClick={e => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())}
      onPointerMissed={e => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}
