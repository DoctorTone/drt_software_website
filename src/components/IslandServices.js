import React from "react";
import { Float } from "@react-three/drei";
import { Island } from "./Island.js";
import { Work } from "./Work.js";

export const IslandServices = () => {
  return (
    <Float>
      <Island position={[0, 0, -5]} />
      <Work rotation-y={Math.PI / 2} scale={0.15} position={[0, 2.5, -5]} />
    </Float>
  );
};
