import React, { Suspense } from "react";
import { Float, Text } from "@react-three/drei";
import { Island } from "./Island.js";
import { Phone } from "./Phone.js";

export const IslandContact = () => {
  return (
    <Float>
      <Island position={[-5, 0, 0]} />
      <Suspense fallback={null}>
        <Text
          color="white"
          center
          fontSize={0.2}
          position={[-5, 2.5, 0]}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black">
          Contact
        </Text>
      </Suspense>
      <Phone position={[-5, 2, 0]} scale={0.01}></Phone>
    </Float>
  );
};
