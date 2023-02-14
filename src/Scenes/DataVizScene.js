import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { Floor } from "../Models/Floor.js";

const DataVizScene = () => {
  return (
    <>
      <IslandMedViz />
      <IslandBrainViz />
      <IslandCovidViz />
      <IslandFinanceViz />
    </>
  );
};

export default DataVizScene;
