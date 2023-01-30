import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "./Island.js";
import { Tree } from "./Tree.js";
import { DRT } from "./DRT.js";
import { SCENE } from "../state/Config.js";

import useStore from "../state/store.js";

export const IslandDRT = () => {
  const [hovered, setHovered] = useState(false);

  const showAboutModal = useStore((state) => state.showAboutModal);
  const selectIsland = () => {
    console.log("Clicked island");
    showAboutModal(true);
  };

  const pointerOver = () => {
    console.log("Pointer over");
    setHovered(true);
  };

  const pointerOut = () => {
    console.log("Pointer out");
    setHovered(false);
  };

  useCursor(hovered);

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Island position={[0, 0, 6]} />
        <Tree position={[-1, 1.5, 6]} scale={0.05} />
        <DRT position={[0.2, 2.2, 6.4]} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={0.2}
            position={[0, 3, 6.4]}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="black">
            About
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
