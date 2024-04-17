import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandAR } from "../Islands/IslandAR.jsx";
import { IslandShaders } from "../Islands/IslandShaders.jsx";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";
import Overlay from "../components/Overlay.jsx";

const PortfolioScene = () => {
  const targetIsland = useStore((state) => state.targetIsland);
  const activeIsland = useStore((state) => state.activeIsland);
  const transitionPhase = useStore((state) => state.transitionPhase);

  const getIsland = (transition) => {
    let fadeOutStatus = transition === TRANSITIONS.FADE_OUT;
    let fadeInStatus = transition === TRANSITIONS.FADE_IN;
    if (activeIsland === targetIsland) {
      fadeOutStatus = fadeInStatus = false;
    }

    return {
      physics: (
        <IslandPhysics
          name="physics"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      vr: <IslandVR name="vr" fadeOut={fadeOutStatus} fadeIn={fadeInStatus} />,
      ar: <IslandAR name="ar" fadeOut={fadeOutStatus} fadeIn={fadeInStatus} />,
      shaders: (
        <IslandShaders
          name="shaders"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
    };
  };

  return (
    <>
      {transitionPhase === TRANSITIONS.FADE_OUT
        ? getIsland(transitionPhase)[activeIsland]
        : getIsland(transitionPhase)[targetIsland]}
    </>
  );
};

export default PortfolioScene;
