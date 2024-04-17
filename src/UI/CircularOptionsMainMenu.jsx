import React from "react";
// Import the circular menu
import {
  Question,
  Tools,
  TelephoneFill,
  ArchiveFill,
  Newspaper,
} from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import useStore from "../state/store.js";
import { MODALS } from "../state/Config.js";

const CircularOptionsMainMenu = () => {
  const setVisibleModal = useStore((state) => state.setVisibleModal);
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
          onClick={() => displayIsland("about")}
          tooltip="About"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Question />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("services")}
          tooltip="Services"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Tools />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("contact")}
          tooltip="Contact"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <TelephoneFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => setVisibleModal(MODALS.PROJECTS)}
          tooltip="Projects"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <ArchiveFill />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => setVisibleModal(MODALS.LATEST)}
          tooltip="Latest"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Newspaper />
        </CircleMenuItem>
      </CircleMenu>
      <p className="mt-1">Options</p>
    </div>
  );
};

export default CircularOptionsMainMenu;
