import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { IslandSleepViz } from "../Islands/IslandSleepViz";

const DataVizScene = () => {
	return (
		<>
			<IslandMedViz name="Medical" />
			<IslandFinanceViz name="Finance" />
			<IslandCovidViz name="Pandemic" />
			<IslandBrainViz name="RealTime" />
			<IslandSleepViz name="Sleep" />
		</>
	);
};

export default DataVizScene;
