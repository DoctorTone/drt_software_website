import React from "react";
// Import the circular menu
import {
  HeadsetVr,
  BrightnessHighFill,
  Fire,
  PhoneVibrateFill,
} from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import useStore from "../state/store.js";

const CircularOptionsMainMenu = () => {
  const targetIsland = useStore((state) => state.targetIsland);
  const setTargetIsland = useStore((state) => state.setTargetIsland);

  const displayIsland = (islandName) => {
    if (islandName === targetIsland) return;

    setTargetIsland(islandName);
  };

  return (
    <div id="circularOptions" className="panel">
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
          onClick={() => displayIsland("vr")}
          tooltip="VR"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <HeadsetVr />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("physics")}
          tooltip="Physics"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <BrightnessHighFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("effects")}
          tooltip="Effects"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Fire />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("ar")}
          tooltip="AR"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <PhoneVibrateFill />
        </CircleMenuItem>
      </CircleMenu>
      <p className="mt-1">Options</p>
    </div>
  );
};

export default CircularOptionsMainMenu;
