import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "@/constants";
import { DissolveMaterial } from "../DissolveMaterial";

export default function DeliveryVan(props: any) {
  const { nodes, materials } = useGLTF("/models/deliveryVan.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_body009.geometry}>
        <DissolveMaterial
          baseMaterial={materials["lightBack.016"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_body009_1.geometry}>
        <DissolveMaterial
          baseMaterial={materials["paintGreen.007"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_body009_2.geometry}>
        <DissolveMaterial
          baseMaterial={materials["plastic.026"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_body009_3.geometry}>
        <DissolveMaterial
          baseMaterial={materials["paintWhite.005"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_body009_4.geometry}>
        <DissolveMaterial
          baseMaterial={materials["_defaultMat.033"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_body009_5.geometry}>
        <DissolveMaterial
          baseMaterial={materials["lightFront.019"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_body009_6.geometry}>
        <DissolveMaterial
          baseMaterial={materials["window.021"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_door.geometry}>
        <DissolveMaterial
          baseMaterial={materials["carTire.023"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_door_1.geometry}>
        <DissolveMaterial
          baseMaterial={materials["_defaultMat.034"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft039.geometry}>
        <DissolveMaterial
          baseMaterial={materials["carTire.024"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft039_1.geometry}>
        <DissolveMaterial
          baseMaterial={materials["_defaultMat.035"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft039_2.geometry}>
        <DissolveMaterial
          baseMaterial={materials["plastic.027"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft040.geometry}>
        <DissolveMaterial
          baseMaterial={materials["carTire.025"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft040_1.geometry}>
        <DissolveMaterial
          baseMaterial={materials["_defaultMat.036"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft040_2.geometry}>
        <DissolveMaterial
          baseMaterial={materials["plastic.028"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft041.geometry}>
        <DissolveMaterial
          baseMaterial={materials["carTire.026"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft041_1.geometry}>
        <DissolveMaterial
          baseMaterial={materials["_defaultMat.037"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft041_2.geometry}>
        <DissolveMaterial
          baseMaterial={materials["plastic.029"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft005.geometry}>
        <DissolveMaterial
          baseMaterial={materials["carTire.009"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft005_1.geometry}>
        <DissolveMaterial
          baseMaterial={materials["_defaultMat.017"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
      <mesh geometry={nodes.Mesh_wheel_frontLeft005_2.geometry}>
        <DissolveMaterial
          baseMaterial={materials["plastic.010"]}
          visible={props.dissolveVisible}
          onFadeOut={props.onFadeOut}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/deliveryVan.gltf");
