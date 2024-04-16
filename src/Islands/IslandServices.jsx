import React, { Suspense, useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Work } from "../Models/Work.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandServices = ({ name, fadeIn, fadeOut }) => {
  const [hovered, setHovered] = useState(false);
  const [togglePoints, setTogglePoints] = useState(false);

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  const targetIsland = useStore((state) => state.targetIsland);
  const activeIsland = useStore((state) => state.activeIsland);
  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const currentSlots = useStore((state) => state.currentSlots);
  const updateSlots = useStore((state) => state.updateSlots);
  const getSlotPosition = useStore((state) => state.getSlotPosition);
  const speechBubbleVisible = useStore((state) => state.speechBubbleVisible);
  const displaySpeechBubble = useStore((state) => state.displaySpeechBubble);

  const textRef = useRef();

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

  useFrame((state, delta) => {
    if (fadeOutEnabled) {
      textRef.current.opacity -= delta * SCENE.FADE_DELAY;
      if (textRef.current.opacity < 0) {
        textRef.current.opacity = 0;
        fadeOutEnabled = false;
      }
    }
    if (fadeInEnabled) {
      textRef.current.opacity += delta * SCENE.FADE_DELAY;
      if (textRef.current.opacity >= 1) {
        textRef.current.opacity = 1;
        fadeInEnabled = false;
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
          fadeIn={fadeIn}
          fadeOut={fadeOut}
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
          <meshBasicMaterial ref={textRef} transparent={true} opacity={0} />
        </Text>
      </group>
    </Float>
  );
};
