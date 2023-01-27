import React from "react";
import { Float } from "@react-three/drei";
import { Island } from "./Island.js";
import { Phone } from "./Phone.js";

export const IslandContact = () => {
  return (
    <Float>
      <Island position={[-5, 0, 0]} />
      <Phone position={[-5, 2, 0]} scale={0.01} />
    </Float>
  );
};
