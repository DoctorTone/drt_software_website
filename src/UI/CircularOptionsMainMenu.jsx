import React from "react";
// Import the circular menu
import {
  Question,
  Tools,
  TelephoneFill,
  ArchiveFill,
  AlarmFill,
  InfoLg,
} from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import Button from "react-bootstrap/Button";
import useStore from "../state/store.js";
import { MODALS } from "../state/Config.js";

const CircularOptionsMainMenu = ({ onToggle, open }) => {
  const setVisibleModal = useStore((state) => state.setVisibleModal);
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
        className="ms-1"
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
          onClick={() => displayIsland("about")}
          tooltip="About"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <InfoLg />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("services")}
          tooltip="Services"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Tools />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => displayIsland("why")}
          tooltip="Why"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Question />
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
          <AlarmFill />
        </CircleMenuItem>
      </CircleMenu>
      <Button variant="dark" className="mt-1 orangeText" size="sm">
        Options
      </Button>
    </div>
  );
};

export default CircularOptionsMainMenu;
