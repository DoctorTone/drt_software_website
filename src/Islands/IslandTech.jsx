import React, { useState, useRef, useEffect } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { useFrame } from "@react-three/fiber";
import { Keyboard } from "../Models/Keyboard.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandTech = ({ name }) => {
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

  const slotPosition = getSlotPosition(currentSlots, name);

  const selectIsland = () => {
    if (currentSlots[SLOTS.MIDDLE] === name) {
      setVisibleModal(MODALS.TECH);
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
      matRef.current.opacity -= delta;
      if (matRef.current.opacity < 0) {
        matRef.current.opacity = 1;
        setTogglePoints(false);
        swapSlots(targetIsland, name, currentSlots);
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
        <Keyboard
          fade={togglePoints}
          position={ISLANDS.TechModelPosition}
          scale={5}
          rotation={[0.75, 0, 0]}
        />
        <Shadow
          scale={1.75}
          opacity={0.65}
          position={[
            ISLANDS.TechTextPosition[0],
            ISLANDS.TechTextPosition[1] - 1.35,
            ISLANDS.TechTextPosition[2],
          ]}
        />
        <IslandPoints showPoints={togglePoints} />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.TechTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Tech
          <meshBasicMaterial ref={matRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
