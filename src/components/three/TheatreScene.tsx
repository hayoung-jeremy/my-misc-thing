import React, { useEffect } from "react";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import demoProjectState from "@/animations/DemoProject.theatre-project-state.json";

const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet("Demo Sheet");
// if (process.env.NODE_ENV === "development") {
//   studio.initialize();
//   studio.extend(extension);
// }

const TheatreScene = () => {
  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 4] }));
  }, []);

  const EditableRoundedBox = e(RoundedBox, "mesh");

  return (
    <SheetProvider sheet={demoSheet}>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 7]}
        fov={75}
        attachArray={undefined}
        attachObject={undefined}
        attachFns={undefined}
        lookAt={[0, 0, 0]}
      />

      <e.pointLight theatreKey="pointLight" position={[10, 10, 10]} />

      <EditableRoundedBox
        theatreKey="roundedBox1"
        args={[3, 5, 0.05]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.025} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        position={[0, 0, 0]}
      >
        <meshPhongMaterial color="#f3f3f3" />
      </EditableRoundedBox>

      <OrbitControls />
      <gridHelper />
    </SheetProvider>
  );
};

export default TheatreScene;
