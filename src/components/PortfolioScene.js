import React from "react";
import { IslandPhysics } from "./Islands/IslandPhysics.js";
import { IslandDataViz } from "./Islands/IslandDataViz.js";
import { IslandVR } from "./Islands/IslandVR.js";
import { IslandShaders } from "./Islands/IslandShaders.js";
import { IslandTech } from "./Islands/IslandTech.js";

const PortfolioScene = () => {
  return (
    <>
      <IslandDataViz />
      <IslandPhysics />
      <IslandShaders />
      <IslandTech />
      <IslandVR />
    </>
  );
};

export default PortfolioScene;
