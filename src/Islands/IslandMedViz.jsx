import React, { Suspense, useState } from "react";
import { Float, Text, useCursor, Shadow } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";
import useStore from "../state/store.js";

export const IslandMedViz = ({ islandNumber }) => {
  const [hovered, setHovered] = useState(false);
  const activeIsland = useStore((state) => state.activeIsland);
  const showMedVizModal = useStore((state) => state.showMedVizModal);
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const selectIsland = () => {
    if (activeIsland === islandNumber) {
      selectSound.play();
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

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        {/* <IslandCylinder position={ISLANDS.MedVizPosition} /> */}
        {/* <IslandOuterCylinder
          position={[
            ISLANDS.MedVizPosition[0],
            ISLANDS.MedVizPosition[1] - 0.25,
            ISLANDS.MedVizPosition[2],
          ]}
        /> */}
        <Tablet
          position={ISLANDS.MedVizModelPosition}
          rotation={[Math.PI, 0, -Math.PI / 8]}
          map={"/textures/volumeRender.jpg"}
        />
        <Shadow
          scale={[0.65, 1.55, 1.25]}
          opacity={0.65}
          position={[
            ISLANDS.MedVizTextPosition[0] + 0.5,
            ISLANDS.MedVizTextPosition[1] - 2.8,
            ISLANDS.MedVizTextPosition[2],
          ]}
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
