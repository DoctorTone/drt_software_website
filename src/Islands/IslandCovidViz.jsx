import React, { useState, Suspense } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
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
        onClick={selectIsland}>
        <Tablet
          position={ISLANDS.CovidVizModelPosition}
          rotation={[Math.PI, Math.PI * 0.775, -Math.PI * 0.1]}
          map={"./textures/pandemic.jpg"}
        />
        <Shadow
          scale={[2, 1, 1]}
          opacity={0.65}
          rotation-z={Math.PI * 0.75}
          position={[
            ISLANDS.CovidVizTextPosition[0] - 0.4,
            ISLANDS.CovidVizTextPosition[1] - 3,
            ISLANDS.CovidVizTextPosition[2] + 0.4,
          ]}
        />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.CovidVizTextPosition}
          rotation-y={-Math.PI * 0.25}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black">
          Pandemic
        </Text>
      </group>
    </Float>
  );
};
