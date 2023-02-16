import React from "react";
import { SCENE } from "../state/Config.js";

export const Floor = (props) => {
  return (
    <group {...props} dispose={null}>
      <mesh>
        <cylinderGeometry
          args={[SCENE.FLOOR_RADIUS, SCENE.FLOOR_RADIUS, SCENE.FLOOR_HEIGHT, SCENE.FLOOR_SEGMENTS]}
        />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};
