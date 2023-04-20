import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { IslandCylinder } from "./IslandCylinder.jsx";
import { Tablet } from "../Models/Tablet.jsx";

export const IslandFinanceViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        {/* <IslandCylinder
          position={ISLANDS.FinanceVizPosition}
          rotation-y={Math.PI / 2}
        /> */}
        <Tablet
          position={ISLANDS.FinanceVizModelPosition}
          rotation={[Math.PI, Math.PI * 0.375, -Math.PI * 0.1]}
          map={"/textures/FTSEViz.jpg"}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.FinanceVizTextPosition}
            rotation-y={Math.PI * 0.15}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black"
          >
            Financial
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
