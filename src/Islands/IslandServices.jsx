import React, { Suspense, useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { IslandPoints } from "./IslandPoints.jsx";
import { Work } from "../Models/Work.jsx";
import { SCENE, ISLANDS, MODALS, SLOTS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandServices = ({ slot }) => {
  const [hovered, setHovered] = useState(false);
  const [togglePoints, setTogglePoints] = useState(false);
  const targetIsland = useStore((state) => state.targetIsland);
  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));
  const currentSlots = useStore((state) => state.currentSlots);
  const updateSlots = useStore((state) => state.updateSlots);
  const getSlotPosition = useStore((state) => state.getSlotPosition);
  const swapSlots = useStore((state) => state.swapSlots);

  const matRef = useRef();

  const slotPosition = getSlotPosition(currentSlots, "Services");

  const selectIsland = () => {
    if (currentSlots[SLOTS.MIDDLE] === "Services") {
      setVisibleModal(MODALS.SERVICES);
      selectSound.play();
    }
  };

  const pointerOver = () => {
    if (currentSlots[SLOTS.MIDDLE] === "Services") {
      setHovered(true);
    }
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useCursor(hovered);

  useEffect(() => {
    if (!targetIsland) return;

    if (targetIsland !== "Services") {
      setTogglePoints(true);
    }
  }, [targetIsland]);

  useFrame((state, delta) => {
    if (togglePoints) {
      matRef.current.opacity -= delta;
      if (matRef.current.opacity < 0) {
        matRef.current.opacity = 1;
        setTogglePoints(false);
        swapSlots(targetIsland, "Services", currentSlots);
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
        <Work
          fade={togglePoints}
          rotation-y={Math.PI / 2}
          scale={0.1}
          position={ISLANDS.ServicesModelPosition}
        />
        <Shadow
          scale={1}
          position={[
            ISLANDS.ServicesModelPosition[0],
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
