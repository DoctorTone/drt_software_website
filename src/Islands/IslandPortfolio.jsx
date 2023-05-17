import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Portfolio } from "../Models/Portfolio.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useStore from "../state/store.js";

export const IslandPortfolio = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const animateNextScene = useStore((state) => state.animateNextScene);
  const activeIsland = useStore((state) => state.activeIsland);
  const [selectSound] = useState(() => new Audio("./sounds/select.mp3"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      selectSound.play();
      const nextScene = {
        level: SCENE.LEVEL_1,
        scene: "portfolio",
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
        onClick={selectIsland}>
        <Portfolio position={ISLANDS.PortfolioModelPosition} />
        <Shadow
          scale={2.5}
          opacity={0.75}
          position={[
            ISLANDS.PortfolioModelPosition[0],
            ISLANDS.PortfolioModelPosition[1] - 0.25,
            ISLANDS.PortfolioModelPosition[2],
          ]}
        />
        <Island position={ISLANDS.PortfolioPosition} />
        <Text
          color="white"
          center
          fontSize={SCENE.FONT_SIZE}
          position={ISLANDS.PortfolioTextPosition}
          rotation-y={Math.PI / 2}
          anchorX="center"
          anchorY="middle"
          outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
          outlineColor="black">
          Portfolio
        </Text>
      </group>
    </Float>
  );
};
