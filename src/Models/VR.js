/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: manofsteambustion (https://sketchfab.com/manofsteambustion)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/vr-headset-low-poly-free-6e90cfef00d14fab8b0c510380481251
title: VR HEADSET | LOW POLY | FREE
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function VR(props) {
  const { nodes, materials } = useGLTF("/models/vr_headset.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-3.96, 0.04, -0.14]}>
        <mesh geometry={nodes.VR_Screen_aiStandardSurface1_0.geometry}>
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh
        geometry={nodes.VR1_lambert17_0.geometry}
        material={materials.lambert17}
      />
    </group>
  );
}

useGLTF.preload("/models/vr_headset.glb");
