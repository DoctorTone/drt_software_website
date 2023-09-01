import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Work } from "../Models/Work.jsx";
import { Flag } from "../Models/Flag.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandServices = ({ slot }) => {
	const [hovered, setHovered] = useState(false);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

	const selectIsland = () => {
		if (slot === 0) {
			setVisibleModal(MODALS.SERVICES);
			selectSound.play();
		}
	};

	const pointerOver = () => {
		if (slot === 0) {
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
				visible={slot >= 0}
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
				onClick={selectIsland}
			>
				<Work
					rotation-y={Math.PI / 2}
					scale={0.1}
					position={ISLANDS.ServicesModelPosition}
				/>
				<Flag
					scale={0.425}
					position={[
						ISLANDS.ServicesModelPosition[0] + 1,
						ISLANDS.ServicesModelPosition[1] - 0.5,
						ISLANDS.ServicesModelPosition[2] - 0.6,
					]}
				/>
				<Shadow
					scale={1}
					position={[
						ISLANDS.ServicesModelPosition[0],
						ISLANDS.ServicesModelPosition[1] - 0.5,
						ISLANDS.ServicesModelPosition[2],
					]}
				/>
				<Island />
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.ServicesTextPosition}
					rotation-y={Math.PI}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Services
				</Text>
			</group>
		</Float>
	);
};
