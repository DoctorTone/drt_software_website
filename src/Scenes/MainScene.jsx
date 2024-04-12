import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";

const MainScene = () => {
  return (
    <>
      <IslandContact name="Contact" />
      <IslandDRT name="About" />
      <IslandServices name="Services" />
    </>
  );
};

export default MainScene;
