import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { SCENE } from "../../state/Config.js";

export const IslandShaders = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <Island position={[6, 0, 0]} />
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
            Shaders
          </Text>
        </Suspense>
      </group>
    </Float>
  )
};
