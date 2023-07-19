import React from "react";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider } from "@theatre/r3f";

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const TheatreScene = () => {
  return (
    <SheetProvider sheet={demoSheet}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </SheetProvider>
  );
};

export default TheatreScene;
