import React from "react";
import Button from "react-bootstrap/Button";

const LandingText = () => {
  return (
    <>
      <div id="landingText" className="panel yellowText display-4">
        I do 3D.
      </div>
      <div id="enterText" className="panel yellowText">
        Add the extra dimension <Button>Go</Button>
      </div>
    </>
  );
};

export default LandingText;
