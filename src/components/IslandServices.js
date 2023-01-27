import React, { Suspense } from "react";
import { Float, Text } from "@react-three/drei";
import { Island } from "./Island.js";
import { Work } from "./Work.js";
import useStore from "../state/store.js";

export const IslandServices = () => {
  const rotationIntensity = useStore((state) => state.rotationIntensity);

  return (
    <Float rotationIntensity={rotationIntensity}>
      <Island position={[0, 0, -5]} />
      <Work rotation-y={Math.PI / 2} scale={0.1} position={[0, 2.15, -5.25]} />
      <Suspense fallback={null}>
        <Text
          color="white"
          center
          fontSize={0.2}
          position={[0, 2.85, -5.25]}
          rotation-y={Math.PI}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black">
          Services
        </Text>
      </Suspense>
    </Float>
  );
};
