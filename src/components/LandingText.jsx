import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../state/store";

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
        Add the extra dimension <Button onClick={nextLevel}>Go</Button>
      </div>
    </>
  );
};

export default LandingText;
