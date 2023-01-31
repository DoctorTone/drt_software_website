import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import * as THREE from "three";
import { SCENE } from "../state/Config.js";

import MainScene from "./MainScene.js";
import PortfolioScene from "./PortfolioScene.js";

let tempRot = new THREE.Quaternion();
const ThreeApp = () => {
  const camRotRightRequired = useStore((state) => state.camRotateRightRequired);
  const camRotLeftRequired = useStore((state) => state.camRotateLeftRequired);
  const resetCamRotate = useStore((state) => state.resetCamRotate);
  const animateSceneDown = useStore((state) => state.animateSceneDown);
  const animateSceneUp = useStore((state) => state.animateSceneUp);
  const moveSceneUp = useStore((state) => state.moveSceneUp);
  const resetSceneAnimation = useStore((state) => state.resetSceneAnimation);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);

  const currentRot = useRef(0);
  const main = useRef();
  const portfolio = useRef();

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
        main.current.position.y = -30;
        moveSceneUp();
        setCurrentLevel(SCENE.LEVEL_1);
      }
    }

    if (animateSceneUp) {
      portfolio.current.position.y += delta * 20;
      if (portfolio.current.position.y > 0) {
        portfolio.current.position.y = 0;
        resetSceneAnimation();
      }
    }
  });

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      {currentLevel === SCENE.MAIN_LEVEL && (
        <group ref={main}>
          <MainScene />
        </group>
      )}
      {currentLevel === SCENE.LEVEL_1 && (
        <group ref={portfolio} position={[0, -30, 0]}>
          <PortfolioScene />
        </group>
      )}

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
