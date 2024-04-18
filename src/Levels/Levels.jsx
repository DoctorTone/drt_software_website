import React from "react";
import Landing from "../components/Landing";
import MainLevel from "./MainLevel";
import PortfolioLevel from "./PortfolioLevel";
import DataVizLevel from "./DataVizLevel";
import Overlay from "../components/Overlay.jsx";
import useStore from "../state/store.js";

const Levels = ({ levelName }) => {
  const onLeaveLevel = useStore((state) => state.onLeaveLevel);
  const onEnterLevel = useStore((state) => state.onEnterLevel);

  switch (levelName) {
    case "Landing":
      return <Landing />;
      break;

    case "Main":
      return (
        <>
          <Overlay position-z={8} fadeOut={onEnterLevel} />
          <MainLevel />
        </>
      );
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
