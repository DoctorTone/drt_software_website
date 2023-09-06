import React, { useState, useRef, useEffect } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { IslandPoints } from "./IslandPoints.jsx";
import { Phone } from "../Models/Phone.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandContact = () => {
	const [hovered, setHovered] = useState(false);
	const [togglePoints, setTogglePoints] = useState(false);
	const targetIsland = useStore((state) => state.targetIsland);
	const activeIsland = useStore((state) => state.activeIsland);
	const setActiveIsland = useStore((state) => state.setActiveIsland);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));
	const currentSlots = useStore((state) => state.currentSlots);
	const updateSlots = useStore((state) => state.updateSlots);
	const getSlotPosition = useStore((state) => state.getSlotPosition);
	const swapSlots = useStore((state) => state.swapSlots);

	const matRef = useRef();

	const slotPosition = getSlotPosition(currentSlots, "Contact");

	const selectIsland = () => {
		if (currentSlots[SLOTS.MIDDLE] === "Contact") {
			setVisibleModal(MODALS.CONTACT);
			selectSound.play();
		}
	};

	const pointerOver = () => {
		if (currentSlots[SLOTS.MIDDLE] === "Contact") {
			setHovered(true);
		}
	};

	const pointerOut = () => {
		setHovered(false);
	};

	useCursor(hovered);

	useEffect(() => {
		if (!targetIsland) return;

		if (targetIsland !== "Contact" && activeIsland === "Contact") {
			setTogglePoints(true);
		}
	}, [targetIsland]);

	useFrame((state, delta) => {
		if (togglePoints) {
			matRef.current.opacity -= delta;
			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 1;
				setTogglePoints(false);
				swapSlots(targetIsland, "Contact", currentSlots);
				updateSlots(currentSlots);
				setActiveIsland(targetIsland);
			}
		}
	});

	return (
		<Float rotationIntensity={SCENE.rotationIntensity}>
			<group
				visible={slotPosition >= 0}
				rotation-y={0}
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
				onClick={selectIsland}
				position={ISLANDS.SLOT_POSITIONS[slotPosition]}
			>
				<Phone
					fade={togglePoints}
					position={ISLANDS.ContactModelPosition}
					rotation-y={Math.PI / 2}
					scale={0.007}
				/>
				<Shadow
					scale={1}
					position={[
						ISLANDS.ContactModelPosition[0],
						ISLANDS.ContactModelPosition[1] - 0.5,
						ISLANDS.ContactModelPosition[2],
					]}
				/>
				<IslandPoints showPoints={togglePoints} />
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.ContactTextPosition}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Contact
					<meshBasicMaterial ref={matRef} transparent={true} />
				</Text>
			</group>
		</Float>
	);
};
