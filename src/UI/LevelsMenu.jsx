import React from "react";
import Button from "react-bootstrap/Button";
import { Images, BarChartFill } from "react-bootstrap-icons";
import useStore from "../state/store.js";

export const LevelsMenu = () => {
  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const enterLevel = useStore((state) => state.enterLevel);

  const hideIcons = () => {
    const elem = document.querySelector(".dials");
    elem.classList.add("d-none");
  };

  const showIcons = () => {
    const elem = document.querySelector(".dials");
    elem.classList.remove("d-none");
  };

  const updateLevel = (levelName, islandName) => {
    hideIcons();
    if (currentLevel === levelName) return;

    setCurrentLevel(levelName);
    setActiveIsland(islandName);
    setTargetIsland(0);
    enterLevel(true);
  };

  return (
    <div
      id="speedDial"
      className="panel"
      onMouseEnter={showIcons}
      onMouseLeave={hideIcons}
      onTouchStart={showIcons}
    >
      <Button variant="secondary" className="mb-2">
        Explore
      </Button>
      <ul className="dials d-none">
        <li onClick={() => updateLevel("Portfolio", "configurator")}>
          <a className="bg-twitter">
            <Images color="black" />
          </a>
          <p className="dialText">Portfolio</p>
        </li>
        <li onClick={() => updateLevel("DataViz", "medical")}>
          <a className="bg-twitter">
            <BarChartFill color="black" />
          </a>
          <p className="dialText">Data viz</p>
        </li>
      </ul>
    </div>
  );
};
