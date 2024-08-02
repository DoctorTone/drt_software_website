import React from "react";
import { IslandDRT } from "../Islands/IslandDRT.jsx";
import { IslandServices } from "../Islands/IslandServices.jsx";
import { IslandContact } from "../Islands/IslandContact.jsx";
import { IslandProjects } from "../Islands/IslandProjects.jsx";
import { IslandTech } from "../Islands/IslandTech.jsx";
import useStore from "../state/store.js";
import { TRANSITIONS } from "../state/Config.js";
import Meteor from "../components/Meteor.jsx";
import { IslandWhy } from "../Islands/IslandWhy.jsx";

const MainScene = () => {
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
      about: (
        <IslandDRT
          name="about"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      services: (
        <IslandServices
          name="services"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      contact: (
        <IslandContact
          name="contact"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      why: (
        <IslandWhy
          name="why"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      projects: (
        <IslandProjects
          name="projects"
          fadeOut={fadeOutStatus}
          fadeIn={fadeInStatus}
          direction={currentDirection}
        />
      ),
      tech: (
        <IslandTech
          name="tech"
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

export default MainScene;
