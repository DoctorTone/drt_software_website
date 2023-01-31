import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import * as THREE from "three";
import { SCENE } from "../state/Config.js";

import MainScene from "./MainScene.js";

let tempRot = new THREE.Quaternion();
const ThreeApp = () => {
  const camRotRightRequired = useStore((state) => state.camRotateRightRequired);
  const camRotLeftRequired = useStore((state) => state.camRotateLeftRequired);
  const resetCamRotate = useStore((state) => state.resetCamRotate);
  const animateSceneDown = useStore((state) => state.animateSceneDown);
  const animateSceneUp = useStore((state) => state.animateSceneUp);
  const moveSceneUp = useStore((state) => state.moveSceneUp);
  const resetSceneAnimation = useStore((state) => state.resetSceneAnimation);
  const currentRot = useRef(0);
  const main = useRef();

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
    }

    if (animateSceneDown) {
      main.current.position.y -= delta * 15;
      if (main.current.position.y < -30) {
        moveSceneUp();
      }
    }

    if (animateSceneUp) {
      main.current.position.y += delta * 15;
      if (main.current.position.y > 0) {
        main.current.position.y = 0;
        resetSceneAnimation();
      }
    }
  });

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      <group ref={main}>
        <MainScene />
      </group>

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
