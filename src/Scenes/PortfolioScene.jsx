import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandDataViz } from "../Islands/IslandDataViz.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandShaders } from "../Islands/IslandShaders.jsx";
import { IslandTech } from "../Islands/IslandTech.jsx";

const PortfolioScene = () => {
	return (
		<>
			<IslandVR />
			<IslandPhysics />
			<IslandShaders />
			{/* <IslandTech />
			<IslandDataViz /> */}
		</>
	);
};

export default PortfolioScene;
