/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MATERIALS } from "../state/Config.js";

export function Phone(props) {
  const { nodes, materials } = useGLTF("./models/phone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Phone.geometry} material={MATERIALS.GREY} />
    </group>
  );
}

useGLTF.preload("./models/phone.glb");
