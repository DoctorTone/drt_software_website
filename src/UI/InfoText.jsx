import React, { useState, useEffect } from "react";

// Show info text for specified time
const showTextTime = 7.5 * 1000;

const InfoText = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, showTextTime);
  }, []);

  return (
    <>
      {showText ? (
        <div id="infoTextTop" className="panel orangeText">
          <h5 className="outline dark text-center mb-3">
            Click on Prev / Next to rotate scene
          </h5>
          <h5 className="outline dark text-center ms-1 ms-md-5">
            Click on islands for more
          </h5>
        </div>
      ) : null}
    </>
  );
};

export default InfoText;
