import React from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";

const MainScene = () => {
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
      about: (
        <IslandDRT name="About" fadeOut={fadeOutStatus} fadeIn={fadeInStatus} />
      ),
      services: (
        <IslandServices
          name="Services"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      contact: (
        <IslandContact
          name="Contact"
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

export default MainScene;
