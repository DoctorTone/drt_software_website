import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { IslandCylinder } from "./IslandCylinder.js";
import { Tablet } from "../Models/Tablet.js";

export const IslandFinanceViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <IslandCylinder
          position={ISLANDS.FinanceVizPosition}
          rotation-y={Math.PI / 2}
        />
        <Tablet
          position={ISLANDS.FinanceVizModelPosition}
          rotation={[Math.PI, Math.PI / 2, -Math.PI / 8]}
          map={"/textures/FTSEViz.jpg"}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.FinanceVizTextPosition}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            Financial
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
