import React, { useState, useRef, useEffect } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { IslandPoints } from "./IslandPoints.jsx";
import { Phone } from "../Models/Phone.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandContact = ({ name }) => {
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
    setVisibleModal(MODALS.CONTACT);
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
        rotation-y={0}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}
        position={ISLANDS.SLOT_POSITIONS[1]}
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
