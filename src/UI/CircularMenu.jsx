import React from "react";
// Import the circular menu
import {
  Question,
  Tools,
  TelephoneFill,
  Images,
  Newspaper,
} from "react-bootstrap-icons";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import useStore from "../state/store.js";
import { MODALS } from "../state/Config.js";

const CircularMenu = () => {
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const showModal = (modal) => {
    setVisibleModal(modal);
    selectSound.play();
  };

  return (
    <div id="circularMain" className="panel">
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
          onClick={() => setVisibleModal(MODALS.ABOUT)}
          tooltip="About"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Question />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => setVisibleModal(MODALS.SERVICES)}
          tooltip="Services"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Tools />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => setVisibleModal(MODALS.CONTACT)}
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
          <Images />
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => setVisibleModal(MODALS.LATEST)}
          tooltip="Latest"
          tooltipPlacement={TooltipPlacement.Top}
        >
          <Newspaper />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export default CircularMenu;
