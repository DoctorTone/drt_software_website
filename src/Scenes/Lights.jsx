import React from "react";
import { SCENE } from "../state/Config.js";
import useStore from "../state/store.js";

const Lights = () => {
  const dayMode = useStore((state) => state.dayMode);
  return (
    <>
      {dayMode ? (
        <>
          <ambientLight intensity={SCENE.ambientIntensity} />
          <pointLight position={SCENE.lightPosition} />{" "}
        </>
      ) : null}
    </>
  );
};

export default Lights;
