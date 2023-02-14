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
        <meshStandardMaterial color="#e1e4b5" />
      </mesh>
    </group>
  );
};
