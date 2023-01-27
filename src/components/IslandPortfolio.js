import React, { Suspense } from "react";
import { Float, Text } from "@react-three/drei";
import { Island } from "./Island.js";
import { Portfolio } from "./Portfolio.js";
import useStore from "../state/store.js";

export const IslandPortfolio = () => {
  const rotationIntensity = useStore((state) => state.rotationIntensity);

  return (
    <Float rotationIntensity={rotationIntensity}>
      <Island position={[5, 0, 0]} />
      <Portfolio position={[5, 2, 0]} />
      <Suspense fallback={null}>
        <Text
          color="white"
          center
          fontSize={0.2}
          position={[5, 3.25, 0]}
          rotation-y={Math.PI / 2}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black">
          Portfolio
        </Text>
      </Suspense>
    </Float>
  );
};
