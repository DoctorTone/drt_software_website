import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { HouseFill, Images, BarChartFill } from "react-bootstrap-icons";
import useStore from "../state/store.js";

export const LevelsMenu = () => {
  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const enterLevel = useStore((state) => state.enterLevel);

  const updateLevel = (levelName, islandName) => {
    if (currentLevel === levelName) return;

    setCurrentLevel(levelName);
    setActiveIsland(islandName);
    setTargetIsland(0);
    enterLevel(true);
  };

  return (
    <div id="speedDial" className="speed-dial panel">
      <Button>Explore</Button>
      <ul className="dials">
        <li onClick={() => updateLevel("Main", "about")}>
          <a className="bg-twitter">
            <HouseFill />
          </a>
          <p className="dialText">Home</p>
        </li>
        <li onClick={() => updateLevel("Portfolio", "configurator")}>
          <a className="bg-twitter">
            <Images />
          </a>
          <p className="dialText">Portfolio</p>
        </li>
        <li onClick={() => updateLevel("DataViz", "medical")}>
          <a className="bg-twitter">
            <BarChartFill />
          </a>
          <p className="dialText">Data viz</p>
        </li>
      </ul>
    </div>
  );
};
