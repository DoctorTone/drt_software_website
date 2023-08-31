import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { DRT } from "../Models/DRT.jsx";
import { TreePoints } from "../Models/TreePoints.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandDRT = ({ islandNumber }) => {
	const [hovered, setHovered] = useState(false);
	const [togglePoints, setTogglePoints] = useState(false);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const activeIsland = useStore((state) => state.activeIsland);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

	const selectIsland = () => {
		if (activeIsland === islandNumber) {
			setVisibleModal(MODALS.ABOUT);
			selectSound.play();
			setTogglePoints((togglePoints) => !togglePoints);
		}
	};

	const pointerOver = () => {
		if (activeIsland === islandNumber) {
			setHovered(true);
		}
	};

	const pointerOut = () => {
		setHovered(false);
	};

	useCursor(hovered);

	return (
		<Float rotationIntensity={SCENE.rotationIntensity}>
			<group
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
				onClick={selectIsland}
			>
				<TreePoints
					showPoints={togglePoints}
					position={ISLANDS.DRTTreePosition}
					scale={0.05}
				/>
				{/* <DRT position={ISLANDS.DRTModelPosition} /> */}
				<DRT position={ISLANDS.DRTTreePosition} scale={0.05} />
				<Shadow
					scale={1.5}
					opacity={0.65}
					position={[
						ISLANDS.DRTModelPosition[0],
						ISLANDS.DRTModelPosition[1] - 0.5,
						ISLANDS.DRTModelPosition[2],
					]}
				/>
				<Island position={ISLANDS.DRTPosition} />
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.DRTTextPosition}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					About
				</Text>
			</group>
		</Float>
	);
};
