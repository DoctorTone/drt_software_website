import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DRT } from "../Models/DRT";
import { SCENE } from "../state/Config.js";
import { MeshReflectorMaterial } from "@react-three/drei";

const Landing = () => {
  return (
    <>
      <color attach="background" args={[`#000000`]} />
      <mesh position={[0, -0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={512}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#151515"
          metalness={0.8}
          roughness={0.5}
        />
      </mesh>
      <DRT />
    </>
  );
};

export default Landing;
