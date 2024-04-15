import React, { Suspense, useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Work } from "../Models/Work.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandServices = ({ name }) => {
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
    setVisibleModal(MODALS.SERVICES);
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
        position={ISLANDS.SLOT_POSITIONS[1]}
      >
        <Work
          fade={togglePoints}
          rotation-y={Math.PI / 2}
          scale={0.1}
          position={ISLANDS.ServicesModelPosition}
        />
        <Shadow
          scale={1}
          position={[
            0,
            ISLANDS.ServicesModelPosition[1] - 0.5,
            ISLANDS.ServicesModelPosition[2],
          ]}
        />
        <IslandPoints showPoints={togglePoints} />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.ServicesTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Services
          <meshBasicMaterial ref={matRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
