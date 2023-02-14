import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.js";
import { IslandDataViz } from "../Islands/IslandDataViz.js";
import { IslandVR } from "../Islands/IslandVR.js";
import { IslandShaders } from "../Islands/IslandShaders.js";
import { IslandTech } from "../Islands/IslandTech.js";

const PortfolioScene = () => {
  return (
    <>
      <IslandDataViz islandNumber={3} />
      <IslandPhysics islandNumber={2} />
      <IslandShaders islandNumber={1} />
      <IslandTech islandNumber={0} />
      <IslandVR islandNumber={4} />
    </>
  );
};

export default PortfolioScene;
