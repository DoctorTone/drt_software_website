import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandAR } from "../Islands/IslandAR.jsx";
import { IslandEffects } from "../Islands/IslandEffects.jsx";
import { IslandEditor } from "../Islands/IslandEditor.jsx";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";
import { IslandPerformance } from "../Islands/IslandPerformance.jsx";
import { IslandConfigurator } from "../Islands/IslandConfigurator.jsx";

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
      effects: (
        <IslandEffects
          name="effects"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      editor: (
        <IslandEditor
          name="editor"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      performance: (
        <IslandPerformance
          name="performance"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      configurator: (
        <IslandConfigurator
          name="configurator"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      ar: <IslandAR name="ar" fadeOut={fadeOutStatus} fadeIn={fadeInStatus} />,
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
