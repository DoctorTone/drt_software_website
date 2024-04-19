import React from "react";
import LandingText from "./LandingText";
import CircularOptionsMainMenu from "./CircularOptionsMainMenu";
import CircularOptionsPortfolioMenu from "./CircularOptionsPortfolioMenu";
import CircularOptionsDataVizMenu from "./CircularOptionsDataVizMenu";
import CircularLevelsMenu from "./CircularLevelsMenu";

const UILevels = ({ levelName }) => {
  const toggleMainMenu = (menuActive) => {
    // DEBUG
    console.log("Menu open = ", menuActive);
  };
  switch (levelName) {
    case "Landing":
      return <LandingText />;
      break;

    case "Main":
      return (
        <>
          <CircularOptionsMainMenu onToggle={toggleMainMenu} />
          <CircularLevelsMenu />
        </>
      );
      break;

    case "Portfolio":
      return (
        <>
          <CircularOptionsPortfolioMenu />
          <CircularLevelsMenu />
        </>
      );
      break;

    case "DataViz":
      return (
        <>
          <CircularOptionsDataVizMenu />
          <CircularLevelsMenu />
        </>
      );
      break;

    default:
      return null;
  }
};

export default UILevels;
