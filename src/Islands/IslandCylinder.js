import React from "react";
import { SCENE } from "../state/Config.js";

export const IslandCylinder = (props) => {
  return (
    <group {...props} dispose={null} rotation-x={Math.PI / 2}>
      <mesh>
        <capsuleGeometry args={[0.5, 2, 32, 32]} />
        <meshPhysicalMaterial
          color={0xdfe6f2}
          transmission={1}
          roughness={0.2}
          thickness={50}
          envMapIntensity={10}
        />
      </mesh>
    </group>
  );
};
