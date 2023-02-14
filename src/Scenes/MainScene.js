import React from "react";
import { IslandDRT } from "../Islands/IslandDRT.js";
import { IslandContact } from "../Islands/IslandContact.js";
import { IslandServices } from "../Islands/IslandServices.js";
import { IslandPortfolio } from "../Islands/IslandPortfolio.js";

const MainScene = () => {
  return (
    <>
      <IslandDRT islandNumber={0} />
      <IslandContact islandNumber={1} />
      <IslandServices islandNumber={2} />
      <IslandPortfolio islandNumber={3} />
    </>
  );
};

export default MainScene;
