import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { IslandSleepViz } from "../Islands/IslandSleepViz";
import { Island } from "../Islands/Island.jsx";
import { Henge } from "../Models/Henge.jsx";

const DataVizScene = () => {
  return (
    <>
      <IslandMedViz islandNumber={3} />
      <IslandFinanceViz islandNumber={4} />
      <IslandCovidViz islandNumber={0} />
      <IslandBrainViz islandNumber={1} />
      <IslandSleepViz islandNumber={2} />
      <Henge />
      <Island position-y={-7.75} scale={5} />
    </>
  );
};

export default DataVizScene;
