import React from "react";
import Form from "react-bootstrap/Form";
import useStore from "../state/store";

export const DayMode = () => {
  const toggleDayMode = useStore((state) => state.toggleDayMode);

  const toggleMode = () => {
    toggleDayMode();
  };

  return (
    <div id="lights" className="panel">
      <Form.Switch onChange={toggleMode} label="Day/Night" />
    </div>
  );
};
