import React from "react";
import { DRT } from "../Models/DRT";
import { SCENE } from "../state/Config.js";
import { Sky, Plane } from "@react-three/drei";

const Landing = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      {/* <Sky sunPosition={SCENE.sunPosition} /> */}
      <DRT rotate={true}/>
    </>
  );
};

export default Landing;
