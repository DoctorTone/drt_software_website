import React from "react";
import LandingText from "./LandingText";
import CircularMenu from "./CircularMenu";

const UILevels = ({ levelName }) => {
  switch (levelName) {
    case "Landing":
      return <LandingText />;
      break;

    case "Main":
      return <CircularMenu />;
      break;

    default:
      return null;
  }
};

export default UILevels;
