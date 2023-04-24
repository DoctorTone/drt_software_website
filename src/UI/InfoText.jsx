import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

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
    }, 10000);
  }, []);

  return (
    <>
      {showText ? (
        <div ref={fadeRef}>
          <h4 id="infoText" className="panel outline text-center">
            <p>Click the arrow keys to rotate scene</p>
            <p>Click on islands for more info</p>
          </h4>
        </div>
      ) : null}
    </>
  );
};

export default InfoText;
