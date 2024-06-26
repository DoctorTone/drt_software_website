import React from "react";
import { InfoCircle } from "react-bootstrap-icons";
import useStore from "../state/store";
import { MODALS } from "../state/Config";

export const InfoUI = () => {
  const setVisibleModal = useStore((state) => state.setVisibleModal);
  const showInfo = () => {
    setVisibleModal(MODALS.INFO);
  };

  return (
    <div id="info" className="panel" style={{ cursor: "pointer" }}>
      <InfoCircle size={36} onClick={showInfo} />
    </div>
  );
};
