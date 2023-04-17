import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { Floor } from "../Models/Floor.jsx";
import { Fish } from "../Models/Fish.jsx";

const DataVizScene = () => {
  return (
    <>
      <IslandMedViz islandNumber={3} />
      <IslandFinanceViz islandNumber={1} />
      <IslandCovidViz islandNumber={2} />
      <IslandBrainViz islandNumber={0} />
      <Fish />
      <Floor color={0x4276ed} />
    </>
  );
};

export default DataVizScene;
