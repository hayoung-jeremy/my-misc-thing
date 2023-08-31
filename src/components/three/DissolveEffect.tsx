"use client";
import React, { useState } from "react";
import * as THREE from "three";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";

import { DissolveMaterial } from "./DissolveMaterial";
import { DeliveryVan } from "./models";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

const DissolveEffect = () => {
  const { itemDisplayed } = useControls({
    itemDisplayed: {
      value: "box",
      options: ["box", "sphere", "fire truck", "delivery van"],
    },
  });
  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(itemDisplayed);

  return (
    <>
      <color attach="background" args={["#ececec"]} />
      <OrbitControls />
      {visibleItem === "box" && (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <DissolveMaterial
            baseMaterial={boxMaterial}
            visible={itemDisplayed === "box"}
            onFadeOut={onFadeOut}
            dissolvingColor="#0082b2"
          />
        </mesh>
      )}
      {visibleItem === "sphere" && (
        <mesh scale={0.5}>
          <sphereGeometry />
          <DissolveMaterial
            baseMaterial={sphereMaterial}
            visible={itemDisplayed === "sphere"}
            onFadeOut={onFadeOut}
            dissolvingColor="#00c11e"
          />
        </mesh>
      )}

      {visibleItem === "delivery van" && (
        <DeliveryVan position-y={-1} dissolveVisible={itemDisplayed === "delivery van"} onFadeOut={onFadeOut} />
      )}

      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
      </EffectComposer>
      <Environment preset="sunset" />
      <ContactShadows position-y={-1} />
    </>
  );
};

export default DissolveEffect;
