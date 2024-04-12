import React, { Suspense } from "react";
import MainScene from "../Scenes/MainScene";
import { Loading } from "../components/Loading";

const MainLevel = () => {
  return (
    <group name="main">
      <Suspense fallback={<Loading />}>
        <MainScene />
      </Suspense>
    </group>
  );
};

export default MainLevel;
