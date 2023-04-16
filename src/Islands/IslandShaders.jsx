import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, RoundedBox, Shadow } from "@react-three/drei";
import { Island } from "./Island.jsx";
import { SCENE, ISLANDS } from "../state/Config.js";
import useSound from "use-sound";
import useStore from "../state/store.js";

export const IslandShaders = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showShaderModal = useStore((state) => state.showShaderModal);

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      showShaderModal(true);
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
        onClick={selectIsland}
      >
        <Island position={ISLANDS.ShaderPosition} />
        <RoundedBox position={ISLANDS.ShaderModelPosition} scale={1}>
          <meshStandardMaterial color="grey" />
        </RoundedBox>
        <Shadow
          scale={1.9}
          opacity={0.85}
          position={[
            ISLANDS.ShaderTextPosition[0],
            ISLANDS.ShaderTextPosition[1] - 1.5,
            ISLANDS.ShaderTextPosition[2],
          ]}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.ShaderTextPosition}
            rotation-y={ISLANDS.ShaderTextRotation}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Shaders
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
