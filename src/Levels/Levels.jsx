import React from "react";
import Landing from "../components/Landing";
import MainLevel from "./MainLevel";
import PortfolioLevel from "./PortfolioLevel";
import DataVizLevel from "./DataVizLevel";
import Overlay from "../components/Overlay.jsx";
import useStore from "../state/store.js";
import About from "../components/About.jsx";

const Levels = ({ levelName }) => {
  const onEnterLevel = useStore((state) => state.onEnterLevel);
  const dayMode = useStore((state) => state.dayMode);

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
      return (
        <>
          <Overlay position-z={8} fadeOut={onEnterLevel} />
          <PortfolioLevel />
          <Overlay position-z={-8} />
        </>
      );
      break;

    case "DataViz":
      return (
        <>
          <Overlay position-z={8} fadeOut={onEnterLevel} />
          <DataVizLevel />
          {dayMode ? <Overlay position-z={-8} color={0xe6cea5} /> : null}
        </>
      );
      break;

    default:
      break;
  }
};

export default Levels;
