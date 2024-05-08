import React from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";
import Meteor from "../components/Meteor.jsx";
import { IslandWhy } from "../Islands/IslandWhy.jsx";

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
        <IslandDRT name="about" fadeOut={fadeOutStatus} fadeIn={fadeInStatus} />
      ),
      services: (
        <IslandServices
          name="services"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      contact: (
        <IslandContact
          name="contact"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
        />
      ),
      why: (
        <IslandWhy
          name="why"
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
        <Meteor />
    </>
  );
};

export default MainScene;
