import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandShaders } from "../Islands/IslandShaders.jsx";
import { IslandTech } from "../Islands/IslandTech.jsx";
import Overlay from "../components/Overlay.jsx";

const PortfolioScene = () => {
	return (
		<>
			<Overlay fade={0} position-z={-5} opacity={1} />
			<IslandVR name="VR" />
			<IslandPhysics name="Physics" />
			<IslandShaders name="Shaders" />
			<IslandTech name="Tech" />
		</>
	);
};

export default PortfolioScene;
