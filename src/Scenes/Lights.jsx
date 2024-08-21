import React from "react";
import { SCENE } from "../state/Config.js";
import useStore from "../state/store.js";
import { SpotLight } from "@react-three/drei";

const Lights = ({ level }) => {
  const dayMode = useStore((state) => state.dayMode);
  SCENE.spotlightTarget.position.set(0, 0, 6.25);
  return (
    <>
      {dayMode ? (
        <>
          <ambientLight intensity={SCENE.ambientIntensity} />
          <pointLight position={SCENE.lightPosition} />
        </>
      ) : (
        <>
          <SpotLight
            position={SCENE.spotlightPosition[level]}
            target={SCENE.spotlightTarget}
            angle={0.6}
            intensity={5}
          />
        </>
      )}
    </>
  );
};

export default Lights;
