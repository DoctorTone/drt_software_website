import React from "react";
import Button from "react-bootstrap/Button";
import { CaretRight, CaretLeft } from "react-bootstrap-icons";

const CameraControl = () => {
  return (
    <div className="panel pe-2">
      <Button variant="outline-dark">
        <CaretLeft />
        Prev
      </Button>{" "}
      <Button variant="outline-dark">
        Next
        <CaretRight />
      </Button>
    </div>
  );
};

export default CameraControl;
