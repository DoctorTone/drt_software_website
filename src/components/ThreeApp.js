import React from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import { SCENE } from "../state/Config.js";

import { IslandDRT } from "./IslandDRT.js";
import { IslandContact } from "./IslandContact.js";
import { IslandServices } from "./IslandServices.js";
import { IslandPortfolio } from "./IslandPortfolio.js";

const ThreeApp = () => {
  const camRotRequired = useStore((state) => state.camRotateRightRequired);

  useFrame((state, delta) => {
    if (camRotRequired) {
      state.camera.position.x += delta;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      <IslandDRT />
      <IslandPortfolio />
      <IslandContact />
      <IslandServices />

      <OrbitControls />
    </>
  );
};

export default ThreeApp;
