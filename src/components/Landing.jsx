import React from "react";
import { DRT } from "../Models/DRT";
import { SCENE } from "../state/Config.js";
import { Sky, Plane } from "@react-three/drei";

const Landing = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      <DRT position-y={0.5} />
      <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  );
};

export default Landing;
