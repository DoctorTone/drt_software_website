import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { SCENE, ISLANDS } from "../../state/Config.js";

export const IslandTech = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <Island position={ISLANDS.TechPosition} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={0.2}
            position={[6, 3, 0]}
            rotation-y={Math.PI / 2}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="black">
            Tech
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
