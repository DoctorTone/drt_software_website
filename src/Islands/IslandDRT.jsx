import React, { useState, useEffect, useRef } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { DRT } from "../Models/DRT.jsx";
import { TreePoints } from "../Models/TreePoints.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";
import { useFrame } from "@react-three/fiber";

export const IslandDRT = ({ slot }) => {
	const [hovered, setHovered] = useState(false);
	const [togglePoints, setTogglePoints] = useState(false);
	const targetIsland = useStore((state) => state.targetIsland);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

	const matRef = useRef();

	const selectIsland = () => {
		if (slot === 0) {
			setVisibleModal(MODALS.ABOUT);
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

	useEffect(() => {
		if (!targetIsland) return;

		if (targetIsland !== "About") {
			setTogglePoints(true);
		}
	}, [targetIsland]);

	useFrame((state, delta) => {
		if (togglePoints) {
			matRef.current.opacity -= delta;
			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 0;
				matRef.current.opacity = 1;
				setTogglePoints(false);
			}
		}
	});
	return (
		<Float rotationIntensity={SCENE.rotationIntensity}>
			<group
				visible={slot >= 0}
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
				onClick={selectIsland}
				position={ISLANDS.SLOT_POSITIONS[slot]}
			>
				<DRT fade={togglePoints} position={ISLANDS.DRTModelPosition} />
				<Shadow
					scale={1.5}
					opacity={0.65}
					position={[
						ISLANDS.DRTModelPosition[0],
						ISLANDS.DRTModelPosition[1] - 0.5,
						ISLANDS.DRTModelPosition[2],
					]}
				/>
				<IslandPoints showPoints={togglePoints} />
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
					<meshBasicMaterial ref={matRef} transparent={true} />
				</Text>
			</group>
		</Float>
	);
};
