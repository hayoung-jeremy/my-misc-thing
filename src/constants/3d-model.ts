import { GLTF } from "three-stdlib";

export interface IconProps {
  width?: number;
  height?: number;
}

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.MeshStandardMaterial;
  };
};

export type ModelProps = {
  isSelected?: boolean;
};
