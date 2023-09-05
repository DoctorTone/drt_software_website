import React, { useEffect } from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { MODALS } from "../state/Config.js";

import useStore from "../state/store.js";

const MainScene = ({ slots }) => {
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const startUpModalShown = useStore((state) => state.startUpModalShown);

	useEffect(() => {
		setVisibleModal(startUpModalShown ? MODALS.NONE : MODALS.START);
	}, []);

	return (
		<>
			<IslandDRT slot={slots[0]} />
			<IslandContact slot={slots[1]} />
			<IslandServices slot={slots[2]} />
		</>
	);
};

export default MainScene;
