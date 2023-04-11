import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { Keyboard } from "../Models/Keyboard.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useSound from "use-sound";
import useStore from "../state/store.js";

export const IslandTech = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      play();
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
  const [play] = useSound("./sounds/select.wav", { volume: 0.25 });

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Island position={ISLANDS.TechPosition} />
        <Keyboard
          position={ISLANDS.TechModelPosition}
          scale={5}
          rotation={[0.75, -1, 0.75]}
        />
        <Shadow
          scale={1.75}
          opacity={0.65}
          position={[
            ISLANDS.TechTextPosition[0],
            ISLANDS.TechTextPosition[1] - 1.35,
            ISLANDS.TechTextPosition[2],
          ]}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.TechTextPosition}
            rotation-y={ISLANDS.TechTextRotation}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            Tech
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
