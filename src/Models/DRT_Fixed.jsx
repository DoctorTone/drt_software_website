/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SCENE } from "../state/Config";

export function DRT_Fixed({ fade, ...props }) {
  const { nodes } = useGLTF("./models/DRT-Text.gltf");
  const matRef = useRef();
  let fadeEnabled = fade;

  useFrame((state, delta) => {
    if (fadeEnabled) {
      matRef.current.opacity -= delta * SCENE.FADE_DELAY;
      if (matRef.current.opacity < 0) {
        matRef.current.opacity = 0;
        fadeEnabled = false;
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.DRT001.geometry}
        position={[-1.09, -0.44, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial transparent={true} color={0xcc7306} ref={matRef} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/DRT-Text.gltf");
