/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Portfolio(props) {
  const { nodes, materials } = useGLTF("./models/portfolio.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.42, 0]}
        rotation={[-1.63, 1.03, 2.16]}
        scale={0.47}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.3}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Mesh_0.geometry}
              material={materials["80DEEA"]}
            />
            <mesh geometry={nodes.Mesh_1.geometry}>
              <meshLambertMaterial color="orange" />
            </mesh>
            <mesh
              geometry={nodes.Mesh_2.geometry}
              material={materials["455A64"]}
            />
            <mesh geometry={nodes.Mesh_3.geometry}>
              <meshLambertMaterial color="orange" />
            </mesh>
          </group>
        </group>
      </group>
      <group position={[-0.36, 0.36, 0]} scale={4.23}>
        <mesh geometry={nodes.Cube001_1.geometry}>
          <meshLambertMaterial color="grey" />
        </mesh>
        <mesh geometry={nodes.Cube001_2.geometry}>
          <meshLambertMaterial color="darkgrey" />
        </mesh>
        <mesh geometry={nodes.Cube001_3.geometry}>
          <meshLambertMaterial color="grey" />
        </mesh>
      </group>
      <group position={[0.15, -0.12, 0]} scale={4.23}>
        <mesh geometry={nodes.Cube002.geometry}>
          <meshLambertMaterial color="grey" />
        </mesh>
      </group>
      <mesh
        geometry={nodes.node_id51001.geometry}
        position={[0.07, -0.12, 0]}
        scale={[5.2, 4.57, 5.2]}
      />
    </group>
  );
}

useGLTF.preload("./models/portfolio.glb");
