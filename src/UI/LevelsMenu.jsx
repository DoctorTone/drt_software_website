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
    <div id="speedDial" class="speed-dial panel">
      <Button>Explore</Button>
      <ul class="dials">
        <li onClick={() => updateLevel("Main", "about")}>
          <OverlayTrigger overlay={<Tooltip>Home</Tooltip>} placement="right">
            <a class="bg-twitter">
              <HouseFill />
            </a>
          </OverlayTrigger>
        </li>
        <li onClick={() => updateLevel("Portfolio", "configurator")}>
          <OverlayTrigger
            overlay={<Tooltip>Portfolio</Tooltip>}
            placement="right"
          >
            <a class="bg-twitter">
              <Images />
            </a>
          </OverlayTrigger>
        </li>
        <li onClick={() => updateLevel("DataViz", "medical")}>
          <OverlayTrigger
            overlay={<Tooltip>Data Viz</Tooltip>}
            placement="right"
          >
            <a class="bg-twitter">
              <BarChartFill />
            </a>
          </OverlayTrigger>
        </li>
      </ul>
    </div>
  );
};
