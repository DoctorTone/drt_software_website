import React from "react";
import { ThreeDotsVertical, CCircle } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="text-center whiteText pt-5 pb-5 blackBackground">
      <CCircle color="white" /> DRT Software Ltd 2024{" "}
      <ThreeDotsVertical color="orange" />
      Company No 09710237
    </div>
  );
};

export default Footer;
