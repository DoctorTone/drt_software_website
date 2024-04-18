import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../state/store";
import { BoxArrowInRight, ArrowRight } from "react-bootstrap-icons";

const LandingText = () => {
  const setCurrentLevel = useStore((state) => state.setCurrentLevel);

  const nextLevel = () => {
    setCurrentLevel("Main");
  };

  return (
    <>
      <div id="landingText" className="panel yellowText display-4">
        I do 3D.
      </div>
      <div id="enterText" className="panel yellowText">
        <Button variant="outline-warning" onClick={nextLevel}>
          <span className="h5">Add the extra dimension</span>{" "}
          <ArrowRight className="mb-1" size={18} />
        </Button>
      </div>
    </>
  );
};

export default LandingText;
