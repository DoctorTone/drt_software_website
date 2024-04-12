import React from "react";
import Landing from "../components/Landing";
import MainLevel from "./MainLevel";

const Levels = ({ levelName }) => {
  let component = null;

  switch (levelName) {
    case "Landing":
      component = <Landing />;
      break;

    case "Main":
      return <MainLevel />;
      break;

    default:
      break;
  }
  return component;
};

export default Levels;
