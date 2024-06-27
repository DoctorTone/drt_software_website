import React, { Suspense } from "react";
import DataVizScene from "../Scenes/DataVizScene.jsx";
import { Loading } from "../components/Loading.jsx";
import { Sky } from "@react-three/drei";
import { Cloud } from "../Models/Cloud.jsx";
import { SCENE } from "../state/Config.js";
import { useThree } from "@react-three/fiber";
import useStore from "../state/store.js";

const DataVizLevel = () => {
  useThree(({ camera }) => camera.position.set(0, 3, 10));
  const dayMode = useStore((state) => state.dayMode);

  return (
    <>
      {dayMode ? (
        <Sky sunPosition={SCENE.sunDayPosition} />
      ) : (
        <Sky sunPosition={SCENE.sunNightPosition} />
      )}
      <Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
      <group name="dataviz">
        <Suspense fallback={<Loading />}>
          <DataVizScene />
        </Suspense>
      </group>
    </>
  );
};

export default DataVizLevel;
