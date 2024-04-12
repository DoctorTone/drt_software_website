import React from "react";
import Landing from "../components/Landing";
import MainLevel from "./MainLevel";

const Levels = ({ levelName }) => {
  switch (levelName) {
    case "Landing":
      return <Landing />;
      break;

    case "Main":
      return <MainLevel />;
      break;

    default:
      break;
  }
};

export default Levels;
