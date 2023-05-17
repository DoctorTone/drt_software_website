import React, { useState, useEffect } from "react";

const showTextTime = 7500;

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
        <div>
          <h5 id="infoTextTop" className="panel outline text-center">
            <p>Click on Prev / Next to rotate scene</p>
          </h5>
          <h5 id="infoTextBottom" className="panel outline text-center">
            <p>Click on islands for more info</p>
          </h5>
        </div>
      ) : null}
    </>
  );
};

export default InfoText;
