import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, RoundedBox, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { SCENE, ISLANDS, MATERIALS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandShaders = ({ islandNumber }) => {
	const [hovered, setHovered] = useState(false);
	const activeIsland = useStore((state) => state.activeIsland);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

	const selectIsland = () => {
		if (activeIsland === islandNumber) {
			setVisibleModal(MODALS.SHADER);
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
				<IslandPoints position={ISLANDS.ShaderPosition} />
				<RoundedBox
					position={ISLANDS.ShaderModelPosition}
					scale={1}
					material={MATERIALS.GREY}
				/>
				<Shadow
					scale={1.9}
					opacity={0.85}
					position={[
						ISLANDS.ShaderTextPosition[0],
						ISLANDS.ShaderTextPosition[1] - 1.5,
						ISLANDS.ShaderTextPosition[2],
					]}
				/>
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.ShaderTextPosition}
					rotation-y={ISLANDS.ShaderTextRotation}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Shaders
				</Text>
			</group>
		</Float>
	);
};
