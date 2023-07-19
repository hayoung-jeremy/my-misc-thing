import React, { useEffect } from "react";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import { OrbitControls } from "@react-three/drei";
import demoProjectState from "@/animations/DemoProject.theatre-project-state.json";

const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet("Demo Sheet");
if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const TheatreScene = () => {
  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: 2, range: [0, 1] }));
  }, []);

  return (
    <SheetProvider sheet={demoSheet}>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[5, 5, -5]}
        fov={75}
        attachArray={undefined}
        attachObject={undefined}
        attachFns={undefined}
        lookAt={[0, 0, 0]}
      />
      <ambientLight />
      <e.pointLight theatreKey="pointLight" position={[10, 10, 10]} />
      <e.mesh theatreKey="box">
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </e.mesh>
      <OrbitControls />
    </SheetProvider>
  );
};

export default TheatreScene;
