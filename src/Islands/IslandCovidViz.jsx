import React, { useState, Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import useStore from "../state/store.js";

export const IslandCovidViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showCovidVizModal = useStore((state) => state.showCovidVizModal);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      selectSound.play();
      showCovidVizModal(true);
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
        <Tablet
          position={ISLANDS.CovidVizModelPosition}
          rotation={[Math.PI, Math.PI * 0.775, -Math.PI * 0.1]}
          map={"/textures/pandemic.jpg"}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.CovidVizTextPosition}
            rotation-y={-Math.PI * 0.25}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Pandemic
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
