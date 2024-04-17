import React from "react";
import Landing from "../components/Landing";
import MainLevel from "./MainLevel";
import PortfolioLevel from "./PortfolioLevel";
import DataVizLevel from "./DataVizLevel";

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

    case "DataViz":
      return <DataVizLevel />;
      break;

    default:
      break;
  }
};

export default Levels;
