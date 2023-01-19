import React from "react";

const Box = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;
