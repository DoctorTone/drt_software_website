import React, { Suspense } from "react";
import PortfolioScene from "../Scenes/PortfolioScene";
import { Loading } from "../components/Loading";
import { Sky } from "@react-three/drei";
import { Cloud } from "../Models/Cloud.jsx";
import { SCENE } from "../state/Config.js";
import { useThree } from "@react-three/fiber";

const PortfolioLevel = () => {
  useThree(({ camera }) => camera.position.set(0, 3, 10));

  return (
    <>
      <Sky sunPosition={SCENE.sunPosition} />
      <Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
      <group name="portfolio">
        <Suspense fallback={<Loading />}>
          <PortfolioScene />
        </Suspense>
      </group>
    </>
  );
};

export default PortfolioLevel;
