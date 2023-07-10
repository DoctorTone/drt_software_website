import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { DataViz } from "../Models/DataViz.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandDataViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const animateNextScene = useStore((state) => state.animateNextScene);
  const [selectSound] = useState(() => new Audio("./sounds/select.mp3"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      selectSound.play();
      const nextScene = {
        level: SCENE.LEVEL_2,
        scene: "dataviz",
        islands: 5,
        activeIsland: 3,
        direction: SCENE.ANIMATE_DOWN,
      };
      animateNextScene(nextScene);
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
        <Island position={ISLANDS.DataVizPosition} />
        <DataViz
          position={ISLANDS.DataVizModelPosition}
          rotation-y={Math.PI / 2}
          scale={0.15}
        />
        <Shadow
          scale={1.5}
          opacity={0.85}
          position={[
            ISLANDS.DataVizTextPosition[0],
            ISLANDS.DataVizTextPosition[1] - 1.5,
            ISLANDS.DataVizTextPosition[2],
          ]}
        />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.DataVizTextPosition}
          rotation-y={ISLANDS.DataVizTextRotation}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black"
        >
          Data Viz
        </Text>
      </group>
    </Float>
  );
};
