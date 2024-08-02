import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "../state/store";

export const NavState = () => {
  const islandNumber = useStore((state) => state.islandNumber);
  const currentLevelTable = useStore((state) => state.currentLevelTable);

  return (
    <div id="navState" className="panel text-center">
      {currentLevelTable.map((level, index) => {
        if (index === islandNumber) {
          return <Button key={level} className="me-2"></Button>;
        }
        return (
          <Button key={level} className="me-2" variant="secondary"></Button>
        );
      })}
    </div>
  );
};
