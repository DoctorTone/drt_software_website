import React from "react";
import { Float, Text3D } from "@react-three/drei";
import { Island } from "./Island.js";
import { Tree } from "./Tree.js";

export const IslandDRT = () => {
  return (
    <Float>
      <Island position={[0, 0, 6]} />
      <Tree position={[-1, 1.5, 6]} scale={0.05} />
      <Text3D
        position={[-0.75, 1.5, 6]}
        font="./fonts/helvetiker_regular.typeface.json">
        DRT
        <meshStandardMaterial color="#E76F2A" />
      </Text3D>
    </Float>
  );
};
