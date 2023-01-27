/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Brush(props) {
  const { nodes, materials } = useGLTF("/models/artistBrush.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]} scale={0.3}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0.geometry}
            material={materials["80DEEA"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials["795548"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials["455A64"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials["039BE5"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/artistBrush.gltf");
