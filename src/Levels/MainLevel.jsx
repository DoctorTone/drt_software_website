import React, { Suspense } from "react";
import MainScene from "../Scenes/MainScene";
import { Loading } from "../components/Loading";
import { Sky } from "@react-three/drei";
import { Cloud } from "../Models/Cloud.jsx";
import { SCENE } from "../state/Config.js";
import { useThree } from "@react-three/fiber";

const MainLevel = () => {
  useThree(({ camera }) => camera.position.set(0, 3, 10));

  return (
    <>
      <Sky sunPosition={SCENE.sunPosition} />
      <Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
      <group name="main">
        <Suspense fallback={<Loading />}>
          <MainScene />
        </Suspense>
      </group>
    </>
  );
};

export default MainLevel;
