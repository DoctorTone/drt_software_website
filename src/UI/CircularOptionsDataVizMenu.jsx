import React from "react";
// Import the circular menu
import {
  HeartPulseFill,
  CurrencyPound,
  Virus2,
  MoonStarsFill,
  Activity,
} from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import Button from "react-bootstrap/Button";
import useStore from "../state/store.js";

const CircularOptionsDataVizMenu = ({ onToggle, open }) => {
  const targetIsland = useStore((state) => state.targetIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);
  const enterLevel = useStore((state) => state.enterLevel);

  const menuToggled = (menuActive) => {
    onToggle(menuActive);
  };

  const displayIsland = (islandName) => {
    if (islandName === targetIsland) return;

    setTargetIsland(islandName);
    enterLevel(false);
  };

  return (
    <div id="circularOptions" className="panel">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5.5}
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
          onClick={() => displayIsland("medical")}
          tooltip="Medical"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <HeartPulseFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("finance")}
          tooltip="Finance"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <CurrencyPound />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("pandemic")}
          tooltip="Pandemic"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Virus2 />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("sleep")}
          tooltip="Sleep"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <MoonStarsFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("realtime")}
          tooltip="Real-time"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Activity />
        </CircleMenuItem>
      </CircleMenu>
      <Button variant="dark" className="mt-1 orangeText" size="sm">
        Options
      </Button>
    </div>
  );
};

export default CircularOptionsDataVizMenu;
