import React from "react";
// Import the circular menu
import { HouseFill, Images, BarChartFill } from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import Button from "react-bootstrap/Button";
import useStore from "../state/store.js";

const CircularLevelsMenu = ({ onToggle, open }) => {
  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const enterLevel = useStore((state) => state.enterLevel);

  const menuToggled = (menuActive) => {
    onToggle(menuActive);
  };

  const updateLevel = (levelName, islandName) => {
    if (currentLevel === levelName) return;

    setActiveIsland(islandName);
    setTargetIsland(islandName);
    setCurrentLevel(levelName);
    enterLevel(true);
  };

  return (
    <div id="circularLevels" className="panel">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        onMenuToggle={menuToggled}
        open={open}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => updateLevel("Main", "about")}
          tooltip="Home"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <HouseFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => updateLevel("Portfolio", "configurator")}
          tooltip="Portfolio"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Images />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => updateLevel("DataViz", "medical")}
          tooltip="DataViz"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <BarChartFill />
        </CircleMenuItem>
      </CircleMenu>
      <Button variant="dark" className="mt-1 orangeText" size="sm">
        Levels
      </Button>
    </div>
  );
};

export default CircularLevelsMenu;
