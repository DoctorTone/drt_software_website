import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import * as THREE from "three";
import { SCENE } from "../state/Config.js";

import { IslandDRT } from "./IslandDRT.js";
import { IslandContact } from "./IslandContact.js";
import { IslandServices } from "./IslandServices.js";
import { IslandPortfolio } from "./IslandPortfolio.js";

let tempRot = new THREE.Quaternion();
const ThreeApp = () => {
  const camRotRightRequired = useStore((state) => state.camRotateRightRequired);
  const camRotLeftRequired = useStore((state) => state.camRotateLeftRequired);
  const resetCamRotate = useStore((state) => state.resetCamRotate);
  const currentRot = useRef(0);

  useFrame((state, delta) => {
    if (camRotRightRequired || camRotLeftRequired) {
      const direction = camRotLeftRequired ? -1 : 1;
      currentRot.current += delta;
      if (currentRot.current > Math.PI / 2) {
        currentRot.current = 0;
        resetCamRotate();
      }
      tempRot.setFromAxisAngle(SCENE.Y_AXIS, delta * direction);
      state.camera.position.applyQuaternion(tempRot);
    } else {
      currentRot.current = 0;
    }
  });

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      <IslandDRT />
      <IslandPortfolio />
      <IslandContact />
      <IslandServices />

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
