import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandPortfolio } from "../Islands/IslandPortfolio.jsx";
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
			<IslandDRT islandNumber={0} />
			{/* <IslandContact islandNumber={1} />
			<IslandServices islandNumber={2} />
			<IslandPortfolio islandNumber={3} /> */}
		</>
	);
};

export default MainScene;
