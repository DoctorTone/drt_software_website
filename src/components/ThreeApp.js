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
import DataVizScene from "./DataVizScene.js";

const ThreeApp = () => {
  const [camRotRightRequired, camRotLeftRequired, resetCamRotate] = useStore(
    (state) => [
      state.camRotateRightRequired,
      state.camRotateLeftRequired,
      state.resetCamRotate,
    ],
    shallow
  );
  const animatingSceneDown = useStore((state) => state.animatingSceneDown);
  const animatingSceneUp = useStore((state) => state.animatingSceneUp);
  const animateSceneUp = useStore((state) => state.animateSceneUp);
  const resetSceneAnimation = useStore((state) => state.resetSceneAnimation);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const activeScene = useStore((state) => state.activeScene);
  const setActiveScene = useStore((state) => state.setActiveScene);
  const activeIsland = useStore((state) => state.activeIsland);
  const numIslands = useStore((state) => state.numIslands);

  // DEBUG
  console.log("Island = ", activeIsland);

  const currentRot = useRef(0);
  const worldRot = useRef(0);
  const rotIncrement = useRef(Math.PI / 2);
  const topLevel = useRef();
  const allRefs = {
    main: useRef(),
    portfolio: useRef(),
    dataviz: useRef(),
  };

  let activeRef = useRef();
  activeRef = allRefs.main;

  // DEBUG
  console.log("Active = ", activeRef);

  useEffect(() => {
    // DEBUG
    console.log("New scene = ", activeScene);
    activeRef = allRefs[activeScene];
    rotIncrement.current = (Math.PI * 2) / numIslands;
  }, [activeScene, numIslands]);

  useFrame((state, delta) => {
    if (camRotRightRequired || camRotLeftRequired) {
      const direction = camRotLeftRequired ? -1 : 1;
      currentRot.current += delta;
      if (currentRot.current > rotIncrement.current) {
        worldRot.current += rotIncrement.current * direction;
        currentRot.current = 0;
        topLevel.current.rotation.y = worldRot.current;
        // DEBUG
        // console.log("World rot = ", worldRot.current);
        resetCamRotate();
      } else {
        topLevel.current.rotation.y += delta * direction;
      }
    }

    if (animatingSceneDown) {
      activeRef.current.position.y -= delta * SCENE.DOWNWARD_SPEED;
      if (activeRef.current.position.y < SCENE.FLOOR_LEVEL) {
        activeRef.current.position.y = SCENE.FLOOR_LEVEL;
        animateSceneUp();
      }
    }

    if (animatingSceneUp) {
      activeRef.current.position.y += delta * SCENE.UPWARD_SPEED;
      // DEBUG
      console.log("Pos = ", activeRef.current.position.y);
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
      <Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
      <group ref={topLevel}>
        {currentLevel === SCENE.MAIN_LEVEL && (
          <group ref={allRefs["main"]}>
            <MainScene />
          </group>
        )}
        {currentLevel === SCENE.LEVEL_1 && (
          <group ref={allRefs["portfolio"]} position-y={SCENE.FLOOR_LEVEL}>
            <PortfolioScene />
          </group>
        )}
        {currentLevel === SCENE.LEVEL_2 && (
          <group ref={allRefs["dataviz"]} position-y={SCENE.FLOOR_LEVEL}>
            <DataVizScene />
          </group>
        )}
      </group>

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
