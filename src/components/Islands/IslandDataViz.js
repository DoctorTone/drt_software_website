import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { SCENE, ISLANDS } from "../../state/Config.js";

export const IslandDataViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <Island position={ISLANDS.DataVizPosition} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.DataVizTextPosition}
            rotation-y={ISLANDS.DataVizTextRotation}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            Data Viz
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
