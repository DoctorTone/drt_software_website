import React from "react";
import Button from "react-bootstrap/Button";
import { CaretRight, CaretLeft } from "react-bootstrap-icons";
import useStore from "../state/store.js";

const CameraControl = () => {
  const rotateCamRight = useStore((state) => state.rotateCamRight);
  const rotateCamLeft = useStore((state) => state.rotateCamLeft);
  const ignoreButtonPress = useStore((state) => state.ignoreButtonPress);

  const rotateCameraLeft = () => {
    if (ignoreButtonPress) return;
    rotateCamLeft();
  };

  const rotateCameraRight = () => {
    if (ignoreButtonPress) return;
    rotateCamRight();
  };

  return (
    <div id="camControl" className="panel pe-2">
      <Button onClick={rotateCameraLeft} variant="outline-dark">
        <CaretLeft />
        Prev
      </Button>{" "}
      <Button onClick={rotateCameraRight} variant="outline-dark">
        Next
        <CaretRight />
      </Button>
    </div>
  );
};

export default CameraControl;
