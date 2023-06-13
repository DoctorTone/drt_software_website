import React from "react";
import { Html } from "@react-three/drei";
import Spinner from "react-bootstrap/Spinner";

export const Loading = () => {
  return (
    <Html>
      <Spinner animation="grow" variant="warning" />
    </Html>
  );
};
