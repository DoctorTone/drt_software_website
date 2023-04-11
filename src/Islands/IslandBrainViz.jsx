import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { IslandCylinder } from "./IslandCylinder.jsx";
import { Tablet } from "../Models/Tablet.jsx";

export const IslandBrainViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        {/* <IslandCylinder
          position={ISLANDS.BrainVizPosition}
          rotation-y={Math.PI / 2}
        /> */}
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
            outlineColor="black">
            Real-Time
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
