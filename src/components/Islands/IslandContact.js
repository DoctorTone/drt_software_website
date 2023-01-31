import React, { Suspense } from "react";
import { Float, Text } from "@react-three/drei";
import { Island } from "../Island.js";
import { Phone } from "../Phone.js";
import { SCENE } from "../../state/Config.js";

export const IslandContact = () => {
  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <Island position={[-5, 0, 0]} />
      <Suspense fallback={null}>
        <Text
          color="white"
          center
          fontSize={0.2}
          position={[-5.3, 2.75, 0]}
          rotation-y={-Math.PI / 2}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="black">
          Contact
        </Text>
      </Suspense>
      <Phone position={[-5.25, 2.1, -0.15]} scale={0.007} />
    </Float>
  );
};
