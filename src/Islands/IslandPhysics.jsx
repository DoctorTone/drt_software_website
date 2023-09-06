import React, { useState, useRef, useEffect } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { useFrame } from "@react-three/fiber";
import { Physics } from "../Models/Physics.jsx";
import { SCENE, ISLANDS, MODALS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandPhysics = ({ islandNumber }) => {
	const [hovered, setHovered] = useState(false);
	const [togglePoints, setTogglePoints] = useState(false);
	const targetIsland = useStore((state) => state.targetIsland);
	const activeIsland = useStore((state) => state.activeIsland);
	const setVisibleModal = useStore((state) => state.setVisibleModal);
	const [selectSound] = useState(() => new Audio("./sounds/select.wav"));
	const currentSlots = useStore((state) => state.currentSlots);
	const updateSlots = useStore((state) => state.updateSlots);
	const getSlotPosition = useStore((state) => state.getSlotPosition);
	const swapSlots = useStore((state) => state.swapSlots);

	const matRef = useRef();

	const slotPosition = getSlotPosition(currentSlots, "Physics");

	const selectIsland = () => {
		if (currentSlots[SLOTS.MIDDLE] === "Physics") {
			setVisibleModal(MODALS.PHYSICS);
			selectSound.play();
		}
	};

	const pointerOver = () => {
		if (currentSlots[SLOTS.MIDDLE] === "Physics") {
			setHovered(true);
		}
	};

	const pointerOut = () => {
		setHovered(false);
	};

	useCursor(hovered);

	useEffect(() => {
		if (!targetIsland) return;

		if (targetIsland !== "Physics" && activeIsland === "Physics") {
			setTogglePoints(true);
		}
	}, [targetIsland]);

	useFrame((state, delta) => {
		if (togglePoints) {
			matRef.current.opacity -= delta;
			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 1;
				setTogglePoints(false);
				swapSlots(targetIsland, "Physics", currentSlots);
				updateSlots(currentSlots);
				setActiveIsland(targetIsland);
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
				<Physics
					position={ISLANDS.PhysicsModelPosition}
					scale={0.125}
					rotation-y={Math.PI / 2}
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
				<IslandPoints showPoints={togglePoints} />
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.PhysicsTextPosition}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Physics
					<meshBasicMaterial ref={matRef} transparent={true} />
				</Text>
			</group>
		</Float>
	);
};
