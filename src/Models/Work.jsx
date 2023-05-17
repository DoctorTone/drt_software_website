/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Work(props) {
  const { nodes, materials } = useGLTF("./models/work.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.screwdriver.geometry}
        position={[0.76, 1.9, -0.76]}
        rotation={[0, -1.55, 2.31]}>
        <meshLambertMaterial color="grey" />
      </mesh>
      <mesh
        geometry={nodes.wrench.geometry}
        position={[-0.6, 0, -1.07]}
        rotation={[-2.89, -1.54, 1.01]}
        scale={0.54}>
        <meshLambertMaterial color="grey" />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/work.glb");
