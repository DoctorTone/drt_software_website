import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { Floor } from "../Models/Floor.js";
import { ContactShadows } from "@react-three/drei";

const DataVizScene = () => {
  return (
    <>
      <IslandMedViz islandNumber={3} />
      <IslandFinanceViz islandNumber={1} />
      <IslandCovidViz islandNumber={2} />
      <IslandBrainViz islandNumber={0} />
      <Floor />
    </>
  );
};

export default DataVizScene;
