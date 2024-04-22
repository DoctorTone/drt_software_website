import React, { useState, useEffect } from "react";
import LandingText from "./LandingText";
import CircularOptionsMainMenu from "./CircularOptionsMainMenu";
import CircularOptionsPortfolioMenu from "./CircularOptionsPortfolioMenu";
import CircularOptionsDataVizMenu from "./CircularOptionsDataVizMenu";
import CircularLevelsMenu from "./CircularLevelsMenu";
import Bubble from "../components/Bubble";

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
          <CircularOptionsMainMenu
            onToggle={toggleOptionsMenu}
            open={optionsActive}
          />
          <CircularLevelsMenu onToggle={toggleLevelsMenu} open={levelsActive} />
          {showBubble && <Bubble />}
        </>
      );
      break;

    case "Portfolio":
      return (
        <>
          <CircularOptionsPortfolioMenu
            onToggle={toggleOptionsMenu}
            open={optionsActive}
          />
          <CircularLevelsMenu onToggle={toggleLevelsMenu} open={levelsActive} />
        </>
      );
      break;

    case "DataViz":
      return (
        <>
          <CircularOptionsDataVizMenu
            onToggle={toggleOptionsMenu}
            open={optionsActive}
          />
          <CircularLevelsMenu onToggle={toggleLevelsMenu} open={levelsActive} />
        </>
      );
      break;

    default:
      return null;
  }
};

export default UILevels;
