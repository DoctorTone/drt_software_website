/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/models/tree.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-spruce"].geometry}
        material={materials.color_main}
      />
    </group>
  );
}

useGLTF.preload("/models/tree.gltf");
