import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandPortfolio } from "../Islands/IslandPortfolio.jsx";

import useStore from "../state/store.js";

const MainScene = () => {
  const showStartUpModal = useStore((state) => state.showStartUpModal);

  useEffect(() => {
    showStartUpModal(true);
  }, []);

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
