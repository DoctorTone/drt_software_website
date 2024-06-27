import React from "react";
import Form from "react-bootstrap/Form";
import useStore from "../state/store";
import { MoonFill, SunFill, ThreeDotsVertical } from "react-bootstrap-icons";

export const DayMode = () => {
  const toggleDayMode = useStore((state) => state.toggleDayMode);

  const toggleMode = () => {
    toggleDayMode();
  };

  return (
    <div id="lights" className="panel">
      <div className="d-flex">
        <Form.Switch onChange={toggleMode} />
        <SunFill size={20} className="me-1" />
        <MoonFill size={20} />
      </div>
    </div>
  );
};
