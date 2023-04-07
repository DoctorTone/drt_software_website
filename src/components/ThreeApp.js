import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import { shallow } from "zustand/shallow";
import * as THREE from "three";
import { SCENE } from "../state/Config.js";

import { Cloud } from "../Models/Cloud.js";
import { Floor } from "../Models/Floor.js";
import MainScene from "../Scenes/MainScene.js";
import PortfolioScene from "../Scenes/PortfolioScene.js";
import DataVizScene from "../Scenes/DataVizScene.js";

const ThreeApp = () => {
  const cameraRotation = useStore((state) => state.cameraRotation);
  const resetCamRotate = useStore((state) => state.resetCamRotate);

  const sceneAnimationState = useStore((state) => state.sceneAnimationState);
  const setSceneAnimationState = useStore(
    (state) => state.setSceneAnimationState
  );
  const updateSceneAnimationState = useStore(
    (state) => state.updateSceneAnimationState
  );

  const currentLevel = useStore((state) => state.currentLevel);
  const activeScene = useStore((state) => state.activeScene);
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

  useEffect(() => {
    allRefs["main"].current.position.y = 0;
  }, []);

  useEffect(() => {
    // DEBUG
    console.log("New scene = ", activeScene);
    activeRef.current = allRefs[activeScene].current;
    console.log("Active ref = ", activeRef.current.position);
    rotIncrement.current = (Math.PI * 2) / numIslands;
  }, [activeScene, numIslands]);

  useFrame((state, delta) => {
    if (cameraRotation !== SCENE.CAM_ROTATE_NONE) {
      const direction = cameraRotation === SCENE.CAM_ROTATE_LEFT ? -1 : 1;
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

    if (sceneAnimationState === SCENE.ANIMATE_DOWN) {
      activeRef.current.position.y -= delta * SCENE.DOWNWARD_SPEED;
      if (activeRef.current.position.y < SCENE.GROUND_LEVEL) {
        activeRef.current.position.y = SCENE.GROUND_LEVEL;
        updateSceneAnimationState(SCENE.ANIMATE_UP);
      }
    }

    if (sceneAnimationState === SCENE.ANIMATE_UP) {
      activeRef.current.position.y += delta * SCENE.UPWARD_SPEED;
      if (activeRef.current.position.y > 0) {
        activeRef.current.position.y = 0;
        setSceneAnimationState(SCENE.ANIMATE_NONE);
      }
    }
  });

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Sky sunPosition={SCENE.sunPosition} />
      <Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
      {/* <Floor position-y={SCENE.FLOOR_LEVEL} rotation-y={Math.PI/2}/> */}
      <group ref={topLevel}>
        {currentLevel === SCENE.MAIN_LEVEL && (
          <group
            ref={allRefs["main"]}
            name="main"
            position-y={SCENE.GROUND_LEVEL}
          >
            <MainScene />
          </group>
        )}
        {currentLevel === SCENE.LEVEL_1 && (
          <group
            ref={allRefs["portfolio"]}
            name="portfolio"
            position-y={SCENE.GROUND_LEVEL}
          >
            <PortfolioScene />
          </group>
        )}
        {currentLevel === SCENE.LEVEL_2 && (
          <group
            ref={allRefs["dataviz"]}
            name="dataviz"
            position-y={SCENE.GROUND_LEVEL}
          >
            <DataVizScene />
          </group>
        )}
      </group>

      <OrbitControls enablePan={false} enableRotate={false} />
    </>
  );
};

export default ThreeApp;
