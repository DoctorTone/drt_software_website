import React from "react";
import { SCENE } from "../state/Config.js";

export const IslandOuterCylinder = (props) => {
  return (
    <group {...props} dispose={null}>
      <mesh>
        <cylinderGeometry
          args={[
            SCENE.CYL_RADIUS + 0.25,
            SCENE.CYL_RADIUS + 0.25,
            SCENE.CYL_HEIGHT - 0.35,
            SCENE.CYL_SEGMENTS,
          ]}
        />
        <meshStandardMaterial color="grey" />
      </mesh>
    </group>
  );
};
