import React, { Suspense } from "react";
import { Float, Text3D, Text } from "@react-three/drei";
import { Island } from "./Island.js";
import { Tree } from "./Tree.js";
import { DRT } from "./DRT.js";
import useStore from "../state/store.js";

export const IslandDRT = () => {
  const rotationIntensity = useStore((state) => state.rotationIntensity);

  return (
    <Float rotationIntensity={rotationIntensity}>
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
    </Float>
  );
};
