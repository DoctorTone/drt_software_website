import React from "react";
import Landing from "../components/Landing";
import MainLevel from "./MainLevel";
import PortfolioLevel from "./PortfolioLevel";

const Levels = ({ levelName }) => {
  switch (levelName) {
    case "Landing":
      return <Landing />;
      break;

    case "Main":
      return <MainLevel />;
      break;

    case "Portfolio":
      return <PortfolioLevel />;
      break;

    default:
      break;
  }
};

export default Levels;
