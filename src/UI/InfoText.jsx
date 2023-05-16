import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const showTextTime = 7500;

const InfoText = () => {
  const [start, setStart] = useState(false);
  const [showText, setShowText] = useState(true);
  const fadeRef = useRef();

  const hideText = () => {
    console.log("Hiding text");
    setShowText(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, showTextTime);
  }, []);

  return (
    <>
      {showText ? (
        <div ref={fadeRef}>
          <h4 id="infoTextTop" className="panel outline text-center">
            <p>Click on Prev / Next keys to rotate scene</p>
          </h4>
          <h4 id="infoTextBottom" className="panel outline text-center">
            <p>Click on islands for more info</p>
          </h4>
        </div>
      ) : null}
    </>
  );
};

export default InfoText;
