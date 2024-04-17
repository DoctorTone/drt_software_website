import React from "react";
import LandingText from "./LandingText";
import CircularOptionsMenu from "./CircularOptionsMenu";
import CircularLevelsMenu from "./CircularLevelsMenu";

const UILevels = ({ levelName }) => {
  switch (levelName) {
    case "Landing":
      return <LandingText />;
      break;

    case "Main":
      return (
        <>
          <CircularOptionsMenu />
          <CircularLevelsMenu />
        </>
      );
      break;

    default:
      return null;
  }
};

export default UILevels;
