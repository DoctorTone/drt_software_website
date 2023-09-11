import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const MainScene = () => {
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const startUpModalShown = useStore((state) => state.startUpModalShown);

	useEffect(() => {
		setVisibleModal(startUpModalShown ? MODALS.NONE : MODALS.START);
	}, []);

	return (
		<>
			<IslandContact name="Contact" />
			<IslandDRT name="About" />
			<IslandServices name="Services" />
		</>
	);
};

export default MainScene;
