import React from "react";
import Button from "react-bootstrap/Button";
import { CaretRight, CaretLeft } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import useStore from "../state/store.js";

const CameraControl = () => {
  const rotateCamRight = useStore((state) => state.rotateCamRight);
  const rotateCamLeft = useStore((state) => state.rotateCamLeft);
  const speechBubbleVisible = useStore((state) => state.speechBubbleVisible);
  const removeSpeechBubble = useStore((state) => state.removeSpeechBubble);
  const ignoreButtonPress = useStore((state) => state.ignoreButtonPress);

  const rotateCameraLeft = () => {
    if (speechBubbleVisible) {
      removeSpeechBubble(false);
      const elem = document.getElementById("speechBubble");
      if (!elem) return;

      elem.classList.add("d-none");
    }

    if (ignoreButtonPress) return;
    rotateCamLeft();
  };

  const rotateCameraRight = () => {
    if (speechBubbleVisible) {
      removeSpeechBubble(false);
      const elem = document.getElementById("speechBubble");
      if (!elem) return;

      elem.classList.add("d-none");
    }

    if (ignoreButtonPress) return;
    rotateCamRight();
  };

  return (
    <div id="camControl" className="panel pe-2">
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="camLeft">Rotate clockwise</Tooltip>}>
        <Button onClick={rotateCameraLeft} variant="dark" className="me-1">
          <CaretLeft />
          Rotate
        </Button>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="camRight">Rotate anti-clockwise</Tooltip>}>
        <Button onClick={rotateCameraRight} variant="dark">
          Rotate
          <CaretRight />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default CameraControl;
