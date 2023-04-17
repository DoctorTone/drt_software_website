import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { Island } from "../Islands/Island.jsx";
import { Foundation } from "../Models/Foundation.jsx";

const DataVizScene = () => {
  return (
    <>
      <IslandMedViz islandNumber={3} />
      <IslandFinanceViz islandNumber={1} />
      <IslandCovidViz islandNumber={2} />
      <IslandBrainViz islandNumber={0} />
      <Foundation position={[1, 0, -1]} scale={2.5} />
      <Island position-y={-7.75} scale={5} />
    </>
  );
};

export default DataVizScene;
