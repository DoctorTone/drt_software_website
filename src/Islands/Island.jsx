/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MATERIALS } from "../state/Config.js";

export function Island(props) {
  const { nodes, materials } = useGLTF("./models/singleIsland.glb");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={MATERIALS.EARTH} />
      <mesh geometry={nodes.Cube001_1.geometry} material={MATERIALS.GRASS} />
    </group>
  );
}

useGLTF.preload("./models/singleIsland.glb");
