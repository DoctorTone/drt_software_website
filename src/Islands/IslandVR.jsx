import React, { useState, useEffect, useRef } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { IslandPoints } from "./IslandPoints.jsx";
import { VR } from "../Models/VR.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import { swapSlots } from "../state/Utils.js";
import useStore from "../state/store.js";

export const IslandVR = ({ name }) => {
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
      setVisibleModal(MODALS.VR);
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
        // DEBUG
        console.log("Target = ", targetIsland);
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
        <VR
          fade={togglePoints}
          position={ISLANDS.VRModelPosition}
          rotation-y={Math.PI / 6}
          scale={0.6}
        />
        <Shadow
          scale={1.65}
          opacity={0.85}
          position={[
            ISLANDS.VRTextPosition[0],
            ISLANDS.VRTextPosition[1] - 1.5,
            ISLANDS.VRTextPosition[2],
          ]}
        />
        <IslandPoints showPoints={togglePoints} />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.VRTextPosition}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          VR
          <meshBasicMaterial ref={matRef} transparent={true} />
        </Text>
      </group>
    </Float>
  );
};
