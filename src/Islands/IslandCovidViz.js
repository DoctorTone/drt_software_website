import React from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { IslandCylinder } from "./IslandCylinder.js";

export const IslandCovidViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <IslandCylinder position={ISLANDS.CovidVizPosition} />
      </group>
    </Float>
  );
};
