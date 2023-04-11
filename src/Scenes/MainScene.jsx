import React from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandPortfolio } from "../Islands/IslandPortfolio.jsx";

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
