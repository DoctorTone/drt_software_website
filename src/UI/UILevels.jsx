import React, { useState, useEffect } from "react";
import LandingText from "./LandingText";
import Bubble from "../components/Bubble";
import { SocialUI } from "../UI/SocialUI.jsx";
import { CopyrightUI } from "../UI/CopyrightUI.jsx";
import { InfoUI } from "../UI/InfoUI.jsx";
import { DayMode } from "./DayMode.jsx";
import { NavigationUI } from "./NavigationUI.jsx";
import { LevelsMenu } from "./LevelsMenu.jsx";
import { NavState } from "./NavState.jsx";

const BUBBLE_TIME = 5 * 1000;

const UILevels = ({ levelName }) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const [levelsActive, setLevelsActive] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  const toggleOptionsMenu = (menuActive) => {
    setOptionsActive(menuActive);
    if (menuActive && levelsActive) {
      setLevelsActive(false);
    }
  };
  const toggleLevelsMenu = (menuActive) => {
    setLevelsActive(menuActive);
    if (menuActive && optionsActive) {
      setOptionsActive(false);
    }
  };

  useEffect(() => {
    if (levelName === "Main") {
      setTimeout(() => {
        setShowBubble(false);
      }, BUBBLE_TIME);
    }
  }, [levelName]);

  switch (levelName) {
    case "Landing":
      return <LandingText />;
      break;

    case "Main":
      return (
        <>
          <DayMode />
          <CopyrightUI />
          <InfoUI />
          <SocialUI />
          <NavigationUI />
          <NavState />
          <LevelsMenu />
          {showBubble && <Bubble />}
        </>
      );
      break;

    case "Portfolio":
      return (
        <>
          <DayMode />
          <CopyrightUI />
          <InfoUI />
          <SocialUI />
          <NavigationUI />
          <NavState />
          <LevelsMenu />
        </>
      );
      break;

    case "DataViz":
      return (
        <>
          <DayMode />
          <CopyrightUI />
          <InfoUI />
          <SocialUI />
          <NavigationUI />
          <NavState />
          <LevelsMenu />
        </>
      );
      break;

    default:
      return null;
  }
};

export default UILevels;
