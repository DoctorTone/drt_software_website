/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/car.gltf");
  return (
    <group
      scale={0.75}
      rotation-y={-Math.PI / 4}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Mesh_body001.geometry}
        material={materials["plastic.001"]}
      />
      <mesh
        geometry={nodes.Mesh_body001_1.geometry}
        material={materials.paintGreen}
      />
      <mesh
        geometry={nodes.Mesh_body001_2.geometry}
        material={nodes.Mesh_body001_2.material}
      />
      <mesh
        geometry={nodes.Mesh_body001_3.geometry}
        material={materials["window.021"]}
      />
      <mesh
        geometry={nodes.Mesh_body001_4.geometry}
        material={materials.lightBack}
      />
      <mesh
        geometry={nodes.Mesh_body001_5.geometry}
        material={materials.lightFront}
      />
      <group scale={-1}>
        <mesh
          geometry={nodes.Mesh_wheel_frontLeft005.geometry}
          material={nodes.Mesh_wheel_frontLeft005.material}
        />
        <mesh
          geometry={nodes.Mesh_wheel_frontLeft005_1.geometry}
          material={nodes.Mesh_wheel_frontLeft005_1.material}
        />
      </group>
      <group scale={-1}>
        <mesh
          geometry={nodes.Mesh_wheel_frontLeft006.geometry}
          material={nodes.Mesh_wheel_frontLeft006.material}
        />
        <mesh
          geometry={nodes.Mesh_wheel_frontLeft006_1.geometry}
          material={nodes.Mesh_wheel_frontLeft006_1.material}
        />
      </group>
      <group scale={-1}>
        <mesh
          geometry={nodes.Mesh_wheel_frontLeft008.geometry}
          material={nodes.Mesh_wheel_frontLeft008.material}
        />
        <mesh
          geometry={nodes.Mesh_wheel_frontLeft008_1.geometry}
          material={nodes.Mesh_wheel_frontLeft008_1.material}
        />
      </group>
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft007.geometry}
        material={nodes.Mesh_wheel_frontLeft007.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft007_1.geometry}
        material={nodes.Mesh_wheel_frontLeft007_1.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft004.geometry}
        material={nodes.Mesh_wheel_frontLeft004.material}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft004_1.geometry}
        material={nodes.Mesh_wheel_frontLeft004_1.material}
      />
    </group>
  );
}

useGLTF.preload("./models/car.gltf");