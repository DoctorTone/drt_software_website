import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import useStore from "../state/store.js";

const MainScene = () => {
  const targetIsland = useStore((state) => state.targetIsland);
  const activeIsland = useStore((state) => state.activeIsland);

  let fadeInStatus = false;
  let fadeOutStatus = false;
  if(activeIsland !== targetIsland) {
fadeOutStatus = true;
  }

  return (
    <>
      {activeIsland === "About" && <IslandDRT name="About" fadeIn={fadeInStatus} fadeOut={fadeOutStatus}/>}
      {activeIsland === "Services" && <IslandServices name="Services" fadeIn={fadeInStatus} fadeOut={fadeOutStatus}/>}
      {activeIsland === "Contact" && <IslandContact name="Contact" fadeIn={fadeInStatus} fadeOut={trfadeOutStatusue}/>}
    </>
  );
};

export default MainScene;
