import React from "react";
import LandingText from "./LandingText";

const UILevels = ({ levelName }) => {
  switch (levelName) {
    case "Landing":
      return <LandingText />;
      break;

    case "Main":
      return null;
      break;

    default:
      return null;
  }
};

export default UILevels;
