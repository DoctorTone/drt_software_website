import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { IslandCylinder } from "./IslandCylinder.js";
import { Tablet } from "../Models/Tablet.js";

export const IslandMedViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <IslandCylinder position={ISLANDS.MedVizPosition} />
        <Tablet
          position={ISLANDS.MedVizModelPosition}
          map={"/textures/lightning.jpg"}
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
