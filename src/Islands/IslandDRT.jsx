import React, { useState, useEffect, useRef } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { DRT } from "../Models/DRT.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";
import { useFrame } from "@react-three/fiber";

export const IslandDRT = ({ name }) => {
	const [hovered, setHovered] = useState(false);
	const [togglePoints, setTogglePoints] = useState(false);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

	const targetIsland = useStore((state) => state.targetIsland);
	const activeIsland = useStore((state) => state.activeIsland);
	const setActiveIsland = useStore((state) => state.setActiveIsland);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const currentSlots = useStore((state) => state.currentSlots);
	const updateSlots = useStore((state) => state.updateSlots);
	const getSlotPosition = useStore((state) => state.getSlotPosition);
	const speechBubbleVisible = useStore((state) => state.speechBubbleVisible);
	const displaySpeechBubble = useStore((state) => state.displaySpeechBubble);

	const matRef = useRef();

	const slotPosition = getSlotPosition(currentSlots, name);

	const selectIsland = () => {
		if (currentSlots[SLOTS.MIDDLE] === name) {
			const elem = document.getElementById("speechBubble");
			if (!elem) return;

			if (speechBubbleVisible) {
				displaySpeechBubble(false);
				const elem = document.getElementById("speechBubble");
				if (!elem) return;

				elem.classList.add("d-none");
			}

			elem.classList.add("disabled");

			setVisibleModal(MODALS.ABOUT);
			selectSound.play();
		}
	};

	const pointerOver = () => {
		if (currentSlots[SLOTS.MIDDLE] === name) {
			setHovered(true);
		}
	};

	const pointerOut = () => {
		setHovered(false);
	};

	useCursor(hovered);

	useEffect(() => {
		if (!targetIsland) return;

		if (targetIsland !== name && activeIsland === name) {
			setTogglePoints(true);
		}
	}, [targetIsland]);

	useFrame((state, delta) => {
		if (togglePoints) {
			matRef.current.opacity -= delta * SCENE.FADE_DELAY;
			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 1;
				setTogglePoints(false);
				swapSlots(targetIsland, activeIsland, currentSlots);
				updateSlots(currentSlots);
				setActiveIsland(targetIsland);
				setVisibleModal(MODALS[targetIsland.toUpperCase()]);
				selectSound.play();
			}
		}
	});

	return (
		<Float rotationIntensity={SCENE.rotationIntensity}>
			<group
				visible={slotPosition >= 0}
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
				onClick={selectIsland}
				position={ISLANDS.SLOT_POSITIONS[slotPosition]}
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
