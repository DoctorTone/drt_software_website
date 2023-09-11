import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { IslandSleepViz } from "../Islands/IslandSleepViz";
import { IslandPoints } from "../Islands/IslandPoints.jsx";
import { DataViz } from "../Models/DataViz.jsx";

const DataVizScene = () => {
	return (
		<>
			<IslandMedViz name="MedViz" />
			<IslandFinanceViz name="Finance" />
			<IslandCovidViz name="Pandemic" />
			<IslandBrainViz name="Real-time" />
			<IslandSleepViz name="Sleep" />
		</>
	);
};

export default DataVizScene;
