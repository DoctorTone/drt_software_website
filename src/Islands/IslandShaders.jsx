import React, { useState, useRef, useEffect } from "react";
import { Float, Text, useCursor, RoundedBox, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { useFrame } from "@react-three/fiber";
import { SCENE, ISLANDS, MATERIALS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandShaders = ({ islandNumber }) => {
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

	const matRef = useRef();
	const boxRef = useRef();

	const slotPosition = getSlotPosition(currentSlots, "Shaders");

	const selectIsland = () => {
		if (currentSlots[SLOTS.MIDDLE] === "Shaders") {
			setVisibleModal(MODALS.SHADER);
			selectSound.play();
		}
	};

	const pointerOver = () => {
		if (currentSlots[SLOTS.MIDDLE] === "Shaders") {
			setHovered(true);
		}
	};

	const pointerOut = () => {
		setHovered(false);
	};

	useCursor(hovered);

	useEffect(() => {
		if (!targetIsland) return;

		if (targetIsland !== "Shaders" && activeIsland === "Shaders") {
			setTogglePoints(true);
		}
	}, [targetIsland]);

	useFrame((state, delta) => {
		if (togglePoints) {
			matRef.current.opacity -= delta;
			boxRef.current.opacity -= delta;
			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 1;
				boxRef.current.opacity = 1;
				setTogglePoints(false);
				swapSlots(targetIsland, "Shaders", currentSlots);
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
				<RoundedBox fade={togglePoints} position={ISLANDS.ShaderModelPosition}>
					<meshLambertMaterial
						ref={boxRef}
						transparent={true}
						color={0x777777}
					/>
				</RoundedBox>
				<Shadow
					scale={1.9}
					opacity={0.85}
					position={[
						ISLANDS.ShaderTextPosition[0],
						ISLANDS.ShaderTextPosition[1] - 1.5,
						ISLANDS.ShaderTextPosition[2],
					]}
				/>
				<IslandPoints showPoints={togglePoints} />
				<Text
					color="white"
					center
					fontSize={SCENE.FONT_SIZE}
					position={ISLANDS.ShaderTextPosition}
					anchorX="center"
					anchorY="middle"
					outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
					outlineColor="black"
				>
					Shaders
					<meshBasicMaterial ref={matRef} transparent={true} />
				</Text>
			</group>
		</Float>
	);
};
