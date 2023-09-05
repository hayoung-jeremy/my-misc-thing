import { Environment, Html, OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const SelectiveBloomScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 2, 4]} />
      <Environment preset="studio" />
      <ambientLight intensity={0.1} />
      {/* <pointLight position={[10, 10, 10]} intensity={1} castShadow /> */}
      <OrbitControls enableZoom={false} />

      {/* case that glows */}
      <Sphere position={[0, 0, 0]} args={[0.5, 32, 32]} castShadow receiveShadow>
        <meshStandardMaterial emissive="#ff0000" emissiveIntensity={0.8} toneMapped={false} envMapIntensity={1} />
        <Html position={[0, 0.8, 0]} transform scale={0.36} occlude>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] text-[#818181]">meshStandardMaterial</p>
            <p className="text-[14px]">emissive</p>
          </div>
        </Html>
      </Sphere>

      <Sphere position={[-1.2, 0, 0]} args={[0.5, 32, 32]} castShadow receiveShadow>
        <meshBasicMaterial color={[4.8, 0, 0]} toneMapped={false} />
        <Html position={[0, 0.8, 0]} transform scale={0.36} occlude>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] text-[#818181]">meshBasicMaterial</p>
            <p className="text-[14px]">{"toneMapped={false}"}</p>
          </div>
        </Html>
      </Sphere>

      {/* case that not glows */}
      <Sphere position={[-2.4, 0, 0]} args={[0.5, 32, 32]} castShadow receiveShadow>
        <meshBasicMaterial color={[2, 0, 0]} />
        <Html position={[0, 0.8, 0]} transform scale={0.36} occlude>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] text-[#818181]">meshBasicMaterial</p>
            <p className="text-[14px]">{"toneMapped={true}"}</p>
          </div>
        </Html>
      </Sphere>

      <Sphere position={[1.2, 0, 0]} args={[0.5, 32, 32]} castShadow receiveShadow>
        <meshStandardMaterial color="red" />
        <Html position={[0, 0.8, 0]} transform scale={0.36} occlude>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[11px] text-[#818181]">meshStandardMaterial</p>
            <p className="text-[14px]">default, not glow</p>
          </div>
        </Html>
      </Sphere>

      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          luminanceSmoothing={0.025}
          // @ts-ignore
          radius={0.6}
        />
      </EffectComposer>
    </>
  );
};

export default SelectiveBloomScene;
