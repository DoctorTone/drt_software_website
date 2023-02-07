import React, { Suspense } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { SCENE, ISLANDS } from "../../state/Config.js";

export const IslandVR = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group>
        <Island position={ISLANDS.VRPosition} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={SCENE.FONT_SIZE}
            position={ISLANDS.VRTextPosition}
            rotation-y={ISLANDS.VRTextRotation}
            anchorX="center"
            anchorY="middle"
            outlineWidth={SCENE.FONT_OUTLINE_WIDTH}
            outlineColor="black">
            VR
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
