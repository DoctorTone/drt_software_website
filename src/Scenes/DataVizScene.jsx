import React from "react";
import { IslandMedViz } from "../Islands/IslandMedViz";
import { IslandBrainViz } from "../Islands/IslandBrainViz";
import { IslandCovidViz } from "../Islands/IslandCovidViz";
import { IslandFinanceViz } from "../Islands/IslandFinanceViz";
import { IslandSleepViz } from "../Islands/IslandSleepViz";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";
import Overlay from "../components/Overlay.jsx";

const DataVizScene = () => {
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
      medical: (
        <IslandMedViz
          name="medical"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      finance: (
        <IslandFinanceViz
          name="finance"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      pandemic: (
        <IslandCovidViz
          name="pandemic"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      realtime: (
        <IslandBrainViz
          name="realtime"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      sleep: (
        <IslandSleepViz
          name="sleep"
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
    </>
  );
};

export default DataVizScene;
