import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DRT_Separate } from "../Models/DRT_Separate.jsx";
import { SCENE } from "../state/Config.js";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Loading } from "./Loading.jsx";

const Landing = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <color attach="background" args={[`#000000`]} />
        <mesh position={[0, -0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={512}
            mixBlur={1}
            mixStrength={20}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            metalness={0.8}
            roughness={0.5}
          />
        </mesh>
        <DRT_Separate position-x={0.25} />
      </Suspense>
    </>
  );
};

export default Landing;
