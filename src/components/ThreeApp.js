import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import { shallow } from "zustand/shallow";
import * as THREE from "three";
import { SCENE } from "../state/Config.js";

import { Cloud } from "./Cloud.js";
import MainScene from "./MainScene.js";
import PortfolioScene from "./PortfolioScene.js";

let tempRot = new THREE.Quaternion();
const ThreeApp = () => {
  const [camRotRightRequired, camRotLeftRequired, resetCamRotate] = useStore(
    (state) => [
      state.camRotateRightRequired,
      state.camRotateLeftRequired,
      state.resetCamRotate,
    ]
  );
  const animateSceneDown = useStore((state) => state.animateSceneDown);
  const animateSceneUp = useStore((state) => state.animateSceneUp);
  const moveSceneUp = useStore((state) => state.moveSceneUp);
  const resetSceneAnimation = useStore((state) => state.resetSceneAnimation);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const activeScene = useStore((state) => state.activeScene);
  const setActiveScene = useStore((state) => state.setActiveScene);

  const currentRot = useRef(0);
  const allRefs = {
    main: useRef(),
    portfolio: useRef(),
  };

  let activeRef = useRef();
  activeRef = allRefs["main"];

  useEffect(() => {
    activeRef = allRefs[activeScene];
  }, [activeScene]);

  useFrame((state, delta) => {
    if (camRotRightRequired || camRotLeftRequired) {
      const direction = camRotLeftRequired ? -1 : 1;
      currentRot.current += delta;
      if (currentRot.current > Math.PI / 2) {
        currentRot.current = 0;
        resetCamRotate();
      } else {
        tempRot.setFromAxisAngle(SCENE.Y_AXIS, delta * direction);
        state.camera.position.applyQuaternion(tempRot);
      }
    }

    if (animateSceneDown) {
      activeRef.current.position.y -= delta * 15;
      if (activeRef.current.position.y < -30) {
        activeRef.current.position.y = -30;
        moveSceneUp();
        setCurrentLevel(SCENE.LEVEL_1);
        setActiveScene("portfolio");
      }
    }

    if (animateSceneUp) {
      activeRef.current.position.y += delta * 20;
      if (activeRef.current.position.y > 0) {
        activeRef.current.position.y = 0;
        resetSceneAnimation();
      }
    }
  });

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      <Cloud position={[-15, 6, 0]} scale={[0.5, 0.25, 0.25]} />
      {currentLevel === SCENE.MAIN_LEVEL && (
        <group ref={allRefs["main"]}>
          <MainScene />
        </group>
      )}
      {currentLevel === SCENE.LEVEL_1 && (
        <group ref={allRefs["portfolio"]} position={[0, -30, 0]}>
          <PortfolioScene />
        </group>
      )}

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
