import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { IslandSleepViz } from "../Islands/IslandSleepViz";
import Overlay from "../components/Overlay.jsx";

const DataVizScene = () => {
	return (
		<>
			<Overlay fade={0} position-z={-5} opacity={1} color={0x6a6ffb} />
			<IslandMedViz name="Medical" />
			<IslandFinanceViz name="Finance" />
			<IslandCovidViz name="Pandemic" />
			<IslandBrainViz name="RealTime" />
			<IslandSleepViz name="Sleep" />
		</>
	);
};

export default DataVizScene;
