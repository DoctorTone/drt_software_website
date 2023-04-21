import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { Environment, useTexture } from "@react-three/drei";
import { SCENE } from "../state/Config.js";

export const Pool = (props) => {
  // const map = useLoader(RGBELoader, "textures/skylit.hdr");

  return (
    <group {...props} dispose={null}>
      <mesh position-y={-0.75}>
        <cylinderGeometry
          args={[
            SCENE.POOL_RADIUS,
            SCENE.POOL_RADIUS,
            SCENE.POOL_HEIGHT,
            SCENE.POOL_SEGMENTS,
          ]}
        />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </group>
  );
};
