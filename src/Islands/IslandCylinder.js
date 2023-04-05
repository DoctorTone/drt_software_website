import React from "react";
import { SCENE } from "../state/Config.js";

export const IslandCylinder = (props) => {
  return (
    <group {...props} dispose={null}>
      <mesh>
        <cylinderGeometry
          args={[
            SCENE.CYL_RADIUS,
            SCENE.CYL_RADIUS,
            SCENE.CYL_HEIGHT,
            SCENE.CYL_SEGMENTS,
          ]}
        />
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
