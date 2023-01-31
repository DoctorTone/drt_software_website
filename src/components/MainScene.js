import React from "react";
import { IslandDRT } from "./Islands/IslandDRT.js";
import { IslandContact } from "./Islands/IslandContact.js";
import { IslandServices } from "./Islands/IslandServices.js";
import { IslandPortfolio } from "./Islands/IslandPortfolio.js";

const MainScene = () => {
  return (
    <>
      <IslandDRT />
      <IslandPortfolio />
      <IslandContact />
      <IslandServices />
    </>
  );
};

export default MainScene;
