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
      <IslandVideos />
    </>
  );
};

export default PortfolioScene;
