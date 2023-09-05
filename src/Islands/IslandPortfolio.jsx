import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Portfolio } from "../Models/Portfolio.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandPortfolio = ({ slot }) => {
	const [hovered, setHovered] = useState(false);
	const animateNextScene = useStore((state) => state.animateNextScene);
	const [selectSound] = useState(() => new Audio("./sounds/select.mp3"));

	const selectIsland = () => {
		if (slot === 0) {
			selectSound.play();
			const nextScene = {
				level: SCENE.LEVEL_1,
				scene: "portfolio",
				islands: 5,
				activeIsland: 3,
				direction: SCENE.ANIMATE_DOWN,
			};
			animateNextScene(nextScene);
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
				position={ISLANDS.SLOT_POSITIONS[slot]}
			>
				<Portfolio
					position={ISLANDS.PortfolioModelPosition}
					rotation-y={-Math.PI / 2}
				/>
				<Shadow
					scale={2.5}
					opacity={0.75}
					position={[
						ISLANDS.PortfolioModelPosition[0],
						ISLANDS.PortfolioModelPosition[1] - 0.25,
						ISLANDS.PortfolioModelPosition[2],
					]}
				/>
				<IslandPoints />
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.PortfolioTextPosition}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Portfolio
				</Text>
			</group>
		</Float>
	);
};
