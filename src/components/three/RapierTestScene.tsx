"use client";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera, Sphere, Torus, useKeyboardControls } from "@react-three/drei";
import { Physics, RigidBody, quat } from "@react-three/rapier";
import { Controls } from "@/constants";

const RapierTestScene = () => {
  const cube = useRef<any>();
  const kicker = useRef<any>();
  const isOnFloor = useRef<boolean>(true);
  const [hovered, setHovered] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const jumpPressed = useKeyboardControls(state => state[Controls.jump]);
  const leftPressed = useKeyboardControls(state => state[Controls.left]);
  const rightPressed = useKeyboardControls(state => state[Controls.right]);
  const backPressed = useKeyboardControls(state => state[Controls.back]);
  const forwardPressed = useKeyboardControls(state => state[Controls.forward]);

  const speed = useRef(5);
  const jump = () => {
    if (isOnFloor.current) {
      cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
      console.log("뛰어");
      isOnFloor.current = false;
    }
  };

  const handleMovement = () => {
    if (!isOnFloor.current) return;
    if (leftPressed) cube.current.applyImpulse({ x: -0.4, y: 0, z: 0 });
    if (rightPressed) cube.current.applyImpulse({ x: 0.4, y: 0, z: 0 });
    if (backPressed) cube.current.applyImpulse({ x: 0, y: 0, z: 0.4 });
    if (forwardPressed) cube.current.applyImpulse({ x: 0, y: 0, z: -0.4 });
  };

  useFrame((_state, delta) => {
    if (jumpPressed) jump();
    handleMovement();

    if (!kicker.current) return;
    if (!startGame) return;

    const curRot = quat(kicker.current.rotation());
    const incrementRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), delta * 2);
    curRot.multiply(incrementRotation);
    kicker.current.setNextKinematicRotation(curRot);

    speed.current += delta;
  });

  return (
    <Suspense>
      <ambientLight intensity={0.3} />
      <directionalLight position={[-10, 10, 10]} intensity={0.4} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[-10, 10, 10]} fov={50} near={0.1} far={100} />

      {/* player */}
      <RigidBody
        position={[-2.5, 1, 0]}
        ref={cube}
        onCollisionEnter={({ other }) => {
          if (other.rigidBodyObject && other.rigidBodyObject.name === "floor") {
            console.log("바닥임");
            isOnFloor.current = true;
          }
        }}
        onCollisionExit={({ other }) => {
          if (other.rigidBodyObject && other.rigidBodyObject.name === "floor") {
            console.log("바닥 아님");
            isOnFloor.current = false;
          }
        }}
      >
        <Box
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onClick={() => setStartGame(true)}
        >
          <meshStandardMaterial color={hovered ? "hotpink" : "royalblue"} />
        </Box>
      </RigidBody>

      <RigidBody type="kinematicPosition" ref={kicker} position={[0, 0.75, 0]}>
        <group position={[2.5, 0, 0]}>
          <Box args={[5, 0.5, 0.5]}>
            <meshStandardMaterial color={"ivory"} />
          </Box>
        </group>
      </RigidBody>

      <RigidBody
        type="fixed"
        name="floor"
        // restitution={1} // 반동
        // friction={2} // 마찰
      >
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color={"springgreen"} />
        </Box>
      </RigidBody>
    </Suspense>
  );
};

export default RapierTestScene;
