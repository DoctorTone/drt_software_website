import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandShaders } from "../Islands/IslandShaders.jsx";
import { IslandTech } from "../Islands/IslandTech.jsx";

const PortfolioScene = () => {
	return (
		<>
			<IslandVR name="VR" />
			<IslandPhysics name="Physics" />
			<IslandShaders name="Shaders" />
			<IslandTech name="Tech" />
		</>
	);
};

export default PortfolioScene;
