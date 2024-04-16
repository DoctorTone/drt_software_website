import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import useStore from "../state/store.js";

const MainScene = () => {
  const targetIsland = useStore((state) => state.targetIsland);

  return (
    <>
      {targetIsland === "About" && <IslandDRT name="About" fade={true} />}
      {targetIsland === "Services" && <IslandServices name="Services" />}
      {targetIsland === "Contact" && <IslandContact name="Contact" />}
    </>
  );
};

export default MainScene;
