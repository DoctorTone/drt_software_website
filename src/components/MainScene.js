import React from "react";
import { IslandDRT } from "./IslandDRT.js";
import { IslandContact } from "./IslandContact.js";
import { IslandServices } from "./IslandServices.js";
import { IslandPortfolio } from "./IslandPortfolio.js";

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
