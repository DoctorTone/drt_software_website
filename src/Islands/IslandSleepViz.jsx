import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import useStore from "../state/store.js";

export const IslandSleepViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showSleepVizModal = useStore((state) => state.showSleepVizModal);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      selectSound.play();
      showSleepVizModal(true);
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
          position={ISLANDS.SleepVizModelPosition}
          rotation={[Math.PI, -Math.PI / 2.5, -Math.PI / 8]}
          map={"./textures/sleepData.jpg"}
        />
        <Shadow
          scale={[1.85, 0.55, 1.25]}
          opacity={0.65}
          rotation-z={Math.PI * 0.9}
          position={[
            ISLANDS.SleepVizTextPosition[0] + 0.2,
            ISLANDS.SleepVizTextPosition[1] - 3.1,
            ISLANDS.SleepVizTextPosition[2] - 0.5,
          ]}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.SleepVizTextPosition}
            rotation-y={Math.PI * 0.9}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            Sleep
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
