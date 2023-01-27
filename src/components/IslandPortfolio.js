import React from "react";
import { Float } from "@react-three/drei";
import { Island } from "./Island.js";
import { Portfolio } from "./Portfolio.js";

export const IslandPortfolio = () => {
  return (
    <Float>
      <Island position={[5, 0, 0]} />
      <Portfolio position={[5, 2, 0]} />
    </Float>
  );
};
