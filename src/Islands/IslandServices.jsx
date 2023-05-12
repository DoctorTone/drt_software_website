import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Work } from "../Models/Work.jsx";
import { Flag } from "../Models/Flag.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandServices = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const showServicesModal = useStore((state) => state.showServicesModal);
  const activeIsland = useStore((state) => state.activeIsland);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      showServicesModal(true);
      selectSound.play();
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
        onClick={selectIsland}
      >
        <Work
          rotation-y={Math.PI / 2}
          scale={0.1}
          position={ISLANDS.ServicesModelPosition}
        />
        <Flag
          scale={0.425}
          position={[
            ISLANDS.ServicesModelPosition[0] + 1,
            ISLANDS.ServicesModelPosition[1] - 0.5,
            ISLANDS.ServicesModelPosition[2] - 0.6,
          ]}
        />
        <Shadow
          scale={1}
          position={[
            ISLANDS.ServicesModelPosition[0],
            ISLANDS.ServicesModelPosition[1] - 0.5,
            ISLANDS.ServicesModelPosition[2],
          ]}
        />
        <Island position={ISLANDS.ServicesPosition} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.ServicesTextPosition}
            rotation-y={Math.PI}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Services
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
