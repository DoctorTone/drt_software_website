import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import useSound from "use-sound";
import useStore from "../state/store.js";

export const IslandBrainViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showRealTimeModal = useStore((state) => state.showRealTimeModal);

  const selectIsland = () => {
    // DEBUG
    console.log("Active = ", activeIsland);
    if (activeIsland === islandNumber) {
      play();
      showRealTimeModal(true);
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
        <Tablet
          position={ISLANDS.BrainVizModelPosition}
          rotation={[Math.PI, -Math.PI / 2, -Math.PI / 8]}
          map={"/textures/brainVisualisation.jpg"}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.BrainVizTextPosition}
            rotation-y={Math.PI}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Real-Time
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
