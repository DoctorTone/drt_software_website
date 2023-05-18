import React, { useState, useEffect } from "react";

const showTextTime = 75000;

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
        <div id="infoTextTop" className="panel">
          <h5 className="outline text-center">
            Click on Prev / Next to rotate scene
          </h5>
          <h5 className="outline text-center ms-1 ms-md-5">
            Click on islands for more
          </h5>
        </div>
      ) : null}
    </>
  );
};

export default InfoText;
