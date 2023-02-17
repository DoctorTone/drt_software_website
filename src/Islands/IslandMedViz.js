import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { IslandCylinder } from "./IslandCylinder.js";
import { IslandOuterCylinder } from "./IslandOuterCylinder.js";
import { Tablet } from "../Models/Tablet.js";
import useSound from "use-sound";
import useStore from "../state/store.js";

export const IslandMedViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showMedVizModal = useStore((state) => state.showMedVizModal);

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      play();
      showMedVizModal(true);
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
        <IslandCylinder position={ISLANDS.MedVizPosition} />
        <IslandOuterCylinder
          position={[
            ISLANDS.MedVizPosition[0],
            ISLANDS.MedVizPosition[1] - 0.25,
            ISLANDS.MedVizPosition[2],
          ]}
        />
        <Tablet
          position={ISLANDS.MedVizModelPosition}
          rotation={[Math.PI, 0, -Math.PI / 8]}
          map={"/textures/volumeRender.jpg"}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.MedVizTextPosition}
            rotation-y={Math.PI / 2}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            Medical
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
