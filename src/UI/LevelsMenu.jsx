import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { List, HouseFill, Images, BarChartFill } from "react-bootstrap-icons";

export const LevelsMenu = () => {
  return (
    <div id="speedDial" class="speed-dial panel">
      <OverlayTrigger overlay={<Tooltip>Levels</Tooltip>} placement="right">
        <a class="toggle">
          <List />
        </a>
      </OverlayTrigger>
      <ul class="dials">
        <li>
          <OverlayTrigger overlay={<Tooltip>Home</Tooltip>} placement="right">
            <a class="bg-twitter">
              <HouseFill />
            </a>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            overlay={<Tooltip>Portfolio</Tooltip>}
            placement="right"
          >
            <a class="bg-twitter">
              <Images />
            </a>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger
            overlay={<Tooltip>Data Viz</Tooltip>}
            placement="right"
          >
            <a class="bg-twitter">
              <BarChartFill />
            </a>
          </OverlayTrigger>
        </li>
      </ul>
    </div>
  );
};
