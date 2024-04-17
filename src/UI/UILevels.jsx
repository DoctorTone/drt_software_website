import React from "react";
import LandingText from "./LandingText";
import CircularOptionsMainMenu from "./CircularOptionsMainMenu";
import CircularOptionsPortfolioMenu from "./CircularOptionsPortfolioMenu";
import CircularLevelsMenu from "./CircularLevelsMenu";

const UILevels = ({ levelName }) => {
  switch (levelName) {
    case "Landing":
      return <LandingText />;
      break;

    case "Main":
      return (
        <>
          <CircularOptionsMainMenu />
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

    default:
      return null;
  }
};

export default UILevels;
