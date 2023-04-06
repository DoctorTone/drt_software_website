import React from "react";
import { Sphere, Environment } from "@react-three/drei";
import { SCENE } from "../state/Config.js";

export const IslandCylinder = (props) => {
  return (
    <>
      <Environment
        background={false}
        // files={"textures/trekker_monument_1k.hdr"}
        preset={"forest"}
      />
      <group {...props} dispose={null} rotation-x={Math.PI / 2}>
        <mesh>
          <Sphere args={[0.2]}>
            <meshPhysicalMaterial
              color={0xdfe6f2}
              transmission={1}
              roughness={0.2}
              thickness={15}
              envMapIntensity={5}
            />
          </Sphere>
        </mesh>
      </group>
    </>
  );
};
