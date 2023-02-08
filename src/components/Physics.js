/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Physics(props) {
  const { nodes, materials } = useGLTF("/models/physics.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        position={[0, 0, 0]}
        rotation={[0, 1.57, 0]}
        scale={0.5}>
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh
        geometry={nodes.Torus001.geometry}
        position={[0.34, -0.08, 0.02]}
        rotation={[-0.16, 0, -Math.PI / 2]}
        scale={[3.75, 1.47, 3]}>
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh
        geometry={nodes.Torus001.geometry}
        position={[-0.52, -0.1, 0.16]}
        rotation={[-1.18, 0, -Math.PI / 2]}
        scale={[3.75, 1.47, 3]}>
        <meshStandardMaterial color="grey" />
      </mesh>
      <mesh
        geometry={nodes.Torus001.geometry}
        position={[-0.04, -0.11, 0]}
        rotation={[0.89, 0, -Math.PI / 2]}
        scale={[3.75, 1.47, 3]}>
        <meshStandardMaterial color="grey" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/physics.glb");
