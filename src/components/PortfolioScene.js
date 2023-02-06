import React from "react";
import { IslandPhysics } from "./Islands/IslandPhysics.js";

const PortfolioScene = () => {
  return (
    <>
      <IslandPhysics />
      <IslandDataViz />
      <IslandVR />
      <IslandShaders />
      <IslandTech />
    </>
  );
};

export default PortfolioScene;
