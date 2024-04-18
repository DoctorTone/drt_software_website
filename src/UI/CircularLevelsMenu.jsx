import React from "react";
// Import the circular menu
import { HouseFill, Images, BarChartFill } from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import useStore from "../state/store.js";

const CircularLevelsMenu = () => {
  const setActiveIsland = useStore((state) => state.setActiveIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const currentLevel = useStore((state) => state.currentLevel);
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);
  const leaveLevel = useStore((state) => state.leaveLevel);

  const updateLevel = (levelName, islandName) => {
    if (currentLevel === levelName) return;

    setActiveIsland(islandName);
    setTargetIsland(islandName);
    setCurrentLevel(levelName);
  };

  return (
    <div id="circularLevels" className="panel">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
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
          onClick={() => updateLevel("Portfolio", "vr")}
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
      <p className="mt-1 ms-1">Levels</p>
    </div>
  );
};

export default CircularLevelsMenu;
