import React from "react";
import { IslandPhysics } from "../Islands/IslandPhysics.jsx";
import { IslandVR } from "../Islands/IslandVR.jsx";
import { IslandAR } from "../Islands/IslandAR.jsx";
import { IslandEffects } from "../Islands/IslandEffects.jsx";
import { IslandEditor } from "../Islands/IslandEditor.jsx";
import { IslandSpace } from "../Islands/IslandSpace.jsx";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";
import { IslandPerformance } from "../Islands/IslandPerformance.jsx";
import { IslandConfigurator } from "../Islands/IslandConfigurator.jsx";
import Meteor from "../components/Meteor.jsx";

const PortfolioScene = () => {
  const targetIsland = useStore((state) => state.targetIsland);
  const activeIsland = useStore((state) => state.activeIsland);
  const transitionPhase = useStore((state) => state.transitionPhase);
  const currentDirection = useStore((state) => state.currentDirection);

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
          direction={currentDirection}
        />
      ),
      vr: (
        <IslandVR
          name="vr"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      effects: (
        <IslandEffects
          name="effects"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      editor: (
        <IslandEditor
          name="editor"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      performance: (
        <IslandPerformance
          name="performance"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      space: (
        <IslandSpace
          name="space"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      configurator: (
        <IslandConfigurator
          name="configurator"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      ar: (
        <IslandAR
          name="ar"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
    };
  };

  return (
    <>
      {transitionPhase === TRANSITIONS.FADE_OUT
        ? getIsland(transitionPhase)[activeIsland]
        : getIsland(transitionPhase)[targetIsland]}
      <Meteor />
    </>
  );
};

export default PortfolioScene;
