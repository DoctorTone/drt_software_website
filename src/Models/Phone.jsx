/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Phone(props) {
  const { nodes, materials } = useGLTF("/models/phone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Phone.geometry}>
        <meshStandardMaterial color="grey" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/phone.glb");