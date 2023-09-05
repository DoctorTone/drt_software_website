import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Physics } from "../Models/Physics.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandPhysics = ({ islandNumber }) => {
	const [hovered, setHovered] = useState(false);
	const activeIsland = useStore((state) => state.activeIsland);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

	const selectIsland = () => {
		if (activeIsland === islandNumber) {
			setVisibleModal(MODALS.PHYSICS);
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
				<IslandPoints position={ISLANDS.PhysicsPosition} />
				<Physics
					position={ISLANDS.PhysicsModelPosition}
					scale={0.125}
					rotation-y={1.25}
				/>
				<Shadow
					scale={1.5}
					opacity={0.85}
					position={[
						ISLANDS.PhysicsTextPosition[0],
						ISLANDS.PhysicsTextPosition[1] - 1.35,
						ISLANDS.PhysicsTextPosition[2],
					]}
				/>
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.PhysicsTextPosition}
					rotation-y={ISLANDS.PhysicsTextRotation}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Physics
				</Text>
			</group>
		</Float>
	);
};
