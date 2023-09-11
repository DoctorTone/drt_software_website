import React, { useState, useRef, useEffect } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { useFrame } from "@react-three/fiber";
import { DataViz } from "../Models/DataViz.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandDataViz = ({ islandNumber }) => {
	const [hovered, setHovered] = useState(false);
	const [togglePoints, setTogglePoints] = useState(false);
	const targetIsland = useStore((state) => state.targetIsland);
	const activeIsland = useStore((state) => state.activeIsland);
	const animateNextScene = useStore((state) => state.animateNextScene);
	const [selectSound] = useState(() => new Audio("./sounds/select.mp3"));
	const currentSlots = useStore((state) => state.currentSlots);
	const updateSlots = useStore((state) => state.updateSlots);
	const getSlotPosition = useStore((state) => state.getSlotPosition);

	const matRef = useRef();

	const slotPosition = getSlotPosition(currentSlots, "DataViz");

	const selectIsland = () => {
		if (currentSlots[SLOTS.MIDDLE] === "DataViz") {
			setVisibleModal(MODALS.CONTACT);
			selectSound.play();
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
				<IslandPoints position={ISLANDS.DataVizPosition} />
				<DataViz
					position={ISLANDS.DataVizModelPosition}
					rotation-y={Math.PI / 2}
					scale={0.15}
				/>
				<Shadow
					scale={1.5}
					opacity={0.85}
					position={[
						ISLANDS.DataVizTextPosition[0],
						ISLANDS.DataVizTextPosition[1] - 1.5,
						ISLANDS.DataVizTextPosition[2],
					]}
				/>
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.DataVizTextPosition}
					rotation-y={ISLANDS.DataVizTextRotation}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Data Viz
				</Text>
			</group>
		</Float>
	);
};
