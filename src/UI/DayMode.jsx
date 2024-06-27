import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import useStore from "../state/store";
import { MoonFill, SunFill, MusicNoteBeamed } from "react-bootstrap-icons";

export const DayMode = () => {
  const toggleDayMode = useStore((state) => state.toggleDayMode);
  const [play, setPlay] = useState(false);
  const [music] = useState(() => new Audio("./sounds/frost.mp3"));

  const toggleMode = () => {
    toggleDayMode();
  };

  const toggleMusic = () => {
    if (!play) {
      music.play();
    } else {
      music.pause();
    }
    setPlay(!play);
  };

  return (
    <div id="lights" className="panel">
      <div className="d-flex mb-3">
        <Form.Switch onChange={toggleMode} />
        <SunFill size={20} className="me-1" />
        <MoonFill size={20} />
      </div>
      <div className="d-flex">
        <Form.Switch onChange={toggleMusic} />
        <MusicNoteBeamed />
      </div>
    </div>
  );
};
