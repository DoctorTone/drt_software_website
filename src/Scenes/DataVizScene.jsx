import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { IslandSleepViz } from "../Islands/IslandSleepViz";
import { Island } from "../Islands/Island.jsx";
import { DataViz } from "../Models/DataViz.jsx";

const DataVizScene = () => {
  return (
    <>
      <IslandMedViz islandNumber={3} />
      {/* <IslandFinanceViz islandNumber={4} />
      <IslandCovidViz islandNumber={0} />
      <IslandBrainViz islandNumber={1} />
      <IslandSleepViz islandNumber={2} /> */}
      {/* <DataViz position-y={0.2} scale={0.45} /> */}
      {/* <Island position-y={-7.75} scale={5} /> */}
    </>
  );
};

export default DataVizScene;
