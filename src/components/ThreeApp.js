import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import { shallow } from "zustand/shallow";
import * as THREE from "three";
import { SCENE } from "../state/Config.js";

import { Cloud } from "./Models/Cloud.js";
import MainScene from "../Scenes/MainScene.js";
import PortfolioScene from "../Scenes/PortfolioScene.js";
import DataVizScene from "../Scenes/DataVizScene.js";

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
  // console.log("Island = ", activeIsland);

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
  console.log("Ref = ", activeRef);

  useEffect(() => {
    // DEBUG
    console.log("New scene = ", activeScene);
    activeRef.current = allRefs[activeScene].current;
    console.log("Active ref = ", activeRef.current);
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
          <group ref={allRefs["main"]} name="main">
            <MainScene />
          </group>
        )}
        {currentLevel === SCENE.LEVEL_1 && (
          <group
            ref={allRefs["portfolio"]}
            name="portfolio"
            position-y={SCENE.FLOOR_LEVEL}>
            <PortfolioScene />
          </group>
        )}
        {currentLevel === SCENE.LEVEL_2 && (
          <group
            ref={allRefs["dataviz"]}
            name="dataviz"
            position-y={SCENE.FLOOR_LEVEL}>
            <DataVizScene />
          </group>
        )}
      </group>

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
