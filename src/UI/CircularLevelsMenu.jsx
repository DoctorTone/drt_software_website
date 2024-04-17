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
  const targetIsland = useStore((state) => state.targetIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);

  const displayIsland = (islandName) => {
    if (islandName === targetIsland) return;

    setTargetIsland(islandName);
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
          onClick={() => displayIsland("about")}
          tooltip="DRT"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <HouseFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("services")}
          tooltip="Portfolio"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Images />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("contact")}
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
