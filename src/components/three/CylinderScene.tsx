import React, { useEffect, useMemo, useRef } from "react";
import { OrbitControls, Point, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";
import PointsNodeMaterial from "three/examples/jsm/nodes/materials/PointsNodeMaterial";
import { useThree } from "@react-three/fiber";

const CylinderScene = () => {
  const cylinderGeoRef = useRef<any>();
  const { scene } = useThree();

  useEffect(() => {
    let cylinderGeo = cylinderGeoRef.current;
    cylinderGeo.deleteAttribute("normal");
    cylinderGeo.deleteAttribute("uv");

    cylinderGeo = BufferGeometryUtils.mergeVertices(cylinderGeo);

    const positionAttribute = cylinderGeo.getAttribute("position");
    console.log("positionAttribute : ", positionAttribute);

    const colors: any = [];
    const sizes = [];

    const color = new THREE.Color();

    for (let i = 0, l = positionAttribute.count; i < l; i++) {
      color.setHSL(0.01 + 0.1 * (i / l), 1.0, 0.5);
      color.toArray(colors, i * 3);

      sizes[i] = 10 * 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", positionAttribute);
    geometry.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

    console.log("geometry : ", geometry);

    const material = new THREE.PointsMaterial({
      color: 0xffff00,
      // vertexColors: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
  }, [cylinderGeoRef, scene]);

  return (
    <group>
      <mesh>
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
        <cylinderGeometry ref={cylinderGeoRef} args={[16, 16, 48, 16, 12, true]} />
        <meshStandardMaterial
          // transparent
          // opacity={0.8}
          side={THREE.DoubleSide}
          wireframe
          // wireframeLinejoin="round"
          // wireframeLinewidth={20}
          // wireframeLinecap="round"
        />
      </mesh>
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
    </group>
  );
};

export default CylinderScene;
