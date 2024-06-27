import React from "react";
import { SCENE } from "../state/Config.js";
import useStore from "../state/store.js";
import { Box, SpotLight } from "@react-three/drei";

const Lights = () => {
  const dayMode = useStore((state) => state.dayMode);
  SCENE.spotlightTarget.position.set(0, 0, 6.25);
  return (
    <>
      {dayMode ? (
        <>
          <ambientLight intensity={SCENE.ambientIntensity} />
          <pointLight position={SCENE.lightPosition} />{" "}
        </>
      ) : (
        <>
          <SpotLight
            position={SCENE.spotlightPosition}
            target={SCENE.spotlightTarget}
            angle={0.7}
          />
          <Box position={SCENE.spotlightPosition.position} scale={0.1} />
        </>
      )}
    </>
  );
};

export default Lights;
