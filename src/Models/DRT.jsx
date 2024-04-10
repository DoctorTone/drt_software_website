/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, useEnvironment } from "@react-three/drei";
import { SCENE } from "../state/Config";

export function DRT({ fade, rotate, ...props }) {
  const { nodes } = useGLTF("./models/DRT_Separate.gltf");
  const matRef = useRef();
  const meshRef = useRef();
  const presetTexture = useEnvironment({
    files: "./textures/evening_sky_1k.hdr",
  });

  useFrame((state, delta) => {
    if (fade) {
      matRef.current.opacity -= delta * SCENE.FADE_DELAY;
      if (matRef.current.opacity < 0) {
        matRef.current.opacity = 1;
      }
    }
    if(rotate) {
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.DRT.geometry}>
        <meshStandardMaterial
          metalness={1}
          roughness={0}
          color="#d6cac9"
          envMap={presetTexture}
        />
      </mesh>
      <mesh ref={meshRef} geometry={nodes.Software.geometry} position={[-0.25, -0.5, 0]}>
        <meshStandardMaterial
          metalness={1}
          roughness={0}
          color="#d6cac9"
          envMap={presetTexture}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/DRT_Separate.gltf");
