import React, { useState, Suspense } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import useStore from "../state/store.js";

export const IslandFinanceViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showFinanceVizModal = useStore((state) => state.showFinanceVizModal);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      selectSound.play();
      showFinanceVizModal(true);
    }
  };

  const pointerOver = () => {
    if (activeIsland === islandNumber) {
      setHovered(true);
    }
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useCursor(hovered);

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Tablet
          position={ISLANDS.FinanceVizModelPosition}
          rotation={[Math.PI, Math.PI * 0.375, -Math.PI * 0.1]}
          map={"./textures/FTSEViz.jpg"}
        />
        <Shadow
          scale={[1.85, 0.55, 1.25]}
          opacity={0.65}
          rotation-z={Math.PI * 1.1}
          position={[
            ISLANDS.FinanceVizTextPosition[0] + 0.1,
            ISLANDS.FinanceVizTextPosition[1] - 2.875,
            ISLANDS.FinanceVizTextPosition[2] + 0.4,
          ]}
        />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.FinanceVizTextPosition}
          rotation-y={Math.PI * 0.15}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black">
          Financial
        </Text>
      </group>
    </Float>
  );
};
