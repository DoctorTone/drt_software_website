import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandDataViz } from "../Islands/IslandDataViz.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandShaders } from "../Islands/IslandShaders.jsx";
import { IslandTech } from "../Islands/IslandTech.jsx";

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
