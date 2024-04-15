import React from "react";
// Import the circular menu
import {
  Question,
  Tools,
  TelephoneFill,
  Images,
  Newspaper,
} from "react-bootstrap-icons";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

const CircularMenu = () => {
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
        <CircleMenuItem onClick={() => alert("Clicked the item")}>
          <Question />
        </CircleMenuItem>
        <CircleMenuItem>
          <Tools />
        </CircleMenuItem>
        <CircleMenuItem>
          <TelephoneFill />
        </CircleMenuItem>
        <CircleMenuItem>
          <Images />
        </CircleMenuItem>
        <CircleMenuItem>
          <Newspaper />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export default CircularMenu;
