/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SCENE } from "../state/Config";

export function Lightning({ fadeIn, fadeOut, direction, ...props }) {
  const { nodes } = useGLTF("./models/lightning.gltf");
  const matRef = useRef();
  const groupRef = useRef();

  let fadeOutEnabled = fadeOut;
  let fadeInEnabled = fadeIn;

  useFrame((_, delta) => {
    if (fadeOutEnabled) {
      matRef.current.opacity -= delta * SCENE.FADE_DELAY;
      groupRef.current.position.x += delta * direction;
      if (matRef.current.opacity < 0) {
        matRef.current.opacity = 0;
        fadeOutEnabled = false;
      }
    }
    if (fadeInEnabled) {
      if (matRef.current.opacity >= 1) {
        matRef.current.opacity = 0;
      }
      matRef.current.opacity += delta * SCENE.FADE_DELAY;
      if (matRef.current.opacity >= 1) {
        matRef.current.opacity = 1;
        fadeInEnabled = false;
      }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.lightning.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhongMaterial transparent={true} color={0xcc7306} ref={matRef} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/lightning.gltf");
