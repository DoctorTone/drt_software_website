import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { SCENE, ISLANDS } from "../state/Config.js";
import { Tablet } from "../Models/Tablet.jsx";

export const IslandCovidViz = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        {/* <IslandCylinder position={ISLANDS.CovidVizPosition} /> */}
        <Tablet
          position={ISLANDS.CovidVizModelPosition}
          rotation={[Math.PI, Math.PI, -Math.PI / 8]}
          map={"/textures/pandemic.jpg"}
        />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.CovidVizTextPosition}
            rotation-y={-Math.PI / 2}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            Pandemic
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
